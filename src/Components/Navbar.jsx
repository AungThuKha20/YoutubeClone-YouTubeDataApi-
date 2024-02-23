import React, { useContext } from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { MdVideoCameraFront } from "react-icons/md";

import { IoIosNotifications } from "react-icons/io";
import profile from "../assets/pf.png";
import { SidebarContext } from "../Context/SidebarContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleOpen } = useContext(SidebarContext);
  return (
    <div className=" w-full bg-black z-50 fixed top-0   ">
      <div className="  h-[60px]    md:h-[80px] flex select-none  justify-between  px-4 md:px-6  items-center  ">
        <div className=" flex items-center  gap-1">
          <RiMenu3Fill
            onClick={handleOpen}
            className=" cursor-pointer me-1 text-white text-[20px]"
          />

          <Link to={"/"}>
            <div className=" flex items-center gap-1">
              <SiYoutubeshorts className=" cursor-pointer  text-red-500 text-[20px] md:text-[30px]" />
              <p className=" text-white font-semibold  font-mono text-[18px]">
                PuciTube
              </p>
            </div>
          </Link>
        </div>
        <div className="   mx-4 flex">
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-950 border text-gray-200 border-gray-800  px-4 rounded-s-full outline-none md:py-2 md:w-[25vw] w-[30vw] py-[1px]"
          />
          <button className=" px-1  md:px-4 rounded-e-full   bg-gray-800 md:py-2 py-[1px]">
            <FaSearch className=" text-gray-600 me-1 transform scale-x-[-1]" />
          </button>
        </div>
        <div className=" flex  ">
          <div className=" px-6 text-white gap-1 md:gap-[50px] text-[35px] hidden md:flex items-center">
            <div className=" group  hidden  md:flex justify-center flex-row gap-12">
              <MdVideoCameraFront className="  cursor-pointer text-red-500" />
              <p className=" cursor-pointer  hidden group-hover:flex text-[10px] top-[88px]  absolute bg-gray-900 px-2 py-3">
                {" "}
                Create
              </p>
            </div>
            <div className=" group   hidden md:flex justify-center flex-row gap-12">
              <IoIosNotifications className=" cursor-pointer" />
              <p className=" cursor-pointer  hidden group-hover:flex text-[10px] top-[88px]  absolute bg-gray-900 px-2 py-3">
                {" "}
                Notification
              </p>
            </div>
          </div>
          <div>
            <img
              src={profile}
              className="  md:w-[35px] md:h-[35px] w-[30px] h-[30px] me-4 md:me-0 rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
