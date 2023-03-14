import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  // Adding cart items to localstorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // adding items to cart
  const addItem = (item) => {
    const itemInCart = cartItems.find((cartitem) => cartitem.id === item.id);

    if (!itemInCart) {
      setCartItems((pre) => [...pre, item]);
    }else {
      return
    }

    console.log(itemInCart);
  };

  // removing item from cart
  const removeItem = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        search,
        handleSearch,
        category,
        setCategory,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
