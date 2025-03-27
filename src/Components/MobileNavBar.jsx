import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import userDetails from "../Data/userDetails.json";
import { CartContext } from "../context/CartContext";
import ThemeSwitcher from "./ThemeSwitcher"; 
import "../Styles/NavBar.css";
import Header from "./Header";

const MobileNavBar = () => {
    const { name, address } = userDetails.user;
    const { getTotalCartCount } = useContext(CartContext); 
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim().length > 0) {  
            navigate(`/search-results/${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div>
            {/* Top Navbar */}
            <div className={`navbar-top mobile-nav`}>
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

            {/* Search Bar */}
            <div className="nav-search-container">
                <form className="nav-search" onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="Search Amazon.in"
                        className="nav-search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="nav-search-btn" type="submit">
                        <FaSearch />
                    </button>
                </form>
            </div>

            <Header />

            {/* Location Bar with Theme Switcher on Right */}
            <div className="nav-location-bar mobile-nav">
                <SiGooglemaps size={20} className="location-icon" />
                <span>Deliver to {name} {address.street}-{address.zip}</span>
                <ThemeSwitcher type="mobile" />
            </div>
        </div>
    );
};

export default MobileNavBar;
