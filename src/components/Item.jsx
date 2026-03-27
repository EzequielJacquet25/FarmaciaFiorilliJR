import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Item = ({ productos }) => {
  const { name } = useParams();

  const producto = productos.find((p) => p.nombre === name);

  const slug = producto ? producto.nombre.trim().replace(/\s+/g, "") : "";

  const [img, setImg] = useState("");

  useEffect(() => {
    if (producto) {
      setImg(`/JPG/${slug}/1.jpg`);
    }
  }, [producto, slug]);

  const articulosRelacionados = producto
    ? productos.filter(
        (p) =>
          p.categoria === producto.categoria && p.nombre !== producto.nombre,
      )
    : [];

  if (!producto) {
    return (
      <main className="p-4">
        <h1>Producto no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </main>
    );
  }

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column-reverse flex-md-row contenedor-item justify-content-center align-items-start gap-2 m-2">
        <section className="h-100 d-flex  align-items-center justify-content-center gap-2">
          <article className="h-100 w-100 art-img-select d-flex flex-column-reverse flex-md-row justify-content-between align-items-center ">
            {/* Miniaturas */}
            <div className=" h-100 content-img-select d-flex flex-column justify-content-center align-items-center gap-2">
              <div className="h-100 content-img-select d-flex flex-row flex-md-column justify-content-center align-items-center gap-2">
                {[1, 2, 3].map((n) => (
                  <img
                    key={n}
                    onClick={() => setImg(`/JPG/${slug}/${n}.jpg`)}
                    className="w-25 p-2 "
                    src={`/JPG/${slug}/${n}.jpg`}
                    alt={`${producto.nombre} ${n}`}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>

            {/* Imagen principal */}
            <div className=" content-img-select d-flex justify-content-center align-items-center">
              {img && (
                <img className="img-item" src={img} alt={producto.nombre} />
              )}
            </div>
          </article>

          <article className=" w-100 d-flex flex-column gap-2 justify-content-start align-items-center">
            <h4 className="text-center w-100">{producto.nombre}</h4>
            <p className="text-center ">{producto.categoria}</p>
            <p className="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              recusandae temporibus blanditiis possimus non ad magnam facere
              iure hic itaque, eligendi dignissimos voluptate! Tempora,
              voluptatibus. Illum atque quos magni minus.
            </p>
            <p className="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
              eaque ea quaerat laudantium veniam facere, voluptatibus aperiam
              cupiditate eum. Recusandae eaque voluptate laborum molestiae nihil
              pariatur eum dolorem aspernatur.
            </p>
          </article>
        </section>

        <aside className=" w-100 p-2 d-flex flex-column justify-content-center align-items-center   aside-relacionados">
          <h2 className="h5">Artículos Relacionados</h2>

          {articulosRelacionados.length === 0 && (
            <h2 className="text-center">No hay artículos relacionados</h2>
          )}

          {articulosRelacionados.length > 0 && (
            <div className="carrusel-vertical">
              {/* Primer bloque */}
              <div className="carrusel-contenido">
                {articulosRelacionados.map((p) => (
                  <div className="d-flex gap-3 align-items-center justify-content-center my-2">
                    <Link
                      key={`uno-${p.nombre}`}
                      to={`/item/${p.nombre}`}
                      className="border w-50 d-flex justify-content-center align-items-center"
                    >
                      <img
                        className="img-relacionado  "
                        src={`/JPG/${p.nombre
                          .trim()
                          .replace(/\s+/g, "")}/1.jpg`}
                        alt={p.nombre}
                      />
                    </Link>
                    {/* <h5 className="w-50 nombreProd">{p.nombre}</h5> */}
                  </div>
                ))}

                {/* Segundo bloque (duplicado) */}
                {articulosRelacionados.map((p) => (
                  <div className="d-flex gap-3 align-items-center justify-content-center my-2">
                    <Link
                      key={`dos-${p.nombre}`}
                      to={`/item/${p.nombre}`}
                      className="border w-50 d-flex justify-content-center align-items-center"
                    >
                      <img
                        className="img-relacionado  "
                        src={`/JPG/${p.nombre
                          .trim()
                          .replace(/\s+/g, "")}/1.jpg`}
                        alt={p.nombre}
                      />
                    </Link>
                    {/* <h5 className="w-50 nombreProd">{p.nombre}</h5> */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <footer className="mt-2 w-100 d-flex flex-row justify-content-center align-items-center gap-4 p-4">
        <article className="w-100 text-center">
          <h4>Formas de uso</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quaerat obcaecati veritatis repellat esse laborum ipsum velit,
            blanditiis expedita maxime. Qui necessitatibus consequatur incidunt
            omnis at voluptatibus pariatur dolore laborum.
          </p>
        </article>
        <article className="w-100 text-center">
          <h4>Ingredientes</h4>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
          </ol>
        </article>
        <article className="w-100 text-center">
          <h4>productos relacionados</h4>
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-body-secondary">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-body-secondary">
                And some muted small print.
              </small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-body-secondary">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-body-secondary">
                And some muted small print.
              </small>
            </a>
          </div>
        </article>
      </footer>
    </main>
  );
};

export default Item;
