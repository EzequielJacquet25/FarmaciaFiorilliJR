import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";
import ProcessStepCard from "../ProcessStepCard/ProcessStepCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./PedidoDePreparado.css";

const steps = [
  {
    icon: "prescriptions",
    title: "1. Receta",
    text: "Enviános una foto clara de la receta médica por WhatsApp, si el preparado la requiere.",
  },
  {
    icon: "request_quote",
    title: "2. Cotización",
    text: "Te enviamos un presupuesto detallado según la preparación indicada.",
  },
  {
    icon: "check_circle",
    title: "3. Validación de la receta",
    text: "Verificamos que la receta esté vigente y en condiciones para elaborar el preparado.",
  },
  {
    icon: "biotech",
    title: "4. Elaboración",
    text: "Nuestros especialistas preparan tu fórmula en el laboratorio farmacéutico.",
  },
  {
    icon: "hand_package",
    title: "5. Entrega",
    text: "Te avisamos cuando esté listo para retirarlo con total seguridad en la farmacia.",
  },
];

export default function PedidoDePreparado() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hola ${site.name}, quiero solicitar información para encargar un preparado magistral.`,
  );

  return (
    <main className="pedido-main">
      <section className="pedido-hero">
        <div className="pedido-container pedido-hero-grid">
          <div>
            <span className="pedido-eyebrow">Atención personalizada</span>
            <h1>Solicitá tu preparado magistral</h1>
            <p>
              Te acompañamos durante el proceso para elaborar un preparado
              adaptado a la indicación profesional y a tus necesidades.
            </p>

            <a
              className="pedido-whatsapp-button"
              href={`${site.contact.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                chat
              </span>
              Iniciar pedido por WhatsApp
            </a>
          </div>

          <aside className="pedido-note" aria-label="Información importante">
            <span className="material-symbols-outlined" aria-hidden="true">
              prescriptions
            </span>
            <h2>¿Tu preparado requiere receta?</h2>
            <p>
              Enviánosla por WhatsApp o acercala a la farmacia. La validaremos
              antes de iniciar la elaboración.
            </p>
          </aside>
        </div>
      </section>

      <section className="pedido-process-section">
        <div className="pedido-container pedido-process-box">
          <SectionTitle title="Cómo pedir un preparado online" subtitle="" />
          <span className="pedido-process-label">Pedido online</span>

          <div className="pedido-process-grid">
            {steps.map((step) => (
              <ProcessStepCard key={step.title} {...step} />
            ))}
            <div className="pedido-process-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="pedido-video-section" aria-labelledby="pedido-video-title">
        <div className="pedido-container pedido-video-grid">
          <div className="pedido-video-copy">
            <span className="pedido-eyebrow">Guía rápida</span>
            <h2 id="pedido-video-title">Mirá cómo hacer tu pedido por WhatsApp</h2>
            <p>
              En menos de un minuto conocé los pasos, desde el envío de la
              receta —si corresponde— hasta el aviso para retirar tu preparado.
            </p>
          </div>

          <video
            className="pedido-video"
            autoPlay
            controls
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Video explicativo sobre cómo pedir un preparado por WhatsApp"
          >
            <source src="/videos/pedido-preparado-whatsapp.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </section>

      <section className="pedido-help-section">
        <div className="pedido-container pedido-help-card">
          <div>
            <h2>¿No sabés si necesitás receta?</h2>
            <p>
              Consultanos antes de realizar el pedido. Te orientamos sobre la
              documentación necesaria para cada preparado.
            </p>
          </div>
          <Link className="pedido-catalog-link" to="/preparados">
            Ver catálogo de preparados
          </Link>
        </div>
      </section>
    </main>
  );
}
