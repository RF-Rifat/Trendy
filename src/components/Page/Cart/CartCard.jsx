/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FcIcons8Cup, FcFullTrash } from "react-icons/fc";
import { useSpring, animated } from "@react-spring/web";
import Swal from "sweetalert2";
import { AuthProvider } from "../../Authentication/Provider";
const CartCard = ({ item, setCardData, cardData }) => {
  const { setCartNum } = useContext(AuthProvider);
  const { _id, clothSize, imageLink, price, productTitle } = item || {};
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
    // const swalWithBootstrapButtons = Swal.mixin({
    //   customClass: {
    //     confirmButton: "btn btn-success",
    //     cancelButton: "btn btn-danger",
    //   },
    //   buttonsStyling: false,
    // });

    // swalWithBootstrapButtons
    //   .fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonText: "Yes, delete it!",
    //     cancelButtonText: "No, cancel!",
    //     reverseButtons: true,
    //   })
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       fetch(`http://localhost:5000/userCartData/${id}`, {
    //         method: "DELETE",
    //       })
    //         .then((res) => res.json())
    //         .then((info) => {
    //           console.log(info);
    //           if (info.deletedCount > 0) {
    //             Swal.fire("Deleted!", "Your Cart has been deleted.", "success");
    //             const remain = cardData.filter((item) => item._id !== id);
    //             setCardData(remain);
    //             setCartNum(remain.length);
    //           }
    //         });
    //       swalWithBootstrapButtons.fire(
    //         "Deleted!",
    //         "Your file has been deleted.",
    //         "success"
    //       );
    //     } else if (result.dismiss === Swal.DismissReason.cancel) {
    //       swalWithBootstrapButtons.fire(
    //         "Cancelled",
    //         "Your imaginary file is safe :)",
    //         "error"
    //       );
    //     }
    //   });

    fetch(`http://localhost:5000/userCartData/${id}`, {
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
  return (
    <>
      <div>
        <div className="bg-sky-300 text-accent-content rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-semibold">Product</th>
                <th className="text-left font-semibold">Cloth Size</th>
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

export default CartCard;
