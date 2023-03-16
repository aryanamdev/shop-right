import React, { useEffect, useState } from "react";
import { items } from "./AllData";

export default function Hero() {
  return (
    <div className="pt-36 w-full">
      <div className="px-8 flex flex-wrap gap-2 lg:gap-6 w-full justify-center">
        {/* {categories.map((val, index) => (
          <div
            key={index}
            className="grid-item h-40 lg:h-96 w-96 lg:w-80 mb-10 relative z-[-10000]"
          >
            <img
              loading="lazy"
              src={val.image}
              className="object-cover object-top w-full h-full"
              alt=""
            />
            <div className="position overlay absolute h-full w-full bg-black bg-opacity-40 hover:opacity-80 top-0"></div>
            <p className="absolute bottom-10 left-8 font-bold text-3xl z-10 text-white">
              {val.category}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
