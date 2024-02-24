import React, { useEffect, useState } from "react";
import { api_key, viewConverter } from "../Services/data";
import { LuDot } from "react-icons/lu";
import moment from "moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { HiSave } from "react-icons/hi";
import { BsClockHistory, BsThreeDots } from "react-icons/bs";
import CommentSection from "./CommentSection";
const PlayVideo = ({ id, video }) => {
  // console.log(video);
  const [more, setMore] = useState(false);
  const moreHandler = () => {
    setMore(!more);
  };
  const formattedDate = moment(video.snippet.publishedAt).fromNow();
  const view = viewConverter(video.statistics.viewCount);
  const [channel, setChannel] = useState(null);
  const subscriber = viewConverter(channel?.statistics.subscriberCount);
  useEffect(() => {
    fetchChannel();
  }, []);
  const fetchChannel = async () => {
    const api = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${api_key}`
    );
    const channelData = await api.json();

    // console.log(channelData.items[0]);
    setChannel(channelData.items[0]);
  };

  return (
    <div className=" flex md:justify-end justify-center  md:w-full w-screen   ">
      <div className="  flex-col  md:w-[60vw] w-screen    md:me-4 me-0 ">
        <iframe
          className=" mt-1 flex h-[40vh]  rounded-md md:h-[70vh] justify-center w-screen md:w-[60vw]"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className=" text-white md:w-full w-screen px-2 mt-2">
          <p className=" font-semibold text-[18px] ">{video.snippet.title}</p>
          <div className="   ">
            <div className=" flex flex-wrap items-center mt-2 justify-between">
              {channel && (
                <div className=" flex md:justify-start justify-between md:w-auto w-full items-center gap-2">
                  <div className=" flex items-center gap-4">
                    <img
                      className=" h-[40px] w-[40px]    rounded-full"
                      src={channel.snippet.thumbnails.high.url}
                      alt=""
                    />
                    <div>
                      <p className=" md:text-[16px] text-[10px] font-medium">
                        {channel.snippet.title}
                      </p>
                      <p className=" text-[14px] text-gray-400">
                        {subscriber}
                        <span className="   ms-1">Subscribers</span>
                      </p>
                    </div>
                  </div>
                  <button className=" text-[16px] px-3 py-[1px] me-4 md:me-0 font-semibold hover:bg-gray-300 bg-white text-black rounded-full">
                    Subscribe
                  </button>
                </div>
              )}

              <div className=" flex  items-center justify-start w-full md:w-auto md:mt-0 mt-3 text-[16px] md:gap-4 gap-6">
                <div className=" flex  ">
                  <button className=" border-e  border-gray-600 flex items-center rounded-s-full hover:bg-gray-800 bg-gray-900 px-2 py-[1px]">
                    <AiFillLike size={15} />{" "}
                    <span className=" ms-2">
                      {viewConverter(video.statistics.likeCount)}
                    </span>
                  </button>

                  <button className="  items-center flex rounded-e-full hover:bg-gray-800 bg-gray-900 px-2 py-[1px]">
                    <AiFillDislike size={15} />{" "}
                  </button>
                </div>
                <button className=" flex items-center bg-gray-900 hover:bg-gray-800 px-4 rounded-full py-[1px]">
                  <IoMdShareAlt className=" me-1" size={15} />
                  Share
                </button>
                <button className=" flex items-center bg-gray-900 hover:bg-gray-800 px-4 rounded-full py-[1px]">
                  <HiSave className=" me-1" size={15} />
                  Save
                </button>
              </div>
            </div>
            <div className=" bg-gray-900 mt-4 md:p-4 p-2  ">
              <div className=" flex items-center md:gap-4 gap-3 text-[14px]">
                <p className="  font-semibold">
                  {view} <span>views</span>
                </p>
                <p className=" font-semibold">{formattedDate}</p>
                <div className="flex text-gray-400 font-semibold items-center gap-2">
                  {video.snippet.tags?.slice(0, 3).map((tag, index) => (
                    <p key={index}>#{tag}</p>
                  ))}
                </div>
              </div>
              <div className=" w-full">
                <p className="mt-2 text-[14px] font-medium">
                  {more
                    ? video.snippet.description
                    : `${video.snippet.description.substring(0, 200)}`}
                  {video.snippet.description.length > 200 && (
                    <button
                      onClick={moreHandler}
                      className="text-blue-500 ms-2 hover:underline focus:outline-none"
                    >
                      {more ? "Show less" : "...more"}
                    </button>
                  )}
                </p>
              </div>
            </div>
            <CommentSection id={id} video={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
