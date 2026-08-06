import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryFilter from "../CategoryFilter/CategoryFIlter";
import ProductCard from "../ProductCard/ProductCard";
import ProcessStepCard from "../ProcessStepCard/ProcessStepCard";
import imgPreparados from "../../assets/imagen-faq.png";
import Videos from "../Video/Videos";
import { site } from "../../data/site";
import "./Preparados.css";
import { useEffect, useState } from "react";

const processSteps = [
  {
    icon: "prescriptions",
    title: "1. Receta",
    text: "Recibimos su receta médica original por whatsapp y presencial.",
  },
  {
    icon: "request_quote",
    title: "2. Cotización",
    text: "Reciba un presupuesto detallado según sus requerimientos.",
  },
  {
    icon: "check_circle",
    title: "3. Validación de la receta",
    text: "Verificamos que su Receta este en regla.",
  },
  {
    icon: "biotech",
    title: "4. Elaboración",
    text: "Nuestros especialistas preparan su fórmula en el laboratorio.",
  },
  {
    icon: "hand_package",
    title: "5. Entrega",
    text: "Reciba su preparado magistral en la farmacia con total seguridad.",
  },
];

const webOrderSteps = [
  {
    icon: "chat",
    title: "1. Iniciá tu consulta",
    text: "Escribinos por WhatsApp y contanos qué preparado necesitás o qué indicación recibiste.",
  },
  {
    icon: "upload_file",
    title: "2. Enviá la receta",
    text: "Mandanos una foto legible de la receta médica para que podamos revisarla.",
  },
  {
    icon: "request_quote",
    title: "3. Recibí la cotización",
    text: "Te enviamos un presupuesto detallado y la información necesaria para continuar.",
  },
  {
    icon: "verified",
    title: "4. Confirmación profesional",
    text: "Validamos la receta y confirmamos el inicio de la elaboración de tu preparado.",
  },
  {
    icon: "notifications_active",
    title: "5. Te avisamos",
    text: "Cuando esté listo, nos comunicamos con vos para coordinar el retiro en la farmacia.",
  },
];

const categories = [
  "Todos",
  "Skin Care",
  "Medicamentos de uso tópico",
  "Productos de origen natural",
  "Suplementos",
];

export default function Preparados({ products }) {
  const [filter, setFilter] = useState("Todos");
  const filteredProducts =
    filter === "Todos"
      ? products
      : products.filter((product) => product.categoria === filter);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="preparados-main">
      <section className="preparados-hero-section">
        <div className="container preparados-hero-grid">
          <div className="preparados-hero-content">
            <span className="preparados-hero-label">Catálogo Magistral</span>
            <h1 className="preparados-hero-title">Catálogo de Preparados</h1>
            <p className="preparados-hero-description">
              Fórmulas personalizadas elaboradas con precisión farmacéutica.
              Adaptamos cada principio activo a las necesidades específicas de
              su tratamiento bajo los más altos estándares de calidad.
            </p>
          </div>

          <div className="preparados-hero-media">
            <img src={imgPreparados} alt="Laboratorio farmacéutico" />
            <div className="preparados-hero-overlay"></div>
          </div>
        </div>
      </section>

      <section className="preparados-catalog-section">
        <div className="container preparados-layout">
          <aside className="preparados-sidebar">
            <div>
              <h3 className="preparados-sidebar-title">Categorías</h3>

              <div className="preparados-category-list" aria-label="Filtrar preparados por categoría">
                {categories.map((category) => (
                  <CategoryFilter
                    key={category}
                    label={category}
                    active={filter === category}
                    onClick={() => setFilter(category)}
                  />
                ))}
              </div>
            </div>

          </aside>
          {filteredProducts.length > 0 ? (
            <div className="preparados-products">
              <p className="preparados-results" aria-live="polite">
                {filteredProducts.length} preparados disponibles en {filter}.
              </p>
              <div className="preparados-products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.nombre}
                    image={product.img[0]}
                    category={product.categoria}
                    title={product.nombre}
                    principles={product.beneficios}
                    receta={product.receta}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="preparados-empty" role="status">
              No hay productos disponibles en esta categoría.
            </p>
          )}
        </div>
      </section>

      <section className="preparados-process-section">
        <div className="container preparados-process-box">
          <SectionTitle
            title="Proceso de Elaboración de un Preparado Magistral"
            subtitle=""
          />

          <span className="preparados-process-label">Metodología Precisa</span>

          <div className="preparados-process-grid">
            {processSteps.map((step) => (
              <ProcessStepCard
                key={step.title}
                icon={step.icon}
                title={step.title}
                text={step.text}
              />
            ))}

            <div className="preparados-process-line"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
