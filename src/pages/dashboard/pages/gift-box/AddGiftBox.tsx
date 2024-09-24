import  { useState } from "react";


import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { asyncAddGiftBox, TAddGiftBox } from "@/api/gift-box/fetchers";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Header from "../../-components/header";
// Import the reusable Select component

function AddGiftBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAddGiftBox>();

  const giftBogAddMutation = useMutation({
    mutationFn: asyncAddGiftBox,
  });

  const onSubmit = (data: TAddGiftBox) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("ml", data.ml);
    formData.append("image", data.image[0]); // Append the first file from image array


    giftBogAddMutation.mutate(formData);
    reset()
  };
  return (
    <div className="w-full bg-secondary">
      <Header />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-16"
      >
        <div className="flex flex-col shadow-md w-[40%] gap-y-3 px-6 py-6 rounded-md">
          <Input
            type="text"
            placeholder=" First name"
            {...register("name", { required: "name is required" })}
          />
          <Input
            type="text"
            placeholder="Description"
            {...register("description", {
              required: "description is required",
            })}
          />
          <Input
            type="text"
            placeholder="0"
            {...register("price", { required: "price is required" })}
          />
          <Input
            type="text"
            placeholder="0"
            {...register("stock", { required: "stock is required" })}
          />

          <Input
            type="text"
            placeholder="MI"
            {...register("ml", { required: "ml is required" })}
          />
          <Input
            type="file"
            placeholder="Choose File No choose file"
            {...register("image", { required: "image is required" })}
          />

         
          <Button className="flex justify-center px-4">
          {giftBogAddMutation.isPending ? "Adding ...GiftBox" : "Add GiftBox"}
          </Button>
          {giftBogAddMutation.isError && (
          <p className="text-red-500">Error: {giftBogAddMutation.error.message}</p>
        )}
        </div>
      </form>
    </div>
  );
}

export default AddGiftBox;
