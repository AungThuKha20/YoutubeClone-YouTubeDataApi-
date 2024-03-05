import React, { useContext, useState } from "react";
import { IoHomeOutline, IoCarSportSharp } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { MdSportsBaseball, MdLibraryMusic } from "react-icons/md";

import { PiTelevisionBold } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { SidebarContext } from "../Context/SidebarContext";
import Riotshift from "../assets/riotshift.jpg";
import angerfist from "../assets/AngerFist.jpg";
import linkinpark from "../assets/Linkinpark.jpg";
import terror from "../assets/terrorBass.jpg";
import poe from "../assets/PoeGyi.jpg";
import mms from "../assets/MMS.jpg";
import oftr from "../assets/OFTR.jpg";

const Sidebar = () => {
  const { category, setCategory, isOpen, setIsOpen } =
    useContext(SidebarContext);
  const handleSideBar = (id) => {
    setCategory(id);
    setIsOpen(false);
  };
  const menu = [
    {
      id: 1,
      name: "Home",
      categoryID: 0,
      icon: (
        <>
          <IoHomeOutline />
        </>
      )
    },
    {
      id: 2,
      name: "Gaming",
      categoryID: 20,
      icon: (
        <>
          <SiYoutubegaming />
        </>
      )
    },
    {
      id: 3,
      name: "Automobiles",
      categoryID: 2,
      icon: (
        <>
          <IoCarSportSharp />
        </>
      )
    },
    {
      id: 4,
      name: "Sports",
      categoryID: 17,
      icon: (
        <>
          <MdSportsBaseball />
        </>
      )
    },
    {
      id: 5,
      name: "Entertainment ",
      categoryID: 24,
      icon: (
        <>
          <PiTelevisionBold />
        </>
      )
    },
    {
      id: 6,
      name: "Technology ",
      categoryID: 28,
      icon: (
        <>
          <GrTechnology />
        </>
      )
    },
    {
      id: 7,
      name: "Music ",
      categoryID: 10,
      icon: (
        <>
          <MdLibraryMusic />
        </>
      )
    },
    {
      id: 8,
      name: "Blogs ",
      categoryID: 22,
      icon: (
        <>
          <FaBlog />
        </>
      )
    },
    {
      id: 9,
      name: "News",
      categoryID: 25,
      icon: (
        <>
          <BiNews />
        </>
      )
    }
  ];

  const subscribers = [
    {
      id: 10,
      name: "Riot Shift",
      image: Riotshift
    },
    {
      id: 20,
      name: "Angerfist",
      image: angerfist
    },
    {
      id: 30,
      name: "Linkin Park",
      image: linkinpark
    },
    {
      id: 40,
      name: "TERROR BASS",
      image: terror
    },
    {
      id: 60,
      name: "Poe Gyi",
      image: poe
    },
    {
      id: 70,
      name: "MMSIT",
      image: mms
    }
  ];
  // https:youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=[YOUR_API_KEY]

  return (
    <div className="  fixed z-50 bg-black   h-full px-2  ">
      {menu?.map((item) => {
        return (
          <div key={item.id}>
            <button
              // onClick={() => setCategory(item.categoryID)}
              onClick={() => handleSideBar(item.categoryID)}
              className={` ${isOpen && " flex"} 
            ${item.categoryID === category && " bg-gray-900"}
            cursor-pointer  hover:bg-gray-800 text-[15px] rounded-md w-full my-1 transition-all duration-200 px-2 py-1  flex items-center  gap-4`}
            >
              <p
                className={` ${
                  isOpen && "md:mx-auto"
                } text-yellow-100    text-[30px]`}
              >
                {item.icon}
              </p>
              <p className={`${isOpen && "md:hidden flex"}`}>{item.name}</p>
            </button>
          </div>
        );
      })}
      <div className=" ">
        {!isOpen ? (
          <div className=" text-gray-600">______________________</div>
        ) : (
          <div className="  text-gray-600">_______</div>
        )}
        {subscribers.map((sub, index) => {
          return (
            <div
              key={sub.id}
              className=" text-[15px] flex gap-4 items-center  cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md"
            >
              <img
                src={sub.image}
                className=" w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <p className={`${isOpen && "md:hidden flex"} text-white`}>
                {sub.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
