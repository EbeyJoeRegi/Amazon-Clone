import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Styles/CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.loc[0]} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Discounted Price: ${(item.price * (1 - item.discount / 100)).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
