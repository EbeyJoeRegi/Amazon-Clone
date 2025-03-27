import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import productData from "../Data/productDetails.json";
import "../Styles/SearchResults.css";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="search-results-star filled" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="search-results-star filled" />);
    } else {
      stars.push(<FaRegStar key={i} className="search-results-star" />);
    }
  }

  return stars;
};

const SearchResults = () => {
  const { query } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [uniqueBrands, setFilteredBrands] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [queryID, setQeryID] = useState(-1);

  useEffect(() => {
    if (!query) return;

    const matchedCategory = productData.categories.find(
      (category) => category.name.toLowerCase() === query.toLowerCase()
    );

    if (matchedCategory) {
      setQeryID(matchedCategory.id);
      setProducts(matchedCategory.products);
      setFilteredBrands([...new Set(matchedCategory.products.map((p) => p.brand))]);
    } else {
      setProducts([]);
      setFilteredBrands([]);
    }
  }, [query]);
  

  const handleSortChange = (option) => {
    let sortedProducts = [...products];
    if (option === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "featured") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setSortOption(option);
    setProducts(sortedProducts);
  };

  const handleBrandChange = (brand) => {
    let updatedBrands = [...selectedBrands];
    if (updatedBrands.includes(brand)) {
      updatedBrands = updatedBrands.filter((b) => b !== brand);
    } else {
      updatedBrands.push(brand);
    }
    setSelectedBrands(updatedBrands);
    filterProducts(updatedBrands);
  };

  const filterProducts = (brands) => {
    if (!query) return;

    const matchedCategory = productData.categories.find(
      (category) => category.name.toLowerCase() === query.toLowerCase()
    );

    if (matchedCategory) {
      let filteredProducts = matchedCategory.products;
      if (brands.length > 0) {
        filteredProducts = filteredProducts.filter((product) => brands.includes(product.brand));
      }
      setProducts(filteredProducts);
    }
  };

  // Function to handle navigation to product details page
  const goToProductDetails = (categoryId, productId) => {
    navigate(`/product/${categoryId}/${productId}`);
  };

  if (products.length === 0) {
    return (
      <div className="no-results">
        <h2>No search results found</h2>
        <p>Try searching for another category.</p>
      </div>
    );
  }

  return (
    <div className="search-results-container">
      {/* Filters Section */}
      <div className="search-results-filters">
        <h3>Sort By</h3>
        <select onChange={(e) => handleSortChange(e.target.value)} value={sortOption}>
          <option value="">Select</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="featured">Featured</option>
        </select>

        <h3>Filter by Brand</h3>
        <div className="brand-filter-container">
          {uniqueBrands.map((brand, index) => (
            <div key={index} className="brand-filter-row">
              <label className="brand-label">{brand}</label>
              <input
                type="checkbox"
                value={brand}
                onChange={() => handleBrandChange(brand)}
                checked={selectedBrands.includes(brand)}
                className="brand-checkbox"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="search-results-list">
        {products.map((product) => (
          <div key={product.id} className="search-results-card">
            {/* Left: Product Image - Click to Navigate */}
            <div
              className="search-results-image"
              onClick={() => goToProductDetails(queryID, product.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={product.loc[0]} alt={product.name} />
            </div>

            {/* Right: Product Details */}
            <div className="search-results-info">
              <h3
                className="search-results-title"
                onClick={() => goToProductDetails(queryID, product.id)}
                style={{ cursor: "pointer", color: "black" }} // Makes title clickable
              >
                {product.name}
              </h3>

              {/* ⭐ Star Rating */}
              <div className="search-results-rating">
                <div className="search-results-stars">{renderStars(product.rating)}</div>
                <span> {product.rating}</span>
              </div>

              <p>5K+ bought in past month</p>
              <div className="search-results-price-section">
                <span className="search-results-disc">
                  ₹{(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="search-results-price">M.R.P: ₹{product.price}</span>
                <span className="search-results-discount">({product.discount}% off)</span>
              </div>

              <p>No Cost EMI available on select cards.</p>
              <p className="search-results-prime">
                ✔ Prime FREE delivery by {new Date(new Date().setDate(new Date().getDate() + 1)).toDateString()}
              </p>

              <button className="search-results-add-to-cart" onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
