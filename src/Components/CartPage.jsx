import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Styles/CartPage.css";
import { SlTrash } from "react-icons/sl";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Header Section */}
        <div className="cart-header">
          <h2 className="cart-title">Shopping Cart</h2>
          <p className="cart-price-header">Price</p>
        </div>
        <hr />

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Product Image */}
              <img src={item.loc[0]} alt={item.name} className="cart-item-img" />

              {/* Product Details */}
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-stock">In stock</p>
                <p className="cart-item-shipping">Eligible for FREE Shipping</p>


                {/* Quantity & Actions */}
                <div className="cart-item-quantity-actions">
                  <div className="cart-item-quantity">
                    {item.quantity > 1 ? (
                      <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    ) : (
                      <button className="quantity-btn delete-btn" onClick={() => removeFromCart(item.id)}>
                        <SlTrash />
                      </button>
                    )}
                    <span className="quantity-count">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>

                  {/* Action Links */}
                  <div className="cart-item-actions">
                    <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
                    <button className="save-btn">Save for later</button>
                    <button className="see-more-btn">See more like this</button>
                    <button className="share-btn">Share</button>
                  </div>
                </div>

              </div>

              {/* Product Price */}
              <p className="cart-item-discounted-price">₹{(item.price * (1 - item.discount / 100)).toFixed(2)}</p>
            </div>
          ))
        )}

        {/* Subtotal Section */}
        <div className="subtotal-section">
          <p>Subtotal ({cart.length} items): <strong>₹{cart.reduce((acc, item) => acc + (item.price * (1 - item.discount / 100)) * item.quantity, 0).toFixed(2)}</strong></p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="cart-summary">
        <p>Subtotal ({cart.length} items): <strong>₹{cart.reduce((acc, item) => acc + (item.price * (1 - item.discount / 100)) * item.quantity, 0).toFixed(2)}</strong></p>
        <button className="checkout-btn">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default CartPage;
