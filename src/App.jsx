import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import NavBar from "./Components/navbar";
import Banner from "./Components/banner";
import { CartProvider, CartContext } from "./context/CartContext";
import CartPage from "./Components/CartPage";
import NotFound from "./Components/NotFound";
import CheckoutPage from "./Components/CheckoutPage";
import ProductCard from "./Components/ProductCard";
import ProductDetails from "./Components/ProductDetail";
import SearchResults from "./Components/SearchResults";
import { ThemeProvider } from "./context/ThemeContext";
import SignIn from "./Components/signin";
import SignUp from "./Components/signup";

import './Styles/style.css';

function ProtectedCheckout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/"); 
    }
  }, [cart, navigate]);

  return cart.length > 0 ? <CheckoutPage /> : null;
}

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";
  const isAuthPage = location.pathname === "/signIn" || location.pathname === "/signUp";  // Add condition for signIn and signUp

  return (
    <>
      {!isCheckoutPage && !isAuthPage && <NavBar />} {/* Render NavBar only if it's not on checkout or auth pages */}
      {isHomePage && <Banner />}
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:categoryId/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<ProtectedCheckout />} />
        <Route path="/search-results/:query" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
    <CartProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </CartProvider>
    </ThemeProvider>
  );
}

export default App;
