import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const navigate = useNavigate();

  const {
    cartItems,
    handleRemoveFromCart,
    setCartItems,
    setCartDisplay,
    setCartSubTotal,
  } = useContext(CartContext);

  // increased quantity
  const increment = (item) => {
    const updatedItems = [...cartItems];
    const index = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };

  //decreased quantity
  const decrement = (item) => {
    const updatedItems = [...cartItems];
    const index = updatedItems.findIndex((i) => i.id === item.id);
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setCartItems(updatedItems);
    }
  };

  const cartSubTotalValue = cartItems.reduce((subtotal, current) => {
    return (subtotal += current.price * current.quantity);
  }, 0);
  console.log(cartSubTotalValue);
  setCartSubTotal(cartSubTotalValue);

  return (
    <>
      {cartItems.map((item, index) => {
        return (
          <div key={index} className="cart-products flex-grow-[0]">
            <div className="cursor-pointer cart-product hover:bg-gray-100 px-5 py-4 flex gap-2">
              <div
                onClick={() => {
                  navigate(`products/${item.id}`);
                  setCartDisplay(false);
                }}
                className="img-wrapper bg-gray-200 w-16 h-16"
              >
                <img
                  loading="lazy"
                  className="w-full h-full"
                  src={item.img}
                  alt="cart item image"
                />
              </div>
              <div className="prod-detail overflow-hidden w-full relative">
                <span
                  onClick={() => {
                    navigate(`products/${item.id}`);
                    setCartDisplay(false);
                  }}
                  className="product-name text-ellipsis whitespace-nowrap overflow-hidden text-base leading-4 mb-2 font-semibold block pr-6"
                >
                  {item.description}
                </span>
                <span
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="absolute right-0 top-0 close-btn cursor-pointer w-fit items-center rounded-full text-teal-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div className="quantity-buttons flex gap-0.5 lg:justify-start pb-6">
                  <button
                    onClick={() => decrement(item)}
                    className="button dec p-1 px-3 bg-teal-600 hover:bg-teal-800 text-white active:scale-95 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="button val p-1 px-5 bg-teal-600 text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increment(item)}
                    className="button inc p-1 px-3 bg-teal-600 hover:bg-teal-800 text-white active:scale-95 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <div className="text flex items-center gap-2 text-sm font-semibold">
                  <span className="text-teal-800 text-base">
                    <span className="total text-black pr-2 text-sm">
                      Quantity:
                    </span>
                    {item.quantity}
                  </span>
                  <span className="text-teal-800 text-base">
                    <span className="total text-black pr-2 text-sm">
                      Total:
                    </span>
                    $ {item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartItem;
