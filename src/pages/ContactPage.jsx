import "../components/Contact.css";

function ContactPage() {
  return (
    <section className="contact" id="contacto">

      <div className="contacto-header">
        <img
          src="./img/contacto/contacto.webp"
          alt="Nuestro Menú"
          className="contacto-title-img"
        />
      </div>
      <div className="contact-container">

        {/* INFO */}
        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Dirección</h3>
            <p>Av. Principal 123, Corrientes, Argentina</p>
          </div>

          <div className="info-box">
            <h3>🕒 Horarios</h3>
            <ul>
              <li>Lunes - Miércoles: 12:00 - 23:00</li>
              <li>Jueves: 12:00 - 00:00</li>
              <li>Viernes - Sábado: 12:00 - 01:00</li>
              <li>Domingo: 12:00 - 23:00</li>
            </ul>
          </div>

          <a
            href="https://wa.me/5493794774418?text=Hola, quiero hacer una consulta"
            target="_blank"
            className="btn-whatsapp"
          >
            💬 Consultar por WhatsApp
          </a>

        </div>

        {/* MAPA */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Corrientes,Argentina&output=embed"
            title="mapa"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default ContactPage;