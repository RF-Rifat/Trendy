/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FcIcons8Cup, FcFullTrash } from "react-icons/fc";
import { useSpring, animated } from "@react-spring/web";
import Swal from "sweetalert2";
import { AuthProvider } from "../../Authentication/Provider";
import { useNavigation } from "react-router-dom";
const CartDetails = ({ item, setCardData, cardData }) => {
  const { setCartNum } = useContext(AuthProvider);
  const { _id, clothSize, imageLink, price, productTitle, PickUpDate } =
    item || {};
  const [isOpen, setIsOpen] = useState(false);
  const { transform } = useSpring({
    transform: isOpen ? "scale(1)" : "scale(0)",
  });

  const toggleTrash = () => {
    setIsOpen(!isOpen);
  };

  setCartNum(cardData.length);
  console.log(cardData.length);
  function handleDelete(id) {
    fetch(`https://trendy-server.vercel.app/serviceCart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.deletedCount > 0) {
          Swal.fire("Deleted!", "Your Cart has been deleted.", "success");
          const remain = cardData.filter((item) => item._id !== id);
          setCardData(remain);
          setCartNum(remain.length);
        }
      });
  }

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
      <div>
        <div className="bg-sky-300 text-accent-content rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-semibold">
                  Product Image / Name
                </th>
                <th className="text-left font-semibold">Cloth Size</th>
                <th className="text-left font-semibold">Delivery Date</th>
                <th className="text-left font-semibold">Price</th>
                <th className="text-center font-semibold">Actions</th>{" "}
                {/* Add Actions column */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 mr-4 rounded"
                      src={imageLink}
                      alt="Product image"
                    />
                    <span className="font-semibold w-32 text-black">
                      {productTitle}
                    </span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <span className="text-center">{clothSize}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <span className="text-center">{PickUpDate}</span>
                  </div>
                </td>
                <td className="py-4">${price}</td>
                <td className="py-4">
                  <div onClick={() => handleDelete(_id)} className="relative">
                    <div
                      style={{ cursor: "pointer" }}
                      className="text-error rounded-lg flex justify-center items-center"
                      onClick={toggleTrash}
                    >
                      <FcIcons8Cup size={25} />
                    </div>

                    <animated.div
                      style={{ transform }}
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    >
                      <FcFullTrash size={30} />
                    </animated.div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
