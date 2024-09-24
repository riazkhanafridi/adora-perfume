import { RiDashboardLine } from "react-icons/ri";
import { BiListUl } from "react-icons/bi";
import { HiOutlineGift } from "react-icons/hi";
import { LuIndent } from "react-icons/lu";
import { DiHtml5DeviceAccess } from "react-icons/di";
import { LuFlower } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GiStarShuriken } from "react-icons/gi";
import { BsListOl } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { Link, Outlet, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="w-[300px] flex bg-gray-200 ">
      <div className="px-6 py-6 md:flex flex-col gap-y-2 shadow-md h-screen text-primary hidden   font-semibold cursor-pointer">
        <div>
          <img src="/adore-logo.png" alt="logo" className="h-[60px]w-[40px]" />
        </div>
        <Link to="/dashboard">
          <div
            className={`flex items-center gap-x-2  p-2 mt-6 ${
              isActive("/dashboard")
                ? "bg-[#BAE6FD] text-white"
                : "hover:bg-secondary"
            }`}
          >
            <RiDashboardLine />
            Dashboard
          </div>
        </Link>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/gift-box")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary"
          }`}
        >
          <BiListUl />
          <Link to="/dashboard/gift-box">Gift Bog</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/product")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <HiOutlineGift />

          <Link to="/dashboard/product">Product</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/category")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <LuIndent />
          <Link to="/dashboard/category">Category</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/brand")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <DiHtml5DeviceAccess />
          <Link to="/dashboard/brand">Brand</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/scents")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <LuFlower />
          <Link to="/dashboard/scents">Scents</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/contact")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <MdOutlinePermContactCalendar />
          <Link to="/dashboard/contact"> Contact</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/reviews")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <GiStarShuriken />
          <Link to="/dashboard/reviews">Reviews</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/order")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <BsListOl />

          <Link to="/dashboard/order">Order</Link>
        </div>
        <div
          className={`flex items-center gap-x-2 p-2 ${
            isActive("/dashboard/setting")
              ? "bg-[#BAE6FD] text-white"
              : "hover:bg-secondary "
          }`}
        >
          <BsGear />

          <Link to="/dashboard/setting">Setting</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
