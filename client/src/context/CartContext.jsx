import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {
  // cart items
  const [cartItems, setCartItems] = useState([]);
  // cart count
  const [cartCount, setCartCount] = useState(0);
  // cart sub total
  const [cartSubTotal, setCartSubTotal] = useState(0);
  // onclick display of cart
  const [cartDisplay, setCartDisplay] = useState(false);
  // search
  const [search, setSearch] = useState("");

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

  // Removing from cart
  const handleRemoveFromCart = (id) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== id);
    setCartItems(items);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        search,
        setSearch,
        cartSubTotal,
        setCartSubTotal,
        cartDisplay,
        setCartDisplay,
        handleRemoveFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
