import React from "react";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  {
    image: Main1,
    category: "Furniture",
  },
  {
    image: Main2,
    category: "Skin Care",
  },
  {
    image: Main3,
    category: "Kitchen",
  },
  {
    image: Main4,
    category: "Electronics",
  },
];

export default function Hero() {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(`category/${category}`);
  };

  return (
    <div className="pt-36 w-full">
      <div className="px-8 flex flex-wrap gap-2 w-full justify-center">
        {categories.map((val, index) => (
          <Link to={`category/${val.category}`}>
            <div
              key={index}
              className="grid-item h-52 lg:h-96 w-96 lg:w-80 mb-10 relative z-[-10000]"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
