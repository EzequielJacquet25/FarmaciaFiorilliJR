import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryFilter from "../CategoryFilter/CategoryFIlter";
import ProductCard from "../ProductCard/ProductCard";
import ProcessStepCard from "../ProcessStepCard/ProcessStepCard";
import imgPreparados from "../../assets/imagen-faq.png";
import Videos from "../Video/Videos";
import rf from "../../assets/rutinaFacial.png";
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

export default function Preparados({ products }) {
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState([
    { label: "Todos", active: true },
    { label: "Skin Care", active: false },
    { label: "Medicamentos de uso tópico", active: false },
    { label: "Productos de origen natural", active: false },
    { label: "Suplementos", active: false },
  ]);
  let filteredProducts 
  if (filter === "Todos") {
    filteredProducts = products;
  } else {
  filteredProducts = products.filter( 
    (product) => !filter || product.categoria === filter,
  );
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [categories]);
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

              <div className="preparados-category-list">
                {categories.map((category) => (
                  <CategoryFilter
                    key={category.label}
                    label={category.label}
                    active={category.active}
                    onClick={() => {
                      setFilter(category.label);
                      setCategories((prev) =>
                        prev.map((cat) => ({
                          ...cat,
                          active: cat.label === category.label,
                        })),
                      );
                    }}
                  />
                ))}
              </div>
            </div>

          </aside>
          {filteredProducts.length > 0 ? (
            <div className="preparados-products">
              <div className="preparados-products-grid">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.img[0]}
                    category={product.categoria}
                    title={product.nombre}
                    principles={product.beneficios}
                    details={product.details}
                    receta={product.receta}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p>No hay productos disponibles en esta categoría</p>
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
