import { IoIosArrowDown } from "react-icons/io";

import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";

import { MdOutlineMoreHoriz } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetAllTaste } from "@/api/taste/queries";
import { asyncAddTaste, asyncDeleteTaste, asyncEditTaste, TAddTaste } from "@/api/taste/fetchers";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { url } from "@/config/config";
import Header from "../../-components/header";




function Scents() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingTasteId, setEditingTasteId] = useState<number | null>(null);

  const [toggle, setToggle] = useState(false);

  const { data, isPending, error } = useGetAllTaste();
  function openToggle() {
    setToggle(!toggle);
  }
  const tasteSchema = z.object({
    name: z.string().min(3, "Taste must be greater than 3 characters"),
    image: z.any(),
  });
  type FormValues = z.infer<typeof tasteSchema>;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormValues>({
    resolver: zodResolver(tasteSchema),
  });

  const tasteMutation = useMutation({
    mutationFn: asyncAddTaste,
    onSuccess: () => {
      queryClient.invalidateQueries(["taste"]);
      reset(); // Reset the form after success
    },
    onError: (errors) => {
      console.log("Error adding taste", errors);
    },
  });

  const editTasteMutation = useMutation({
    mutationFn: asyncEditTaste,
    onSuccess: () => {
      queryClient.invalidateQueries(["taste"]);
      reset();
      setIsEditing(false);
      setEditingTasteId(null);
    },
    onError: (errors) => {
      console.log("Error editing taste", errors);
    },
  });

  const onSubmit = (data: TAddTaste) => {
    if (isEditing && editingTasteId) {
      editTasteMutation.mutate({ ...data, id: editingTasteId });
    } else {
      editTasteMutation.mutate(data);
    }
    reset();
  };
  const deleteScentMutation = useMutation({
    mutationFn: (scentId: number) => asyncDeleteTaste(scentId),
    onSuccess: () => {
    
      queryClient.invalidateQueries(["taste"]); 
    },
  });
  

  const handleDropdownToggle = (scentId: number) => {
  
    setOpenDropdownId((prev) => (prev === scentId ? null : scentId));
  };
  const handleEditClick = (tasteId: number) => {
    setEditingTasteId(tasteId);
    const tasteToEdit = data?.find((tst) => tst.id === tasteId);
    if (tasteToEdit) {
      setValue("name", tasteToEdit.name);
    }
    setIsEditing(true);
    setOpenDropdownId(null);
  };
  return (
    <div className="w-full bg-secondary  ">
      <Header />

      <form  onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  items-center mt-16  ">
        <h1 className="text-2xl   text-primary font-bold">Scents</h1>

        <div className=" flex flex-col gap-y-3  px-6 py-6  w-[40%]  rounded-md shadow-md ">
          <Input type="text" placeholder="Add taste"   {...register("name",{required:"required name"})} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <Input type="file" placeholder="Choose File No file chosen"{...register("image",{required:"required image"})} />
          {errors.image && <p className="text-red-500">Image is required</p>}

          <Button type="submit" className="flex justify-center px-4"   disabled={tasteMutation.isPending||editTasteMutation.isPending}>
          {tasteMutation.isPending || editTasteMutation.isPending
              ? isEditing
                ? "Editing..."
                : "Adding..."
              : isEditing
              ? "Edit Taste"
              : "Add Taste"}
          </Button>
          {(tasteMutation.isError || editTasteMutation.isError) && (
            <p className="text-textRed-500">
              Error:{" "}
              {tasteMutation.error?.message || editTasteMutation.error?.message}
            </p>
          )}
        </div>
      </form>

      <div className="flex justify-between mt-16 w-full ">
        <Input type="text" placeholder="Filter Name..." className="w-[30%]" />

        <div className="flex justify-between  gap-x-4 px-4 relative ">
          <Button
            onClick={openToggle}
            className="flex items-center px-4" // Additional styles for the button
          >
            Columns <IoIosArrowDown /> {/* Text and Icon inside the button */}
          </Button>
          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4 rounded-md  ">
              <p className="hover:bg-[#eef1f4] flex items-center ">
                <AiOutlineCheck /> Name
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full mt-4 px-4">
        <div className="flex justify-start gap-x-64 items-center shadow-md  rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark ">
          <h2>Image</h2>
          <div>
            <Button className="flex items-center px-4">
              Name
              <BsArrowDownUp />
            </Button>
          </div>
        </div>
     
        {data && data.length > 0 ?(
        data?.map((scent) => (
          <div
            key={scent.id}
            className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
          >
            <img
                    src={`${url}/${scent?.image}`}
                    // src="../../../assets/image/ghazeeimage.png"
                    alt=""
                    className="h-[200px] w-[200px] "
                  />
            <h2>{scent.name}</h2>
           
            <div className="flex items-center gap-x-4 relative">
              <Button
              className="flex items-center px-4"
              onClick={() => handleDropdownToggle(scent?.id)}
              >
                {" "}
                <MdOutlineMoreHoriz />
              </Button>
              
            {/* Dropdown Menu */}
            {openDropdownId === scent.id && (
              <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                <h1 className="font-semibold">Actions</h1>
             
                <div
                  className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                  onClick={() => {
                    deleteScentMutation.mutate(scent.id!);
                    setOpenDropdownId(null); // Close the dropdown after deletion
                  }}
                >
                  <AiOutlineDelete    /> <span    >Delete</span>
                </div>
                <div
                  className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-primary"
                  onClick={() => handleEditClick(scent.id!)}
                >
                  <AiOutlineEdit /> Edit
                </div>
              </div>
            )}
            </div>
          </div>
        ))):(
          <div className="flex justify-center items-center py-4">
          <p className="text-gray-500">No results found</p>
        </div>
        )}
      </div>
      <div className="flex justify-end gap-x-2 px-4 py-4">
      <Button className="flex items-center px-4 bg-primary">
          Previous
        </Button>
        <Button className="flex items-center px-4 bg-primary">

          Next
        </Button>
      </div>
    </div>
  );
}

export default Scents;
