import Button from "@/components/ui/button";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "../../components/ui/sheet";

function CustomizePage() {
  return (
    <div className=" h-[70vh] w-full  mt-10 bg-cover bg-center flex justify-center items-center flex-col bg-[url('/images/create-2.jpg')] bg-black/50 bg-blend-overlay">
      {/* <img src="images/create-2.jpg" alt=""  /> */}
      <div className="flex bg-secondary justify-center items-center gap-3 h-[50vh] w-[100%] bg-white/80 ">
       
     <div className="flex flex-col justify-center items-center  h-[120px] w-[120px] ">
     <img
            src="customize/step-1.svg"
            alt=""
            className="h-full w-full" 
          />
          <Button className="bg-primary p-4 ">step-1</Button>
          <p className="text-sm ">chose brand</p>
     </div>
      
        <div className="flex flex-col  justify-center items-center gap-4 h-[120px] w-[120px]">
          <img
            src="customize/step-2.svg"
            alt=""
            className="h-full w-full" 
          />
          <Button className="bg-primary  p-4 ">step-1</Button>
          <p className="text-sm">chose fragrance</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 h-[120px] w-[120px]">
          <img
            src="customize/step-3.svg"
            alt=""
            className="h-full w-full" 
          />
          <Button className="bg-primary  p-4 ">step-1</Button>
          <p className="text-sm">
          done!</p>
        </div>
        <Sheet>
          <SheetTrigger className=" border-2 rounded-md py-2 px-2 mb-[60px] mt-5 sm:my-3 capitalize text-white hover:bg-white/40 hover:text-black transition-all ease-linear">
            customize perfume
          </SheetTrigger>
          <SheetContent className="h-[90vh]" side="bottom">
            <SheetHeader className="h-full">
              <CustomizePage />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      
        </div>
      </div>
 
  );
}

export default CustomizePage;
