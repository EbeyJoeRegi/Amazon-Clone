import React, { useState, useEffect } from "react";
import banners from "../Data/banner.json";
import ProductGrid from "./ProductGrid"
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import "../styles/Banner.css";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner-container">
            <button className="arrow left" onClick={prevSlide}><IoIosArrowBack /></button>
            <div className="banner-wrapper">
                <img src={banners[currentIndex].image} alt={`Banner ${currentIndex + 1}`} className="banner-image" />
                <div className="fade-overlay"></div>
            </div>
            <button className="arrow right" onClick={nextSlide}><IoIosArrowForward /></button>
             {/* Product Grid Positioned Below the Banner */}
             <div className="product-grid-overlay">
                <ProductGrid />
            </div>
        </div>
    );
};

export default Banner;