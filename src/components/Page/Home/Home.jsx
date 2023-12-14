import Banner from "./Banner";
import Brand from "./Brands";
import { useLoaderData, useNavigation } from "react-router-dom";
import Pricing from "./Pricing";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <>
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            className="rounded-full h-28 w-28"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>TRENDY | HOME</title>
      </Helmet>
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
