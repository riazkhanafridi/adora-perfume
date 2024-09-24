import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Header from "../../-components/header";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";


import {
  asyncAddCategory,
  asyncDeleteCategory,
  asyncEditCategory,
  
} from "../../../../api/categories/fetchers";
import { useMutation } from "@tanstack/react-query";
import { useGetAllCategories } from "../../../../api/categories/queries";
import Input from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

function Category() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
    null
  );
  const [filter, setFilter] = useState("");
  const queryClient = useQueryClient();
  const CategorySchema = z.object({
    name: z.string().min(3, "category must be greater then 3 character"),
  });
  
  type FormValues = z.infer<typeof CategorySchema>;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(CategorySchema),
  });

  const { data, isPending, error } = useGetAllCategories();
  const [toggle, setToggle] = useState(false);

  function openToggle() {
    setToggle(!toggle);
  }

  const categoryMutation = useMutation({
    mutationFn: asyncAddCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      reset();
      setIsEditing(false);
      setEditingCategoryId(null);
    },
    onError: (errors) => {
      console.log("Error adding category", errors);
    },
  });

  const editCategoryMutation = useMutation({
    mutationFn: asyncEditCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      reset();
      setIsEditing(false);
      setEditingCategoryId(null);
    },
    onError: (errors) => {
      console.log("Error editing category", errors);
    },
  });
  const onSubmit = (data: FormValues) => {
    if (isEditing && editingCategoryId) {
      editCategoryMutation.mutate({ ...data, id: editingCategoryId });
    } else {
      categoryMutation.mutate(data);
    }

    reset();
  };

  const deleteCategoryMutation = useMutation({
    mutationFn: (categoryId: number) => asyncDeleteCategory(categoryId),
    onSuccess: () => {
      toast.success("category deleted successful");
      queryClient.invalidateQueries(["categories"]); // This will refetch categories using useGetAllCategories
    },
  });

  const handleDropdownToggle = (categoryId: number) => {
    // Toggle the dropdown for the selected category
    setOpenDropdownId((prev) => (prev === categoryId ? null : categoryId));
  };
  const handleEditClick = (categoryId: number) => {
    setEditingCategoryId(categoryId);
    const categoryToEdit = data?.find((cat) => cat.id === categoryId);
    if (categoryToEdit) {
      setValue("name", categoryToEdit.name); // Set form value for editing
    }
    setIsEditing(true);
    setOpenDropdownId(null);
  };

  // Filtered data based on input
  const filteredData = data?.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="w-full bg-secondary ">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center mt-16">
          <div className=" flex flex-col shadow-md w-[40%]   gap-y-3  px-6 py-6 rounded-md">
            <Input
              type="text"
              placeholder="Add Category"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <Button
              type="submit"
              className="flex justify-center px-4"
              disabled={
                categoryMutation.isPending || editCategoryMutation.isPending
              }
            >
              {categoryMutation.isPending || editCategoryMutation.isPending
                ? isEditing
                  ? "Editing..."
                  : "Adding..."
                : isEditing
                ? "Edit Category"
                : "Add Category"}
            </Button>
            {(categoryMutation.isError || editCategoryMutation.isError) && (
              <p className="text-textRed-500">
                Error:{" "}
                {categoryMutation.error?.message ||
                  editCategoryMutation.error?.message}
              </p>
            )}
          </div>
        </div>
      </form>
      <div className="flex justify-between mt-16  ">
        <Input type="text" placeholder="Filter Name..." className="w-[30%]" />

        <div className="flex justify-between  gap-x-4 px-4 relative ">
          <Button
            onClick={openToggle}
            className="flex items-center px-4" // Additional styles for the button
          >
            Columns <IoIosArrowDown /> {/* Text and Icon inside the button */}
          </Button>

          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4  rounded-md  ">
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />1
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center ">
                <AiOutlineCheck /> Name
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full mt-4 px-4 ">
        <div className="flex justify-start gap-x-64 items-center shadow-md  rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark ">
          <h2>Id</h2>
          <div>
            <Button className="flex items-center px-4">
              Name
              <BsArrowDownUp />
            </Button>
          </div>
        </div>

        {data && data.length > 0 ? (
          data?.map((category) => (
            <div
              key={category.id}
              className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
            >
              <h2>{category.id}</h2>
              <h2>{category.name}</h2>
              <div className="flex items-center gap-x-4 relative">
                <Button
                  className="flex px-4"
                  onClick={() => handleDropdownToggle(category?.id)}
                >
                  {" "}
                  <MdOutlineMoreHoriz />
                </Button>

                {/* Dropdown Menu */}
                {openDropdownId === category.id && (
                  <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                    <h1 className="font-semibold">Actions</h1>

                    <div
                      className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                      onClick={() => {
                        deleteCategoryMutation.mutate(category.id!);
                        setOpenDropdownId(null); // Close the dropdown after deletion
                      }}
                    >
                      <AiOutlineDelete /> <span>Delete</span>
                    </div>
                    <div
                      className=" cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-primary"
                      onClick={() => handleEditClick(category.id!)}
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

export default Category;

// import React from 'react'

// const Banner = ({imageUrl,heade}) => {
//   return (
//     <div>
//       <img src={imageUrl} alt="" />
//       <p>{title}</p>
//     </div>
//   )
// }

// export default Banner

// <Banner imageUrl={img} title="about us page"/>
