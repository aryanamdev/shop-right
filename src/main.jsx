import React from "react";
import ReactDOM from "react-dom/client";
import CartContextProvider from "./context/CartContext.jsx";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
