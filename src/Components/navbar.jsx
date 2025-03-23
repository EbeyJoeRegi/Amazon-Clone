import React from "react";
import userDetails from '../Data/userDetails.json';
import { SiGooglemaps } from "react-icons/si";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import '../styles/NavBar.css';  

const NavBar = () => {
    const { name, address } = userDetails.user;
    
    return (
        <nav className="navbar">
            <div>
                <a href="/">
                    <img src="images/Navbar/amazon logo.png" alt="Amazon Logo" />
                </a>

                <div>
                    <SiGooglemaps size={24} />
                    <div>
                        <small>Deliver to {name}</small>
                        <div>
                            {address.street}, {address.zip}
                        </div>
                    </div>
                </div>

                <form>
                    <input type="search" placeholder="Search Amazon.in" 
                        aria-label="Search" 
                    />
                    <button  type="submit">
                        <FaSearch />
                    </button>
                </form>

                <div>
                    <div>
                        <small>Hello, {name}</small>
                        <div>Account & Lists</div>
                    </div>
                    <div>
                        <small>Returns</small>
                        <div>& Orders</div>
                    </div>
                    <div>
                        <FaShoppingCart size={24} />
                        <div>Cart</div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <span>All</span>
                    <span>Today's Deals</span>
                    <span>Customer Service</span>
                    <span>Gift Cards</span>
                    <span>Registry</span>
                    <span>Sell</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
