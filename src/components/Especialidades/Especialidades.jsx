import Button from "../../components/Button/Button";
import veterinarios from "../../assets/veterinarios.jpg";
import pediatriocos from "../../assets/pediatricos.jpg";
import dermatologicos from "../../assets/dermatologicos.jpg";
import suplementos from "../../assets/suplementos.jpg";
import menopausia from "../../assets/menopausia.jpg";
import fertilidad from "../../assets/fertilidad.jpg";

import imgEspecialidades from "../../assets/especialidades.png";
import "./Especialidades.css";
import { useEffect } from "react";
/*
const especialidades = [
  {
    eyebrow: "Especialidades",
    title: "Pediátricos",
    text: [
"En Farmacia Fiorilli JR nos dedicamos a la elaboración de productos pediátricos, ofreciendo soluciones seguras y eficaces adaptadas a las necesidades específicas de cada paciente. ",

"Debido a  que muchos medicamentos  dentro de la industria farmacéutica  no se encuentran disponibles en presentaciones adecuadas para niños, desarrollamos fórmulas magistrales personalizadas para cada caso en específico.",
    ],
    products : [
      "Soluciones pediátricas",
      "Suspensiones orales",
      "Jarabes magistrales",
      "Cápsulas pediátricas",
      "Geles de uso tópico",
      "Cremas medicinales",
      "Pomadas pediátricas",
      "Ungüentos dermatológicos",
      "Polvos magistrales ",
      "Gotas orales ",
      "Pastas tópicas",
      "Fórmulas saborizadas personalizadas",

    ],
    image: pediatriocos,
    alt: "Pediátricos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Dermatológicos",
    text: [
      "La piel es un órgano de gran sensibilidad y complejidad, que necesita soluciones específicas y cuidadosamente adaptadas a cada caso particular . En Farmacia Fiorilli JR, nos dedicamos a la elaboración de preparados dermatológicos personalizados, pensados específicamente para  brindar una  respuesta  efectivas a las distintas necesidades de nuestros pacientes.",
      "Elaboramos una amplia variedad de formas farmacéuticas de uso tópico, como cremas, geles, lociones, pomadas y soluciones, seleccionando de manera precisa los componentes más adecuados para cada tratamiento.",
      "Cada preparación se realiza de forma individual, teniendo en cuenta el tipo de piel y la afección a tratar, con el objetivo de ofrecer productos de alta calidad, seguridad y resultados confiables , para cada situación especifica . ",
    ],
     products : [
      "Cremas",
      "Geles tópicos",
      "Lociones capilares",
      "Sérums dermatológicos ",
      "Emulsiones tópicas",
      "Pomadas magistrales",
      "Soluciones cutáneas",
      "Espumas dermatológicas",
      "Máscaras faciales",
      "Roll-ons tópicos",
      "Ungüentos dermatológicos",
      "Tónicos cutáneos",
      "Exfoliantes tópicos",
      "Cremigeles",
      "Aceites dermatológicos",
      "Pastas tópicas medicinales",
    ],
    image: dermatologicos,
    alt: "Dermatológicos",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Especialidades",
    title: "Suplementos Alimenticios",
    text: [
"Los suplementos son un apoyo fundamental para complementar la alimentación y contribuir al bienestar general del organismo. En Farmacia Fiorilli JR ofrecemos asesoramiento personalizado para ayudarte a elegir las opciones más adecuadas según tus objetivos y necesidades.",

"Contamos con una amplia variedad de suplementos que pueden contribuir al aporte de vitaminas, minerales, proteínas y otros nutrientes esenciales, especialmente en situaciones de desgaste físico, estrés, requerimientos específicos o estilos de vida exigentes.",
"Cada recomendación se realiza de forma individual, considerando el estado de salud, la dieta y los objetivos de cada persona, con el fin de promover un uso responsable, seguro y eficaz." 
   ],
     products : [
      "Cápsulas para la caída del cabello",
      "Fórmula regeneradora para articulaciones",
      "Complejo fortalecedor muscular y antiestrés",
      "Cápsulas energizantes",
      "Fórmula anticelulítica en cápsulas",
      "Complemento antioxidante",
      "Preparado antiedad",
      "Suplementos para el  refuerzo inmunológico",
      "Fórmula para mejorar el descanso",
      "Complejo para la concentración y el rendimiento mental",
      "Preparados nutricionales para deportistas",

    ],
    image: suplementos,
    alt: "Suplementos y Nutracéuticos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Fertilidad y Maternidad",
    text: [
"Los preparados magistrales permiten acompañar de manera personalizada las distintas etapas de la fertilidad, el embarazo y la maternidad. Cada tratamiento puede adaptarse específicamente a las necesidades de la paciente, ajustando dosis, combinaciones y formas farmacéuticas para lograr una mejor tolerancia y adherencia terapéutica.",   
    ],
     products : [
      "Óvulos de progesterona",
      "Cremas hormonales transdérmicas",
      "Cápsulas de mioinositol y ácido fólico",
      "Soluciones orales vitamínicas prenatales",
      "Cápsulas de omega 3",
      "Fórmulas magistrales para náuseas del embarazo",
      "Cápsulas de hierro y minerales personalizados",
      "Suplementos hormonales individualizados",
      "Lociones tópicas para prevención de estrías",
      "Cápsulas de magnesio y calcio",
      "Preparados galénicos para lactancia y bienestar materno",

    ],
    image: fertilidad,
    alt: "Fertilidad",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Especialidades",
    title: "Preparados Fitoterapéuticos",
    text: [
"Los preparados magistrales de origen natural representan una alternativa terapéutica personalizada, elaborada a partir de extractos vegetales y componentes seleccionados por su calidad, seguridad y eficacia. Gracias a la formulación individualizada, es posible adaptar cada preparación a las necesidades específicas de cada paciente, ajustando dosis, combinaciones y formas farmacéuticas según cada tratamiento.",
"Los productos naturales se destacan por su buena tolerancia y por presentar, en muchos casos, una menor incidencia de efectos adversos, convirtiéndose en una opción complementaria dentro de distintos abordajes médicos. Además, permiten ofrecer terapias más flexibles y adaptadas a quienes buscan alternativas medicinales de origen natural para el cuidado integral de la salud.",
"Estas formulaciones pueden elaborarse en diferentes presentaciones, como cápsulas, gotas medicinales, tisanas, extractos vegetales, comprimidos o polvos, brindando soluciones terapéuticas prácticas, seguras e individualizadas.",    ],
     products: [
  "Inmunoestimulantes",
  "Fortalecedores de musculos y articulaciones",
  "Regeneradores de hueso",
  "Antioxidantes",
  "Sedantes",
  "Concentración",
  "Antidepresivos",
  "Estrogénicas",
  "Tranquilizantes",
  "Energizantes",
  "Metabólicas",
  "Tisana sedante",
  "Tisana antiacida",
  "Tisana bronquial",
  "Tisana circulatoria",
  "Tisana hepatica",
  "Tisana diuretica",
  "Tisana antihipertensiva",
  "Tisana antirreumatica",
  "Tisana adelgazante",
  "Tisana laxante",
  "Hierbas vegetales",
  "Gotas sedantes",
  "Gotas circulatorias",
  "Gotas hepaticas",
  "Gotas inmunoestimulantes",
  "Gotas depurativas antioxidantes",
  "Flores de bach",
],
    image: menopausia,
    alt: "Climaterio, menopausia y sexualidad",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Veterinarios",
    text: [
      "Es importante recordar que, para brindar el mejor cuidado posible a las mascotas, estas deben recibir una atención farmacoterapéutica de la más alta calidad.",
      "Si bien los medicamentos industriales cubren un amplio espectro de patologías, existen situaciones particulares en las que resulta necesario recurrir a la formulación magistral veterinaria. La individualización del tratamiento permite adaptar la terapia a las necesidades específicas de cada animal, optimizando su eficacia y seguridad.",
      "Entre los beneficios de esta personalización se incluyen el ajuste preciso de la dosis, la modificación de excipientes, la mejora de las características organolépticas para facilitar la administración, así como la posibilidad de tratar patologías sin alternativas comerciales disponibles o de emplear formas farmacéuticas más adecuadas para cada caso.",
      "Estos preparados se elaboran con dosis ajustadas según el peso, la especie y la edad del animal, garantizando un tratamiento más preciso, seguro y adaptado a sus requerimientos particulares.",
    ],
     products : [
      "Soluciones orales veterinarias",
      "Cápsulas veterinarias ",
      "Cremas tópicas",
      "Pomadas medicinales",
      "Ungüentos dermatológicos",
      "Polvos de uso veterinario",
      "Geles óticos",
      "Lociones tópicas",
      "Pastas orales",
      "Shampoos terapéuticos",
      "Suplementos nutricionales",

    ],
    image: veterinarios,
    alt: "Veterinarios",
    variant: "soft",
    reverse: true,
  },
];
*/
const especialidades = [
  {
    eyebrow: "Especialidades",
    title: "Pediátricos",
    text: [
      "En Farmacia Fiorilli JR nos dedicamos a la elaboración de productos pediátricos, ofreciendo soluciones seguras y eficaces adaptadas a las necesidades específicas de cada paciente. ",

      "Debido a que muchos medicamentos dentro de la industria farmacéutica no se encuentran disponibles en presentaciones adecuadas para niños, desarrollamos fórmulas magistrales personalizadas para cada caso en específico.",
    ],
    products: [
      "Soluciones pediátricas",
      "Suspensiones orales",
      "Jarabes magistrales",
      "Cápsulas pediátricas",
      "Geles de uso tópico",
      "Cremas medicinales",
      "Pomadas pediátricas",
      "Ungüentos dermatológicos",
      "Polvos magistrales ",
      "Gotas orales ",
      "Pastas tópicas",
      "Fórmulas saborizadas personalizadas",
    ],
    image: pediatriocos,
    alt: "Pediátricos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Dermatológicos",
    text: [
      "La piel es un órgano de gran sensibilidad y complejidad, que necesita soluciones específicas y cuidadosamente adaptadas a cada caso particular. En Farmacia Fiorilli JR, nos dedicamos a la elaboración de preparados dermatológicos personalizados, pensados específicamente para brindar una respuesta efectiva a las distintas necesidades de nuestros pacientes.",
      "Elaboramos una amplia variedad de formas farmacéuticas de uso tópico, como cremas, geles, lociones, pomadas y soluciones, seleccionando de manera precisa los componentes más adecuados para cada tratamiento.",
      "Cada preparación se realiza de forma individual, teniendo en cuenta el tipo de piel y la afección a tratar, con el objetivo de ofrecer productos de alta calidad, seguridad y resultados confiables, para cada situación específica. ",
    ],
    products: [
      "Cremas",
      "Geles tópicos",
      "Lociones capilares",
      "Sérums dermatológicos ",
      "Emulsiones tópicas",
      "Pomadas magistrales",
      "Soluciones cutáneas",
      "Espumas dermatológicas",
      "Máscaras faciales",
      "Roll-ons tópicos",
      "Ungüentos dermatológicos",
      "Tónicos cutáneos",
      "Exfoliantes tópicos",
      "Cremigeles",
      "Aceites dermatológicos",
      "Pastas tópicas medicinales",
    ],
    image: dermatologicos,
    alt: "Dermatológicos",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Especialidades",
    title: "Suplementos Alimenticios",
    text: [
      "Los suplementos son un apoyo fundamental para complementar la alimentación y contribuir al bienestar general del organismo. En Farmacia Fiorilli JR ofrecemos asesoramiento personalizado para ayudarte a elegir las opciones más adecuadas según tus objetivos y necesidades.",

      "Contamos con una amplia variedad de suplementos que pueden contribuir al aporte de vitaminas, minerales, proteínas y otros nutrientes esenciales, especialmente en situaciones de desgaste físico, estrés, requerimientos específicos o estilos de vida exigentes.",
      "Cada recomendación se realiza de forma individual, considerando el estado de salud, la dieta y los objetivos de cada persona, con el fin de promover un uso responsable, seguro y eficaz.",
    ],
    products: [
      "Cápsulas para la caída del cabello",
      "Fórmula regeneradora para articulaciones",
      "Complejo fortalecedor muscular y antiestrés",
      "Cápsulas energizantes",
      "Fórmula anticelulítica en cápsulas",
      "Complemento antioxidante",
      "Preparado antiedad",
      "Suplementos para el refuerzo inmunológico",
      "Fórmula para mejorar el descanso",
      "Complejo para la concentración y el rendimiento mental",
      "Preparados nutricionales para deportistas",
    ],
    image: suplementos,
    alt: "Suplementos y Nutracéuticos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Fertilidad y Maternidad",
    text: [
      "Los preparados magistrales permiten acompañar de manera personalizada las distintas etapas de la fertilidad, el embarazo y la maternidad. Cada tratamiento puede adaptarse específicamente a las necesidades de la paciente, ajustando dosis, combinaciones y formas farmacéuticas para lograr una mejor tolerancia y adherencia terapéutica.",
    ],
    products: [
      "Óvulos de progesterona",
      "Cremas hormonales transdérmicas",
      "Cápsulas de mioinositol y ácido fólico",
      "Soluciones orales vitamínicas prenatales",
      "Cápsulas de omega 3",
      "Fórmulas magistrales para náuseas del embarazo",
      "Cápsulas de hierro y minerales personalizados",
      "Suplementos hormonales individualizados",
      "Lociones tópicas para prevención de estrías",
      "Cápsulas de magnesio y calcio",
      "Preparados galénicos para lactancia y bienestar materno",
    ],
    image: fertilidad,
    alt: "Fertilidad",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Especialidades",
    title: "Preparados Fitoterapéuticos",
    text: [
      "Los preparados magistrales de origen natural representan una alternativa terapéutica personalizada, elaborada a partir de extractos vegetales y componentes seleccionados por su calidad, seguridad y eficacia. Gracias a la formulación individualizada, es posible adaptar cada preparación a las necesidades específicas de cada paciente, ajustando dosis, combinaciones y formas farmacéuticas según cada tratamiento.",
      "Los productos naturales se destacan por su buena tolerancia y por presentar, en muchos casos, una menor incidencia de efectos adversos, convirtiéndose en una opción complementaria dentro de distintos abordajes médicos. Además, permiten ofrecer terapias más flexibles y adaptadas a quienes buscan alternativas medicinales de origen natural para el cuidado integral de la salud.",
      "Estas formulaciones pueden elaborarse en diferentes presentaciones, como cápsulas, gotas medicinales, tisanas, extractos vegetales, comprimidos o polvos, brindando soluciones terapéuticas prácticas, seguras e individualizadas.",
    ],
    products: [
      "Inmunoestimulantes",
      "Fortalecedores de músculos y articulaciones",
      "Regeneradores de hueso",
      "Antioxidantes",
      "Sedantes",
      "Concentración",
      "Antidepresivos",
      "Estrogénicas",
      "Tranquilizantes",
      "Energizantes",
      "Metabólicas",
      "Tisana sedante",
      "Tisana antiácida",
      "Tisana bronquial",
      "Tisana circulatoria",
      "Tisana hepática",
      "Tisana diurética",
      "Tisana antihipertensiva",
      "Tisana antirreumática",
      "Tisana adelgazante",
      "Tisana laxante",
      "Hierbas vegetales",
      "Gotas sedantes",
      "Gotas circulatorias",
      "Gotas hepáticas",
      "Gotas inmunoestimulantes",
      "Gotas depurativas antioxidantes",
      "Flores de Bach",
    ],
    image: menopausia,
    alt: "Climaterio, menopausia y sexualidad",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Veterinarios",
    text: [
      "Es importante recordar que, para brindar el mejor cuidado posible a las mascotas, estas deben recibir una atención farmacoterapéutica de la más alta calidad.",
      "Si bien los medicamentos industriales cubren un amplio espectro de patologías, existen situaciones particulares en las que resulta necesario recurrir a la formulación magistral veterinaria. La individualización del tratamiento permite adaptar la terapia a las necesidades específicas de cada animal, optimizando su eficacia y seguridad.",
      "Entre los beneficios de esta personalización se incluyen el ajuste preciso de la dosis, la modificación de excipientes, la mejora de las características organolépticas para facilitar la administración, así como la posibilidad de tratar patologías sin alternativas comerciales disponibles o de emplear formas farmacéuticas más adecuadas para cada caso.",
      "Estos preparados se elaboran con dosis ajustadas según el peso, la especie y la edad del animal, garantizando un tratamiento más preciso, seguro y adaptado a sus requerimientos particulares.",
    ],
    products: [
      "Soluciones orales veterinarias",
      "Cápsulas veterinarias ",
      "Cremas tópicas",
      "Pomadas medicinales",
      "Ungüentos dermatológicos",
      "Polvos de uso veterinario",
      "Geles óticos",
      "Lociones tópicas",
      "Pastas orales",
      "Shampoos terapéuticos",
      "Suplementos nutricionales",
    ],
    image: veterinarios,
    alt: "Veterinarios",
    variant: "soft",
    reverse: true,
  },
];

