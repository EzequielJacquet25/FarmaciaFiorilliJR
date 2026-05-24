import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import StatCard from "../StatCard/StatCard";
import FeatureCard from "../FeatureCard/FeatureCard";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import "./QuienesSomos.css";
import { useEffect, useState } from "react";
import vacunacion from "../../assets/vacunacion.png";
import Videos from "../Video/Videos";

export default function QuienesSomos() {
    const [openHistory, setOpenHistory] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="about-main">
      <section className="about-hero-section">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <span className="about-badge">Nuestra Historia</span>
            <h1 className="about-hero-title">
              Una farmacia con <span>vocación</span>, historia y compromiso.
            </h1>

            <p className="about-hero-description">
              Somos una empresa familiar ubicada en la calle Salvador Curutchet
              2418, de la localidad Castelar,Partido de Morón, Provincia de
              Buenos Aires, comprometida con el cuidado de la salud. Nos
              especializamos en la elaboración de preparados magistrales
              individualizados, brindando productos seguros, de calidad y a
              precios económicos.
            </p>

            <p className="about-hero-description">
              Ofrecemos atención personalizada, asesoramiento profesional y
              servicios como toma de presión arterial, asesoramiento sobre el
              uso de glucómetros, atención de gran variedad de obras sociales:
              PAMI, IOMA, Policía Federal, MEDIFE, OMINT, SANCOR, AVALIAN, CASA,
              AMEBPBA y AMFFA, entre otras.
            </p>
            <p className="about-hero-description">
              Nuestro equipo está en constante capacitación y trabajamos con
              tecnología actualizada. Enfocados en seguir creciendo como
              institución y en fortalecer nuestro rol como farmacia escuela,
              formando a las nuevas generaciones de profesionales farmacéuticos.
              Una farmacia cercana, confiable y en permanente evolución al
              servicio de nuestra comunidad.
            </p>
            <p className="about-hero-description">
              Una farmacia cercana, confiable y en permanente evolución al
              servicio de nuestra comunidad.
            </p>
          </div>

          <div className="about-hero-media">
            <div className="about-hero-image-wrap">
              <Videos video="quienes-somos.mp4"></Videos>
            </div>

            <div className="about-quote-card">
              <p>
                " En Farmacia Fiorilli Jr ofrecemos una atención de alta calidad
                con los mejores precios"
              </p>
              <strong>— DT. Monica Beatriz Fiorilli, Fundadora</strong>
            </div>
          </div>
        </div>
      </section>
<section className="about-history-section">
      <div className="container">
        <div className="about-history-header">
          <span className="section-kicker">Nuestra historia</span>
          <h2>Farmacia Fiorilli JR</h2>
          <p>
            Conocé nuestra trayectoria, misión, compromiso y filosofía de trabajo,
            basada en la atención personalizada, la calidad y la vocación de servicio.
          </p>
        </div>

        <div className="history-accordion">
          <button
            type="button"
            className={`history-accordion-button ${
              openHistory ? "active" : ""
            }`}
            onClick={() => setOpenHistory(!openHistory)}
          >
            <div className="history-accordion-title">
              <span className="material-symbols-outlined">history_edu</span>
              <h3>Nuestra Trayectoria</h3>
            </div>

            <span className="material-symbols-outlined history-arrow">
              expand_more
            </span>
          </button>

          {openHistory && (
            <div className="history-accordion-content">
              <p>
                La <em>Farmacia Fiorilli JR</em> fue fundada el lunes 8 de enero
                de 1996 como una pequeña empresa familiar. Surgió como sociedad
                entre la farmacéutica Mónica Beatriz Fiorilli y el señor Raúl
                Jacquet. Desde sus inicios, el establecimiento, ubicado en la
                calle Curutchet 2418, operó bajo el nombre de <em>Farmacia JR</em>,
                con el señor Raúl Alejandro Jacquet —esposo de la farmacéutica—
                desempeñándose como gerente general.
              </p>

              <p>
                Desde el comienzo, la farmacia se destacó por ofrecer una atención
                personalizada de excelencia, junto con la elaboración de preparados
                magistrales individualizados, cumpliendo siempre con los más altos
                estándares de calidad y seguridad. También se caracterizó por
                ofrecer precios accesibles y una amplia variedad de servicios
                farmacéuticos, como toma de presión arterial, asesoramiento sobre
                control de glucemia y atención a obras sociales.
              </p>

              <p>
                A lo largo de su trayectoria, la farmacia ha evolucionado
                constantemente, incorporando nuevas tecnologías, técnicas
                actualizadas en el ámbito de la salud y profesionales altamente
                capacitados. Todo ello con el objetivo de seguir creciendo y
                mejorando tanto la calidad de atención como los servicios brindados.
              </p>

              <p>
                En marzo de 2017, la farmacéutica Mónica Beatriz Fiorilli asumió
                el cargo de directora técnica y el establecimiento pasó a denominarse
                <em> Farmacia Fiorilli JR</em>. Ese mismo año, la Dra. Fiorilli se
                incorporó al consejo directivo de la filial Castelar, Ituzaingó y
                Morón del Colegio de Farmacéuticos, cargo que continúa ejerciendo
                en la actualidad, manteniendo siempre una cordial relación entre la
                farmacia y el Colegio de Farmacéuticos de Morón.
              </p>

              <p>
                En 2022, la farmacia dio un paso más en su compromiso con la
                comunidad, convirtiéndose en <em>farmacia escuela</em>. Desde
                entonces, colabora activamente en la formación de futuros
                profesionales de la salud, brindando capacitación a estudiantes de
                la Universidad de Morón que cursan la materia
                <em> Prácticas Profesionales Externas</em>.
              </p>

              <p>
                Hoy, <em>Farmacia Fiorilli JR</em> continúa firmemente con su
                objetivo primario de ser una institución comprometida con la salud,
                ofreciendo productos accesibles, atención personalizada, cobertura
                de obras sociales y una fuerte vocación docente.
              </p>
            </div>
          )}
        </div>

        <div className="history-card-grid">
          <FeatureCard icon="verified" title="Nuestra Misión" variant="primary">
            <p className="feature-card-text">
              En <em>Farmacia Fiorilli JR</em> trabajamos día a día guiados por
              una serie de objetivos que reflejan nuestro compromiso con la salud,
              la calidad y la mejora continua.
            </p>

            <ul className="mission-list">
              <li>Brindar atención personalizada y de calidad.</li>
              <li>
                Atender a cada paciente de manera individual, con respeto,
                empatía y profesionalismo.
              </li>
              <li>Garantizar productos seguros y eficaces.</li>
              <li>
                Elaborar preparados magistrales individualizados siguiendo
                estándares de calidad y seguridad.
              </li>
              <li>Ofrecer precios accesibles y equitativos.</li>
              <li>Ampliar y mejorar nuestros servicios farmacéuticos.</li>
              <li>Fomentar la actualización científica y tecnológica.</li>
              <li>
                Consolidarnos como una farmacia escuela de referencia.
              </li>
              <li>
                Seguir creciendo como empresa familiar e institucional sin perder
                nuestros valores de origen.
              </li>
            </ul>
          </FeatureCard>

          <FeatureCard title="Compromiso" icon="handshake" variant="secondary">
            <div className="commitment-content">
              <p className="feature-card-text">
                En <em>Farmacia Fiorilli JR</em> estamos comprometidos en
                acompañar a nuestros pacientes a lo largo de sus tratamientos,
                proporcionando productos seguros y de alta calidad.
              </p>

              <p className="feature-card-text">
                Este compromiso se sostiene en una atención personalizada, un
                equipo de profesionales capacitados y procesos de elaboración que
                garantizan seguridad, calidad y confiabilidad.
              </p>

              <p className="feature-card-text">
                Constantemente incorporamos nuevas tecnologías, técnicas y
                servicios para fortalecer nuestras capacidades y seguir ofreciendo
                la mejor atención posible a quienes depositan su confianza en
                nosotros.
              </p>

              <p className="feature-card-text">
                Más allá de la dispensa de medicamentos, aspiramos a ser un
                ejemplo en el cuidado de la salud, guiados por la excelencia, la
                ética profesional y el compromiso genuino con nuestros pacientes.
              </p>
            </div>
          </FeatureCard>
        </div>

        <div className="philosophy-card">
          <div className="philosophy-content">
            <div className="philosophy-title">
              <span className="material-symbols-outlined">psychology</span>
              <h3>Filosofía</h3>
            </div>

            <p>
              En <em>Farmacia Fiorilli JR</em> creemos en un modelo de farmacia
              centrado en las personas. Nuestra principal especialidad es la
              elaboración de preparados magistrales, lo que nos permite ofrecer
              soluciones personalizadas, adaptadas a las necesidades específicas
              de cada paciente, con precios accesibles y económicos.
            </p>

            <div className="philosophy-values">
              <div>
                <span className="material-symbols-outlined">verified</span>
                <p>
                  <strong>La calidad</strong> en cada uno de nuestros productos
                  y servicios brindados.
                </p>
              </div>

              <div>
                <span className="material-symbols-outlined">verified</span>
                <p>
                  <strong>El compromiso</strong> con la salud pública y el
                  bienestar de nuestros pacientes.
                </p>
              </div>

              <div>
                <span className="material-symbols-outlined">verified</span>
                <p>
                  <strong>La honestidad, el respeto y la amabilidad</strong> en
                  el trato diario con quienes nos eligen.
                </p>
              </div>

              <div>
                <span className="material-symbols-outlined">verified</span>
                <p>
                  <strong>La vocación de servicio</strong>, ayudando siempre de
                  la mejor forma posible, con cercanía y responsabilidad.
                </p>
              </div>
            </div>

            <p>
              Como farmacia escuela, también nos comprometemos con la formación
              de las nuevas generaciones de profesionales, compartiendo nuestro
              conocimiento y experiencia con quienes están dando sus primeros
              pasos en el mundo laboral.
            </p>
          </div>

          <div className="philosophy-image">
            <img
              src={vacunacion}  
              alt="Laboratorio farmacéutico"
            />
          </div>
        </div>
      </div>
    </section>
      {/*

      <section className="team-section">
        <div className="container">
          <SectionTitle
            title="El Corazón de Farmacia Fiorilli JR"
            subtitle="Un equipo multidisciplinar de farmacéuticos especialistas, técnicos y expertos en formulación comprometidos con tu bienestar."
          />

          <div className="team-grid">
            <TeamMemberCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fr8Z4MQh0d7fUyVmdS8-coYPurjoPYmBvnbFbLndiARmZ5jzdbeZuB1IkJWlCWh7XrwTahDOTR4VZUqF3oCW-x1VKZ-ra_h14fifw3lo4HCc32pGMbaGUnb9uEEme0cyhaVbrJIB8l_BZYmN8YxVJkJqwnQmgRfbOxQaprb-rHmbax0QULR2uQ_kunJlJsBeKw15h8hr1vPPnZPThlbw0w66oBVYCuF_nRb5vJgxIrsosij9NI1Ff_evsPvp-fDsaCKRmhidPlV3"
              name="Dra. Elena Valdés"
              role="Directora Técnica"
              description="Especialista en dermofarmacia clínica con 20 años de experiencia."
            />

            <TeamMemberCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD1MoDvyT1WYnZoD5uKnxIdCCP_vSueoYTIEcVCHGKuidgPPQhb1YY8nDsZz34_U9E_FCIDoRgrEtIlrKQWwNfklwgyKbnJsp-mBMR3NBxNCFHB8J9dV2al8NMI4AOwHvzU8vOzjQnBE2FTdEKYGNy0AO_NeKd8owFBpUknMuOeLolDm5NkvN7dwZOYwMUxmbFfwrzz7I5uzFUBkaRutXXFRNzcvXOnFhEpsXDMkvzsUYFv8eArzXfWK4aQu6eti0KkqkddXkcyBNZd"
              name="Dr. Javier Ruiz"
              role="Jefe de Laboratorio"
              description="Experto en farmacotecnia y sistemas avanzados de liberación de fármacos."
            />

            <TeamMemberCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDpEdtSD-1yH2Q3foD_Pp7zYfKAB0Jutqb0h9bBB_8cqCe11P3oNKqefZqLu2e_cmPwec912B1VuIoPyQshZ1fTBh1-XGbE132zzQYxCPPCGR7gFNEnbBX5AemKFB-8cFGSZeGx9LnIaKv7c3MrYClAjJXjcF39ZdNZB3-6c-mk4uto7-Xuh-f-YD2Zx2WY7n7MGY8MVOCTn3sq5P23mR_kjwE4Q3ZLsH_K71-PJGMKL4nvvysnJTRssfdEh3ScjWkFBpe9KkiM6Y05"
              name="Sofía Martín"
              role="Control de Calidad"
              description="Responsable de asegurar la estabilidad y pureza de cada preparado."
            />

            <TeamMemberCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuABuVj1qyyBXdguf_UPpVryGzoAvKAxwzdzK9Z_kFJjl1TLMNqTdLAiTg83sJ1qgUClhN1-36kIufTF3A0RQOw1V4QmLMIdTNmcqwIRZ3v8QEUy3tRrxQQ-TipDA2yfoa3fh5l9qrRnTdTb7htlMietyqdWy7lwlsiqElAJG4YlfY5_SursQU5xWGy1yIlJJPoF4oKj937J9P7f6X-h4mGnxxcIKQMvD8ltq9Z_4bPlw4v_unxtr0bODXH-_yRIDV2R9s5hyjhuJX6k"
              name="Carlos Goya"
              role="Atención al Paciente"
              description="Especialista en seguimiento farmacoterapéutico y asesoramiento."
            />
          </div>
        </div>
      </section>
*/}

    </main>
  );
}
