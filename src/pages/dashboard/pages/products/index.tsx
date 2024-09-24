import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { BsArrowDownUp } from "react-icons/bs";
import AddProduct from "./AddProduct";

import { Link } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllProduct } from "@/api/products/queries";
import { asyncDeleteProduct } from "@/api/products/fetchers";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Header from "../../-components/header";


function Product() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [toggle, setToggle] = useState(false);


  const{data,isLoading,error}=useGetAllProduct();


  function openToggle() {
    setToggle(!toggle);
  }




  const deleteProductMutation = useMutation({
    mutationFn: (productId: number) => asyncDeleteProduct(productId),
    onSuccess: () => {
    
      queryClient.invalidateQueries(["product"]); 
    },
  });
  

  const handleDropdownToggle = (productId: number) => {
 
    setOpenDropdownId((prev) => (prev === productId ? null : productId));
  };

  return (
    <div className="w-full bg-secondary">
      <Header />

      <div className="flex justify-between mt-16 ">
      <Input type="text" placeholder="Filter Name..." className="w-[30%]"/>

        <div className="flex justify-between  relative px-4 gap-x-2">
          <Button
            onClick={openToggle}
            className="flex items-center px-4" // Additional styles for the button
          >
            Columns <IoIosArrowDown /> {/* Text and Icon inside the button */}
          </Button>
          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4 font-normal  rounded-md  ">
              <p className="hover:bg-[#eef1f4] flex items-center ">
                <AiOutlineCheck /> Name
              </p>

              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                Stock
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                Price
              </p>
            </div>
          )}

<Link to="/dashboard/add-product" className="ml-5">

<Button
          
            className="flex items-center px-4" // Additional styles for the button
          >
            Add Product
          </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full mt-4 px-4">
        <div className="flex justify-around shadow-md  rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark ">
          <h2>image</h2>
          <h2>Name</h2>
          <div>
            <Button className="flex items-center px-4">
              stock
              <BsArrowDownUp />
            </Button>
          </div>
          <h2>price</h2>
        </div>
        {data && data.length > 0 ?(
        data?.map((product) => (
          <div
            key={product.id}
            className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
          >
            <h2>{product.id}</h2>
            <h2>{product.name}</h2>
            <h2>{product.description}</h2>
            <div className="flex items-center gap-x-4 relative">
              <Button
                className="flex px-4"
                onClick={() => handleDropdownToggle(product?.id)}
              >
                {" "}
                <MdOutlineMoreHoriz />
              </Button>
              
            {/* Dropdown Menu */}
            {openDropdownId === product.id && (
              <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                <h1 className="font-semibold">Actions</h1>
             
                <div
                  className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                  onClick={() => {
                    deleteProductMutation.mutate(product.id!);
                    setOpenDropdownId(null); // Close the dropdown after deletion
                  }}
                >
                  <AiOutlineDelete    /> <span >Delete</span>
                </div>
                <div
                  className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-primary"
                  onClick={() => {
                    setOpenDropdownId(null); // Close the dropdown after selecting edit
                  }}
                >
                  <AiOutlineEdit/> Edit
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

export default Product;
