import { useEffect, useState } from "react";
import Banner from "./Banner";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);
  console.log(data)
  return (
    <>
      <Banner></Banner>

      {/* Brands card */}
    </>
  );
};

export default Home;
