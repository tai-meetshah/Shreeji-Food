import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="restaurant-menu">
      <div className="menu-title">
        {cartItems.length === 0 && (
          <h2>Your cart is empty, Add some items to the cart 🛒.</h2>
        )}
        {cartItems.length > 0 && (
          <>
            <ItemList items={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
