import React, { useState, useEffect } from "react";
import { Progress } from "@mantine/core";
import logo from "../assets/Logo.png";

const Loading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          return 5;
        } else {
          return newProgress;
        }
      });
    }, 100);
  }, []);

  return (
    <div className="bg-black flex justify-center items-center h-screen w-screen">
      <Progress
        className=" w-[40vw] md:w-[30vw] "
        color="rgba(235, 199, 56, 1)"
        value={loadingProgress}
      />
      <div>
        <img src={logo} className=" h-[80px]" alt="" />{" "}
        <p className="font-semibold  font-mono text-[18px] md:text-[19px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-300 to-white inline-block">
          PuciTube
        </p>
      </div>
    </div>
  );
};

export default Loading;
