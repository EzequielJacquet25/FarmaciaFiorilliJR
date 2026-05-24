import "./FAQSection.css";
import FAQItem from "./FAQItem";
import Videos from "../Video/Videos";

export default function FAQSection() {
  const faqData = [
    {
      question: "¿Qué es un preparado magistral?",
      answer: `Es un medicamento elaborado en la farmacia por el farmacéutico,
                siguiendo las indicaciones de una receta médica o, en algunos
                casos, formulado bajo su propio criterio profesional, siempre
                conforme a las normas de “Buenas Prácticas de Preparación en
                Farmacia”.
                Estos preparados se realizan de forma específica para cada
                paciente, según sus necesidades particulares.`,
    },

    {
      question: "¿Qué beneficios tienen los preparados magistrales?",
      answer: `Representan una alternativa eficaz para aquellos pacientes que
                requieren tratamientos personalizados.

Se elaboran bajo estricta supervisión profesional, lo que
                garantiza su calidad y seguridad.

Además, suelen ser accesibles desde el punto de vista económico.`,
    },

    {
      question:
        "¿Cómo usar correctamente un preparado magistral de uso externo?",
      answer: `Cuando utilice un preparado magistral de uso externo elaborado
                en farmacia, es fundamental seguir cuidadosamente las
                indicaciones del profesional de salud y respetar las condiciones
                de aplicación.  Es fundamental aplicarlo sobre la piel limpia y seca, para
                evitar infecciones o irritaciones. Se recomienda realizar una
                prueba de sensibilidad previa: aplicar una pequeña cantidad en
                una zona reducida y observar la reacción. Evite el contacto con mucosas, ojos o heridas abiertas,
                a menos que el producto esté específicamente indicado para
                dichas zonas. Lave y seque bien la piel antes de aplicar el
                preparado, y utilice solo la cantidad recomendada.
                Conserve el producto en un lugar fresco y seco, protegido de
                  la luz directa, y conserve fuera del alcance de los niños para evitar accidentes.
                  Para dosificar correctamente, se puede usar la regla de la
                "punta del dedo" (FTU), que consiste en aplicar una pequeña
                cantidad y distribuirla de manera uniforme sobre la zona a
                tratar hasta cubrirla por completo.
                Es importante respetar los horarios, el modo de uso y la
                duración del tratamiento indicados por el profesional de salud,
                para evitar efectos adversos.
                Recuerde una vez
                “completado su tratamiento deseche el resto”. No guarde
                el preparado para futuros usos sin indicación médica, ya que los
                productos magistrales tienen una estabilidad limitada y están
                diseñados para un tratamiento específico.
                Ante cualquier cambio en el color, olor o textura del preparado,
                o si presenta irritación o reacción adversa, suspenda su uso y
                consulte al farmacéutico o médico.`,
    },

    {
      question:
        "¿Qué diferencia existe entre un preparado de uso tópico y un maquillaje?",
      answer: `Los productos cosméticos están formulados para mejorar la
                apariencia, higiene y protección de la piel. Actúan
                principalmente en las capas superficiales (como la epidermis),
                sin generar una absorción sistémica significativa.
                Sin embargo, su uso inadecuado o prolongado puede provocar
                reacciones como prurito o enrojecimiento. Su eficacia depende de
                factores como el tipo de vehículo, el pH, la integridad de la
                piel y la presencia de agentes que faciliten la absorción.
                En cambio, los preparados tópicos tienen un fin terapéutico.
                Contienen principios activos farmacológicos que pueden penetrar
                más profundamente en la piel e incluso alcanzar el torrente
                sanguíneo, logrando efectos sistémicos si así se requiere. Su
                formulación está orientada a asegurar una absorción eficaz según
                la necesidad clínica.`,
    },

    {
      question: "¿Cuándo es recomendable usar un preparado magistral?",
      answer: `Es recomendable cuando no existe un medicamento comercial que
                tenga la dosis, forma farmacéutica o excipientes adecuados para
                el paciente. También se utiliza en casos en los que un fármaco
                específico no se produce a nivel industrial o es de difícil
                acceso. Los preparados magistrales permiten ofrecer una
                alternativa eficaz, tanto desde el punto de vista farmacológico
                como económico, ya que en muchos casos resultan más accesibles
                que los medicamentos comerciales y ofrecen los mismos
                beneficios. Además, brindan acceso a tratamientos
                personalizados.`,
    },

    {
      question: "¿Quién elabora los preparados magistrales?",
      answer: `Son elaborados por el farmacéutico, profesional experto en
                medicamentos, en un laboratorio habilitado que cumple con
                condiciones de higiene, temperatura y humedad controladas. La
                preparación se realiza conforme a las normas de Buenas Prácticas
                de Preparación en Farmacia (BPPF), utilizando materias primas y
                equipos certificados, con documentación adecuada y bajo
                supervisión técnica.`,
    },

    {
      question:
        "¿Cuál es la diferencia entre un preparado magistral y un medicamento industrializado?",
      answer: `El medicamento industrializado se fabrica en serie, con dosis
                fijas, envases estandarizados y prospecto general, destinado a
                una distribución masiva. En cambio, el preparado magistral se
                realiza a medida, adaptado a las necesidades específicas de un
                paciente, con dosis, excipientes y formas farmacéuticas
                personalizadas. Su trazabilidad y farmacovigilancia se registran
                de manera individual en el libro recetario. Por otro lado, los
                preparados oficiales son fórmulas estandarizadas incluidas en
                formularios oficiales y pueden dispensarse sin receta médica, a
                diferencia de los magistrales, que requieren prescripción.`,
    },

    {
      question: "¿Cuánto tiempo tarda en prepararse un preparado magistral?",
      answer: `El tiempo de elaboración varía según la complejidad de la
                fórmula. Puede ir desde unas pocas horas hasta 2 o 3 días
                hábiles para formulaciones más elaboradas o que requieran
                procedimientos especiales.`,
    },

    {
      question: "¿Cómo se garantiza la calidad de un preparado magistral?",
      answer: `Se implementa un sistema de control exhaustivo que abarca desde
                la recepción de materias primas hasta la entrega del producto al
                paciente. Las instalaciones, los equipos y las condiciones
                ambientales deben cumplir con las normas establecidas por la
                ANMAT y las Buenas Prácticas de Preparación. Se utilizan
                materias primas con certificados de calidad y se aplican ensayos
                analíticos internos cuando es necesario. Cada lote se registra
                con número, fecha, composición, y responsable técnico en el
                libro recetario. El farmacéutico también informa al paciente
                sobre el uso correcto, condiciones de conservación, fecha de
                vencimiento y posibles reacciones adversas.`,
    },

    {
      question: "¿Qué tipos de preparados magistrales existen?",
      answer: ` Existen diversas formas farmacéuticas, según la vía de
                administración:

- Tópicos: cremas, geles, pomadas
- Orales: jarabes, cápsulas, soluciones, polvos.
- Otros: Inyectables, oftálmicos, vaginales, rectales, supositorios.

También se preparan productos como champús, lociones, tónicos,
                  soluciones estériles y productos para uso veterinario. Cada
                  forma requiere técnicas específicas de elaboración, control de
                  calidad y envasado. Los laboratorios se clasifican en niveles
                  I, II y III según la complejidad, especialmente si se trata de
                  formas estériles. El farmacéutico selecciona la presentación
                  más adecuada según la patología y las características del
                  paciente.`,
    },

    {
      question: "¿Puedo pedir un preparado magistral sin receta médica?",
      answer: ` En algunos casos, sí. Siempre y cuando el preparado no contenga
                sustancias controladas o restringidas, puede ser solicitado sin
                receta médica. Sin embargo, es recomendable contar con la
                indicación de un profesional de la salud para asegurar que el
                tratamiento sea adecuado y seguro para el paciente.`,
    },

    {
      question: " ¿Qué pasa si tengo alergia a algún componente del preparado?",
      answer: `Es fundamental informar al farmacéutico sobre cualquier alergia
                o intolerancia antes de la elaboración. Esto permite adaptar la
                fórmula, evitando excipientes alérgenos. El farmacéutico puede
                reemplazar ingredientes por equivalentes no irritantes o
                eliminar aditivos como colorantes, lactosa u otros componentes
                potencialmente alergénicos. También puede sugerir realizar una
                prueba de sensibilidad (por ejemplo, un parche cutáneo) antes
                del uso completo. Si se presenta una reacción adversa, debe
                suspenderse el tratamiento y consultar al médico para reformular
                el preparado o buscar una alternativa.`,
    },

    {
      question: "¿Los preparados magistrales tienen fecha de vencimiento?",
      answer: `Sí, todos los preparados magistrales tienen una fecha de
                vencimiento. Esta depende de la forma farmacéutica, los
                principios activos y excipientes utilizados, así como de la
                estabilidad química y microbiológica del producto. El
                farmacéutico debe informar al paciente sobre dicha fecha, junto
                con las condiciones de conservación adecuadas.`,
    },
  ];

  return (
    <section className="faq-section flex flex-md-row flex-col alignStart justifyCenter">
      <div className="faq-container width-100 flex flex-col gap-2 padding-1">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className="flex center width-100 height-100 sticky top-100 padding-1">
        <Videos video={"/compromiso.mp4"}></Videos>
      </div>
    </section>
  );
}
