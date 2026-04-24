import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./CheckoutPage.css";

function CheckoutPage() {
  const { state } = useLocation();

  const cart = state?.cart || [];

  // 🔥 FORMULARIO
  const [name, setName] = useState("");
  const [delivery, setDelivery] = useState("retiro");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("efectivo");

  // 🔥 AGRUPAR PRODUCTOS
  const grouped = cart.reduce((acc, item) => {
    const found = acc.find(p => p.name === item.name);
    if (found) {
      found.qty += item.qty || 1;
    } else {
      acc.push({ ...item, qty: item.qty || 1 });
    }
    return acc;
  }, []);

  // 🔥 TOTALES
  const subtotal = grouped.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = delivery === "envio" ? 1000 : 0;
  const total = subtotal + shipping;

  // 🔥 WHATSAPP
  const sendWhatsApp = () => {

    if (!name) {
      alert("Ingresá tu nombre");
      return;
    }

    if (delivery === "envio" && !address) {
      alert("Ingresá tu dirección");
      return;
    }

    const items = grouped
      .map(p => `🍽️ ${p.name} x${p.qty} - $${p.price * p.qty}`)
      .join("\n");

    const message =
`🛒 *NUEVO PEDIDO*

📋 *Detalle:*
${items}

👤 *Cliente:* ${name}
📦 *Tipo:* ${delivery}
📍 *Dirección:* ${delivery === "envio" ? address : "Retira en local"}

💳 *Pago:* ${payment}
${payment === "mercadopago" ? "💰 Alias: don-felipe97\n📸 Enviar comprobante" : ""}

💵 *Total:* $${total}`;

    const url = `https://wa.me/5493794774418?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  // 🔥 SI NO HAY PRODUCTOS
  if (!cart.length) {
    return <p style={{ textAlign: "center" }}>No hay productos en el carrito</p>;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-card">

        <h2>🧾 Confirmar pedido</h2>

        {/* 🛒 PRODUCTOS */}
        <div className="section">
          <h3>🍽️ Productos</h3>
          {grouped.map((item, i) => (
            <div className="item-row" key={i}>
              <span>{item.name} x{item.qty}</span>
              <span>${item.price * item.qty}</span>
            </div>
          ))}
        </div>

        {/* 📦 FORMULARIO */}
        <div className="section">
          <h3>📦 Datos</h3>

          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          >
            <option value="retiro">Retiro en local</option>
            <option value="envio">Envío a domicilio</option>
          </select>

          {delivery === "envio" && (
            <input
              type="text"
              placeholder="Tu dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="efectivo">Efectivo</option>
            <option value="mercadopago">Mercado Pago</option>
          </select>

          {payment === "mercadopago" && (
            <div className="mp-box">
              Alias: <strong>don-felipe97</strong><br />
              👉 Enviar comprobante
            </div>
          )}
        </div>

        {/* 💰 TOTALES */}
        <div className="section">
          <h3>💰 Totales</h3>
          <p>Subtotal: ${subtotal}</p>
          <p>Envío: ${shipping}</p>
          <h2>Total: ${total}</h2>
        </div>

        {/* BOTÓN */}
        <button className="btn-final" onClick={sendWhatsApp}>
          Confirmar pedido
        </button>

      </div>
    </div>
  );
}

export default CheckoutPage;