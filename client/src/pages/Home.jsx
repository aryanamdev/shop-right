import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { search, handleSearch, setCategory } = useContext(CartContext);

  return (
    <>
      <div className="pt-36 flex justify-center mb-12">
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
           shadow-sm active:scale-95  rounded-md bg-emerald-200"
        >
          Jump To Top
        </button>
      </div>
    </>
  );
};

export default Home;
