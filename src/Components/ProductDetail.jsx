import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import productData from "../Data/productDetails.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/ProductDetails.css";
import { LuMapPin } from "react-icons/lu";
import userDetails from "../Data/userDetails.json";

const icons = [
  { src: "/icons/Replacement.png", alt: "Replacement", text: "7 days service centre replacement" },
  { src: "/icons/Free Delivery.png", alt: "Free Delivery", text: "Free Delivery" },
  { src: "/icons/1 Year Warranty.png", alt: "Warranty", text: "1 Year Warranty" },
  { src: "/icons/Pay on Delivery.png", alt: "Pay on Delivery", text: "Pay on Delivery" },
  { src: "/icons/Top Brand.png", alt: "Top Brand", text: "Top Brand" },
  { src: "/icons/Installation available.png", alt: "Installation", text: "Installation Available" }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      <span className="rating-value">{rating.toFixed(1)}</span>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="star full-star" />
      ))}
      {halfStar && <FaStarHalfAlt className="star half-star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="star empty-star" />
      ))}
    </div>
  );
};

const offers = [
  { title: "Bank Offer", text: "Get ₹1,500 off on ICICI Credit Cards" },
  { title: "Exchange Offer", text: "Upto ₹5,000 off on old devices" },
  { title: "Partner Offer", text: "Extra 5% off on Amazon Pay" },
  { title: "Limited Offer", text: "₹2,000 cashback on HDFC Cards" },
  { title: "Special Discount", text: "Extra ₹500 on first order" },
  { title: "Combo Offer", text: "Buy 2, Get 5% Off" },
];



const ProductDetails = () => {
  const { address } = userDetails.user;
  const { categoryId, productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const category = productData.categories.find((cat) => cat.id.toString() === categoryId);
  const product = category?.products.find((prod) => prod.id.toString() === productId);

  const [selectedImage, setSelectedImage] = useState(product?.loc[0]);

  const offersContainerRef = React.useRef(null);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleNext = () => {
    if (offersContainerRef.current) {
      offersContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (offersContainerRef.current) {
      offersContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Left Section (40% Width) */}
        <div className="left-section">
          <div className="thumbnail-list">
            {product.loc.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
        </div>

        {/* Middle Section (40% Width) */}
        <div className="middle-section">
          <h2 className="product-title">{product.name}</h2>
          <p className="brand">Brand: <strong>{product.brand}</strong></p>

          {/* Rating with Stars */}
          <div className="rating-section">
            {renderStars(product.rating)}
          </div>

          <hr /> {/* Horizontal line separator */}

          {/* Limited Time Deal */}
          <div className="limited-deal">Limited Time Deal</div>

          {/* Pricing Section */}
          <div className="price-section">
            <span className="discount">-{product.discount}% </span>
            <span className="discounted-price">₹{discountedPrice}</span>
            <span className="original-price">M.R.P: <s>₹{product.price.toFixed(2)}</s></span>
            <p className="tax-info">Inclusive of all taxes</p>
            <p className="emi-info">EMI starts at ₹506. No Cost EMI available</p>
          </div>

          <hr /> {/* Horizontal line separator */}

          {/* Offers */}
          <div className="offers-section">
            {/* Offers Heading */}
            <div className="offers-header">
              <img src="/icons/offers.png" alt="Offers" className="offers-icon" />
              <h3 className="offers-heading">Offers</h3>
            </div>

            {/* Offers Carousel */}
            <div className="offers-carousel">
              <FaChevronLeft className="PDarrow PDleft-arrow" onClick={handlePrev} />
              <div className="offers-container" ref={offersContainerRef}>
                {offers.map((offer, index) => (
                  <div key={index} className="offer-box">
                    <h4 className="offer-title">{offer.title}</h4>
                    <p className="offer-text">{offer.text}</p>
                  </div>
                ))}
              </div>
              <FaChevronRight className="PDarrow PDright-arrow" onClick={handleNext} />
            </div>
          </div>

          <hr /> {/* Horizontal line separator */}

          {/* Icons Row */}
          <div className="info-icons-container">
            <div className="info-icons">
              {icons.map((item, index) => (
                <div key={index} className="info-item">
                  <img src={item.src} alt={item.alt} />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Extreme Right - Add to Cart) */}
        <div className="right-section">
          <div className="purchase-box">
            <p className="price">
              <span className="final-price">₹{discountedPrice}</span>
              <s className="original-price"> ₹{product.price.toFixed(2)}</s>
            </p>


            <p className="free-delivery">
              FREE delivery <strong>Friday, 11 April.</strong>
            </p>

            <p className="fast-delivery">
              Or fastest delivery <strong>Monday, 7 March.</strong> Order within
              <span className="timer"> 13 hrs 50 mins</span>.
            </p>

            <p className="location">
              <LuMapPin /> Delivering to <strong>{address.street} {address.zip}</strong>
            </p>

            <p className="stock-status">In stock</p>
            <div className="transaction">
              <p>
                <span className="label">Payment</span> <span className="value">Secure transaction</span>
              </p>
              <p>
                <span className="label">Ships from</span> <span className="non-value">Amazon</span>
              </p>
              <p>
                <span className="label">Sold by</span> <span className="value">Clicktech Retail Private Ltd</span>
              </p>
            </div>

            <div className="quantity-container">
              <label htmlFor="quantity" className="quantity-label">Quantity:</label>
              <div className="custom-select">
                <select id="quantity" className="quantity-select">
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="buy-now">Buy Now</button>

            <label className="gift-option">
              <input type="checkbox" /><p className="gift">Add gift options</p>
            </label>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProductDetails;
