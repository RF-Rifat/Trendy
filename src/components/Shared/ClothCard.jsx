/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthProvider } from "../Authentication/Provider";

const ClothCard = ({ item }) => {
  const { user } = useContext(AuthProvider);
  const { imageLink, productTitle, price, clothSize } = item || {};
  const handleAddCart = () => {
    const newUser = {
      productTitle,
      price,
      clothSize,
      imageLink,
      displayName: user?.displayName,
      email: user?.email,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this cart!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/userCartData", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // setCartNum(cartNum + 1);
              console.log(data, "added");
            }
          });
        Swal.fire("added!", "Your cart has been added.", "success");
      }
    });
  };
  return (
    <div>
      <div className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
        <div>
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img src={imageLink} />
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-slate-700">{productTitle}</h2>
            <p className="mt-1 text-sm text-slate-400">{clothSize}</p>

            <div className="mt-3 flex items-end justify-between">
              <p className="text-lg font-bold text-blue-500">${price}</p>

              <Button
                size="sm"
                className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-2 py-1.5 text-white duration-100 hover:bg-blue-600"
              >
                <FaCartArrowDown />
                <button onClick={handleAddCart} size="sm" className="text-sm">
                  Add to cart
                </button>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;
