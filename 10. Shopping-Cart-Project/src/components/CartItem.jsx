import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-8 max-w-6xl mb-10">
        <div className="h-60 w-60">
          <img src={item.image} alt={item.title} className="w-full h-full" />
        </div>
        <div>
          <h1 className="font-bold">{item.title}</h1>
          <p className="font-medium mx-auto">{item.description}</p>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
