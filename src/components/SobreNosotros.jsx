import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import logo from "../assets/logoFarmaciaFiorilliJR.png";
import { useEffect, useState } from "react";
import Videos from "./Videos";
const SobreNosotros = () => {
  const [ventana, setVentana] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setVentana(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // cuando el 20% del elemento esté visible
    );

    document.querySelectorAll(".aparece-desde-izquierda").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="secctionMargin container">
      <Container className="my-5">
        <h1>Sobre Nostros</h1>
        <Tabs
          defaultActiveKey="QuienesSomos"
          fill={ventana > 500}
          justify={ventana <= 500}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="QuienesSomos" title="Quienes Somos">
            <div>
              <h1>Quienes somos?</h1>
            </div>
            <div className="d-flex flex-column   flex-md-row justify-content-center align-items-center gap-4 ">
              <Videos video={"quienes-somos.mp4"} />
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <div>
                  <p>
                    Somos una <b>empresa familiar</b> ubicada en la calle
                    Salvador Curutchet 2418, de la localidad Castelar, Partido
                    de Morón, Provincia de Buenos Aires , comprometida con el
                    cuidado de la salud. Nos especializamos en la elaboración de
                    preparados magistrales individualizados, brindando productos
                    seguros, de calidad y a precios económicos.
                  </p>
                  <p>
                    Ofrecemos atención personalizada, asesoramiento profesional
                    y servicios como toma de presión arterial, control de
                    glucemia, atención de gran variedad de obras sociales: PAMI,
                    IOMA, Policía Federal, MEDIFE, OMINT, SANCOR, AVALIAN, CASA,
                    AMEBPBA y AMFFA, entre otras.
                  </p>
                  <p>
                    Nuestro equipo está en constante capacitación y trabajamos
                    con tecnología actualizada. Enfocados en seguir creciendo
                    como institución y en fortalecer nuestro rol como farmacia
                    escuela, formando a las nuevas generaciones de profesionales
                    farmacéuticos.
                  </p>
                  <p>
                    Una farmacia cercana, confiable y en permanente evolución al
                    servicio de nuestra comunidad.
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Filosofia" title="Filosofia">
            <div>
              <h1>Filosofia</h1>
            </div>
            <div className="d-flex flex-column  flex-md-row justify-content-center align-items-center gap-4">
              <Videos video={"filosofia.mp4"} />
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div>
                  <p>
                    En <em>Farmacia JR Fiorilli</em> creemos en un modelo de
                    farmacia centrado en las personas. Nuestra principal
                    especialidad es la elaboración de preparados magistrales, lo
                    que nos permite ofrecer soluciones personalizadas, adaptadas
                    a las necesidades específicas de cada paciente , con precios
                    accesibles y económicos . Trabajamos con mejores estándares
                    de calidad y seguridad, utilizando materias primas
                    certificadas, procesos controlados y verificados y con
                    tecnología actualizada.
                  </p>
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <span>✅</span> La <b>calidad</b> en cada uno de nuestros
                      productos y servicios brindados .
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <span>✅</span> El <b>compromiso con la salud pública</b>{" "}
                      y el bienestar de nuestros pacientes.
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <span>✅</span> La{" "}
                      <b>honestidad, el respeto y la amabilidad</b> en el trato
                      diario con quienes nos eligen.
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <span>✅</span> La <b>vocación de servicio</b>, ayudando
                      siempre de la mejor forma posible, con cercanía y
                      responsabilidad.
                    </li>
                  </ul>
                  <p>
                    Siempre buscamos seguir evolucionado y mejorando a medida
                    que pasa el tiempo , manteniéndonos siempre actualizados en
                    todos los temas relacionados con la salud y el bienestar
                    ,manteniendo siempre una formación continua y fortaleciendo
                    cada aspecto posible dentro de nuestra farmacia . Buscando
                    no solo mejor nuestros servicios y atención al publico ,
                    sino también contribuir de forma activa con el desarrollo y
                    bienestar del publico y de los futuros farmacéuticos.{" "}
                  </p>
                  <p>
                    Como farmacia escuela, también nos comprometemos con la
                    formación de las nuevas generaciones de profesionales,
                    compartiendo nuestro conocimiento y experiencia con quienes
                    están dando sus primeros pasos en el mundo laboral .
                  </p>
                  <p>
                    En definitiva, <em>Farmacia JR Fiorilli</em> es más que un
                    lugar donde adquirir medicamentos: es un espacio de
                    confianza, cuidado y compromiso, donde cada persona es
                    atendida con dedicación, conocimiento y calidez, accediendo
                    a productos de calidad y servicios de excelencia, siempre a
                    precios económicos.
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Compromiso" title="Compromiso">
            <div>
              <h1>Compromiso</h1>
            </div>
            <div className="d-flex  flex-column flex-md-row justify-content-center align-items-center gap-4 ">
              <Videos video={"compromiso.mp4"} />
              <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
                <div>
                  <p>
                    En <em>Farmacia JR Fiorilli</em> estamos comprometidos en
                    acompañar a nuestros pacientes a lo largo de sus
                    tratamientos, proporcionando productos seguros y de alta
                    calidad. Este compromiso se sostiene en una atención
                    personalizada, un equipo de profesionales bien capacitados y
                    procesos de elaboración que garantizan la máxima seguridad ,
                    calidad y confiabilidad .
                  </p>
                  <p>
                    Como una institución enfocada en el crecimiento y la mejora
                    continua de los servicios y productos prestados al público .
                    Constantemente estamos incorporando nuevas tecnologías ,
                    técnicas , servicios , para fortalecer nuestras capacidades
                    y seguir ofreciendo la mejor atención posible a quienes
                    depositan su confianza en nosotros. Nuestra visión es
                    consolidarnos como una farmacia moderna, accesible y cercana
                    al público en general , preparada para afrontar los desafíos
                    futuros con responsabilidad e innovación.
                  </p>
                  <p>
                    Nuestros planeas a futuros están centrados en seguir
                    creciendo como institución fortalecer nuestro rol como
                    centro de atención de salud y desarrollar nuevas
                    herramientas que permitan brindar un mejor servicio
                    integral.
                  </p>
                  <p>
                    Más allá de la dispensa de medicamentos, aspiramos a ser un
                    ejemplo a seguir en lo que se refiere a cuidados de la
                    salud, guiados por la excelencia, la ética profesional y el
                    compromiso genuino con nuestros pacientes.
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Trayectoria" title="Trayectoria">
            <div>
              <h1>Trayectoria</h1>
            </div>
            <div className="d-flex flex-column-reverse  flex-md-row justify-content-center align-items-center gap-4 ">
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div>
                  <p>
                    La <em>Farmacia JR Fiorilli</em> fue fundada el lunes 8 de
                    enero de 1996 como una pequeña empresa familiar. Surgió como
                    sociedad entre la farmacéutica Mónica Beatriz Fiorilli y el
                    señor Raúl Jacquet. Desde sus inicios, el establecimiento,
                    ubicado en la calle Curutchet 2418, operó bajo el nombre de
                    <em>Farmacia JR</em>, con el señor Raúl Alejandro Jacquet
                    —esposo de la farmacéutica— desempeñándose como gerente
                    general.
                  </p>
                  <p>
                    Desde el comienzo, la farmacia se destacó por ofrecer una
                    atención personalizada de excelencia, junto con la
                    elaboración de preparados magistrales individualizados,
                    cumpliendo siempre con los más altos estándares de calidad y
                    seguridad. También se caracterizó por ofrecer precios
                    accesibles y una amplia variedad de servicios farmacéuticos,
                    como toma de presión arterial, asesoramiento sobre control
                    de glucemia y atención a obras sociales.
                  </p>
                  <p>
                    A lo largo de su trayectoria, la farmacia ha evolucionado
                    constantemente, incorporando nuevas tecnologías, técnicas
                    actualizadas en el ámbito de la salud y profesionales
                    altamente capacitados. Todo ello con el objetivo de seguir
                    creciendo y mejorando tanto la calidad de atención como los
                    servicios brindados.
                  </p>
                  <p>
                    En marzo de 2017, la farmacéutica Mónica Beatriz Fiorilli
                    asumió el cargo de directora técnica y el establecimiento
                    pasó a denominarse <em>Farmacia JR Fiorilli</em>. Ese mismo
                    año, la Dra. Fiorilli se incorporó al consejo directivo de
                    la filial Castelar, Ituzaingó y Morón del Colegio de
                    Farmacéuticos, cargo que continúa ejerciendo en la
                    actualidad , manteniendo siempre una cordial relación entre
                    la
                    <em>Farmacia JR Fiorilli</em> y el colegio de farmacéuticos
                    de Morón .
                  </p>
                  <p>
                    En 2022, la farmacia dio un paso más en su compromiso con la
                    comunidad, convirtiéndose en <em>farmacia escuela</em>.
                    Desde entonces, colabora activamente en la formación de
                    futuros profesionales de la salud, brindando capacitación a
                    estudiantes de la Universidad de Morón que cursan la materia
                    <em>Prácticas Profesionales Externas</em>.
                  </p>
                  <p>
                    Hoy, <em>Farmacia JR Fiorilli</em> continúa firmemente con
                    su objetivo primario de ser una institución comprometida con
                    la salud, ofreciendo productos accesibles, atención
                    personalizada, cobertura de obras sociales y una fuerte
                    vocación docente.
                  </p>
                </div>
                <img
                  src={logo}
                  alt="Logo"
                  className="aparece-desde-izquierda"
                />
              </div>
            </div>
          </Tab>

          <Tab eventKey="Objetivos" title="Nuestros Objetivos">
            <div>
              <h1>Nuestros Objetivos</h1>
            </div>
            <div className="d-flex flex-column-reverse  flex-md-row justify-content-center align-items-center gap-4 ">
              <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
                <div>
                  <p>
                    En <em>Farmacia JR Fiorilli</em> trabajamos día a día
                    guiados por una serie de objetivos que reflejan nuestro
                    compromiso con la salud, la calidad y la mejora continua.
                    Estos son los pilares que orientan nuestra labor:
                  </p>
                  <ol>
                    <li>
                      <h5>Brindar atención personalizada y de calidad</h5>
                      Atender a cada paciente de manera individual, con respeto
                      y profesionalismo, ofreciendo soluciones adaptadas a sus
                      necesidades.
                    </li>
                    <li>
                      <h5>Garantizar productos seguros y eficaces</h5>
                      Elaborar preparados magistrales individualizados siguiendo
                      con estándares de calidad y seguridad establecidos en las
                      normas de buenas practicas en farmacia.
                    </li>
                    <li>
                      <h5>Ofrecer precios accesibles y equitativos</h5>
                      Asegurar el acceso a tratamientos de calidad mediante una
                      política de precios económicos que contemple la realidad
                      de nuestros pacientes.
                    </li>
                    <li>
                      <h5>
                        Ampliar y mejorar nuestros servicios farmacéuticos
                      </h5>
                      Incluir prestaciones como toma de presión arterial,
                      control de glucosa y atención a obras sociales, buscando
                      siempre responder de forma integral a las necesidades de
                      la comunidad.
                    </li>
                    <li>
                      <h5>
                        Fomentar la actualización científica y tecnológica
                      </h5>
                      Mantenernos al día con los avances en salud, incorporando
                      nuevas tecnologías y métodos que optimicen nuestros
                      procesos y servicios.
                    </li>
                    <li>
                      <h5>
                        Consolidarnos como una farmacia escuela de referencia
                      </h5>
                      Fortalecer nuestro rol en la formación de futuros
                      profesionales, ofreciendo un espacio de aprendizaje
                      práctico y comprometido con la excelencia.
                    </li>
                    <li>
                      <h5>
                        Seguir creciendo como empresa familiar e institucional
                      </h5>
                      Expandir nuestras capacidades sin perder nuestros valores
                      de origen, con una visión centrada en el desarrollo
                      sustentable, ético y humano.
                    </li>
                  </ol>
                </div>
                <img
                  src={logo}
                  alt="Logo"
                  className="aparece-desde-izquierda"
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default SobreNosotros;
