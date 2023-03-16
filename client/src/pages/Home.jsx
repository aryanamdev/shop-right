import React from "react";

// components
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
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
      <Footer />
    </>
  );
};

export default Home;
