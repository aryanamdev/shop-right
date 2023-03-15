import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
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
          className="flex flex-col w-80 border-gray-300 hover:border-black border-2 cursor-pointer "
        >
          <div className="flex justify-center">
            <img
              loading="lazy"
              src={val.img}
              className="object-cover h-60"
              alt=""
            />
          </div>
          <div className="p-4 flex flex-col gap-3">
            <h1 className="text-xl">{val.description}</h1>
            <p className="text-2xl font-semibold font-mono">$ {val.price}</p>
            <p className=" h-16 overflow-y-scroll text-gray-600 text-sm">
              {val.specs}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
