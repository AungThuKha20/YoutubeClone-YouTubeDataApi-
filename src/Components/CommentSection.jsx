import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../Services/data";
import { MdSort } from "react-icons/md";
import pf from "../assets/pf.png";
import Comment from "./Comment";
import { DataContext } from "../Context/DataContext";
const CommentSection = ({ id, video }) => {
  const { cmtMore, setCmtMore } = useContext(DataContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${api_key}`
    );
    const dataApi = await api.json();
    setData(dataApi.items);
    // console.log(data);
    // console.log(video);
  };
  return (
    <div>
      <div className=" flex md:gap-4 mt-2 gap-3 ">
        <div className=" text-[16px] font-bold">
          {video.statistics.commentCount}{" "}
          <span className=" ms-[1px]">Comments</span>
        </div>
        <div className="   ">
          <div className=" group flex-col gap-1  cursor-pointer items-center">
            <div className=" flex items-center">
              <MdSort size={20} className=" text-gray-400" />
              <span className=" text-[14px]">Sort by</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" mt-2  mb-2 flex gap-2 items-center">
        <img
          src={pf}
          className="  h-[40px]  w-[40px] top-[-20px]  rounded-full"
          alt=""
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className=" w-full text-[14px] border-b-[1px] border-gray-400 bg-black outline-none"
        />
      </div>
      <div className=" hidden md:block ">
        {data?.map((item, index) => {
          return <Comment key={index} item={item} />;
        })}
      </div>
      <div className="  md:hidden block">
        <button
          onClick={() => setCmtMore(!cmtMore)}
          className="text-[14px] underline text-blue-500"
        >
          {!cmtMore ? "More Comments" : "Less comments..."}
        </button>
        {cmtMore
          ? data?.map((item, index) => <Comment key={index} item={item} />)
          : data
              ?.slice(0, 1)
              .map((item, index) => <Comment key={index} item={item} />)}
      </div>
    </div>
  );
};

export default CommentSection;
