import Button from "../Button/Button";
import ProcessStep from "../ProcessSteps/ProcessStep";
import BenefitCard from "../BenefitCard/BeneficCard";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./Product.css";
import RecomendacionesAside from "../RecomendacionesAside/RecomendacionesAside";
import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Videos from "../Video/Videos";
import { site } from "../../data/site";
import { trackContactClick, trackProductView } from "../../services/analyticsService";

// dejá tu array products acá igual que lo tenés

const normalizarTexto = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const crearSlugImagen = (texto = "") => texto.trim().replace(/\s+/g, "");

export default function Product({ products }) {
  const navigate = useNavigate();
  const { name } = useParams();
  const nombreDecodificado = decodeURIComponent(name || "");
  const mensaje = `Hola ${site.name}, quiero consultar por un ${name}`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const producto = useMemo(() => {
    return products.find(
      (p) => normalizarTexto(p.nombre) === normalizarTexto(nombreDecodificado),
    );
  }, [nombreDecodificado, products]);

  const slug = producto ? crearSlugImagen(producto.nombre) : "";
  const imagePath = `/JPG/${slug}/1.webp`;

  useEffect(() => { if (producto) trackProductView(producto); }, [producto]);

  const articulosRelacionados = useMemo(() => {
    if (!producto) return [];

    return products.filter(
      (p) => p.categoria === producto.categoria && p.nombre !== producto.nombre,
    );
  }, [producto, products]);

  const steps = [
    {
      number: "1",
      title: "Preparación",
      text: "Leé atentamente las indicaciones antes de comenzar el tratamiento.",
    },
    {
      number: "2",
      title: "Aplicación",
      text: producto?.uso || "Aplicar según indicación profesional.",
    },
    {
      number: "3",
      title: "Cuidados",
      text:
        producto?.recomendaciones ||
        "Seguí las recomendaciones de conservación y uso.",
      last: true,
    },
  ];

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
    <main className="product-main">
      <div className="flex flex-col flex-md-row width-100">
        <div className="width-100 width-md-75 ">
          <section className="product-hero-section">
            <div className="container product-hero-grid">
              <div className="product-hero-content">
                <span className="product-category-badge">
                  {producto.categoria}
                </span>

                <h1 className="product-title">{producto.nombre}</h1>

                <p className="product-description">{producto.compo}</p>
              </div>

              <div className="product-hero-media">
                <div className="product-hero-media-bg"></div>

                <img
                  src={imagePath}
                  alt={producto.nombre}
                  decoding="async"
                  className="product-hero-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/placeholder-product.svg";
                  }}
                />
              </div>
            </div>
          </section>

          <section className="product-benefits-section">
            <div className="container">
              <div className="product-benefits-grid">
                {producto.beneficios?.map((beneficio, index) => (
                  <BenefitCard
                    key={index}
                    icon="check_circle"
                    title={`Beneficio ${index + 1}`}
                    text={beneficio}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="product-composition-section">
            <div className="container product-composition-layout">
              <div className="product-composition-intro">
                <h2 className="product-section-title">Composición</h2>

                <p className="product-section-description">{producto.compo}</p>

                <QuoteCard
                  text="Cada preparado se elabora de forma individualizada, respetando criterios farmacéuticos de seguridad y calidad."
                  author={site.name}
                />
              </div>

              <div className="product-ingredients-list">
                <div className="ingredient-card">
                  <div className="ingredient-card-content">
                    <h4 className="ingredient-card-title">Modo de uso</h4>
                    <p className="ingredient-card-text">{producto.uso}</p>
                  </div>
                </div>

                <div className="ingredient-card">
                  <div className="ingredient-card-content">
                    <h4 className="ingredient-card-title">Recomendaciones</h4>
                    <p className="ingredient-card-text">
                      {producto.recomendaciones}
                    </p>
                  </div>
                </div>

                <div className="ingredient-card">
                  <div className="ingredient-card-content">
                    <h4 className="ingredient-card-title">Receta</h4>
                    <p className="ingredient-card-text">
                      {producto.receta
                        ? "Este producto requiere receta médica."
                        : "Este producto no requiere receta médica."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product-usage-section">
            <div className="container product-usage-grid">
              {producto.video ? (
                <Videos video={`${slug}.mp4`}></Videos>
              ) : (
                <div className="product-usage-image-wrap">
                  <img
                  src={imagePath}
                  alt={producto.nombre}
                  loading="lazy"
                  decoding="async"
                  className="product-usage-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/placeholder-product.svg";
                    }}
                  />
                </div>
              )}

              <div className="product-usage-content">
                <h2 className="product-section-title">
                  Protocolo de Aplicación
                </h2>

                <div className="product-usage-steps">
                  {steps.map((step) => (
                    <ProcessStep
                      key={step.number}
                      number={step.number}
                      title={step.title}
                      text={step.text}
                      last={step.last}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="product-cta-section">
            <div className="product-cta-box">
              <div className="product-cta-watermark">
                <span className="material-symbols-outlined">vaccines</span>
              </div>

              <h2 className="product-cta-title">
                ¿Es este el preparado adecuado para vos?
              </h2>

              <p className="product-cta-text">
                Nuestro equipo farmacéutico está disponible para orientarte
                según tus necesidades y el uso correcto del producto.
              </p>

              <div className="product-cta-actions">
                <Button variant="light">
                  <a
                    href={`${site.contact.whatsappUrl}?text=${encodeURIComponent(mensaje)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContactClick("whatsapp_click")}
                  >
                    Preguntar Por el Preparado
                  </a>
                </Button>
                <Button
                  variant="outline-light"
                  onClick={() => navigate("/preparados")}
                >
                  Ver más preparados
                </Button>
              </div>
            </div>
          </section>
        </div>
        <RecomendacionesAside productosR={articulosRelacionados} />
      </div>
    </main>
  );
}
