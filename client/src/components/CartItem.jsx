import React from "react";
import { items } from "./AllData";

function CartItem() {
  return (
    <div className="cart-products flex-grow-[1] overflow-y-scroll">
      <div className="cart-product hover:bg-gray-100 px-5 py-4 flex gap-2">
        <div className="img-wrapper bg-[rgba(0,0,0,.5)] w-16 h-16">
          <img className="w-full h-full" src={items[0].img} alt="" />
        </div>
        <div className="prod-detail overflow-hidden w-full relative">
          <span className="product-name text-ellipsis whitespace-nowrap overflow-hidden text-base leading-4 mb-2 font-semibold block pr-6">
            {items[0].description}
          </span>
          <span className="absolute right-0 top-0 close-btn cursor-pointer w-fit items-center rounded-full text-teal-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div className="quantity-buttons flex gap-0.5 lg:justify-start pb-6">
            <span className="button dec p-1 px-3 bg-teal-600 hover:bg-teal-800 text-white active:scale-95 cursor-pointer">
              -
            </span>
            <span className="button val p-1 px-5 bg-teal-600 text-white">
              0
            </span>
            <span className="button inc p-1 px-3 bg-teal-600 hover:bg-teal-800 text-white active:scale-95 cursor-pointer">
              +
            </span>
          </div>
          <div className="text flex items-center gap-2 text-sm font-semibold">
            <span>3</span>
            <span>x</span>
            <span className="text-teal-800">$ 23480</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
