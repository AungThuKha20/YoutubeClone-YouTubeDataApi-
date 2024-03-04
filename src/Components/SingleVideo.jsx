import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlayVideo from "./PlayVideo";
import Recommend from "./Recommend";
import { api_key } from "../Services/data";

const SingleVideo = () => {
  const { categoryID, id } = useParams();

  const [recommendVd, setRecommendVd] = useState(null);
  const [sgVideo, setSgVideo] = useState(null);
  // console.log(data);
  // console.log(categoryID);

  useEffect(() => {
    fetchSgVideo();
  }, []);

  const fetchSgVideo = async () => {
    const sg = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key} `
    );
    const sgVd = await sg.json();
    setSgVideo(sgVd.items);
  };

  console.log(id);
  // console.log(filterSgVideo);
  useEffect(() => {
    fetchRecommend();
  }, [id]);
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
        {sgVideo?.map((video, index) => {
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
