import { createContext, useContext, useEffect, useState } from "react";
import { SidebarContext } from "./SidebarContext";
import { api_key } from "../Services/data";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cmtMore, setCmtMore] = useState(false);
  const { category } = useContext(SidebarContext);
  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    const api = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=GB&videoCategoryId=${category}&key=${api_key} `
    );
    const apiData = await api.json();
    setData(apiData.items);
    // console.log(apiData.items);
  };

  return (
    <DataContext.Provider value={{ data, cmtMore, setCmtMore }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
