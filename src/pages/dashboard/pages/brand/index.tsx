import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Header from "../../-components/header";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import Input from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { useGetAllBrand } from "../../../../api/brand/queries"; // Fetch brands
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  asyncAddBrand,
  asyncDeleteBrand,
  asyncEditBrand,
  TAddBrand,
} from "../../../../api/brand/fetchers";
import { useForm } from "react-hook-form";

function Brand() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingBrandId, setEditingBrandId] = useState<number | null>(null);
  const [toggle, setToggle] = useState(false);

  const { data, isPending, error } = useGetAllBrand();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TAddBrand>();

  function openToggle() {
    setToggle(!toggle);
  }

  // Mutation for adding a brand
  const brandMutation = useMutation({
    mutationFn: asyncAddBrand,
    onSuccess: () => {
      queryClient.invalidateQueries(["brand"]); // Refetch brands after success
      reset();
    },
    onError: (errors) => {
      console.log("Error adding Brand", errors);
    },
  });

  const editBrandMutation = useMutation({
    mutationFn: asyncEditBrand,
    onSuccess: () => {
      queryClient.invalidateQueries(["brand"]);
      reset();
      setIsEditing(false);
      setEditingBrandId(null);
    },
    onError: (errors) => {
      console.log("Error editing brand", errors);
    },
  });

  // Submit handler for adding a brand
  const onSubmit = (data: TAddBrand) => {
    if (isEditing && editingBrandId) {
      editBrandMutation.mutate({ ...data, id: editingBrandId });
    } else {
      editBrandMutation.mutate(data);
    }
    reset();
  };

  // Mutation for deleting a brand
  const deleteBrandMutation = useMutation({
    mutationFn: (brandId: number) => asyncDeleteBrand(brandId),
    onSuccess: () => {
      queryClient.invalidateQueries(["brand"]);
    },
  });

  // Toggle dropdown for actions
  const handleDropdownToggle = (brandId: number) => {
    setOpenDropdownId((prev) => (prev === brandId ? null : brandId));
  };

  const handleEditClick = (brandId: number) => {
    setEditingBrandId(brandId);
    const brandToEdit = data?.find((brnd) => brnd.id === brandId);
    if (brandToEdit) {
      setValue("name", brandToEdit.name);
    }
    setIsEditing(true);
    setOpenDropdownId(null);
  };

  return (
    <div className="w-full bg-secondary">
      <Header />
      {/* Form for adding a brand */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  justify-center  mt-16 "
      >
        <div className=" flex  flex-col gap-y-3  shadow-md  w-[40%]  rounded-md  px-6 py-6">
          <Input
            type="text"
            placeholder="Add Brand"
            {...register("name", { required: "name is required" })}
          />
          {errors.name && (
            <p className="text-textRed-500">{errors.name.message}</p>
          )}
          <Button
            type="submit"
            className="flex justify-center px-4"
            disabled={brandMutation.isPending || editBrandMutation.isPending}
          >
            {brandMutation.isPending || editBrandMutation.isPending
              ? isEditing
                ? "Editing..."
                : "Adding..."
              : isEditing
              ? "Edit Brand"
              : "Add Brand"}
          </Button>
          {(brandMutation.isError || editBrandMutation.isError) && (
            <p className="text-textRed-500">
              Error:{" "}
              {brandMutation.error?.message || editBrandMutation.error?.message}
            </p>
          )}
        </div>
      </form>

      {/* Brand list and filter */}
      <div className="flex justify-between mt-16 w-full ">
        <input
          type="name"
          placeholder="Filter Name..."
          className="rounded-md py-2 px-2 w-[30%] shadow-md hover:bg-lightest"
        />
        <div className="flex justify-between  gap-x-4 px-4 relative">
          <Button onClick={openToggle} className="flex items-center px-4">
            Columns <IoIosArrowDown />
          </Button>
          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4  rounded-md">
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck /> 1
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center ">
                <AiOutlineCheck /> Name
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Display brand list */}
      <div className="flex flex-col w-full mt-4 px-4 ">
        <div className="flex justify-start gap-x-64 items-center shadow-md  rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark ">
          <h2>Id</h2>
          <div>
            <Button className="flex items-center px-4">
              Name <BsArrowDownUp />
            </Button>
          </div>
        </div>

        {data && data.length > 0 ? (
          data?.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
            >
              <h2>{brand.id}</h2>
              <h2>{brand.name}</h2>
              <div className="flex items-center gap-x-4 relative">
                <Button
                  className="flex items-center px-4"
                  onClick={() => handleDropdownToggle(brand?.id)}
                >
                  <MdOutlineMoreHoriz />
                </Button>
                {/* Dropdown Menu */}
                {openDropdownId === brand.id && (
                  <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md w-25">
                    <h1 className="font-semibold">Actions</h1>
                    <div
                      className="cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500"
                      onClick={() => {
                        deleteBrandMutation.mutate(brand.id);
                        setOpenDropdownId(null); // Close the dropdown after deletion
                      }}
                    >
                      <AiOutlineDelete /> <span>Delete</span>
                    </div>
                    <div
                      className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-primary"
                      onClick={() => handleEditClick(brand.id!)}
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
      {/* Pagination controls */}
      <div className="flex justify-end gap-x-2 px-4 py-4">
        <Button className="flex items-center px-4 bg-primary">Previous</Button>
        <Button className="flex items-center px-4 bg-primary">Next</Button>
      </div>
    </div>
  );
}

export default Brand;
