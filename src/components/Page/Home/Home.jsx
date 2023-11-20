import Banner from "./Banner";
import Brand from "./Brands";
import { useLoaderData } from "react-router-dom";
import Pricing from "./Pricing";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Banner></Banner>
      {/* Brands card */}
      <section className="text-text p-4 rounded-md">
        <div className="mx-auto p-10 my-6 space-y-2 text-center bg-primary shadow-lg rounded-lg">
          <h2 className="text-5xl font-bold">
            Shop Our Top Brands - Up To 90% OFF
          </h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.slice(0, 8).map((element, idx) => (
            <Brand element={element} key={idx}></Brand>
          ))}
        </div>
      </section>

      {/* pricing section */}
      <Pricing></Pricing>
    </>
  );
};

export default Home;
