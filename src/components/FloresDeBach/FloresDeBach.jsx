import { useEffect, useMemo, useState } from "react";
import { floresBach } from "../../data/floresBach";
import { site } from "../../data/site";
import { trackContactClick } from "../../services/analyticsService";
import "./FloresDeBach.css";

const maxSelecciones = 5;

export default function FloresDeBach() {
  const [consulta, setConsulta] = useState("");
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const floresFiltradas = useMemo(() => {
    const busqueda = consulta.trim().toLowerCase();
    if (!busqueda) return floresBach;

    return floresBach.filter(({ nombre: flor, descripcion }) =>
      `${flor} ${descripcion}`.toLowerCase().includes(busqueda),
    );
  }, [consulta]);

  const alternarFlor = (flor) => {
    setSeleccionadas((actuales) => {
      if (actuales.includes(flor)) {
        return actuales.filter((item) => item !== flor);
      }

      if (actuales.length === maxSelecciones) return actuales;
      return [...actuales, flor];
    });
  };

  const solicitarPreparado = (event) => {
    event.preventDefault();
    const mensaje = [
      `Hola ${site.name}, quiero solicitar información sobre Flores de Bach personalizadas.`,
      nombre && `Nombre: ${nombre}.`,
      `Emociones o esencias seleccionadas: ${seleccionadas.length ? seleccionadas.join(", ") : "a conversar con el equipo farmacéutico"}.`,
    ]
      .filter(Boolean)
      .join("\n");

    trackContactClick("whatsapp_flores_bach");
    window.open(
      `${site.contact.whatsappUrl}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="bach-main">
      <section className="bach-hero">
        <div className="bach-container bach-hero-grid">
          <div className="bach-hero-copy">
            <span className="bach-eyebrow">Preparado personalizado</span>
            <h1>Flores de Bach</h1>
            <p>
              Un preparado personalizado elaborado a partir de esencias
              florales. Contanos cómo te sentís y nuestro equipo te orientará
              para armar una fórmula acorde a tu consulta.
            </p>
            <a className="bach-primary-action" href="#formulario-bach">
              Comenzar mi consulta
            </a>
          </div>

          <div className="bach-hero-media">
            <img
              src="/JPG/FloresdeBach/1.jpg"
              alt="Estuche con esencias florales de Bach"
            />
            <span className="bach-hero-caption">38 esencias disponibles</span>
          </div>
        </div>
      </section>

      <section className="bach-explanation-section">
        <div className="bach-container bach-explanation-grid">
          <div>
            <span className="bach-eyebrow">Cómo funciona</span>
            <h2>Una consulta, una selección y una fórmula personalizada.</h2>
          </div>
          <div className="bach-explanation-steps">
            <article>
              <span>1</span>
              <h3>Contanos tu consulta</h3>
              <p>
                Podés elegir hasta cinco emociones que representen cómo te
                sentís hoy.
              </p>
            </article>
            <article>
              <span>2</span>
              <h3>Te orientamos</h3>
              <p>
                Revisamos tu selección y resolvemos tus dudas antes de preparar
                la fórmula.
              </p>
            </article>
            <article>
              <span>3</span>
              <h3>Preparamos tu pedido</h3>
              <p>
                Elaboramos el preparado y te avisamos cuando esté listo para
                retirar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bach-video-section">
        <div className="bach-container bach-video-layout">
          <div>
            <span className="bach-eyebrow">Conocé el preparado</span>
            <h2>Una guía breve sobre las Flores de Bach</h2>
            <p>
              Las esencias se seleccionan de acuerdo con la consulta realizada.
              Este recurso es informativo y no reemplaza la consulta con un
              profesional de la salud.
            </p>
          </div>
          <video
            className="bach-video"
            autoPlay
            controls
            loop
            muted
            playsInline
            preload="metadata"
            poster="/JPG/FloresdeBach/1.jpg"
          >
            <source src="/videos/flores-de-bach.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </section>

      <section className="bach-use-section">
        <div className="bach-container bach-use-grid">
          <article className="bach-use-card">
            <span className="material-symbols-outlined" aria-hidden="true">
              medication
            </span>
            <h2>Modo de uso</h2>
            <p>
              Administrar por vía oral, una vez al día, la cantidad de gotas
              indicada en el rótulo. Pueden colocarse directamente en la boca,
              sin apoyar ni tocar la punta del gotero con los labios, la lengua
              o el interior de la boca.
            </p>
            <p>
              También pueden diluirse en medio vaso de agua. En ese caso,
              beber la preparación inmediatamente y no conservarla para una
              toma posterior.
            </p>
          </article>

          <article className="bach-use-card bach-use-card-highlight">
            <span className="material-symbols-outlined" aria-hidden="true">
              health_and_safety
            </span>
            <h2>Recomendaciones</h2>
            <ul>
              <li>No exceder la cantidad ni la frecuencia indicadas.</li>
              <li>
                El preparado contiene alcohol como conservante. Si necesitás
                evitar su consumo, estás embarazada, amamantando, sos menor de
                edad o tomás medicación incompatible, consultá antes con un
                médico o farmacéutico.
              </li>
              <li>
                Conservar el frasco bien cerrado, en un lugar fresco, seco y
                protegido de la luz y el calor.
              </li>
              <li>
                Ante síntomas emocionales intensos, persistentes o que
                interfieran con tu vida cotidiana, consultá a un profesional de
                la salud.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bach-selector-section" id="formulario-bach">
        <div className="bach-container">
          <div className="bach-selector-heading">
            <div>
              <span className="bach-eyebrow">Formulario de consulta</span>
              <h2>Elegí hasta cinco emociones o esencias</h2>
              <p>
                Podés buscar por nombre o leer cada descripción. La selección
                nos ayuda a iniciar la conversación.
              </p>
            </div>
            <span className="bach-selection-count">
              {seleccionadas.length} de {maxSelecciones} seleccionadas
            </span>
          </div>

          <form onSubmit={solicitarPreparado} className="bach-form">
            <label className="bach-name-field">
              Tu nombre <span>(opcional)</span>
              <input
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                placeholder="Escribí tu nombre"
              />
            </label>
            <label className="bach-search-field">
              Buscar entre las 38 esencias
              <input
                value={consulta}
                onChange={(event) => setConsulta(event.target.value)}
                placeholder="Ej.: ansiedad, cambios, cansancio…"
              />
            </label>

            <div
              className="bach-flower-grid"
              aria-label="Listado de las 38 esencias florales"
            >
              {floresFiltradas.map((flor) => {
                const activa = seleccionadas.includes(flor.nombre);
                const deshabilitada =
                  !activa && seleccionadas.length === maxSelecciones;

                return (
                  <button
                    key={flor.nombre}
                    type="button"
                    className="bach-flower-option"
                    aria-pressed={activa}
                    disabled={deshabilitada}
                    onClick={() => alternarFlor(flor.nombre)}
                  >
                    <span className="bach-flower-check" aria-hidden="true">
                      {activa ? "✓" : "+"}
                    </span>
                    <span>
                      <strong>{flor.nombre}</strong>
                      <small>{flor.descripcion}</small>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="bach-form-footer">
              <p>
                {seleccionadas.length
                  ? `Seleccionaste: ${seleccionadas.join(", ")}.`
                  : "Todavía no seleccionaste una esencia."}
              </p>
              <button type="submit" className="bach-primary-action">
                Enviar consulta por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bach-notice-section">
        <div className="bach-container bach-notice">
          <span className="material-symbols-outlined" aria-hidden="true">
            info
          </span>
          <p>
            Las Flores de Bach son un preparado de acompañamiento. Ante síntomas
            intensos, persistentes o que interfieran con la vida cotidiana,
            consultá a un profesional de la salud.
          </p>
        </div>
      </section>
    </main>
  );
}
