import "../Hero/Hero.css";
import imgFAQ from "../../assets/imagen-faq.png";
import FAQSection from "../FAQSection/FAQSection";
import { useEffect } from "react";
const Recomendaciones = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="home-main">
      <section className="hero-section">
        <div className="hero-background">
          <img
            className="hero-background-image"
            src={imgFAQ}
            alt="Farmacéutico profesional"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">question_mark</span>
              Centro de Ayuda
            </div>

            <h1 className="hero-title">Preguntas Frecuentes</h1>

            <p className="hero-description">
              Despejamos sus dudas sobre la formulación magistral. Precisión,
              ciencia y cuidado personalizado en cada respuesta.
            </p>
          </div>
        </div>
      </section>
      <FAQSection />
    </main>
  );
};

export default Recomendaciones;
