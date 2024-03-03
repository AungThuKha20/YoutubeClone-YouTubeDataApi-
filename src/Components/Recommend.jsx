import { Link } from "react-router-dom";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import { api_key, viewConverter } from "../Services/data";

const Recommend = ({ vd }) => {
  console.log(vd);

  const currentPath = "singlevideo";

  const formattedDate = moment(vd.snippet.publishedAt).fromNow();
  const view = viewConverter(vd.statistics.viewCount);
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    fetchChannel();
  }, []);
  const fetchChannel = async () => {
    const api = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${vd.snippet.channelId}&key=${api_key}`
    );
    const data = await api.json();
    // console.log(data.items[0]);
    setChannel(data.items[0]);
  };
  const resetPathway = () => {
    // Replace the current pathname with the base URL
    window.location.replace(
      `http://localhost:5173/${currentPath}/${vd.snippet.categoryId}/${vd.id}`
    );
  };
  console.log(channel);
  return (
    <Link
      to={`${currentPath}/${vd.snippet.categoryId}/${vd.id}`}
      onClick={resetPathway}
    >
      <div className=" md:flex items-center  group gap-2 md:mt-4 cursor-pointer mt-4 md:h-[90px]  h-full w-full">
        <div className=" md:w-[30vw] w-screen">
          <img
            src={vd.snippet.thumbnails.high.url}
            className=" md:w-full md:h-[80px] h-[200px] group-hover:scale-105 transition-all duration-200 object-cover w-screen"
            alt=""
          />
        </div>
        {/* For Wide screen */}
        <div className=" w-[40vw]  px-2   hidden md:inline ">
          <p className="text-[14px]  font-semibold ">
            {vd.snippet.title.substring(0, 30)}
            {vd.snippet.title.length > 30 && <span>...</span>}
          </p>
          <p className=" text-[12px] text-gray-400">
            {vd.snippet.channelTitle}
          </p>
          <div className=" flex items-center text-[10px] text-gray-400">
            <p>
              {view} <span> views</span>
            </p>
            <span>
              <LuDot size={20} />
            </span>
            <p>{formattedDate}</p>
          </div>
        </div>
        {/* For Mobile */}
        <div className=" mt-2 gap-1 md:hidden flex items-center">
          <div className="ms-2 w-[50px]">
            {channel && (
              <img
                className=" w-[40px] h-[40px] rounded-full"
                src={channel.snippet.thumbnails.high.url}
                alt=""
              />
            )}
          </div>
          <div className=" ">
            <p className="text-[14px]  font-semibold ">{vd.snippet.title}</p>
            <div className=" flex items-center text-[12px] text-gray-400">
              <p className=" ">{vd.snippet.channelTitle}</p>
              <span>
                <LuDot size={20} />
              </span>
              <p>
                {view} <span> views</span>
              </p>
              <span>
                <LuDot size={20} />
              </span>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Recommend;
