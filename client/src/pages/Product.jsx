import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Footer from "../components/Footer";

const Product = () => {
  const { id } = useParams();

  const item = items.filter((val) => {
    return val.id === parseInt(id);
  });
  return (
    <div className="pt-36">
      <div className="flex flex-col lg:flex-row justify-center px-8 gap-20 mb-12">
        <div className="image-holder h-96">
          <img className="object-cover w-full h-full" src={item[0].img} alt="" />
        </div>
        <div className="content lg:w-1/2 text-center lg:text-left w-full flex flex-col justify-center lg:justify-start">
          <h2 className="text-2xl font-semibold pb-4">{item[0].description}</h2>
          <p className="text-xl font-mono pb-8">$ {item[0].price}</p>
          <p className="text-gray-700 w-full px-10 lg:px-0 pb-7">
            {" "}
            {item[0].specs}
          </p>
          <p className="pb-5 text-lg">
            <span className="font-medium text-teal-600">Category :</span>{" "}
            {item[0].category}
          </p>
          <div className="quantity-buttons flex justify-center gap-1 lg:justify-start pb-6">
            <span className="button dec p-2 px-4 bg-teal-600 text-white active:scale-95 cursor-pointer">
              -
            </span>
            <span className="button val p-2 px-6 bg-teal-600 text-white">
              0
            </span>
            <span className="button inc p-2 px-4 bg-teal-600 text-white active:scale-95 cursor-pointer">
              +
            </span>
          </div>
          <button className="active:scale-95 p-2 mx-auto lg:mx-0 bg-white rounded sm text-teal-600 border-[1.8px] border-teal-600 w-fit font-semibold">
            Add To Cart 🛒
          </button>
        </div>
      </div>
      <TrendingSlider />
      <Footer />
    </div>
  );
};

export default Product;
