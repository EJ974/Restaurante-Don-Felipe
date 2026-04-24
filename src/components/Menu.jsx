import { useState } from "react";
import "./Menu.css";
import productosData from "../data/products";

function Menu({ cart, setCart }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [imagenActiva, setImagenActiva] = useState(null);

  const categorias = [
  "Todos",
  "Promociones",
  "Especiales del día",
  "Pizzas",
  "Empanadas",
  "Canastas",
  "Hamburguesas",
  "Lomitos",
  "Milanesas",
  "Papas",
  "Tartas",
  "Calzones",
  "Pastas",
  "Ensaladas",
  "Picadas",
  "Bebidas sin alcohol",
  "Bebidas con alcohol"
];

  const productos =
    categoriaActiva === "Todos"
      ? productosData
      : productosData.filter((p) => p.categoria === categoriaActiva);

  const addToCart = (plato) => {
    setCart([...cart, { name: plato.nombre, price: plato.precio }]);
  };

  return (
    <section className="menu">

      <div className="menu-header">
        <img
          src="./img/menu/menu.png"
          alt="Nuestro Menú"
          className="menu-title-img"
        />
      </div>

      {/* CATEGORÍAS */}
      <div className="categorias-scroll">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${categoriaActiva === cat ? "active" : ""}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTOS */}
      <div className="menu-grid fade">
        {productos.map((plato, i) => (
          <div className="card" key={i}>

            {plato.etiqueta && (
              <span className="badge">{plato.etiqueta}</span>
            )}

            {/* 🔥 CLICK PARA VER IMAGEN */}
            <img
              src={plato.imagen}
              alt={plato.nombre}
              onClick={() => setImagenActiva(plato.imagen)}
              className="img-click"
            />

            <div className="card-content">
              <h4 className="titulo">{plato.nombre}</h4>
              <p className="descripcion">{plato.descripcion}</p>

              <div className="bottom">
                <span className="precio">${plato.precio}</span>

                <button
                  className="btn-add"
                  onClick={() => addToCart(plato)}
                >
                  🛒 Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL IMAGEN */}
      {imagenActiva && (
        <div className="modal" onClick={() => setImagenActiva(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span
              className="close"
              onClick={() => setImagenActiva(null)}
            >
              ✖
            </span>

            <img src={imagenActiva} alt="preview" />
          </div>
        </div>
      )}

    </section>
  );
}

export default Menu;