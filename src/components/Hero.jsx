import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1550547660-d9450f859349",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
];

function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // 🔥 CAMBIO AUTOMÁTICO
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[current]})`
      }}
    >
      <div className="hero-overlay">

        <div className="hero-content">
          <h1 className="hero-title">🍽️ Don Felipe</h1>

          <p className="hero-subtitle">
            La mejor comida casera de Corrientes
          </p>

          <div className="hero-info">
            <span>⭐ +500 clientes</span>
            <span>🚚 Envíos rápidos</span>
            <span>🔥 Abierto ahora</span>
          </div>

          <div className="hero-buttons">
            <button
              className="btn-secondary"
              onClick={() => navigate("/menu")}
            >
              Ver menú
            </button>

            <button
              className="btn-primary"
              onClick={() => navigate("/menu")}
            >
              Pedir ahora
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;