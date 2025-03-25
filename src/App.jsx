import NavBar from "./Components/navbar"
import Header from "./Components/Header"
import Banner from "./Components/banner"
import CartPage from "./Components/CartPage"
import CheckoutPage from "./Components/CheckoutPage"
import ProductCard from "./Components/ProductCard"
import ProductDetail from "./Components/ProductDetail"
import SignIn from "./Components/signin"
import SignUp from "./Components/signup"

import './Styles/style.css'

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
function App() {


  return (
    <div>     
      <NavBar />
      <Header />  
      <Banner />
    </div>
  )
}

export default App
