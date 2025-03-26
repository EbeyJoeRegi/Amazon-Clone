import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import userDetails from "../Data/userDetails.json";
import { CartContext } from "../context/CartContext";
import "../Styles/NavBar.css";
import Header from "./Header";

const MobileNavBar = () => {
    const { name, address } = userDetails.user;
    const { getTotalCartCount } = useContext(CartContext);

    return (
        <>
            <div className="navbar-top">
                <div className="nav-left">
                    <a href="/" className="nav-logo">
                        <img src="/images/Navbar/amazon logo.png" alt="Amazon Logo" />
                    </a>
                </div>
                <div className="nav-right">
                    <div className="nav-user">Hi, {name}</div>
                    <Link to="/cart" className="no-link-style">
                        <div className="nav-cart">
                            <FaShoppingCart size={24} />
                            <span className="cart-count">{getTotalCartCount()}</span>
                            <span className="cart-text">cart</span>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="nav-search-container">
                <div className="nav-search">
                    <select className="nav-search-category">
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Books</option>
                    </select>
                    <input type="search" placeholder="Search Amazon.in" className="nav-search-input" />
                    <button className="nav-search-btn">
                        <FaSearch />
                    </button>
                </div>
            </div>
            <Header />
            <div className="nav-location-bar">
                <SiGooglemaps size={20} className="location-icon" />
                <span>Deliver to {name} {address.street}-{address.zip}</span>
            </div>
        </>
    );
};

export default MobileNavBar;