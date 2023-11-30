// /* eslint-disable react/prop-types */
// import { CgProfile } from "react-icons/cg";
// import { TbListDetails } from "react-icons/tb";
// import { Button } from "@material-tailwind/react";
// import { Link, useNavigation } from "react-router-dom";

// const ServiceCard = ({ item }) => {
//   const {
//     _id,
//     imageLink,
//     productTitle,
//     price,
//     clothSize,
//     description,
//     userName,
//     discount,
//     extraClothImages,
//   } = item || {};
//   const navigation = useNavigation();
//   if (navigation.state === "loading") {
//     return (
//       <>
//         <div className="relative flex justify-center items-center">
//           <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
//           <img
//             src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
//             className="rounded-full h-28 w-28"
//           />
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="rounded overflow-hidden shadow-xl hover:shadow-2xl">
//         <div className="relative">
//           <div>
//             <img className="w-full" src={imageLink} alt="Product Photo" />
//             <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//           </div>
//           <div>
//             <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//               {clothSize}
//             </div>
//           </div>

//           <div>
//             <div className="absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
//               {discount}% off
//             </div>
//           </div>
//         </div>
//         <div className="space-y-3">
//           <div className="px-6">
//             <div className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
//               {productTitle}
//             </div>
//             <p className="text-gray-500 text-sm">{description}</p>
//           </div>

//           <div className="px-6 flex items-center justify-between text-gray-900">
//             <div className="py-1 text-sm font-regular mr-1 flex flex-row items-center">
//               Total-Cloth:{extraClothImages.length}
//             </div>
//             <div className="text-sm">Price: ${price}</div>
//           </div>

//           <div className="px-6 pb-4 flex flex-row items-center justify-between">
//             <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
//               <CgProfile />
//               <span className="ml-1">{userName}</span>
//             </span>
//             <Link to={`/Service/${_id}`}>
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded text-sm flex gap-1 place-items-center">
//                 <TbListDetails />
//                 View More
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServiceCard;

/* eslint-disable react/prop-types */
import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import { Button } from "@material-tailwind/react";
import { Link, useNavigation } from "react-router-dom";

const ServiceCard = ({ item }) => {
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
  } = item || {};
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
      <section className="bg-white dark:bg-gray-900 shadow-xl">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={imageLink}
              alt="image link"
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 grid">
              <div className="space-y-3 grid h-full">
                <div className="px-6">
                  <div className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                    {productTitle}
                  </div>
                  <p className="text-gray-500 text-sm">{description}</p>
                </div>

                <div className="px-6 flex items-center justify-between text-gray-900">
                  <div className="py-1 text-sm font-regular mr-1 flex flex-row items-center">
                    Total-Cloth:{extraClothImages.length}
                  </div>
                  <div className="text-sm">Price: ${price}</div>
                </div>

                <div className="px-6 pb-4 flex flex-row items-center justify-between">
                  <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <CgProfile />
                    <span className="ml-1">{userName}</span>
                  </span>
                  <Link to={`/Service/${_id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded text-sm flex gap-1 place-items-center">
                      <TbListDetails />
                      View More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
