import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { SidebarContext } from "../Context/SidebarContext";
import FeedVideos from "./FeedVideos";
import { DataContext } from "../Context/DataContext";

const Feed = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { data } = useContext(DataContext);
  // console.log(data);
  return (
    <div className="  flex text-white bg-black w-full md:mt-[80px] mt-[60px]  overflow-hidden ">
      <div
        className={` ${
          isOpen ? `lg:w-[5vw] md:w-[8vw]  ` : `lg:w-[14vw] md:[w-18vw] `
        }  ${
          !isOpen && "  hidden md:flex "
        } h-full  transition-all duration-300  border-gray-500`}
      >
        <Sidebar />
      </div>
      <div
        className={` ${
          isOpen ? `lg:w-[95vw] md:w-[92vw]  ` : `lg:w-[86vw] md:[w-82vw] `
        } flex flex-wrap justify-center gap-4 px-2  mt-4 md:mt-0 bg-black     `}
      >
        {Array.isArray(data) &&
          data.map((item, index) => {
            return <FeedVideos key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Feed;
