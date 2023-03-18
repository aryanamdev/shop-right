import React, { useEffect, useState } from "react";
import { items } from "./AllData";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [randomObject, setRandomObject] = useState(
    items[Math.floor(Math.random() * items.length -1)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomObject(items[Math.floor(Math.random() * items.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero min-h-[80vh] bg-base-200 mb-10 ">
      <div className="hero-content p-8 flex-col lg:gap-28 lg:flex-row-reverse">
        <img
          src={randomObject.img}
          className="w-72 lg:w-96 lg:max-w-md rounded-lg mb-5 shadow-2xl"
        />
        <div className="flex flex-col lg:w-2/4">
          <h1 className=" text-3xl lg:text-5xl flex flex-col text-center lg:text-left font-bold gap-3 mb-6">
            Explore brand new
            <span className="text-teal-600">{randomObject.description}</span>
          </h1>
          <p className="text-ellipsis mb-6 hidden lg:block">
            {randomObject.specs}
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => {
                navigate(`/products/${randomObject.id}`);
              }}
              className="btn w-fit bg-teal-600 hover:bg-teal-800 text-white border-none"
            >
              Explore 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
