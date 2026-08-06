import "../Hero/Hero.css";
import "./Home.css";
import imgHome from "../../assets/imagen-home.png";
import imgHome1 from "../../assets/AMFFA-OS.png";
import imgHome2 from "../../assets/AVALIAN-OS.png";
import imgHome3 from "../../assets/CASA-OS.png";
import imgHome4 from "../../assets/IOMA-OS.png";
import imgHome5 from "../../assets/LM-OS.png";
import imgHome6 from "../../assets/MEDIFE-IS.png";
import imgHome7 from "../../assets/OOMINT-IS.png";
import imgHome8 from "../../assets/PAMI-OS.png";
import imgHome9 from "../../assets/OSDE-OS.png";
import imgHome10 from "../../assets/PFA-OS.png";
import imgHome11 from "../../assets/SANCOR-OS.png";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoCard from "../InfoCard/InfoCard";
import { useEffect } from "react";
import Videos from "../Video/Videos";
import EspecialidadesInfo from "../EspecialidadesInfo/EspecialidadesInfo";
import { useNavigate } from "react-router-dom";
import { site } from "../../data/site";

export default function Home() {
  const navigate = useNavigate();
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
            src={imgHome}
            alt="Farmacéutico profesional"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">science</span>
              FARMACIA MAGISTRAL ESPECIALIZADA
            </div>

            <h1 className="hero-title">
              Precisión y Cuidado <span>Personalizado</span> en cada Fórmula
            </h1>

            <p className="hero-description">
              Transformamos la ciencia médica en tratamientos únicos adaptados
              específicamente a sus necesidades biológicas y dermatológicas.
            </p>

            <div className="hero-actions">
              <Button variant="primary" icon="arrow_forward" onClick={() => navigate("/preparados")}>
                Nuestros Preparados
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="value-section">
        <div className="container">
          <SectionTitle
            title="Nuestro Compromiso con tu Salud"
            subtitle="En Farmacia Fiorilli JR combinamos atención personalizada, preparados magistrales de calidad y tecnología actualizada para brindar soluciones seguras, accesibles y pensadas para cada paciente."
          />

          <div className="bento-grid">
            <div className="bento-large">
              <InfoCard
                icon="verified"
                title="Calidad y Seguridad"
                text="Elaboramos preparados magistrales con materias primas certificadas, procesos controlados y los más altos estándares de seguridad farmacéutica."
              >
                <div className="tag-group">
                  <span className="tag">Materias primas certificadas</span>
                  <span className="tag">Procesos controlados</span>
                </div>
              </InfoCard>
            </div>

            <div className="bento-small">
              <InfoCard
                icon="biotech"
                title="Preparados Personalizados"
                text="Desarrollamos fórmulas individualizadas, adaptadas a las necesidades específicas de cada paciente, con precisión, responsabilidad y seguimiento profesional."
                variant="secondary"
              >
                <div className="precision-bar">
                  <div className="precision-fill"></div>
                </div>
                <p className="precision-text">
                  Atención centrada en cada paciente
                </p>
              </InfoCard>
            </div>

            <div className="bento-small">
              <InfoCard
                icon="support_agent"
                title="Atención Cercana"
                text="Brindamos asesoramiento profesional, atención personalizada y acompañamiento en cada etapa del tratamiento."
                variant="primary"
              >
                
              </InfoCard>
            </div>

            <div className="bento-large image-card">
              <div className="image-card-content">
                <div className="image-card-text">
                  <h3>Tecnología y Formación Continua</h3>
                  <p>
                    Trabajamos con tecnología actualizada y un equipo en
                    constante capacitación, fortaleciendo nuestro rol como
                    farmacia moderna y farmacia escuela al servicio de la
                    comunidad.
                  </p>
                </div>

                <div className="image-card-media">
                  <Videos video={"filosofia.mp4"}></Videos>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="image-card-text">
          <SectionTitle
            title="Obras Sociales y Prepagas"
            subtitle="Trabajamos con las principales coberturas para brindarte acceso a tratamientos seguros, confiables y de calidad."
          />
        </div>
        <div className="container process-layout">
          {/*
          <div className="process-text">
            <SectionTitle
              title="¿Cómo trabajamos su fórmula?"
              centered={false}
            />

            <div className="process-steps">
              <ProcessStep
                number="1"
                title="Recepción y Validación"
                text="Analizamos la prescripción médica para asegurar la compatibilidad de los componentes."
              />
              <ProcessStep
                number="2"
                title="Compounding de Precisión"
                text="Elaboración artesanal en campana de flujo laminar con pesaje electrónico."
              />
              <ProcessStep
                number="3"
                title="Control Final y Entrega"
                text="Envasado protector y validación de pH/Estabilidad antes de la entrega."
                last
              />
            </div>
          </div>
          */}
          {/*
<div className="status-card">
  <span className="material-symbols-outlined">check_circle</span>
  <div>
    <p>Status</p>
    <strong>Fórmula Lista</strong>
  </div>
              </div>
*/}

          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome4}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome11}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome5}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome6}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome7}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome8}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
        </div>
        <div className="container process-layout">
          {/*
          <div className="process-text">
            <SectionTitle
              title="¿Cómo trabajamos su fórmula?"
              centered={false}
            />

            <div className="process-steps">
              <ProcessStep
                number="1"
                title="Recepción y Validación"
                text="Analizamos la prescripción médica para asegurar la compatibilidad de los componentes."
              />
              <ProcessStep
                number="2"
                title="Compounding de Precisión"
                text="Elaboración artesanal en campana de flujo laminar con pesaje electrónico."
              />
              <ProcessStep
                number="3"
                title="Control Final y Entrega"
                text="Envasado protector y validación de pH/Estabilidad antes de la entrega."
                last
              />
            </div>
          </div>
          */}
          {/*
<div className="status-card">
  <span className="material-symbols-outlined">check_circle</span>
  <div>
    <p>Status</p>
    <strong>Fórmula Lista</strong>
  </div>
              </div>
*/}
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome9}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome10}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome1}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome2}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome3}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
        </div>
      </section>

      <EspecialidadesInfo></EspecialidadesInfo>

      <section className="horarios-section">
        <div className="horarios-overlay"></div>

        <div className="horarios-header">
          <h2>NUESTROS HORARIOS</h2>
        </div>

        <div className="horarios-card">
          {site.hours.map((hour, index) => (
            <div key={`${hour.days}-${hour.period}`}>
              <div
                className={`horario-row${index === site.hours.length - 1 ? " horario-row-last" : ""}`}
              >
                <div className="horario-left">
                  <h3>{hour.days}</h3>
                  {hour.period && <span>{hour.period}</span>}
                </div>
                <div className="horario-right">
                  <h3>{hour.time}</h3>
                </div>
              </div>
              {index < site.hours.length - 1 && <div className="horario-divider" />}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
