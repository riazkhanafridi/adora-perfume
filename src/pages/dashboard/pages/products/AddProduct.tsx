import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { asyncAddProduct, TAddProduct } from "@/api/products/fetchers";

import Input from "@/components/ui/input";

import Button from "@/components/ui/button";
import Header from "../../-components/header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function AddProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TAddProduct>();

  const productAddMutation = useMutation({
    mutationFn: asyncAddProduct,
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
  });

  const onSubmit = (data: TAddProduct) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("stock", Number(data.stock));
    formData.append("categoryId", 18);
    formData.append("tasteId", Number(data.tasteId));
    formData.append("brandId", Number(data.brandId));
    formData.append("ml", data.ml);

    // Check if a file is selected before appending
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    } else {
      console.error("No image selected");
      return;
    }

    productAddMutation.mutate(formData);
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
            placeholder="Product Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <Input
            type="text"
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}

          <Input
            type="text"
            placeholder="Price"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}

          <Input
            type="text"
            placeholder="Stock"
            {...register("stock", {
              required: "Stock is required",
              valueAsNumber: true,
            })}
          />
          {errors.stock && (
            <p className="text-red-500">{errors.stock.message}</p>
          )}

          <div className="flex gap-3">
          <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Category" {...register("categoryId", { required: "Category is required" })} />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
     
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>



            
              
            {errors.categoryId && (
              <p className="text-red-500">{errors.categoryId.message}</p>
            )}

            <Select
              {...register("tasteId")}
              options={[]} // Empty options array for now
              placeholder="Taste"
              className="w-[50%]"
            />
          </div>

          <Select
            {...register("brandId")}
            options={[]} // Empty options array for now
            placeholder="Brand"
            className="w-full"
          />

          <Input
            type="text"
            placeholder=" ml"
            {...register("ml", { required: "Ml is required" })}
          />
          {errors.ml && <p className="text-red-500">{errors.ml.message}</p>}

          <Input
            type="file"
            placeholder="Choose File"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}

          <Button className="flex justify-center px-4">
            {productAddMutation.isLoading ? "Adding Product..." : "Add Product"}
          </Button>
          {productAddMutation.isError && (
            <p className="text-red-500">
              Error: {productAddMutation.error.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
