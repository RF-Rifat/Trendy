import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import toast, { Toaster } from "react-hot-toast";

const ClothDetails = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const data = useLoaderData() || {};
  const {
    _id,
    imageLink,
    productTitle,
    price,
    clothSize,
    description,
    userName,
    discount,
    extraClothImages,
    daysUsed,
  } = data || {};
  const products = [imageLink, ...extraClothImages];
  const onChange = (index) => {
    console.log(`Carousel slide change to index ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Clicked on item with index ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumb with index ${index}`);
  };
  const handleBuy = () => {
    if (startDate && endDate) {
      // Format the dates
      const formattedStartDate = startDate.toLocaleDateString("en-GB");
      const formattedEndDate = endDate.toLocaleDateString("en-GB");

      // Log the formatted dates
      console.log("Selected Start Date:", formattedStartDate);
      console.log("Selected End Date:", formattedEndDate);

      // Perform other actions related to buying
    } else {
      // Dates are not selected
      console.log("Please select start and end dates before buying");
      // toast.error("Please select start and end dates before buying");
      toast.error((t) => (
        <span>
          Please select start and end dates before buying.
          <Button className="ml-4" onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </Button>
        </span>
      ))
    }
  };

  return (
    <>
      <Toaster position="center-right" reverseOrder={false} />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="px-5 mx-auto">
          <div className="mx-auto flex flex-wrap">
            <Carousel
              className="flex-1"
              showArrows={false}
              onChange={onChange}
              onClickItem={onClickItem}
              onClickThumb={onClickThumb}
              showIndicators={false}
              dynamicHeight={true}
            >
              {products.map((item, idx) => (
                <div key={idx}>
                  <img
                    alt="Cloths"
                    className="w-full object-cover object-center rounded border border-gray-200"
                    src={item}
                    style={{ width: "80%", height: "auto" }}
                  />
                  <p className="legend">Cloths {idx + 1}</p>
                </div>
              ))}
            </Carousel>
            <div className="flex flex-col justify-between w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex-1">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productTitle}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex gap-4">
                <div>Cloth-Size: {clothSize}</div>
                <div>Used: {daysUsed} Days</div>
              </div>
              <div className="flex gap-4">
                <div>Swapper: {userName}</div>
                <div>Discount: {discount}%</div>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price * products.length}
                </span>

                <div className="flex items-center">
                  <div className="relative">
                    <DatePicker
                      selectsStart
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      startDate={startDate}
                      className="border rounded px-3 py-2 bg-white shadow-md"
                      todayButton="Today"
                      placeholderText="Select start date"
                    />
                    {startDate === null && (
                      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                        <span role="img" aria-label="Calendar Icon">
                          📅
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="relative ml-2">
                    <DatePicker
                      selectsEnd
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      endDate={endDate}
                      startDate={startDate}
                      minDate={startDate}
                      className="border rounded px-3 py-2 bg-white shadow-md"
                      todayButton="Today"
                      placeholderText="Select end date"
                    />
                    {endDate === null && (
                      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                        <span role="img" aria-label="Calendar Icon">
                          📅
                        </span>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={handleBuy}
                    size="sm"
                    className="text-sm ml-2"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClothDetails;
