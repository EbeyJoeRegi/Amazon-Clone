import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/navbar";
import Banner from "./Components/banner";
import { CartProvider } from "./context/CartContext";
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

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";
  const isAuthPage = location.pathname === "/signIn" || location.pathname === "/signUp";

  return (
    <>
      {!isCheckoutPage && !isAuthPage && <NavBar />}
      {isHomePage && <Banner />}
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:categoryId/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
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
