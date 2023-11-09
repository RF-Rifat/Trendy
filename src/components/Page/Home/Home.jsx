import { useEffect, useState } from "react";
import Banner from "./Banner";
import Brand from "./Brands";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);
  console.log(data);
  return (
    <>
      <Banner></Banner>

      {/* Brands card */}

      <section className="text-text p-4 rounded-md">
        <div className="mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">
            Shop Our Top Brands - Up To 90% OFF
          </h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 8).map((element, idx) => (
            <Brand element={element} key={idx}></Brand>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
