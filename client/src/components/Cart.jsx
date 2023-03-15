import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart({ setCartDisplay }) {
  const navigate = useNavigate();
  return (
    <div className="cart-panel fixed top-0 l-0 w-[100%] h-full flex justify-end">
      <div
        onClick={() => {
          setCartDisplay(false);
        }}
        className="opac-layer bg-[rgba(0,0,0,.5)] absolute top-0 w-full h-full"
      ></div>
      <div className="cart-content w-full h-full lg:w-[340px] bg-white relative z-10 flex flex-col transition-item">
        <div className="cart-header flex items-center justify-between p-4 gap-3 border border-b-gray-400 text-lg uppercase">
          <h3 className="cursor-pointer font-semibold">Shopping Cart</h3>
          <span
            className="cursor-pointer items-center flex bg-teal-600 rounded-full text-white"
            onClick={() => {
              setCartDisplay(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        {/* <div className="flex flex-col items-center gap-3 mt-14 empty-cart">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 opacity-30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
          <span>No products in the cart</span>
          <button
            onClick={() => {
              setCartDisplay(false);
            }}
            className="rounded-sm btn hover:text-white hover:bg-teal-800 active:scale-95 bg-teal-600 p-2 text-white"
          >
            Continue Shopping
          </button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer border border-t-gray-400">
            <div className="subtotal flex justify-between px-5 py-4 border-b-gray-400">
              <span className="text mb-0 text-xl font-semibold uppercase">
                Subtotal:
              </span>
              <span className="text total font-medium text-teal-800">$ 1212 </span>
            </div>
            <div className="button px-5 py-4">
              <button className="rounded-sm w-full mx-auto btn hover:text-white hover:bg-teal-800 active:scale-95 bg-teal-600 p-2 text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
