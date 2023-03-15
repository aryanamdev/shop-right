import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";

import TrendingSlider from "../components/TrendingSlider.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center">
        <div className="px-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-14 mb-12">
          <ProductCard />
        </div>
      </div>
      <TrendingSlider />
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
      <Footer />
    </>
  );
};

export default Home;
