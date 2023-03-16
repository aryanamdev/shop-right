import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const {
    cartItems,
    setCartItems,
    setCartCount,
    handleRemoveFromCart,
    setCartDisplay,
  } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const item = items.filter((val) => {
    return val.id === parseInt(id);
  });

  // new Item with quantity
  const newItem = {
    id: item[0].id,
    description: item[0].description,
    img: item[0].img,
    price: item[0].price,
    quantity: quantity,
    category: item[0].category,
    specs: item[0].specs,
    otherimgs: item[0].otherImgs,
  };

  console.log(newItem.otherimgs);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.id === parseInt(newItem.id)
    );
    if (existingItem) {
      return;
    } else {
      setCartItems([...cartItems, newItem]);
    }
    setQuantity(1);
    setCartDisplay(true);
  };

  const increment = () => {
    !existingItem && setQuantity(quantity + 1);
  };
  const decrement = () => {
    !existingItem && quantity > 1 && setQuantity(quantity - 1);
  };

  const existingItem = cartItems.find(
    (item) => item.id === parseInt(newItem.id)
  );

  return (
    <div className="pt-24 lg:pt-36">
      <div className="flex flex-col lg:flex-row justify-center px-8 gap-20 mb-12">
        <div className="image-holder gap-8 flex flex-col lg:flex-row h-96">
          <img
            className="object-cover w-full h-full"
            src={newItem.img}
            alt=""
          />
          <div className="flex flex-row lg:flex-col justify-center other-imgs gap-10">
            <div className="w-36 h-44">
              <img className="w-full h-full object-cover aspect-square" src={newItem.otherimgs[0]} alt="image" />
            </div>
            <div className="w-36 h-44">
              <img className="w-full h-full object-cover aspect-square" src={newItem.otherimgs[1]} alt="image" />
            </div>
          </div>
        </div>
        <div className="content mt-40 lg:mt-0 lg:w-1/2 text-center lg:text-left w-full flex flex-col justify-center lg:justify-start">
          <h2 className="text-2xl font-semibold pb-4">{newItem.description}</h2>
          <p className="text-xl font-mono pb-8">$ {newItem.price}</p>
          <p className="text-gray-700 w-full px-10 lg:px-0 pb-7">
            {newItem.specs}
          </p>
          <p className="pb-5 text-lg">
            <span className="font-medium pr-2 text-teal-600">Category:</span>
            {newItem.category.charAt(0).toUpperCase() +
              newItem.category.slice(1, newItem.category.length)}
          </p>
          <div className="quantity-buttons flex justify-center gap-1 lg:justify-start pb-6">
            <span
              onClick={decrement}
              className="button dec p-2 px-4 bg-teal-600 hover:bg-teal-800 text-white active:scale-95 cursor-pointer"
            >
              -
            </span>
            <span className="button val p-2 px-6 bg-teal-600 text-white">
              {quantity}
            </span>
            <span
              onClick={increment}
              className="button inc p-2 px-4 bg-teal-600 hover:bg-teal-800 text-white active:scale-95 cursor-pointer"
            >
              +
            </span>
          </div>
          {!existingItem ? (
            <button
              onClick={handleAddToCart}
              className="active:scale-95 p-2 mx-auto lg:mx-0 bg-white rounded sm text-teal-600 border-[1.8px] border-teal-600 hover:border-teal-800 hover:text-teal-800 w-fit font-semibold"
            >
              Add To Cart 🛒
            </button>
          ) : (
            <button
              onClick={() => handleRemoveFromCart(newItem.id)}
              className="active:scale-95 p-2 mx-auto lg:mx-0 bg-white rounded sm text-red-600 border-[1.8px] border-red-600 hover:border-red-800 hover:text-red-800 w-fit font-semibold"
            >
              Remove from cart 🛒
            </button>
          )}
        </div>
      </div>
      <TrendingSlider />
      <Footer />
    </div>
  );
};

export default Product;
