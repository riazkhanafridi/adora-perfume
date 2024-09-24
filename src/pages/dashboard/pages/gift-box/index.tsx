import { useState } from "react";
import Header from "../../-components/header";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";

import { Link } from "react-router-dom";
import Input from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { useGetAllGiftBoxes } from "../../../../api/gift-box/queries";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { asyncDeleteGiftBox } from "../../../../api/gift-box/fetchers";
import { url } from "../../../../config/config";

const GiftBox = () => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const{data,isLoading,error}=useGetAllGiftBoxes();



  function openToggle() {
    setToggle(!toggle);
  }

  function toggleDropDown(){
    setShowDropdown(!showDropdown)
  }

  const deleteGiftMutation = useMutation({
    mutationFn: (giftId: number) => asyncDeleteGiftBox(giftId),
    onSuccess: () => {
     
      queryClient.invalidateQueries(["giftBoxes"]); // 
    },
  });
  

  const handleDropdownToggle = (giftId: number) => {
    // Toggle the dropdown for the selected category
    setOpenDropdownId((prev) => (prev === giftId ? null : giftId));
  };

  return (
    <div className="w-full bg-secondary">
      <Header />

      <div className="flex justify-between mt-16 ">
      <Input type="text" placeholder="Filter Name..." className="w-[30%]" />


        <div className="flex  gap-x-2 px-4 relative">
          <Button
            onClick={openToggle}
            className="flex items-center px-4" // Additional styles for the button
          >
            Columns <IoIosArrowDown /> {/* Text and Icon inside the button */}
          </Button>
          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4  rounded-md  ">
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

          <Link to="/dashboard/add-gift" className="ml-5">
          <Button
          
            className="flex items-center px-4" // Additional styles for the button
          >
            Add GiftBox 
          </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full mt-4 px-4 ">
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
        data?.map((boxes) => (
          <div
            key={boxes.id}
            className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
          >
          <img src={`${url}/${boxes?.image}`} alt="" className="w-[200px] h-[200px]"/>
            <h2>{boxes.name}</h2>
            <h2 >{boxes.stock}</h2>
            <h2>{boxes.price}</h2>
            <div className="flex items-center gap-x-4 relative">
              <Button
                className="flex px-4"
                onClick={() => handleDropdownToggle(boxes?.id)}
              >
                {" "}
                <MdOutlineMoreHoriz />
              </Button>
              
            {/* Dropdown Menu */}
            {openDropdownId === boxes.id && (
              <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                <h1 className="font-semibold">Actions</h1>
             
                <div
                  className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                  onClick={() => {
                    deleteGiftMutation.mutate(boxes.id!);
                    setOpenDropdownId(null); // Close the dropdown after deletion
                  }}
                >
                  <AiOutlineDelete    /> <span    >Delete</span>
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
};

export default GiftBox;