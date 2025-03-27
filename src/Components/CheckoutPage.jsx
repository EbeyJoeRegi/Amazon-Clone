import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import userDetails from "../Data/userDetails.json";
import "../Styles/CheckoutPage.css";

const CheckoutPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const { name, address, cards } = userDetails.user;
    const itemsToCheckout = cart;
    const totalAmount = itemsToCheckout.reduce(
        (acc, item) => acc + (item.price * (1 - item.discount / 100)) * (item.quantity || 1),
        0
    ).toFixed(2);

    useEffect(() => {
        if (orderPlaced) {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setCart([]);
                        navigate("/");
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [orderPlaced, navigate, setCart]);

    const handlePayment = () => {
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="full-page-order">
                <h2>🎉 Order Placed Successfully!</h2>
                <p>Redirecting to home page in <b>{countdown}</b> seconds...</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            {/* Navbar */}
            <div className="checkout-navbar">
                <img 
                    src="/images/Navbar/amazon logo.png" 
                    alt="Amazon Logo" 
                    className="amazon-logo" 
                    onClick={() => navigate("/")} 
                    style={{ cursor: "pointer" }} 
                />
                <h2>Checkout</h2>
                <h2 className="secure-icon">🔒</h2>
            </div>

            <div className="checkout-grid">
                {/* Left Column */}
                <div className="left-column">
                    {/* Delivery Address */}
                    <div className="checkout-section address">
                        <h4>1. Delivery Address</h4>
                        <p>{name}</p>
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} - {address.zip}</p>
                    </div>
                    <hr />

                    {/* Payment Method */}
                    <div className="checkout-section">
                        <h4>2. Select a Payment Method</h4>
                        <div className="payment-methods">
                            {cards.map((card, index) => (
                                <div key={index}>
                                    <input type="radio" id={`card-${index}`} name="payment" />
                                    <label htmlFor={`card-${index}`}>
                                        {card.bank} ending in {card.last4}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />

                    {/* Items & Delivery */}
                    <div className="checkout-section">
                        <h4>3. Items & Delivery</h4>
                        <p className="delivery-date">
                            Estimated delivery date: {new Date().toDateString()}
                        </p>
                        <div className="cart-items">
                            {itemsToCheckout.map((item) => (
                                <div key={item.id} className="checkout-item">
                                    <img src={item.image || item.loc[0]} alt={item.name} className="checkout-item-img" />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>₹{(item.price * (1 - item.discount / 100)).toFixed(2)}</p>
                                        <p>Quantity : {(item.quantity)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="right-column">
                    <div className="order-summary">
                        <button className="payment-btn" onClick={handlePayment}>Use this payment method</button>
                        <h3>Order Summary</h3>
                        <div className="order-summary-details">
                            <p><span>Items:</span> <span>₹{totalAmount}</span></p>
                            <p><span>Delivery:</span> <span>--</span></p>
                            <hr />
                            <p><span>Order Total:</span> <span>₹{totalAmount}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
