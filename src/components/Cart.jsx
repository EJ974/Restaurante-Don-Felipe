import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, cartOpen, setCartOpen }) {

  const navigate = useNavigate();

  // 🔥 asegurar qty
  const updatedCart = cart.map(item => ({
    ...item,
    qty: item.qty || 1
  }));

  // 🔥 TOTAL GENERAL
  const total = updatedCart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ➕ SUMAR
  const increaseQty = (index) => {
    const newCart = [...updatedCart];
    newCart[index].qty += 1;
    setCart(newCart);
  };

  // ➖ RESTAR
  const decreaseQty = (index) => {
    const newCart = [...updatedCart];

    if (newCart[index].qty > 1) {
      newCart[index].qty -= 1;
    } else {
      newCart.splice(index, 1); // elimina si llega a 0
    }

    setCart(newCart);
  };

  // ❌ ELIMINAR
  const removeItem = (index) => {
    const newCart = updatedCart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <>
      {/* OVERLAY */}
      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}></div>
      )}

      <div className={`cart ${cartOpen ? "open" : ""}`}>

        <h3>🛒 Tu Pedido</h3>

        {updatedCart.length === 0 ? (
          <p className="empty">Carrito vacío</p>
        ) : (
          <ul className="cart-list">
            {updatedCart.map((item, i) => (
              <li key={i}>

                {/* NOMBRE */}
                <span className="item-name">{item.name}</span>

                {/* CONTROLES */}
                <div className="item-controls">
                  <button onClick={() => decreaseQty(i)}>➖</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(i)}>➕</button>
                </div>

                {/* PRECIO */}
                <span className="item-price">
                  ${item.price * item.qty}
                </span>

                {/* ELIMINAR */}
                <button
                  className="remove-btn"
                  onClick={() => removeItem(i)}
                >
                  ✖
                </button>

              </li>
            ))}
          </ul>
        )}

        {/* 🔥 TOTAL */}
        <div className="cart-total">
          <span>Total</span>
          <span>${total}</span>
        </div>

        {/* BOTONES */}
        <button
          className="btn-checkout"
          onClick={() => {
            setCartOpen(false);

            navigate("/checkout", {
              state: { cart } // 🔥 SOLO EL CARRITO
            });
          }}
        >
          Finalizar Pedido
        </button>

        <button
          className="btn-clear"
          onClick={() => setCart([])}
        >
          Vaciar carrito
        </button>

      </div>
    </>
  );
}

export default Cart;