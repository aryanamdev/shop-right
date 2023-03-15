import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

import TrendingSlider from "../components/TrendingSlider.jsx";

const Home = () => {
  const { search, handleSearch, setCategory } = useContext(CartContext);

  return (
    <>
      <Hero />
      <div className="flex justify-center mb-12 ">
        <input
          className="p-3 lg:w-3/12 text-black rounded-md bg-gray-200"
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Product"
        />
      </div>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-14">
          <ProductCard />
        </div>
      </div>
      <div className="p-12 flex justify-center">
        <button
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="mx-auto p-4 font-medium text-lg uppercase 
           shadow-sm active:scale-95 text-white rounded-md bg-teal-600"
        >
          Jump To Top
        </button>
      </div>
      <TrendingSlider />
    </>
  );
};

export default Home;
