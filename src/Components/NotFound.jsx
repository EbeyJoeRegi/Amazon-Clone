import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

const errorImages = [
  "/images/404/1.png",
  "/images/404/2.png",
  "/images/404/3.png",
];

const NotFound = () => {
  const randomImage = errorImages[Math.floor(Math.random() * errorImages.length)];

  return (
    <div className="amazon-404-container">
      <div className="amazon-404-content">
        <img src={randomImage} alt="404 Not Found" className="amazon-404-image" />
        <h1 className="amazon-404-title">Looking for something?</h1>
        <p className="amazon-404-text">
          Sorry, we couldn’t find that page. Try searching or go back to the homepage.
        </p>
        <Link to="/" className="amazon-404-home-button">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
