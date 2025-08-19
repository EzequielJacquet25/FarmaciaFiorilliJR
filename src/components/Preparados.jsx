import { Carousel, Col } from "react-bootstrap";

import SeccionCategoria from "./SeccionCategoria";
import { useEffect } from "react";
const Preparados = ({ productos }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // cuando el 20% del elemento esté visible
    );

    document.querySelectorAll(".aparece-desde-izquierda").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="secctionMargin container">
      <h1>Preparados</h1>

      <SeccionCategoria titulo={"Skin Care"}>
        {productos
          .filter((p) => p.categoria === "Skin Care")
          .map((producto) => (
            <Col
              xl={3}
              key={producto.id}
              className="mb-3 p-2 bg-white rounded aparece-desde-izquierda"
            >
              <div
                className="card"
                style={{ minHeight: "100%", width: "100%" }}
              >
                <Carousel>
                  {producto.img.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className=" card-img-top"
                        src={`/JPG/${producto.nombre
                          .trim()
                          .replace(/\s+/g, "")}/${img}`}
                        alt={`${producto.nombre} - Imagen ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                </div>
              </div>
            </Col>
          ))}
      </SeccionCategoria>
      <SeccionCategoria titulo={"Suplementos"}>
        {productos
          .filter((p) => p.categoria === "Suplementos")
          .map((producto) => (
            <Col
              xl={3}
              key={producto.id}
              className="mb-3 p-2 bg-white rounded aparece-desde-izquierda"
            >
              <div
                className="card"
                style={{ minHeight: "100%", width: "100%" }}
              >
                <Carousel>
                  {producto.img.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className=" card-img-top"
                        src={`/JPG/${producto.nombre
                          .trim()
                          .replace(/\s+/g, "")}/${img}`}
                        alt={`${producto.nombre} - Imagen ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                </div>
              </div>
            </Col>
          ))}
      </SeccionCategoria>
      <SeccionCategoria titulo={"Medicamentos de uso topico"}>
        {productos
          .filter((p) => p.categoria === "Medicamentos de uso topico")
          .map((producto) => (
            <Col
              xl={3}
              key={producto.id}
              className="mb-3 p-2 bg-white rounded aparece-desde-izquierda"
            >
              <div
                className="card"
                style={{ minHeight: "100%", width: "100%" }}
              >
                <Carousel>
                  {producto.img.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className=" card-img-top"
                        src={`/JPG/${producto.nombre
                          .trim()
                          .replace(/\s+/g, "")}/${img}`}
                        alt={`${producto.nombre} - Imagen ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                </div>
              </div>
            </Col>
          ))}
      </SeccionCategoria>
      <SeccionCategoria titulo={"Productos de origen natural"}>
        {productos
          .filter((p) => p.categoria === "Productos de origen natural")
          .map((producto) => (
            <Col
              xl={3}
              key={producto.id}
              className="mb-3 p-2 bg-white rounded aparece-desde-izquierda"
            >
              <div
                className="card"
                style={{ minHeight: "100%", width: "100%" }}
              >
                <Carousel>
                  {producto.img.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className=" card-img-top"
                        src={`/JPG/${producto.nombre
                          .trim()
                          .replace(/\s+/g, "")}/${img}`}
                        alt={`${producto.nombre} - Imagen ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                </div>
              </div>
            </Col>
          ))}
      </SeccionCategoria>
    </div>
  );
};
export default Preparados;
