import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Products = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed from Cart.");
  };

  const addCartItem = () => {
    dispatch(add(product));
    toast.success("Item Added to Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {product.title}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full "
        />
      </div>

      <div className="flex justify-center items-center gap-12 mt-5 w-full">
        <div>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>

        {cart.some((p) => p.id === product.id) ? (
          <button
            className="text-gray-700 border-gray-700 border-2 rounded-full p-1 px-3 font-semibold text-[12px] uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={removeCartItem}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-gray-700 border-2 rounded-full p-1 px-3 font-semibold text-[12px] uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={addCartItem}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
