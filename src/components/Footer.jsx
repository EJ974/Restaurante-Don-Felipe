import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* INFO */}
        <div className="footer-section">
          <h3>🍽️ Don Felipe</h3>
          <p>
            Comida casera, abundante y con sabor auténtico. 
            Te esperamos para que disfrutes de la mejor experiencia gastronómica.
          </p>
        </div>

        {/* HORARIOS */}
        <div className="footer-section">
          <h4>⏰ Horarios</h4>
          <p>Lunes a Viernes: 11:00 - 15:00 / 19:00 - 00:00</p>
          <p>Sábados y Domingos: 11:00 - 01:00</p>
        </div>

        {/* CONTACTO */}
        <div className="footer-section">
          <h4>📍 Contacto</h4>
          <p>Av. Principal 123</p>
          <p>Corrientes, Argentina</p>
          <p>📞 +54 379 4774418</p>
        </div>

        {/* REDES */}
            <div className="footer-section">
            <h4>📲 Seguinos</h4>

            <div className="socials">
            <a href="#" target="_blank">
                <FaInstagram />
                Instagram
            </a>

            <a href="#" target="_blank">
                <FaFacebook />
                Facebook
            </a>

            <a href="#" target="_blank">
                <FaWhatsapp />
                WhatsApp
            </a>
            </div>
            </div>

        </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 Don Felipe - Todos los derechos reservados</p>
      </div>

    </footer>
  );
}

export default Footer;