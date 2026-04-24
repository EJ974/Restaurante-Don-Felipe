import { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
    title: "Ambiente cálido",
    categoria: "Local"
  },
  {
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Platos únicos",
    categoria: "Comida"
  },
  {
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Pizza artesanal",
    categoria: "Comida"
  },
  {
    url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    title: "Sabores intensos",
    categoria: "Comida"
  },
  {
    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    title: "Experiencia completa",
    categoria: "Local"
  },
  {
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "Hamburguesas premium",
    categoria: "Comida"
  }
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [categoria, setCategoria] = useState("Todos");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const filtradas =
    categoria === "Todos"
      ? images
      : images.filter((img) => img.categoria === categoria);

  return (
    <section className="gallery">

      <div className="gallery-header">
        <img
          src="./img/galeria/galeria.png"
          alt="Nuestro Menú"
          className="gallery-title-img"
        />
      </div>

      {/* 🔥 FILTROS */}
      <div className="gallery-filters">
        {["Todos", "Comida", "Local"].map((cat) => (
          <button
            key={cat}
            className={categoria === cat ? "active" : ""}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔥 GRID */}
      <div className={`gallery-grid ${visible ? "show" : ""}`}>
        {filtradas.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.url} alt="" />

            <div className="overlay">
              <h3>{img.title}</h3>
              <span>Ver imagen</span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 LIGHTBOX */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close">✖</span>
            <img src={selectedImg.url} alt="" />
            <p>{selectedImg.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;