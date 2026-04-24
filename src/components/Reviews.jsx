import { useEffect, useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    nombre: "Juan Pérez",
    comentario: "La mejor milanesa de Corrientes 🔥",
    estrellas: 5,
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nombre: "María Gómez",
    comentario: "Excelente atención y comida riquísima",
    estrellas: 5,
    foto: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nombre: "Lucas Fernández",
    comentario: "Muy buen ambiente, súper recomendado",
    estrellas: 4,
    foto: "https://randomuser.me/api/portraits/men/76.jpg"
  }
];

function Reviews() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const review = reviewsData[index];

  return (
    <section className="reviews">
      <h2>⭐ Opiniones de nuestros clientes</h2>

      <p className="reviews-count">Más de 120 reseñas positivas</p>

      <div className="review-card pro">

        <img src={review.foto} alt={review.nombre} />

        <div className="review-content">
          <div className="stars">
            {"⭐".repeat(review.estrellas)}
          </div>

          <p className="comment">“{review.comentario}”</p>

          <h4>{review.nombre}</h4>
        </div>

      </div>
    </section>
  );
}

export default Reviews;