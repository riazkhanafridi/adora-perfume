import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { asyncAdminLogin } from "@/api/user/fetchers";
import Button from "@/components/ui/button";


// Define the schema with Zod
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  role: z.string().default("ADMIN"),
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

function AdminSignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "ADMIN",
    },
  });

  const navigate = useNavigate();

  const userLoginMutation = useMutation({
    mutationFn: asyncAdminLogin,
    onSuccess: () => {
      // Navigate to the dashboard on successful login
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  const onSubmit = (data: FormValues) => {
    userLoginMutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center flex-col items-center bg-secondary h-screen border">
      <h1 className="text-2xl font-semibold text-primary mb-16">
        Admin Login Page
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col shadow-md md:w-1/2 gap-y-3 rounded-md py-6 w-full px-6"
      >
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          className="shadow-md rounded-md px-4 py-2 hover:bg-lightest"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="shadow-md rounded-md px-4 py-2 hover:bg-lightest"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <Button
          type="submit"
          className="w-full bg-[#1d4ed8] rounded-md py-2 text-white hover:bg-white hover:text-[#1d4ed8] font-semibold"
          disabled={userLoginMutation.isPending}
        >
          {userLoginMutation.isPending ? "Logging in..." : "Login"}
        </Button>

        {userLoginMutation.isError && (
          <p className="text-red-500">
            Error: {userLoginMutation.error.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default AdminSignInForm;
