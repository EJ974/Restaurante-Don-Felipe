import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cart = [], setCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        <img src="/img/logo/donfelipe.png" alt="Don Felipe" />
      </Link>

      {/* HAMBURGUESA */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menú</Link></li>
        <li><Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
        <li><Link to="/galeria" onClick={() => setMenuOpen(false)}>Galería</Link></li>
        <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </ul>

      {/* CARRITO */}
      <div className="cart-nav" onClick={() => setCartOpen(prev => !prev)}>
        🛒 <span>{cart.length}</span>
      </div>

    </nav>
  );
}

export default Navbar;