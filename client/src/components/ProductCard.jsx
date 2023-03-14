import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import SkeletonCard from "./skeletons/SkeletonCard.jsx";
import { items } from "./AllData.js";

export default function ProductCard() {
  const { addItem, search, category } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  return (
    <>
      {items.map((val) => (
        <div
          onClick={() => {
            navigate(`/products/${val.id}`);
          }}
          key={val.id}
          id={val.id}
          className="flex flex-col w-80 shadow-xl hover:shadow-2xl cursor-pointer rounded-lg"
        >
          <div className="flex justify-center">
            <img
              loading="lazy"
              src={val.img}
              className="object-cover h-60"
              alt=""
            />
          </div>
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-xl">{val.description}</h1>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold font-mono">$ {val.price}</p>
              <button
                onClick={() => addItem(val)}
                className="p-2 bg-accent text-white font-medium rounded hover:bg-slate-500 active:bg-slate-500 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
            <p className=" h-16 overflow-y-scroll text-gray-600 text-sm">
              {val.specs}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
