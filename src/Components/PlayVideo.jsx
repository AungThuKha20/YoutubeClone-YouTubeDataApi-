import React, { useEffect } from "react";
import { api_key, viewConverter } from "../Services/data";
import { LuDot } from "react-icons/lu";
import moment from "moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { HiSave } from "react-icons/hi";
import { BsClockHistory, BsThreeDots } from "react-icons/bs";
const PlayVideo = ({ id, video }) => {
  // console.log(video);
  const formattedDate = moment(video.snippet.publishedAt).fromNow();
  useEffect(() => {
    fetchChannel();
  }, []);
  const fetchChannel = async () => {
    const api = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${api_key}`
    );
    const channelData = await api.json();
    console.log(channelData.items);
  };

  return (
    <div className=" flex md:justify-end justify-center  md:w-full w-screen   ">
      <div className="  flex-col     md:me-4 me-0 ">
        <iframe
          className=" mt-1 flex h-[50vh]  rounded-md md:h-[70vh] justify-center w-screen md:w-[60vw]"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className=" text-white md:w-full w-screen px-2 mt-2">
          <p className=" font-semibold text-[16px] ">{video.snippet.title}</p>
          <div className="   ">
            <div className=" flex items-center mt-2 justify-between">
              <p className=" text-[8px] flex items-center  text-gray-400">
                {viewConverter(video.statistics.viewCount)} views{" "}
                <span>
                  <LuDot size={20} />
                </span>
                {formattedDate}
              </p>
              <div className=" flex  items-center  text-[4px] md:gap-4 gap-2">
                <div className=" flex  ">
                  <button className=" border-e  border-gray-600 hidden md:flex items-center rounded-s-full hover:bg-gray-800 bg-gray-900 px-2 py-[1px]">
                    <AiFillLike size={15} />{" "}
                    <span className=" ms-2">
                      {viewConverter(video.statistics.likeCount)}
                    </span>
                  </button>

                  <button className=" hidden items-center md:flex rounded-e-full hover:bg-gray-800 bg-gray-900 px-2 py-[1px]">
                    <AiFillDislike size={15} />{" "}
                  </button>
                </div>
                <button className=" hidden md:flex items-center bg-gray-900 hover:bg-gray-800 px-4 rounded-full py-[1px]">
                  <IoMdShareAlt className=" me-1" size={15} />
                  Share
                </button>
                <button className=" hidden md:flex items-center bg-gray-900 hover:bg-gray-800 px-4 rounded-full py-[1px]">
                  <HiSave className=" me-1" size={15} />
                  Save
                </button>
                <button className=" flex md:me-0 me-3 items-center justify-center bg-gray-900 hover:bg-gray-800 rounded-full px-2 py-2">
                  <BsThreeDots className=" " size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
