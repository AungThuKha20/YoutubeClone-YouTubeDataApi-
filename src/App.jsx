import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";

import "animate.css";
import SingleVideo from "./Components/SingleVideo";

const App = () => {
  return (
    <div className="  w-full h-full bg-black   ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/singlevideo/:categoryID/:id" element={<SingleVideo />} />
      </Routes>
    </div>
  );
};
export default App;
