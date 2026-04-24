import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ReviewsPage from "./pages/ReviewsPage";
import Cart from "./components/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="app-container">

      {/* NAVBAR */}
      <Navbar cart={cart} setCartOpen={setCartOpen} />

      {/* CARRITO */}
      <Cart
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      {/* CONTENIDO */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/menu" element={<MenuPage cart={cart} setCart={setCart} />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/resenas" element={<ReviewsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;