import React, { useContext } from "react";

// components
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import TrendingSlider from "../components/TrendingSlider.jsx";
import Hero from "../components/Hero";

import { CartContext } from "../context/CartContext";

import { items } from "../components/AllData";

const Home = () => {
  const { search } = useContext(CartContext);
  // filtered items
  const filteredItems = items.filter((item) => {
    return item.description.toLowerCase().includes(search);
  });

  return (
    <>
      <Hero />
      <SearchBar />
      <div className="flex justify-center">
        <div className="px-8 flex flex-wrap  justify-center gap-14 mb-12">
          <ProductCard filteredItems={filteredItems} />
        </div>
      </div>
      <TrendingSlider />
      <Footer />
    </>
  );
};

export default Home;
