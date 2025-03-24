import React from "react";
import userDetails from '../Data/userDetails.json';
import { SiGooglemaps } from "react-icons/si";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
    const { name, address } = userDetails.user;
    
    return (
        <nav className="navbar">
            {/* Top Navbar */}
            <div className="navbar-top">
                {/* Logo */}
                <a href="/" className="nav-logo">
                    <img src="images/Navbar/amazon logo.png" alt="Amazon Logo" />
                </a>

                {/* Location */}
                <div className="nav-location">
                    <SiGooglemaps size={20} className="location-icon" />
                    <div className="nav-location-text">
                        <span className="nav-text-small">Deliver to {name}</span>
                        <span className="nav-text-bold">{address.street}, {address.zip}</span>
                    </div>
                </div>

                {/* Search Bar */}
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

                {/* Language Selector */}
                <div className="nav-language">
                    <img src="images/Navbar/india-flag.jpg" alt="India Flag" className="nav-flag" />
                    <span className="nav-lang-text">EN</span>
                    <IoMdArrowDropdown />
                </div>

                {/* Account */}
                <div className="nav-account">
                    <span className="nav-text-small">Hello, {name}</span>
                    <span className="nav-text-bold">Account & Lists</span>
                </div>

                {/* Orders */}
                <div className="nav-orders">
                    <span className="nav-text-small">Returns</span>
                    <span className="nav-text-bold">& Orders</span>
                </div>

                {/* Cart */}
                <div className="nav-cart">
                    <FaShoppingCart size={24} />
                    <span className="cart-text">Cart</span>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;
