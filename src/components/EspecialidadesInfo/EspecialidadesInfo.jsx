import { Link } from "react-router-dom";
import "./EspecialidadesInfo.css";

const especialidades = [
  {
    icono: "syringe",
    titulo: "Aplicación de Inyectables",
    texto:
      'Aplicamos medicamentos inyectables de via (subcutánea ; intradérmica e intramuscular )solo bajo  receta médica, en un entorno seguro y controlado. Nuestro personal capacitado garantiza un procedimiento confiable, respetando todas las normas de higiene y bioseguridad.Tambien aplicamos vacunas pudiendo el paciente acceder al certificado digital de la vacunación, en  "Mi Argentina" y en "Mi Salud digital bonaerense". Podrás hacerlo AUTOMÁTICA O MANUALMENTE',
  },
  {
    icono: "blood_pressure",
    titulo: "Control de Presión Arterial",
    texto:
      "Realizamos  atención personalizada para el   control de presión arterial  con tensiómetros validados. Este chequeo es clave para prevenir y monitorear enfermedades cardiovasculares. Además, te brindamos recomendaciones para mantener valores saludables y mejorar tu calidad de vida.",
  },
  {
    icono: "glucose",
    titulo: "Asesoramiento en Glucemia",
    texto:
      "Brindamos asesoramiento de glucómetros, para el  control de la glucosa con orientación personalizada. Ofrecemos recomendaciones sobre alimentación, tratamiento y hábitos saludables para un mejor manejo de la diabetes. ",
  },
  {
    icono: "vaccines",
    titulo: "Vacunación de IOMA Y PAMI",
    texto:
      "Formamos parte de la campaña oficial de vacunación de PAMI, brindando la aplicación de vacunas de manera segura, gratuita y conforme a los lineamientos vigentes. Nuestro equipo se encarga de todo el proceso, asegurando una atención profesional y respetando estrictamente las normas de bioseguridad. Acercate con tu documentación y recibí tus vacunas con la tranquilidad de estar en manos de personal capacitado.",
  },
  {
    icono: "local_pharmacy",
    titulo: "Asesoramiento Farmacéutico Personalizado",
    texto:
      "Respondemos todas tus dudas sobre medicamentos: cómo tomarlos, dosis, horarios, posibles interacciones y más. Nuestro objetivo es ayudarte a lograr tratamientos seguros, efectivos y adaptados a tus necesidades.",
  },
];

const EspecialidadesInfo = () => {
  return (
    <section className="especialidades-section">
      <div className="contenedor-especialidades">
        <div className="especialidades-header">
          <h2>Cuidamos tu salud todos los días</h2>
          <p>
            Brindamos servicios farmacéuticos pensados para acompañarte en el
            cuidado de tu salud, con atención profesional, cercana y de
            confianza.
          </p>
        </div>

        <div className="especialidades-grid">
          {especialidades.map((item) => (
            <article
              key={item.titulo}
              className={`especialidad-card ${
                item.destacado ? "especialidad-card-destacada" : ""
              }`}
            >
              <div className="especialidad-icono">
                <span className="material-symbols-outlined">{item.icono}</span>
              </div>

              <div>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesInfo;
