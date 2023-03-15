import React from "react";

export default function Cart({ setCartDisplay }) {
  return (
    <div className="cart-panel fixed top-0 l-0 w-[100%] h-full flex justify-end">
      <div className="opac-layer bg-[rgba(0,0,0,.5)] absolute top-0 w-full h-full"></div>
      <div className="cart-content w-full h-full lg:w-[340px] bg-white relative z-10 flex-col transition-item">
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
      </div>
    </div>
  );
}
