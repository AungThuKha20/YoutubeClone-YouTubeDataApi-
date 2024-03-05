import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import "@mantine/core/styles.css";

import "animate.css";
import SingleVideo from "./Components/SingleVideo";
import { DataContext } from "./Context/DataContext";
import Loading from "./Components/Loading";

const App = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="  overflow-x-hidden ">
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div className="  w-full h-full bg-black  ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route
              path="/singlevideo/:categoryID/:id"
              element={<SingleVideo />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
};
export default App;
