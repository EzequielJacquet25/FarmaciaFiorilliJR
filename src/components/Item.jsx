import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const normalizarTexto = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const crearSlugImagen = (texto = "") => texto.trim().replace(/\s+/g, "");

const Item = ({ productos }) => {
  const { name } = useParams();
  const nombreDecodificado = decodeURIComponent(name || "");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const producto = useMemo(() => {
    return productos.find(
      (p) => normalizarTexto(p.nombre) === normalizarTexto(nombreDecodificado),
    );
  }, [productos, nombreDecodificado]);

  const slug = producto ? crearSlugImagen(producto.nombre) : "";
  const imagenes = [1, 2, 3].map((n) => `/JPG/${slug}/${n}.jpg`);

  const [img, setImg] = useState("");

  useEffect(() => {
    if (producto) {
      setImg(imagenes[0]);
    }
  }, [producto, slug]);

  const articulosRelacionados = useMemo(() => {
    if (!producto) return [];

    return productos.filter(
      (p) => p.categoria === producto.categoria && p.nombre !== producto.nombre,
    );
  }, [producto, productos]);

  if (!producto) {
    return (
      <main className="p-4 text-center">
        <h1>Producto no encontrado</h1>
        <Link to="/" className="btn btn-outline-success mt-3">
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column-reverse flex-xl-row contenedor-item justify-content-center align-items-start gap-4 m-4 w-100">
        <section
          className="h-100 card-relacionado d-flex flex-column-reverse flex-lg-row align-items-start justify-content-center gap-4
         p-3 m-2 w-100"
        >
          <article className="h-100 w-100 art-img-select d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
            <div className="h-100 content-img-select d-flex flex-column justify-content-center align-items-center gap-4">
              <div className="h-100 content-img-select d-flex flex-row flex-md-column justify-content-center align-items-center gap-4">
                {imagenes.map((ruta, index) => (
                  <img
                    key={ruta}
                    onClick={() => setImg(ruta)}
                    className="w-25 p-3 img-thumbnail"
                    src={ruta}
                    alt={`${producto.nombre} ${index + 1}`}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>

            <div className="content-img-select d-flex justify-content-center align-items-center pb-3">
              {img && (
                <img
                  className="img-item rounded "
                  src={img}
                  alt={producto.nombre}
                />
              )}
            </div>
          </article>

          <article className="w-100  d-flex flex-column gap-4 justify-content-start align-items-center">
            <h1 className="text-center w-100">{producto.nombre}</h1>
            <p className="text-center mb-0">{producto.categoria}</p>
            <h4>Formas de uso:</h4>
            <p className="m-2">{producto.uso}</p>
          </article>
        </section>

        <aside className="w-25 w-xl-25 p-3 d-flex flex-column justify-content-center align-items-center aside-relacionados">
          <h2 className="h5 text-center">Artículos relacionados</h2>

          {articulosRelacionados.length === 0 && (
            <p className="text-center mb-0">No hay artículos relacionados</p>
          )}

          {articulosRelacionados.length > 0 && (
            <div className="carrusel-vertical w-100">
              <div className="carrusel-contenido">
                {articulosRelacionados.map((p) => {
                  const rutaProducto = `/item/${encodeURIComponent(p.nombre)}`;
                  const slugRelacionado = crearSlugImagen(p.nombre);

                  return (
                    <div key={`uno-${p.nombre}`} className="my-2 w-100">
                      <Link
                        to={rutaProducto}
                        className="card card-relacionado text-decoration-none d-flex flex-row align-items-center gap-3 p-2"
                      >
                        <img
                          className="img-relacionado"
                          src={`/JPG/${slugRelacionado}/1.jpg`}
                          alt={p.nombre}
                        />

                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-1 text-dark">{p.nombre}</h6>

                          <small className="text-secondary">{p.compo}</small>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                {articulosRelacionados.map((p) => {
                  const rutaProducto = `/item/${encodeURIComponent(p.nombre)}`;
                  const slugRelacionado = crearSlugImagen(p.nombre);

                  return (
                    <div key={`uno-${p.nombre}`} className="my-2 w-100">
                      <Link
                        to={rutaProducto}
                        className="card card-relacionado text-decoration-none d-flex flex-row align-items-center gap-3 p-2"
                      >
                        <img
                          className="img-relacionado"
                          src={`/JPG/${slugRelacionado}/1.jpg`}
                          alt={p.nombre}
                        />

                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-1 text-dark">{p.nombre}</h6>
                          <small className="text-secondary">{p.compo}</small>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </aside>
      </div>

      <footer className="mt-2 w-100 d-flex flex-column flex-lg-row justify-content-center align-items-start gap-4 p-3">
        <article className="w-100 text-center card-relacionado p-3">
          <h2 className="h4">Recomendaciones</h2>
          <p>{producto.recomendaciones}</p>
        </article>

        <article className="w-100 text-center card-relacionado p-3">
          <h2 className="h4">Ingredientes</h2>
          <p>{producto.compo}</p>
        </article>

        <article className="w-100 text-center card-relacionado">
          <h2 className="h4">Este producto se combina con:</h2>

          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-body-secondary">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-body-secondary">
                And some muted small print.
              </small>
            </button>

            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-body-secondary">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-body-secondary">
                And some muted small print.
              </small>
            </button>
          </div>
        </article>
      </footer>
    </main>
  );
};

export default Item;
