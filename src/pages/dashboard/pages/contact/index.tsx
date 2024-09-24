import { useState } from "react";
import Header from "../../-components/header";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import Input from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { useGetAllContact } from "../../../../api/contact-us/quires";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { asyncDeleteContact } from "../../../../api/contact-us/fetchers";
import { useMutation, useQueryClient } from "@tanstack/react-query";


function Contact() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [toggle, setToggle] = useState(false);

  const { data, isPending, error } = useGetAllContact();

  function openToggle() {
    setToggle(!toggle);
  }
  const deleteContactMutation = useMutation({
    mutationFn: (contactId: number) => asyncDeleteContact(contactId),
    onSuccess: () => {
    
      queryClient.invalidateQueries(["contact"]); 
    },
  });
  

  const handleDropdownToggle = (contactId: number) => {
  
    setOpenDropdownId((prev) => (prev === contactId ? null : contactId));
  };
  return (
    <div className="w-full bg-secondary">
      <Header />

      <div className="flex justify-between mt-16  ">
      <Input type="text" placeholder="Filter Name..."className="w-[30%]" />


        <div className="flex justify-center  gap-x-4 px-4 relative ">
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

              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                Email
              </p>
              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                Subject
              </p>

              <p className="hover:bg-[#eef1f4] flex items-center">
                <AiOutlineCheck />
                Message
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full mt-4 px-4">
        <div className="flex justify-between shadow-md  rounded-md py-1 hover:bg-[#eef1f4] px-4 font-semibold text-dark ">
          <div>
            <Button className="flex items-center px-4">
              Name
              <BsArrowDownUp />
            </Button>
          </div>

          <h2> Email</h2>
          <h2> Subject</h2>
          <h2> Message</h2>
        </div>
        {data && data.length > 0 ?(
        data?.map((contact) => (
          <div
            key={contact.id}
            className="flex justify-around shadow-md  rounded-md py-8 hover:bg-[#eef1f4] px-4 font-semibold text-dark "
          >
            <h2>{contact.id}</h2>
            <h2>{contact.name}</h2>
            <h2>{contact.email}</h2>
            <h2>{contact.subject}</h2>
            <h2>{contact.message}</h2>

            <div className="flex items-center gap-x-4 relative">
              <Button
              className="flex items-center px-4"
              onClick={() => handleDropdownToggle(contact?.id)}
              >
                {" "}
                <MdOutlineMoreHoriz />
              </Button>
              
            {/* Dropdown Menu */}
            {openDropdownId === contact.id && (
              <div className="absolute right-0 top-10 bg-white shadow-md px-4 py-1 rounded-md   w-25">
                <h1 className="font-semibold">Actions</h1>
             
                <div
                  className="   cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-customGray text-textRed-500 "
                  onClick={() => {
                    deleteContactMutation.mutate(contact.id!);
                    setOpenDropdownId(null); // Close the dropdown after deletion
                  }}
                >
                  <AiOutlineDelete   /> <span    >Delete</span>
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
}

export default Contact;
