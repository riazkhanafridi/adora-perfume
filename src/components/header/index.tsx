import * as React from "react"
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,

  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Header() {
  return (
    <div className="bg-black p-4 flex justify-between w-full">
      <Select>
      <SelectTrigger className="w-[180px] bg-white ">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
         
          <SelectItem value="UAE AE">UAE AE</SelectItem>
          <SelectItem value="saudi SA">saudi SA</SelectItem>
          <SelectItem value="Kuwait AE">Kuwait AE</SelectItem>
          <SelectItem value="Dollar us">Dollar us</SelectItem>
          <SelectItem value="UK GB">UK GB</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <div className=" text-white flex items-center gap-x-2 ">
    <FiFacebook className="w-[30px] h-[30px]" />
    <AiFillInstagram className="w-[30px] h-[30px]"/>
    <PiTiktokLogo className="w-[30px] h-[30px]" />
    </div>
    </div>
  )
}

export default Header