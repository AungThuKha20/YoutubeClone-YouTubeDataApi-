import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

import PlayVideo from "./PlayVideo";
import Recommend from "./Recommend";

const SingleVideo = () => {
  const { categoryID, id } = useParams();
  const { data } = useContext(DataContext);

  // console.log(id);

  const filterSgVideo = data.filter((item) => {
    return item.id === id;
  });

  console.log(filterSgVideo);

  return (
    <div className=" md:flex flex-row flex-wrap w-full h-screen mt-[60px] md:mt-[80px] bg-black  text-white">
      <div className=" w-[98vw] md:w-[70vw] h-full">
        {filterSgVideo.map((video, index) => {
          return <PlayVideo key={index} id={id} video={video} />;
        })}
      </div>
      <div>
        <Recommend />
      </div>
    </div>
  );
};

export default SingleVideo;
