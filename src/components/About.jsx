import "./About.css";
import { useState, useEffect } from "react";

const sliderData = [
  {
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    title: "Nuestra misión",
    text: "Brindar comida casera de calidad con atención cercana."
  },
  {
    img: "https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg",
    title: "Nuestra visión",
    text: "Ser el restaurante preferido por sabor y experiencia."
  },
  {
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    title: "Nuestros valores",
    text: "Calidad, compromiso y pasión en cada plato."
  }
];

function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about">
      <div className="quienes-header">
        <img
          src="./img/quienessomos/quienesomos.png"
          alt="Nuestro Menú"
          className="quienes-title-img"
        />
      </div>

      {/* 🔥 BLOQUE 1 */}
            <div className="about-row">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9" />
        </div>

        <div className="about-text">
          <h2>Cómo empezó todo</h2>

          <p>
            Don Felipe nació como un emprendimiento familiar con una idea clara:
            ofrecer comida casera de calidad que haga sentir a cada cliente como en casa.
          </p>

          <p>
            Lo que comenzó como un pequeño proyecto, fue creciendo gracias al
            acompañamiento de nuestros clientes y al compromiso constante de
            mantener la esencia de lo casero.
          </p>

          <p>
            Cada detalle, desde la atención hasta la presentación de los platos,
            está pensado para brindar una experiencia cálida, cercana y auténtica.
          </p>
        </div>
      </div>

      {/* 🔥 BLOQUE 2 */}
            <div className="about-row reverse">
        <div className="about-img">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/28/70/94/caption.jpg?w=900&h=-1&s=1" />
        </div>

        <div className="about-text">
          <h2>Pasión por la cocina</h2>

          <p>
            Cada plato es preparado con dedicación, utilizando ingredientes frescos
            y manteniendo recetas tradicionales que nos caracterizan.
          </p>

          <p>
            Nuestro equipo trabaja día a día para lograr sabores auténticos,
            respetando la esencia de la cocina casera pero incorporando un toque
            moderno que hace cada experiencia única.
          </p>

          <p>
            Creemos que la buena comida no solo alimenta, sino que también
            genera momentos, recuerdos y encuentros que quedan para siempre.
          </p>
        </div>
      </div>

      {/* 🔥 SLIDER FULL WIDTH */}
            <div className="about-slider">

        <div className="slider-img-container">
          <img src={sliderData[current].img} alt="" />

          <div className="slider-overlay">
            <h3>{sliderData[current].title}</h3>
            <p>{sliderData[current].text}</p>
          </div>
        </div>

        {/* DOTS */}
        <div className="dots">
          {sliderData.map((_, i) => (
            <span
              key={i}
              className={i === current ? "active" : ""}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default About;