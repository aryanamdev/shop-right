import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeItem } = useContext(CartContext);

  const navigatetoHome = () => {
    navigate("/");
  };

  const totalPrice = cartItems.reduce(
    (total, current) => total + current.price,
    0
  );

  return (
    <div className="pt-28 w-full px-8 lg:px-24 pb-10">
      <div className="mx-auto">
        <h1 className="mx-auto text-center w-fit text-4xl uppercase font-bold text-accent font-sans p-4 rounded-md">
          My Cart 🛒
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-8 mt-10">
        {cartItems.length !== 0 ? (
          <div className="flex lg:w-1/2 flex-col gap-11 ">
            <h1 className="text-2xl tracking-wider mt-3 uppercase font-bold">
              Cart : {cartItems.length} Items
            </h1>
            {cartItems.map((val) => (
              <div
                key={val.id}
                id={val.id}
                className="p-6 justify-around cart-card flex gap-8 shadow-xl hover:shadow-2xl cursor-pointer rounded-lg"
              >
                <div className="h-36">
                  <img src={val.image} className="h-full object-cover" alt="" />
                </div>
                <div className="content w-2/3 flex flex-col gap-4">
                  <h1 className="text-xl w-fit">{val.title}</h1>
                  <h1 className="text-2xl font-semibold font-mono">
                    $ {val.price.toFixed(1)}
                  </h1>
                  <button
                    onClick={() => {
                      removeItem(val.id);
                    }}
                    className="p-2 bg-red-500 text-white font-medium rounded hover:bg-red-800 w-fit active:scale-95"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-1/2 flex flex-col gap-3 justify-center items-center">
            <h1 className="text-3xl tracking-wider uppercase font-bold">
              Cart is empty
            </h1>
            <button
              onClick={navigatetoHome}
              className="btn p-3 active:scale-95 text-white rounded-md bg-accent"
            >
              Continue Shopping
            </button>
          </div>
        )}
        <div className="lg:w-1/2">
          <h1
            className="text-2xl tracking-wider mt-3 
          mb-10 uppercase font-bold"
          >
            Cart Total :
          </h1>
          <div className="w-full p-7 bg-slate-200 rounded-md">
            <div className="flex w-full justify-between mb-2">
              <div>Total Amount</div>
              <div className="font-bold text-lg">$ {totalPrice.toFixed(2)}</div>
            </div>
            <div className="flex w-full justify-between">
              <div>Delivery Charges</div>
              <div className="font-bold text-lg">
                $ {totalPrice == 0 ? 0 : 10}
              </div>
            </div>
            <div className="w-full h-0.5 mt-4 bg-opacity-50 bg-black"></div>
            <div className="flex w-full justify-between mt-3">
              <div className="text-xl">Grand Total</div>
              <div className="font-bold text-2xl">
                $ {totalPrice.toFixed(0) + totalPrice == 0 ? 0 : 10}
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button className="px-8 w-full py-3 bg-accent text-white font-medium rounded hover:bg-slate-500 active:bg-slate-500 active:scale-95">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
