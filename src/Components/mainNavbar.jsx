import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import userDetails from "../Data/userDetails.json";
import "../Styles/NavBar.css";
import { CartContext } from "../context/CartContext";

const MainNavbar = () => {
    const { name, address } = userDetails.user;
    const { getTotalCartCount } = useContext(CartContext);
    return (
        <nav className="navbar">
            <div className="navbar-top">
                <a href="/" className="nav-logo">
                    <img src="/images/Navbar/amazon logo.png" alt="Amazon Logo" />
                </a>
                <div className="nav-location">
                    <SiGooglemaps size={20} className="location-icon" />
                    <div className="nav-location-text">
                        <span className="nav-text-small">Deliver to {name}</span>
                        <span className="nav-text-bold">{address.street}, {address.zip}</span>
                    </div>
                </div>
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
                <div className="nav-language">
                    <img src="/images/Navbar/india-flag.jpg" alt="India Flag" className="nav-flag" />
                    <span className="nav-lang-text">EN</span>
                    <IoMdArrowDropdown />
                </div>
                <div className="nav-account">
                    <span className="nav-text-small">Hello, {name}</span>
                    <span className="nav-text-bold">Account & Lists</span>
                </div>
                <div className="nav-orders">
                    <span className="nav-text-small">Returns</span>
                    <span className="nav-text-bold">& Orders</span>
                </div>
                <Link to="/cart" className="no-link-style">
                    <div className="nav-cart">
                        <FaShoppingCart size={24} />
                        <span className="cart-count">{getTotalCartCount()}</span>
                        <span className="cart-text">cart</span>
                    </div>
                </Link>

            </div>
        </nav>
    );
};
export default MainNavbar;