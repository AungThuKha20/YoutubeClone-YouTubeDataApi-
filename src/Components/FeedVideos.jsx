import React from "react";
import { viewConverter } from "../Services/data";
import { LuDot } from "react-icons/lu";
import moment from "moment";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { Link } from "react-router-dom";

const FeedVideos = (item) => {
  const formattedDate = moment(item.snippet.publishedAt).fromNow();
  const { isOpen } = useContext(SidebarContext);
  return (
    <Link to={`/singlevideo/${item.snippet.categoryId}/${item.id}`}>
      <div
        className={`${
          isOpen
            ? "md:w-[300px] w-screen md:h-[290px] "
            : "md:w-[360px] w-screen md:h-[320px]"
        } h-auto mt-2 md:mt-0  group cursor-pointer transition-all duration-200`}
      >
        <img
          className={` ${
            isOpen
              ? "md:w-[400px] lg:w-[330px] w-screen mt-0  "
              : "md:w-[400px] lg:w-[400px] w-screen mt-0  "
          } group-hover:scale-105 transition-all duration-200 
          h-[220px]     object-cover  `}
          src={item.snippet.thumbnails.high.url}
          alt=""
        />
        <div className=" md:px-0 mt-2 md:mt-0 px-4">
          <p className=" text-[15px] font-semibold">{item.snippet.title}</p>
          <p className=" mt-1 text-[13px] font-normal   text-gray-300 ">
            {item.snippet.channelTitle}
          </p>
          <div className="  flex items-center text-[12px] font-mono font-thin text-gray-400">
            <p className="  flex items-center ">
              {viewConverter(item.statistics.viewCount)} views{" "}
              <LuDot className=" font-bold text-[25px]" />
            </p>
            <p className="  ">{formattedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedVideos;
