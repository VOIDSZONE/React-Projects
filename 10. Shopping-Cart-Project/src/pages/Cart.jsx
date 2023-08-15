import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5">
      {cart.length > 0 ? (
        <div className="flex justify-between gap-10 items-center max-w-6xl">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div>
            <div>
              <h4>Your Cart</h4>
              <h1>Summary </h1>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: {totalAmount}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mx-auto mt-[40vh]">
          <h1 className="font-medium uppercase text-2xl">Cart is Empty</h1>
          <NavLink to="/">
            <button className="bg-green-700 p-3 px-16 font-semibold text-xl text-white rounded-md mt-3">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
