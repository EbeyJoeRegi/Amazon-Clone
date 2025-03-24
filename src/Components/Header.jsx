import { FaBars } from 'react-icons/fa';
import userDetails from '../Data/userDetails.json'; 

const Header = () => {    
    const { name } = userDetails.user;

    return (
        <nav className="navbar">
            <div className="navbar-bottom">
                <span className="nav-item">
                    <FaBars className="hamburger-icon" /> All
                </span>
                <span className="nav-item">Fresh</span>
                <span className="nav-item">Amazon Pay</span>
                <span className="nav-item">Today's Deals</span>
                <span className="nav-item">Gift Cards</span>
                <span className="nav-item">Customer Service</span>
                <span className="nav-item">Keep Shopping for</span>
                <span className="nav-item">Buy Again</span>
                <span className="nav-item">MX Player</span>
                <span className="nav-item">Sell</span>
                <span className="nav-item">AmazonBasics</span>
                <span className="nav-item">Health, Household & Personal Care</span>
                <span className="nav-item">Browsing History</span>
                <span className="nav-item">{name}'s Amazon.in</span>
            </div>
        </nav>
    )
}

export default Header;
