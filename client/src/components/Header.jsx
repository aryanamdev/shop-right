import React, { useContext, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home, Product, SignIn, Dashboard } from "../pages/index.js";
import Cart from "./Cart.jsx";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase.js";

const Header = () => {
  const navigate = useNavigate();

  // getting the user from the backend
  const [user, loading] = useAuthState(auth);

  const { cartItems, setCartDisplay, cartDisplay } = useContext(CartContext);
  return (
    <>
      <div className="z-100 px-6 lg:px-8 flex w-full justify-center bg-gray-200 border h-20 border-b-gray-300 fixed mb-20">
        <ul className="flex gap-6 text-sm lg:gap-10 w-full items-center justify-between lg:text-xl h-20">
          <li
            onClick={() => {
              navigate(`/`);
              window.scroll(0, 0);
            }}
            className=" text-lg lg:text-3xl hover:text-black cursor-pointer font-bold"
          >
            ShopRight 🛍️
          </li>
          <div
            onClick={() => window.scroll(0, 0)}
            className="flex items-center gap-5 lg:gap-8"
          >
            <li className="text-gray-800 hover:text-gray-400 active:scale-95">
              <Link to="/">Home</Link>
            </li>
            {!user ? (
              <li className=" rounded-sm btn hover:text-white hover:bg-teal-800 active:scale-95 bg-teal-600 p-1.5 text-white">
                <Link to="/auth/signin">Sign in</Link>
              </li>
            ) : (
              <div className="h-10 cursor-pointer">
                <Link to="/dashboard">
                  <img
                    loading="lazy"
                    className="h-full rounded-full"
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="avatar"
                  />
                </Link>
              </div>
            )}

            <li
              onClick={() => {
                // displaying cart on click
                setCartDisplay(true);
              }}
              className="p-3 relative rounded-full cursor-pointer hover:text-gray-500 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute text-sm text-white top-0 bg-red-500 p-1 px-2.5 rounded-full right-0">
                {cartItems.length}
              </span>
            </li>
          </div>
        </ul>
      </div>
      {
        //displaying cart if the state if true
        cartDisplay && <Cart setCartDisplay={setCartDisplay} />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Header;