export default function Especialidades() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="specialties-main">
      <section className="hero-section">
        <div className="hero-background">
          <img
            className="hero-background-image"
            src={imgEspecialidades}
            alt="Farmacéutico profesional"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1
              className="especialidades-title
"
            >
              Fórmulas Magistrales
            </h1>

            <p className="hero-description">
              Es todo medicamento prescripto en una receta magistral para un
              paciente individualizado, posteriormente preparado, envasado y
              rotulado por un farmacéutico en el laboratorio de su farmacia y
              dispensado en la misma. La Formulación Magistral permite
              individualizar el tratamiento, de esta manera el medicamento se
              adapta al paciente y a sus necesidades fisiopatológicas
              particulares, lo que aporta valiosas herramientas terapéuticas
              como:
            </p>
            <ul className="especialidades-puntos">
              <li>La adaptación precisa de las dosis</li>
              <li>El diseño individualizado del vehículo</li>
              <li>
                Forma farmacéutica que mejor se ajuste a las necesidades del
                paciente
              </li>
              <li>
                Evitar la incorporación de determinados excipientes que puedan
                generar alergias o intolerancia
              </li>
              <li>Flexibilidad en el tratamiento.</li>
            </ul>
            
          </div>
        </div>
      </section>

      <div className="specialties-list">
        {especialidades.map((item) => (
          <EspecialidadSection key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}

function EspecialidadSection({
  eyebrow,
  title,
  text,
  products,
  image,
  alt,
  variant = "light",
  reverse = false,
}) {
  return (
    <section className={`specialty-section specialty-section-${variant}`}>
      <div
        className={`specialty-container ${
          reverse ? "specialty-container-reverse" : ""
        }`}
      >
        <div className="specialty-text">
          <span className="specialty-eyebrow">{eyebrow}</span>

          <h2>{title}</h2>

          <div className="specialty-paragraphs">
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <ul className="specialty-capsules">
  {products.map((paragraph, index) => (
    <li className="specialty-capsule" key={index}>
      <span className="specialty-capsule-icon">✓</span>
      <span>{paragraph}</span>
    </li>
  ))}
</ul>

          
        </div>

        <div className="specialty-media">
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}
