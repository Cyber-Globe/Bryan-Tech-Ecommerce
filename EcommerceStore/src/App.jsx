// import React from "react";
// import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import ShopCategory from "./pages/ShopCategory";
import Navbar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ShopCategory />} />
      </Routes>
    </>
  );
}

export default App;
