import PageBanner from "@/components/banner";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import { TbBrandFacebook } from "react-icons/tb";
import { PiTiktokLogo } from "react-icons/pi";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

function ContactUs() {
  return (
    <div className="bg-secondary">
      <PageBanner bannerImages="/banner/men.jpg" title="Contact Us" />

      <div className="flex flex-col items-center gap-8">
        <p>
          For More information, details, about our products, collections and
          offers please contact:
        </p>
        <div className="flex gap-x-16 font-semibold ml-24">
          <h3>UAE</h3>
          <h3>ADDRESS</h3>
          <p className="text-gray-600 ">
            Plot 5, Mussafah m-16, abu dhabi - united arab emirates
          </p>
        </div>
        <div className="flex  w-[35%] border-b-2 border-b-blue-600 ">
          <h1 className="mb-10">
            PHONE
            <span className="text-gray-600 "> +971524525401</span>
          </h1>
        </div>
      </div>
      <div className="  flex items-center gap-4 justify-center   mt-8 rounded-full">
        <p>SOCIAL MEDIA</p>
        <div className=" flex w-[30px] h-[30px] rounded-full  bg-black items-center text-white justify-center ">
          <TbBrandFacebook />
        </div>
        <div className=" flex w-[30px] h-[30px] rounded-full  bg-black items-center text-white justify-center ">
          <InstagramLogoIcon />
        </div>
        <div className=" flex w-[30px] h-[30px] rounded-full  bg-black items-center text-white justify-center ">
          <PiTiktokLogo />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-primary font-semibold text-3xl ">get in touch</h1>
        <div className="flex flex-col shadow-lg border w-[700px] h-[300px] gap-4 px-10 mt-8 rounded-md py-8">
          <div className="flex gap-x-2 mt-4  ">
            <Input type="text" placeholder="First name " className="w-full" />
            <Input placeholder="Email" className="w-full"/>
          </div>
          <Input type="text" placeholder="Subject" />
          <Input  placeholder="Message" className="h-40"/>
          <Button className="bg-primary">contact-us</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
