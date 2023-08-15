import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="flex justify-between items-center h-20 mx-auto max-w-6xl">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../logo.png" alt="logo" className="h-14" />
        </div>
      </NavLink>

      <div className="flex items-center space-x-6 font-medium text-slate-100 mr-5">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart fontSize="2rem" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
