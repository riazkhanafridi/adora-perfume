import { Link, useNavigate } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { GiDelicatePerfume } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between shadow-md bg-white px-8 rounded-md">
      {/* Logo Section */}
      <div>
        <img src="/adore-logo.png" alt="Logo" className="w-[100px] h-[60px]" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-x-4 items-center text-gray-600 font-semibold">
        <Link to="/" className="flex items-center gap-x-1">
          <LuHome />
          Home
        </Link>
        <Link to="/scent" className="flex items-center gap-x-1">
          <GiDelicatePerfume />
          Scent
        </Link>
        <Link to="/customize" className="flex items-center gap-x-1">
          <IoSettingsOutline />
          Customize
        </Link>

        {/* Menu Link with Dropdown */}
        <div className="flex items-center gap-x-1">
          <Link to="/menu" className="flex items-center gap-x-1">
            <AiOutlineBars />
            Menu
          </Link>
          {/* Select Dropdown */}
          <Select onValueChange={(value) => navigate(value)}>
            <SelectTrigger className="">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="/about">About us</SelectItem>
                <SelectItem value="/careers">Careers</SelectItem>
                <SelectItem value="/contact">Contact us</SelectItem>
                <SelectItem value="/reviews">Reviews</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Link to="/online-store" className="flex items-center gap-x-1">
          <div className="flex items-center">
            <LuStore />
            <span className="text-normal"> Online Store</span>
          </div>
        </Link>
        <Select onValueChange={(value) => navigate(value)}>
          <SelectTrigger className="">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="/bakhour">Bakhour</SelectItem>
              <SelectItem value="/fragrances">Fragrances</SelectItem>
              <SelectItem value="/interior">Interior</SelectItem>
              <SelectItem value="/best-selling">Best Selling</SelectItem>
              <SelectItem value="/gift-box">Gift Box</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Link to="/cart" className="flex items-center gap-x-1">
          <FiShoppingCart />
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
