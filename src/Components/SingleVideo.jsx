import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

import PlayVideo from "./PlayVideo";
import Recommend from "./Recommend";
import { api_key } from "../Services/data";

const SingleVideo = () => {
  const { categoryID, id } = useParams();
  const { data } = useContext(DataContext);
  const [recommendVd, setRecommendVd] = useState(null);

  // console.log(id);
  // console.log(data);
  // console.log(categoryID);

  const filterSgVideo = data.filter((item) => {
    return item.id === id;
  });

  // console.log(filterSgVideo);
  useEffect(() => {
    fetchRecommend();
  }, [categoryID]);
  const fetchRecommend = async () => {
    const api = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&videoCategoryId=${categoryID}&key=${api_key} `
    );
    const recommend = await api.json();
    console.log(recommend.items);
    setRecommendVd(recommend.items);
  };

  return (
    <div className=" md:flex flex-row  w-full h-full mt-[60px] md:mt-[80px] bg-black  text-white">
      <div className=" w-[98vw] md:w-[70vw] h-full">
        {filterSgVideo.map((video, index) => {
          return <PlayVideo key={index} id={id} video={video} />;
        })}
      </div>
      <div className=" w-[98vw] md:w-[30vw] h-full">
        {recommendVd &&
          recommendVd?.map((vd, index) => {
            return <Recommend key={index} vd={vd} />;
          })}
      </div>
    </div>
  );
};

export default SingleVideo;
