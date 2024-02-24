import moment from "moment";
import React from "react";

const Comment = ({ item }) => {
  console.log(item);
  const formattedDate = moment(
    item.snippet.topLevelComment.snippet.updatedAt
  ).fromNow();
  return (
    <div className=" flex gap-3 items-center mt-3">
      <div>
        <img
          src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
          className=" w-[40px] h-[40px] rounded-full"
          alt=""
        />
      </div>
      <div>
        <div className=" flex items-center gap-2">
          <p className=" text-[14px]">
            {item.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className=" text-[12px] text-gray-300">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
