import banner1r from "../assets/imagen1r.jpg";
import banner2r from "../assets/imagen2r.jpg";
import banner3r from "../assets/imagen3r.jpg";
import banner4r from "../assets/imagen4r.jpg";
import banner1 from "../assets/imagen1.jpg";
import banner2 from "../assets/imagen2.jpg";
import banner3 from "../assets/imagen3.jpg";
import banner4 from "../assets/imagen4.jpg";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

const Home = ({ productos }) => {
  const [ventana, setVentana] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setVentana(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      {/* Carrusel */}
      <Carousel className="carruselMargin">
        <Carousel.Item>
          <img
            className={
              ventana < 500
                ? "d-block imagenCarrouselr"
                : "d-block imagenCarrousel"
            }
            src={ventana < 500 ? banner1r : banner1r}
            alt="Banner de promoción 1 - Fiorilli JR"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={
              ventana < 500
                ? "d-block imagenCarrouselr"
                : "d-block imagenCarrousel"
            }
            src={ventana < 500 ? banner2r : banner2r}
            alt="Banner de promoción 2 - Fiorilli JR"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={
              ventana < 500
                ? "d-block imagenCarrouselr imagenHeigth"
                : "d-block imagenCarrousel"
            }
            src={ventana < 500 ? banner3r : banner3r}
            alt="Banner de promoción 3 - Fiorilli JR"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={
              ventana < 500
                ? "d-block imagenCarrouselr"
                : "d-block imagenCarrousel"
            }
            src={ventana < 500 ? banner4r : banner4r}
            alt="Banner de promoción 4 - Fiorilli JR"
          />
        </Carousel.Item>
      </Carousel>

      {/* Productos */}
      <Container>
        <h2 style={{ marginTop: "50px" }}>Nuestros Productos</h2>
        <div
          style={{
            overflowX: "auto",
            display: "flex",
            gap: "2rem",
            padding: "1rem",
            borderTopRightRadius: "24px",
            marginBottom: "50px",
          }}
        >
          {productos.map((prod) => (
            <article
              key={prod.id}
              style={{
                minWidth: "200px",
                minHeight: "300px",
                maxWidth: "300px",
                flex: "0 0 auto",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <img
                src={`/JPG/${prod.nombre.replace(/\s+/g, "")}/${prod.img[0]}`}
                alt={`Imagen de ${prod.nombre}`}
                style={{
                  height: "480px",
                  maxWidth: "250px",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                }}
              />
              <h3>{prod.nombre}</h3>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;
