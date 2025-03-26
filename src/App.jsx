import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./Components/navbar";
import Banner from "./Components/banner";
import { CartProvider } from "./context/CartContext";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import ProductCard from "./Components/ProductCard";
import ProductDetails from "./Components/ProductDetail";
import SignIn from "./Components/signin";
import SignUp from "./Components/signup";

import './Styles/style.css';

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {!isCheckoutPage && <NavBar />}
      {isHomePage && <Banner />}
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:categoryId/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
