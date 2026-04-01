import { Col } from "react-bootstrap";
import SeccionCategoria from "./SeccionCategoria";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Preparados = ({ productos }) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(false);

  const categorias = useMemo(
    () => [
      "Skin Care",
      "Suplementos",
      "Medicamentos de uso topico",
      "Productos de origen natural",
    ],
    [],
  );

  const crearSlugImagen = (nombre = "") => {
    return nombre.trim().replace(/\s+/g, "");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!timer) return;

    const elementos = document.querySelectorAll(".aparece-desde-izquierda");
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [timer]);

  return (
    <div className="secctionMargin container">
      <h1>Preparados</h1>

      {timer ? (
        <>
          {categorias.map((categoria) => (
            <SeccionCategoria key={categoria} titulo={categoria}>
              {productos
                .filter((p) => p.categoria === categoria)
                .map((producto) => (
                  <Col
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    key={producto.nombre}
                    className="p-2 bg-white rounded aparece-desde-izquierda"
                  >
                    <div
                      onClick={() =>
                        navigate(`/item/${encodeURIComponent(producto.nombre)}`)
                      }
                      className="card item-preparado"
                      style={{
                        minHeight: "100%",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={`/JPG/${crearSlugImagen(producto.nombre)}/1.jpg`}
                        alt={producto.nombre}
                      />

                      <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
            </SeccionCategoria>
          ))}
        </>
      ) : (
        <div className="text-center p-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 mb-0">Cargando productos...</p>
        </div>
      )}
    </div>
  );
};

export default Preparados;
