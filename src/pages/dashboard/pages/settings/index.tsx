import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { useGetAllUsers } from "@/api/user/queries";
import { asyncAddUser, asyncDeleteUser, TAddUser } from "@/api/user/fetchers";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Header from "../../-components/header";

function Settings() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [toggle, setToggle] = useState(false);
  const { data, isLoading, error } = useGetAllUsers();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAddUser>();

  const userAddMutation = useMutation({
    mutationFn: asyncAddUser,

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      reset();
    },
    onError: (errors) => {
      console.log("Error adding user", errors);
    },
  });

  const onSubmit = (data: TAddUser) => {
    userAddMutation.mutate(data);

    reset();
  };

  const deleteUserMutation = useMutation({
    mutationFn: (userId: number) => asyncDeleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleDropdownToggle = (userId: number) => {
    setOpenDropdownId((prev) => (prev === userId ? null : userId));
  };

  return (
    <div className="w-full bg-secondary">
      <Header/>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-16"
      >
        <div className="flex flex-col gap-y-2 px-6 py-6 shadow-md w-[45%] rounded-md">
          <Input
            type="text"
            placeholder="user name"
            {...register("name", { required: "name is required" })}
          />
          <Input
            type="text"
            placeholder="user email"
            {...register("email", { required: "email is required" })}
          />
          <Input
            type="password"
            placeholder="user password"
            {...register("password", { required: "password is required" })}
          />
          <Input
            type="text"
            placeholder="user phoneNo"
            {...register("phoneNo", { required: "phoneNo is required" })}
          />

          <Button
            type="submit"
            className="flex justify-center px-4"
            disabled={userAddMutation.isPending}
          >
            {userAddMutation.isPending ? "Adding..." : "Add User"}
          </Button>
          {userAddMutation.isError && (
            <p className="text-textRed-500">
              Error: {userAddMutation.error.message}
            </p>
          )}
        </div>
      </form>

      <div className="flex justify-between mt-16">
        <Input type="text" placeholder="Filter Name..." className="w-[30%]" />

        <div className="flex justify-between gap-x-4 px-4 relative">
          <Button
            onClick={() => setToggle(!toggle)}
            className="flex items-center px-4"
          >
            Columns <IoIosArrowDown />
          </Button>
          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4 rounded-md">
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck /> Id
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck /> Name
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck /> Email
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck /> PhoneNo
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full mt-4 px-4">
        <div className="flex justify-evenly shadow-md rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark">
          <h2>Id</h2>
          <div>
            <Button className="px-4 flex items-center">
              Name
              <BsArrowDownUp />
            </Button>
          </div>
          <h2>Email</h2>
          <h2>PhoneNo</h2>
        </div>

        {data && data.length > 0 ? (
          data?.map((user) => (
            <div
              key={user.id}
              className="flex justify-evenly shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
            >
              <h2>{user.id}</h2>
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>

              <h2>{user.phoneNo}</h2>

              <div className="flex items-center gap-x-4 relative">
                <Button
                  className="flex items-center px-4"
                  onClick={() => handleDropdownToggle(user?.id)}
                >
                  {" "}
                  <MdOutlineMoreHoriz />
                </Button>

                {/* Dropdown Menu */}
                {openDropdownId === user.id && (
                  <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                    <h1 className="font-semibold">Actions</h1>

                    <div
                      className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                      onClick={() => {
                        deleteUserMutation.mutate(user.id!);
                        setOpenDropdownId(null); // Close the dropdown after deletion
                      }}
                    >
                      <AiOutlineDelete /> <span>Delete</span>
                    </div>
                    <div
                      className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-primary"
                      onClick={() => {
                        setOpenDropdownId(null); // Close the dropdown after selecting edit
                      }}
                    >
                      <AiOutlineEdit /> Edit
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center py-4">
            <p className="text-gray-500">No results found</p>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-x-2 px-4 py-4">
        <Button className="flex items-center px-4 bg-primary">Previous</Button>
        <Button className="flex items-center px-4 bg-primary">Next</Button>
      </div>
    </div>
  );
}

export default Settings;
