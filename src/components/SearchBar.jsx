import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function SearchBar() {
  const { search, setSearch } = useContext(CartContext);

  return (
    <div className="mb-8 flex justify-center">
      <input
        className="input input-bordered input-accent bg-gray-200 lg:w-1/4 
        rounded-md"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Product"
        type="text"
        name="search-bar"
        value={search}
        id="input"
      />
    </div>
  );
}
