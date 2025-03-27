import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import productData from "../Data/productDetails.json";

import "../Styles/ProductCard.css";

const ProductCard = () => {
  const navigate = useNavigate();

  const carouselRefs = useRef([]);

  const scroll = (index, direction) => {
    const scrollContainer = carouselRefs.current[index];
    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="all-products">
      {productData.categories.map((category, index) => (
        <div key={category.id} className="product-section">
          <h2 className="product-heading">{category.heading}</h2>

          <div className="carousel-container">
            <FaChevronLeft className="PCarrow PCleft" onClick={() => scroll(index, "left")} />
            <div className="product-wrapper">
              <div
                className="product-list"
                ref={(el) => (carouselRefs.current[index] = el)}
              >
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="product-image-container"
                    onClick={() => navigate(`/product/${category.id}/${product.id}`)}
                  >
                    <img src={product.loc[0]} alt={product.name} className="product-image" />
                  </div>
                ))}
              </div>
            </div>
            <FaChevronRight className="PCarrow PCright" onClick={() => scroll(index, "right")} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
