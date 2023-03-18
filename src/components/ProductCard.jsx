import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { HiOutlineEmojiSad } from "react-icons/hi";

export default function ProductCard({ filteredItems }) {
  let navigate = useNavigate();
  const { search } = useContext(CartContext);

  return (
    <>
      {filteredItems.length !== 0 ? (
        filteredItems.map((val) => (
          <div
            onClick={() => {
              // navigation to product page on click using the ID
              navigate(`/products/${val.id}`);
              window.scroll(0, 0);
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
                alt="product card image"
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <h1 className="text-xl">{val.description}</h1>
              <div className="price flex gap-5 items-center">
                <p className="text-2xl font-semibold font-mono">
                  $ {val.price}
                </p>
              </div>
              <p className=" h-16 overflow-y-scroll text-gray-600 text-sm">
                {val.specs}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-20 w-full flex justify-center">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="flex text-3xl gap-2 font-medium justify-center items center ">
              Sorry <HiOutlineEmojiSad />
            </h2>
            <h2 className="text-center flex items-center text-xl ">
              no items related to
              <span className="text-teal-700 font-bold">"{search}"</span>
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
