/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { FaCartArrowDown } from "react-icons/fa6";

const ClothCard = ({item}) => {
    const { imageLink, productTitle, price, clothSize } = item || {};
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
                <p className="text-lg font-bold text-blue-500">{price}</p>
  
                <Button size="sm" className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-2 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <FaCartArrowDown />
                  <button size="sm" className="text-sm">Add to cart</button>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ClothCard