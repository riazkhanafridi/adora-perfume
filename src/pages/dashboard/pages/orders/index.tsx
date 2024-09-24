import { IoIosArrowDown } from "react-icons/io";

import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";

import { MdOutlineMoreHoriz } from "react-icons/md";

import { useGetAllOrders } from "@/api/orders/queries";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Header from "../../-components/header";



function Orders() {
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { data, isPending, error } = useGetAllOrders();

  function openToggle() {
    setToggle(!toggle);
  }
  const toggleDropDown=()=>{
    setShowDropdown(!showDropdown)
  }
  return (
    <div className="w-full bg-secondary">
      <Header />

      <div className="flex justify-between mt-16 w-full ">
      <Input type="text" placeholder="Filter Name..."className="w-[30%]" />


        <div className="flex justify-between  gap-x-4 px-4 relative ">
          <Button
            onClick={openToggle}
            className="flex items-center px-4" // Additional styles for the button
          >
            Columns <IoIosArrowDown /> {/* Text and Icon inside the button */}
          </Button>
          {toggle && (
            <div className="mt-2 absolute top-full bg-white shadow-md px-4  rounded-md ">
              <p className="hover:bg-[#eef1f4] flex items-center ">
                <AiOutlineCheck /> Status
              </p>

              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                Address
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                netAmount
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                netAmount
              </p>
            </div>
          )}
        </div>
      </div>

    
      <div className="flex flex-col w-full mt-4 px-4">
        <div className="flex justify-between shadow-md  rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark ">
          <div>
            <Button className="flex items-center px-4">
              Status
              <BsArrowDownUp />
            </Button>
          </div>

          <h2> Address</h2>
          <h2> netAmount</h2>
          <h2> createdAt</h2>
        </div>
        {data && data.length > 0 ?(
        data?.map((order) => (
          <div
            key={order.id}
            className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
          >
            <h2>{order.id}</h2>
            <h2>{order.address}</h2>
            <h2>{order.description}</h2>
            <h2>{order.netAmount}</h2>
            <h2>{order.status}</h2>

            <div className="flex items-center gap-x-4 relative">
              <Button
              className="flex items-center px-4"
                onClick={toggleDropDown}
              >
                {" "}
                <MdOutlineMoreHoriz />
              </Button>
              
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                <h1 className="font-semibold">Actions</h1>
             
                <div
                  className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                  onClick={() => {
                  
                    setShowDropdown(false); // Close the dropdown after selecting
                  }}
                >
                  <AiOutlineDelete   /> <span    >Delete</span>
                </div>
                <div
                  className="hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-primary"
                  onClick={() => {
                  
                    setShowDropdown(false); // Close the dropdown after selecting
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
}

export default Orders;
