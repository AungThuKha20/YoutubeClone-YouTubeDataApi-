import moment from "moment";
import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Comment = ({ item }) => {
  // console.log(item);
  const formattedDate = moment(
    item.snippet.topLevelComment.snippet.updatedAt
  ).fromNow();
  return (
    <div className="  flex gap-3  mt-3">
      <div className=" w-[50px] ms-1 ">
        <img
          src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
          className=" w-[40px] h-[40px] rounded-full"
          alt=""
        />
      </div>
      <div className=" w-full ">
        <div className=" flex items-center gap-2">
          <p className=" text-[14px]">
            {item.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className=" text-[12px] text-gray-300">{formattedDate}</p>
        </div>
        <div>
          <p className=" text-[14px]">
            {item.snippet.topLevelComment.snippet.textDisplay}
          </p>
          <div className=" items-center mt-1 flex gap-3">
            <BiLike className=" cursor-pointer" />
            <BiDislike className=" cursor-pointer" />
            <p className=" text-[14px] cursor-pointer">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
