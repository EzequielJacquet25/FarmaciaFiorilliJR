import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Preparados from "./components/Preparados/Preparados";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound";
import Recomendaciones from "./components/Recomendaciones/Recomendaciones";
import BotonesChat from "./components/BotonesChat/BotonesChat";
import { useEffect } from "react";
import Especialidades from "./components/Especialidades/Especialidades";
/*
const products = [
  {
    categoria: "Skin Care",
    nombre: "Agua Micelar",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Laurilpoliglucosido 5%, Crillet 4 3%,Propanotriol 3% agua conservada csp 100 ml",
    uso: "Aplicar una cantidad adecuada  del agua micelar sobre un disco de algodón y pasalo suavemente por todo el rostro para eliminar maquillaje, impurezas y exceso de grasa (no es necesario frotar). Evita el contacto directo con los ojos. Una vez aplicado se debe dejar  actuar unos minutos y luego   enjuagar con agua tibia. Se debe aplicar  sobre la piel limpia y seca, como primer paso de la rutina facial, por la mañana y/o por la noche",
    recomendaciones: `No se debe utilizar el mismo algodón en distintas zonas del rostro. Si notas enrojecimiento, ardor o picazón, suspender su uso y consulta a un profesional. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo `,
    beneficios: [
      "Ayuda a remover el maquillaje y a limpiar  la piel de forma rápida y facili.",
      "Apta para todo tipo de piel .",
      "Hidratar y suaviza la  piel. ",
      "Es el primer paso de la rutina “skin care”  , ayudando a preparar tu piel para màs cuidados.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Antiage",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Ac Hialurónico 0.5 %, Retinol 0.3%, Vit.E 0.5 %  crema base   no iónica csp 50 g",
    uso: "Primero se debe limpiar y secar la piel del rostro previamente a la aplicación de la crema , se recomienda colocar una pequeña cantidad de crema sobre el rostro y el cuello realizando  movimientos   suaves en forma circulo sobre la piel hasta que la crema se absorba por completo .Se recomienda  aplicar  especialmente en las zonas donde suelen aparecer signos de envejecimiento, como la frente, el contorno de ojos  y alrededor de los labios.",
    recomendaciones: `Evita el contacto directo con los ojos y otras mucosas ,  no aplicar la crema sobre zonas irritadas, con heridas o brotes activos  y no exceder la cantidad recomendada. Si observas enrojecimiento, ardor o irritación persistente, suspende su uso y consulta a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "	Ayuda a reducir las arrugas y las líneas de expresión ",
      "	Contribuye a mejorar la apariencia estética de la piel y a hidratarla ",
      "	Prevención del envejecimiento y deterioro .",
      "	Brinda firmeza, brillo  y elasticidad ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Nutritiva con vitamina A y E",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Vitamina A palmitato 500000 ui Vitamina E 0.05 % Alantoina 0.25% emulsión nutritiva base  csp 100 g ",
    uso: `Antes de aplicar la crema, la piel debe estar limpia y seca para ayudar a eliminar las impurezas de la misma. Luego se debe tomar una pequeña cantidad de la crema y aplicarla en el área , mediante el uso de  masajes suaves con movimientos circulares hasta que se absorba  completamente. `,
    recomendaciones: `Esta crema puede usarse tanto de día como de noche, es recomendable aplicar antes de otros productos como protectores solares para asegurar una mejor absorción de la vitamina. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Evitar aplicar sobre heridas abiertas, cortes o piel irritada. En caso de presentar irritación, enrojecimiento o ardor, suspender el uso y consultar a un profesional de la salud. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo.`,
    beneficios: [
      "Brinda una hidratación profunda y duradera de la piel.",
      "Ayuda a promover la regeneración celular y contribuye a nutrir la piel de forma directa.",
      "Reduce las cicatrices y las manchas de la piel.",
      "Protege la piel del deterioro y desgaste.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema para talones resecos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Urea 15% Lactato amonio 12 % , crema base no iónica csp 50 g",
    uso: "Antes de aplicar la crema se debe lavar los pies con agua tibia y jabón  , luego se deben secar cuidadosamente, especialmente entre los dedos y en la zona de los talones. Se recomienda aplicar una cantidad moderada de la crema en el área afectada realizando un suave masaje con movimientos circulares hasta que se absorba por completo. Para mejores resultados, es recomendable usarla por la noche, antes de acostarse.",
    recomendaciones: `Se recomienda aplicar   la crema 1 a 2 veces por día y no exceder cantidad de crema recomendada Evitar aplicar sobre heridas abiertas, cortes o piel irritada. En caso de presentar irritación, enrojecimiento o ardor, suspender el uso y consultar a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "Brinda una hidratación profunda y duradera de la piel ",
      "Ayuda a reparar la piel dañada y reseca ",
      "Evita la aparición de grietas y callos en los talones ",
      "Proporciona sensación de frescura, descanso y bienestar, reduciendo la incomodidad al caminar",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Tensora",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ DMAE 2.5% , VIT E 1% , VIT C  2% ;  Crema tensora csp 50 g ",
    uso: "Primero se debe limpiar y secar la piel del rostro previamente a la aplicación de la crema , se recomienda colocar una pequeña cantidad de crema sobre el rostro y el cuello realizando  movimientos   suaves en forma circulo sobre la piel hasta que la crema se absorba por completo .Se recomienda aplicar especialmente en las zonas donde suelen aparecer signos de envejecimiento, como la frente, el contorno de ojos  y alrededor de los labios.",
    recomendaciones: `Evita el contacto directo con los ojos y otras mucosas, no aplicar la crema sobre zonas irritadas, con heridas o brotes activos  y no exceder la cantidad recomendada. Si observas enrojecimiento, ardor o irritación persistente, suspende su uso y consulta a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Preparado únicamente para uso externo `,
    beneficios: [
      "Brinda una mejor tensión y firmeza de la piel ",
      "Brinda un aspecto juvenil y revitalizado",
      "Ayuda a facilitar la aplicación del maquillaje ",
      "Ayuda a hidratar la piel y nutrirla ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Emulsión Limpiadora",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Betaína 8% Petrolato 10% Dimeticona 1 % ",
    uso: "Aplicar una cantidad adecuada en la  cara y cuello, dejar actuar 30 segundos  y luego para ayudar a eliminar el maquillaje , impurezas y exceso de grasa en el rostro , luego  enjuagar con abundante agua tibia y secar suavemente , para luego continuar con los otros pasos de la rutina skin care ",
    recomendaciones: `Evita el contacto directo con los ojos. No aplicar sobre piel irritada o lesionada.  Si aparece enrojecimiento, picazón o ardor, suspender su uso y consulté con un profesional. Conservar el producto en un lugar fresco, seco y alejado de la luz solar directa. Mantenlo fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "Proporciona una limpieza profunda, rápida  y eficaz",
      "Mejora la textura y el aspecto de la piel de la piel",
      "Hidrata y suaviza la piel ",
      "Apta para aplicación sobre  pieles sensibles  ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Emulsión Nutritiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      " Vitamina A palmitato 500000 ui Vitamina E 0.05 % Alantoina 0.25% emulsión nutritiva csp 300 ml",
    uso: "Limpia y seca tu piel antes de aplicar la crema. Aplica una cantidad adecuada de la emulsión nutritiva y masajea suavemente hasta su absorción , se recomienda utilizarla una o dos veces al día, según sea necesario. Aplicar 1 o 2 veces por día en la zona afectada indicada para piel seca, irritaciones, quemaduras, uso externo",
    recomendaciones: `Evita el contacto con las mucosas, heridas abiertas. si observa algSuna reaccion desfavorable suspenda su uso si observas alguna reacción desfavorable como irritación , enrojecimiento o dolor . Para obtener  una hidratación profunda, aplica después del baño. Si observas enrojecimiento, ardor o irritación persistente, suspende su uso y consulta a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Preparado únicamente para uso externo`,
    beneficios: [
      "Mantiene la piel hidratada, suave y saludable ",
      "Estimula la formación de colágeno y la renovación celular, ideal para pieles secas, sensibles o irritadas.",
      "Mejora la apariencia de la piel, aportando elasticidad y previniendo la resequedad y el envejecimiento prematuro.",
      "Es una crema de rápida absorción y fácil aplicación ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Serum de Acido Hialuronico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Ac Hialurónico1.5 % serum csp 30 g",
    uso: "Limpia e hidrata tu piel antes de usar el serum usando productos como el agua micelar  .Es recomendable  aplicar 2-3 gotas de Serum en el área realizando movimientos suaves y circulares. Masajea ligeramente con las yemas de los dedos y deja que se absorba antes de aplicar otro  producto.",
    recomendaciones: `No es recomendable excederse con la cantidad de gel ni la frecuencia de aplicación de la misma. Evitar aplicar sobre heridas abiertas, cortes o piel irritada. En caso de presentar irritación, enrojecimiento o ardor, suspender el uso y consultar a un profesional de la salud. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo.`,
    beneficios: [
      "Brinda una hidratación profunda de la piel ",
      "Mejora la elasticidad ,  la firmeza  y textura de la piel ",
      "Ayuda a conseguir una piel mas suave y rejuvenecida ",
      "Estimula la producción natural de colágeno de la piel ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Tonico Facial",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Hamamelis 5%,Aloe Vera 5%, Hibisco 5 %, Agua de rosas 10 % BRUMA FACIAL csp 100 ml",
    uso: "Para obtener los mejores resultados, comienza limpiando bien tu rostro usando el agua micelar  y seca suavemente con una toalla limpia. Luego, rociar  el tónico facial a una distancia de 15 a 20 cm, asegurando una distribución uniforme sobre todo el rostro. Deja que el producto se absorba por completo de forma natural, sin frotar ni enjuagar. Una vez absorbido, continua con tu rutina aplicando el Serum o tratamiento habitual. Utilizar el  tónico facial dos veces al día, por la mañana y por la noche, como parte de tu cuidado diario.",
    recomendaciones: `Evita el contacto directo con los ojos. No aplicar sobre piel irritada o lesionada. Si aparece enrojecimiento, picazón o ardor, suspender su uso y consulté con un profesional. Conservar el producto en un lugar fresco, seco y alejado de la luz solar directa. Mantenlo fuera del alcance de los niños. Preparado únicamente para uso externo .
`,
    beneficios: [
      "Brinda una hidratación rápida y profunda de la piel",
      "Mejora el aspecto de la piel y da una luminosidad inmediata de la misma ",
      "Ayuda a rejuvenecer la piel y reducir el deterioro de la misma  ",
      "Es de rápida y fácil aplicación ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Gel para contorno de ojos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "RIGIN 3% ;Contorno de ojos  csp 15 g",
    uso: "Antes de aplicar el gel, asegúrate de limpiar y secar bien la piel del contorno de ojos. Coloca una pequeña cantidad del producto en la yema del dedo  y  aplica suavemente sobre el hueso orbital, realizando pequeños toques sin arrastrar ni frotar la piel. Extender el producto desde el lagrimal hacia la sien, siguiendo la línea natural donde suelen aparecer las arrugas de expresión. ",
    recomendaciones: `Evite aplicar sobre párpados móviles o zonas irritadas y dentro del ojo. Usar solo la cantidad recomendada, ya que el exceso puede causar molestias e irritación . Si aparece enrojecimiento, picazón o ardor, suspenda su uso y consulta a un profesional. Conservar el producto en un lugar fresco, seco y alejado de la luz solar directa. Mantenlo fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "Protege y fortalece la piel",
      "Previene y reduce las arrugas y líneas  de expresión",
      "Hidrata y suaviza la piel mejorando el aspecto  ",
      "Brinda una mayor elasticidad y firmeza de la piel  ",
    ],
    receta: false,
    video: false,
  },

  {
    categoria: "Medicamentos de uso topico",
    nombre: "Spay Antimicótico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Clotrimazol 1.5 % exipientes  , spray csp 60 ml",
    uso: `Antes de aplicar el spray , se deben  lavar los pies con agua y jabón, asegurando una correcta higiene entre los dedos. Secar completamente la zona antes de aplicar el producto. Agitar el envase y pulverizar el spray a una distancia de 10 a 15 cm sobre el área afectada, permitiendo su completa absorción antes de colocarse el calzado. Se recomienda su uso preferentemente por la noche. `,
    recomendaciones: `No aplicar en áreas sensibles la piel (rosto , genitales etc) . Suspender el uso ante signos de irritación, enrojecimiento, ardor o picazón persistente, y consultar a un profesional de la salud. Conservar el producto bien cerrado, en un lugar fresco y seco, protegido de la luz y fuera del alcance de los niños.
Preparado únicamente para uso externo. `,
    beneficios: [
      "Tiene una amplia acción contra diferentes tipos de hongos de la piel ",
      "Es una solución de rapido secado, facilitando su uso en el día a día, especialmente en la zona de los pies.",
      "Reduce eficazmente el enrojecimiento, descamación y el picor (picazón).",
      "Es de fácil y rápida aplicación ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Gel Antinflamatorio",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/Diclofenac Dietilamina 2%, Arnica 5% Gel analgésico Antiinflamatorio csp 60 g",
    uso: `Aplique el gel sobre el limpia y seca, evitando heridas, cortes o infecciones. Use entre 0.5 y 4 gramos según el tamaño del área afectada y masaje suavemente hasta que se absorba realizando movimientos circulares. Repita 2-3 veces al día, respetando las indicaciones médicas y evite lavar o exponer al agua la piel tratada durante al menos una hora. `,
    recomendaciones: `No aplique más de 8 g al día en manos, muñecas o codos, ni más de 16 g en pies, tobillos o rodillas. No aplicar bajo vendajes oclusivos . Este producto es solo para uso externo y no debe ingerirse ni aplicarse sobre mucosas. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños.`,
    beneficios: [
      "Acción Dual Potente  , el diclofenac actúa reduciendo la inflamación, mientras el árnica ayuda a disminuir el dolor y mejorar la circulación local.",
      "Es altamente efectivo para tratar contusiones, esguinces, desgarros musculares y torceduras.",
      "Ayuda a mejorar la movilidad y reducir la rigidez en articulaciones (rodillas, manos, tobillos) afectadas por osteoartritis.",
      "Fácil Aplicación y rápida acción ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Crema Antimicótica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Miconazol 2% Gentamicina0.1% Betametsona 0.1% csp30 g",
    uso: `Aplicar 1 o 2 veces por día. Lave y seque la zona antes de usar. Aplique una capa delgada y extiéndala hasta que se absorba por completo ,aplique la crema una o dos veces al día.`,
    recomendaciones: `Conservar a temperatura inferior de 40°c alejado del alcance de niños . Evite el contacto con los ojos, mucosas  . No aplicar  en zonas sensibles de la piel  como el  (rostro, párpados , zona intimas etc. ) o bajo vendajes oclusivos. Suspenda el uso si presenta reacciones adversas  , como irritación , dolor , enrojecimiento . Preparado indicado únicamente para uso externo 
`,
    beneficios: [
      "Reduce la inflamación, el enrojecimiento y la picazón en la piel.",
      "Combate infecciones causadas por hongos y bacterias.",
      "Elimina bacterias que infectan heridas menores, eccemas o dermatitis",
      "Útil para el tratamiento de heridas leves y superficiales de la piel.",
    ],
    receta: true,
    video: true,
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Spray Repelente De Insectos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ dietiltoluamida 25% ; Ac Citronella 2.5 %; exp (glicerina,alcohol ) csp 100 ml",
    uso: `Antes de aplicar el repelente, la  piel debe estar  limpia y seca. Agita bien el envase y rocía el producto a una distancia adecuada (entre 10 y 15 cm) sobre las zonas expuestas del cuerpo. Evita aplicar directamente en el rostro: en su lugar, rocía un poco en tus manos y luego distribúyelo con cuidado, evitando el contacto con ojos, boca y mucosas.
No uses una cantidad excesiva; una capa ligera es suficiente para que el producto sea efectivo. Tampoco lo apliques sobre heridas, irritaciones o piel dañada. Si estás usando protector solar, primero aplica el protector, deja que se absorba y luego coloca el repelente.`,
    recomendaciones: `Evita aplicar directamente en el rostro: en su lugar, rocía un poco en tus manos y luego distribúyelo con cuidado, evitando el contacto con ojos, boca y mucosas.
No uses una cantidad excesiva; una capa ligera es suficiente para que el producto sea efectivo. Tampoco lo apliques sobre heridas, irritaciones o piel dañada. Si estás usando protector solar, primero aplica el protector, deja que se absorba y luego coloca el repelente. 
`,
    beneficios: [
      "Amplia protección contra diferentes tipos de insectos no solo mosquitos , sino también moscas , pulgas , chinches etc.",
      "Tiene un  Efecto prolongado  brindando varias horas de protección .",
      "Es de  Fácil aplicación  distribuyéndose de manera rápida y uniforme sobre la piel o la ropa.",
      "Alta potencia y Durabilidad.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Spray de Clorhexidina",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Clorhexidina 1% exp alcohol, agua purificada solución csp 60 ml",
    uso: `Limpia y seca la zona afectada. Aplica el spray a una distancia de 10-15 cm  cubriendo toda el área y deja actuar durante 1 minuto ,no es necesario enjuagar. Usa el spray máximo 2 veces al día y no más de 5 días seguidos, salvo indicación médica. 
`,
    recomendaciones: `Si experimentas reacciones adversas ,como dolor , ardor o  enrojecimiento , deja de usar y consulta con un médico. Mantén la zona limpia y seca para promover la curación. Conservar el producto bien cerrado, en un lugar fresco y seco, protegido de la luz y fuera del alcance de los niños. No aplicar en ojos , mucosas o áreas sensibles de la piel . Preparado únicamente para uso externo`,
    beneficios: [
      "Es un producto de acción rápida y duradera con una fácil aplicación.",
      "Es muy eficaz en la desinfección de la piel, pequeñas heridas, arañazos y quemaduras superficiales",
      "Apto para pieles sensibles",
      "Es un desinfectante de amplio espectro antibacteriano",
    ],
    receta: false,
    video: false,
  },

  {
    categoria: "Medicamentos de uso topico",
    nombre: "Ungüento Antimicótico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ BIFONAZOL 2%; Unguento para los hongos de las uñas csp 20 g",
    uso: `Lavar y secar bien las uñas afectadas con agua y jabón antes de aplicar el ungüento. Si la uña está muy engrosada, puedes limarla suavemente para facilitar la penetración de la pomada . Luego, aplica una capa fina del ungüento cubriendo toda la superficie de la uña afectada . `,
    recomendaciones: `Se recomienda aplicar la pomada antes de acostarse, para que actúe durante más tiempo sin ser removida por lavados o contacto con objetos. Finalmente, lava bien tus manos después de la aplicación para evitar la transmisión de la infección a otras áreas del cuerpo o a otras personas. Preparado indicado únicamente para uso externo 
`,
    beneficios: [
      "Devuelve la textura, dureza y coloración normal a la lámina de la uña.",
      "Ayuda a eliminar el mal olor, la picazón y el despellejamiento de la piel .",
      "Se aplica solo una vez al día, preferentemente por la noche, preferiblemente sobre la uña limpia y lijada.",
      "Penetra en la uña para atacar el hongo, promoviendo el crecimiento de una uña sana.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas hepaticas",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ ext. fluido BOLDO 2%  ext fluido Zanahoria 1 % ;Tint  CARQUEJA 20% Tint   ALCACHOFA 40%  gotas csp 60 ml ( USO INTERNO)",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua  `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas cerca de las comidas principales y para niño se recomienda 15 a 20 gotas  , administrar 2 o 3 veces por dìa , no es recomendable el excederse  con el número de tomas , ni la dosis indicada Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños. Preparado de uso interno `,
    beneficios: [
      "Ayuda a reducir la sensación de 'hinchazón' o pesades estomacal , especialmente después de comidas ",
      "Estimula la producción de bilis en el hígado y facilita la digestión de las grasas ",
      "Sus componentes ayudan a mejorar el funcionamiento general del hígado y la vesícula biliar.",
      "Gracias a su combinación de extractos vegetales, acelera el proceso digestivo para que los alimentos no resulten pesados.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Antioxidantes",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Tintura de CARDO MARIANO csp para 60 ml ",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por dìa , no es recomendable el excederse  con el número de tomas , ni la dosis indicada  Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños  Preparado de uso interno.
`,
    beneficios: [
      "Acción antióxidante ayudando a prevenir  el deterioro celular  y la formación de radicales libres  ",
      "Contribuyen a mejorar el bienestar general del organismo , regulando los niveles de glucosa en sangre y reduciendo  el colesterol en sangre. ",
      "Ayudan a fortalecer las defensas  del  cuerpo ",
      "Facilita la producción de bilis y enzimas digestivas, lo que reduce la pesadez, la hinchazón y las digestiones lentas.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Circulatorias",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "RP/ Tintura de Castaño de las Indias 25% , Tintura de Hamamelis 25% ; Tintura de centella Asiatica 25 %c ; Tintura de Ginko Biloba 25% csp para 60 ml ",
    uso: ` Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por dìa , no es recomendable el excederse  con el número de tomas , ni la dosis indicada  Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños  Preparado de uso interno.

`,
    beneficios: [
      "Disminuyen la inflamación y la pesadez en las piernas y pies. ",
      "Ayudan a prevenir la aparición de varices, arañitas y mejoran la resistencia de los vasos sanguíneos, mejorando la circulación y el aspecto estético  ",
      "Reducen la viscosidad de la sangre, permitiendo un mejor flujo en lasn extremidades, mejorando el Flujo Sanguíneo.",
      "Tienen propiedades que reducen la hinchazón y la inflamatoria",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Sedantes",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Tintura de Tilo 25% ; Tintura de Melisa 25% ;  Tintura de Pasiflora ; Titura de Valeriana 25% csp para 60 ml  ",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por dìa , no es recomendable el excederse  con el número de tomas , ni la dosis indicada Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños  Preparado de uso interno.`,
    beneficios: [
      "Ayudan a la conciliación del sueño profundo durante la noche ",
      "Alivian la ansiedad, estrés y el insomnio diario  ",
      "Por su composición 100 % de origen natural ofrecen una alternativa con menos efectos secundarios.",
      "Sus componentes naturales ayudan a aliviar la tensión física asociada al estrés promoviendo la relajación muscular  durante el descanso.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Inmunoestimulantes",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Tintura de  Echinacea 50% ; Tintura de uña de gato 50%c csp para 60 ml ",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por dìa , no es recomendable el excederse  con el número de tomas , ni la dosis indicada Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños Preparado de uso interno.
`,
    beneficios: [
      "Estimulan la producción de inmunoglobulinas , ayudando al cuerpo a Refuerzo de las defensas naturales ",
      "Prevención de infecciones respiratorias como faringitis, amigdalitis, rinitis, otitis y bronquitis.",
      "Ayudan a disminuir la intensidad y duración de enfermedades, siendo útiles en épocas de estrés, fatiga o cambios estacionales.",
      "Facilitan una respuesta inmunológica más equilibrada, especialmente en niños con problemas respiratorios crónicos o personas con defensas bajas",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Adelgazante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Hisopo 15 % ,Fucus 20 % , sen 10  % ,cola de caballo 20 % , Apio 15 %   Cedrón 15 %  Anis 15 %    25 g ",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día`,
    recomendaciones: `-`,
    beneficios: [
      "Ayudan a eliminar la retención de líquidos, reduciendo la hinchazón.",
      "Aportan una sensación de saciedad , para  reducir la ingesta de alimentos.",
      "Ayudan a mejorar la función intestinal y la evacuación.",
      "Ayudan a reducir la inflamación abdominal y pesadez y mejorando la digestión ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antidiabetica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Pezuña de vaca 20%,Sarandi 20% Ortiga 20% Poleo csp 25 g",
    uso: `Se recomienda usar entre 1  a 2  gramos de hierba (una cucharada de té) por cada 100-200 ml de agua hirviendo dejar reposar por 10 min . Se recomienda tomar entre 1 a 3  tazas por día  . `,
    recomendaciones: `-`,
    beneficios: [
      "Ayuda a mejorar la sensibilidad a la insulina y reducir los niveles de azúcar en sangre en ayunas",
      "Efecto Hipoglucemiante .",
      "Alternativa natural para el tratamiento de la prediabetes.",
      "Efecto Antioxidante y depurativo.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antihipertensiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Olivo hojas 25%  Diente de León 10% Cola de Caballo 25%  Manzanilla 25 g",
    uso: `Se recomienda usar entre 1  a 2  gramos de hierba (una cucharada de té) por cada 100-200 ml de agua hirviendo dejar reposar por 10 min . Se recomienda tomar entre 1 a 3  tazas por día. `,
    recomendaciones: `-`,
    beneficios: [
      "Reducción de la Hipertensión arterial .",
      "Efecto  Vasodilatador que favorece la relajación  y dilatación  los vasos sanguíneos, disminuyendo la tensión arterial.",
      " Efecto Diurético ayudando a eliminar el exceso de líquidos y sodio, facilitando la circulación.",
      "Favorecen la  Salud Cardiovascular por sus propiedades hipotensivas.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antirreumatica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Fresno 10% , Sause c nacional 10%,Diente de Leon 10%,  Ortiga 10 % ,Jarilla hojas 10%",
    uso: `Tomar una cantidad de la tisana   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: `-`,
    beneficios: [
      "Reducción de la inflamación",
      "Alivio del dolor articular y dolores  crónicos y articulares, siendo eficaz en casos de artritis reumatoide.",
      "Regeneración de tejidos  desgastados.",
      "Mejora de la circulación sanguínea .",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Bronquial",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Pulmonaria 30 % ,Ambay 20 % ,Anacahuita 20 % ,Llanten csp 250 g",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: `-`,
    beneficios: [
      "Acción Expectorante: Ayuda a eliminar el exceso de flema en las vías respiratorias.",
      "Efecto Antiséptico y Balsámico: Alivia la garganta y las molestias del tracto respiratorio superior.",
      "Descongestiva: Facilita la respiración en casos de resfriados, gripes o bronquitis.",
      "Alivio de la Tos: Actúa como antitusivo natural para disminuir la tos constante",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Circulatoria",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Malva 30%, Hamamelis 10% ,Centella 20% Sanguinaria10%  ,Manzanilla csp 25 g   ",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: ``,
    beneficios: [
      "Mejora el flujo sanguíneo  .",
      "Fortalece venas y capilares sanguíneos.",
      "Acción antiinflamatoria y diurética",
      "Regula el ritmo cardíaco, actúa como sedante ligero y mejora la oxigenación muscular.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Digestiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Manzanilla 20%,Yerba de Pollo 20% ,Poleo Hojas 20 %, Menta Hojas 20%,Peperina Hojas csp 250 g",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min 1 taza despues de las comidas principales.`,
    recomendaciones: "-",
    beneficios: [
      "Ayuda a procesar alimentos pesados y a metabolizar grasas, reduciendo la sensación de pesades estomacal .",
      "Relaja el tracto digestivo, aliviando cólicos y espasmos.",
      "Ayuda a reducir la Acidez y Náuseas",
      "ayudan a proteger y estimular el buen funcionamiento del hígado.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Laxante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Sen 20%, Zaragatona Rubia 20% Manzanilla 20% Diente de León csp 25 g",
    uso: `Tomar una cantidad de la  tisana   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: `-`,
    beneficios: [
      "Activa el tránsito intestinal, facilitando la evacuación en casos de estreñimiento ocasional.",
      "Aumenta el contenido de agua en el intestino, lo que ayuda a que el proceso de defecación sea menos doloroso.",
      "Acción Antiinflamatoria y alivio de la irritación intestinal causada por el esfuerzo.",
      "Ayudan a regular el transito estomacal ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Sedante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Pasionaria 20% ; Melisa 20% ; Tilo csp 25 g ",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de tè) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día `,
    recomendaciones: `-`,
    beneficios: [
      "Reducción de la ansiedad y el estrés",
      "Mejora de la calidad del sueño ",
      "Ayuda a reducir el insomnio durante la noche",
      "Efecto antiespasmódico y analgésico",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de ashwagandha",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Extracto seco de ashwagandha 300 mg  ; excipientes csp 50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica. Para mejorar su absorción, se recomienda tomar las cápsulas antes  de acostarse para potenciar el efecto sedante  y la conciliación del sueño  , después de las comidas `,
    recomendaciones: `Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales. `,
    beneficios: [
      "Ayuda al cuerpo a adaptarse al estrés físico y emocional, reduciendo la fatiga y calmando los nervios.",
      "Favorece el descanso, combate el insomnio , ayudando a mejorar el descanso ",
      "Tiene propiedades antiinflamatorias   e inmunoestimulantes ",
      "Mejora la fuerza muscular, la resistencia y el rendimiento mental o cognitivo.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas curcuma y pimienta negra",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Extracto seco de Curcuma 500 mg  y extracto seco de Pimienta 50 mg ; excipientes  csp 50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica . Para mejorar su absorción, se recomienda tomar las cápsulas acompañadas de comidas que contengan grasas saludables (como aceite de oliva o palta). Estas capsulas se deben tomar durante 2 o  3 meses y luego se debe descasar por 1 mes y luego del descanso se puede repetir el tratamiento  `,
    recomendaciones: `
    Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Reduce dolores crónicos, articulares (rodillas, espalda) y musculares.",
      "Estimula la producción de bilis, facilitando la digestión y el alivio de la inflamación abdominal",
      "Tienen un efecto antioxidante e inmunoestimulante",
      "Ayudan al bienestar cardiovascular y cerebral ",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Magnesio Quelado",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Bisglicinato de Magnesio + excipientes cps 500 mg ",
    uso: "La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica . Estas capsulas se pueden tomar en cualquier momento del dia según los requerimientos personales. ",
    recomendaciones: ` Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario.Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos.Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Gracias a s su estructura molecular le permite que se  absorban rápidamente en el cuerpo .",
      "Previene calambres, espasmos y es ideal para la recuperación deportiva",
      "Ayuda a mejorar el descanso profundo y a calmar la ansiedad ",
      "Contribuye a la fijación de calcio en huesos y ayuda a regular la presión arterial.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Citrato de Magnesio",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Citrato Magnesio anhidro ; excipientes  cps para  50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica . Estas capsulas se pueden tomar en cualquier momento del dia según los requerimientos personales.`,
    recomendaciones: `Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Ayuda a prevenir contracturas, calambres y espasmos musculares",
      "Facilita la absorción de calcio para huesos sanos , participando en el metabolismo energético, disminuyendo la fatiga y el cansancio muscular.",
      "Contribuye a regular la presión arterial y mantener un ritmo cardíaco saludable",
      "Favorece un descanso reparador y profundo, disminuyendo insomnio , la ansiedad y el  estrés",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Colageno tipo II",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Colágeno tipo II 40 mg; Vitamina D3 6 mcg; Vitamina C 20 mg; Magnesio citrato 200 mg   csp para 50 capsulas ",
    uso: "La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica .Estas capsulas se pueden tomar en cualquier momento del dia según los requerimientos personales. ",
    recomendaciones: `Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Facilita la recuperación articular tras el ejercicio físico intenso. ",
      "Aumenta la flexibilidad y comodidad en movimientos, reduciendo la rigidez articular.",
      "Ayuda a la protección y regeneración del cartílago y huesos ",
      "Ayuda a disminuir la inflamación en enfermedades como la artritis reumatoide y la artrosis.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Melena de león",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Extracto seco de Melena de león 400 mg  ; excipientes  csp 50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica . Para mejorar su absorción, se recomienda tomar las cápsulas antes o después de comidas que  las comidas para ayudar a facilitar su absorción .  `,
    recomendaciones: `Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Mejora la función cerebral, la memoria y la concentración.",
      "Favorece la mucosa gástrica y regula la microbiota contribuyendo a mejorar el sistema inmune del cuerpo ",
      "Tiene propiedades antiinflamatorias  ",
      "Ayuda a reducir el estrés, la ansiedad y los síntomas depresivos mediante la regulación de neurotransmisores",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas Vitamina C",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Vitamina C ; excipientes csp para 500 mg ",
    uso: "La dosis indicada es de 1 o 2 capsulas por día ,según la indicación médica. Estas capsulas se pueden tomar en cualquier momento del dia según los requerimientos personales. ",
    recomendaciones: `Las capsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Contribuyen a fortalecer el sistema inmune del cuerpo  ",
      "Mejora la asimilación del hierro proveniente de los alimentos, previniendo la anemia",
      "Tienen un efecto antioxidante que previene del deterioro celular",
      "Es esencial para la reparación de tejidos, curación de heridas y el mantenimiento de huesos y dientes.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Creatina en polvo",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: `Creatina monohidratada micronizada 100 % pura csp 100 g `,
    uso: `La creatina en polvo es un suplemento sensible a la humedad, al calor y a la luz, por lo que es importante guardarla en un ambiente alejado de fuentes de calor, como hornos o luz solar directa. La temperatura ambiente (15-25 °C) es ideal.`,
    recomendaciones: `Debe mantenerse el envase bien cerrado después de cada uso, ya que la humedad puede alterar la estructura del polvo y favorecer su degradación. No se deben  cucharas húmedas al manipularla .Es recomendable tomar la cantidad recomendada de creatina (3 a 5 gramos por día) , junto con una bebida dulce como jugo , para mejorar su absorción .`,
    beneficios: [
      "Aumenta la fuerza y el rendimiento físico durante el entrenamiento ",
      "Promueve la protección neuromuscular y antienvejecimiento de los músculos",
      "Mejora la función cognitiva y la concentración",
      "Favorece el bienestar físico y el crecimiento muscular post entrenamiento ",
    ],
    receta: false,
    video: true,
  },
];
*/
const products = [
  {
    categoria: "Skin Care",
    nombre: "Agua Micelar",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Laurilpoliglucosido 5%, Crillet 4 3%,Propanotriol 3% agua conservada csp 100 ml",
    uso: "Aplicar una cantidad adecuada  del agua micelar sobre un disco de algodón y pásalo suavemente por todo el rostro para eliminar maquillaje, impurezas y exceso de grasa (no es necesario frotar). Evita el contacto directo con los ojos. Una vez aplicado se debe dejar  actuar unos minutos y luego   enjuagar con agua tibia. Se debe aplicar  sobre la piel limpia y seca, como primer paso de la rutina facial, por la mañana y/o por la noche",
    recomendaciones: `No se debe utilizar el mismo algodón en distintas zonas del rostro. Si notas enrojecimiento, ardor o picazón, suspender su uso y consulta a un profesional. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo `,
    beneficios: [
      "Ayuda a remover el maquillaje y a limpiar  la piel de forma rápida y fácil.",
      "Apta para todo tipo de piel .",
      "Hidrata y suaviza la  piel. ",
      "Es el primer paso de la rutina “skin care”  , ayudando a preparar tu piel para más cuidados.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Antiage",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Ac Hialurónico 0.5 %, Retinol 0.3%, Vit.E 0.5 %  crema base   no iónica csp 50 g",
    uso: "Primero se debe limpiar y secar la piel del rostro previamente a la aplicación de la crema , se recomienda colocar una pequeña cantidad de crema sobre el rostro y el cuello realizando  movimientos   suaves en forma circular sobre la piel hasta que la crema se absorba por completo .Se recomienda  aplicar  especialmente en las zonas donde suelen aparecer signos de envejecimiento, como la frente, el contorno de ojos  y alrededor de los labios.",
    recomendaciones: `Evita el contacto directo con los ojos y otras mucosas ,  no aplicar la crema sobre zonas irritadas, con heridas o brotes activos  y no exceder la cantidad recomendada. Si observas enrojecimiento, ardor o irritación persistente, suspende su uso y consulta a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "	Ayuda a reducir las arrugas y las líneas de expresión ",
      "	Contribuye a mejorar la apariencia estética de la piel y a hidratarla ",
      "	Prevención del envejecimiento y deterioro .",
      "	Brinda firmeza, brillo  y elasticidad ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Nutritiva con vitamina A y E",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Vitamina A palmitato 500000 ui Vitamina E 0.05 % Alantoina 0.25% emulsión nutritiva base  csp 100 g ",
    uso: `Antes de aplicar la crema, la piel debe estar limpia y seca para ayudar a eliminar las impurezas de la misma. Luego se debe tomar una pequeña cantidad de la crema y aplicarla en el área , mediante el uso de  masajes suaves con movimientos circulares hasta que se absorba  completamente. `,
    recomendaciones: `Esta crema puede usarse tanto de día como de noche, es recomendable aplicar antes de otros productos como protectores solares para asegurar una mejor absorción de la vitamina. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Evitar aplicar sobre heridas abiertas, cortes o piel irritada. En caso de presentar irritación, enrojecimiento o ardor, suspender el uso y consultar a un profesional de la salud. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo.`,
    beneficios: [
      "Brinda una hidratación profunda y duradera de la piel.",
      "Ayuda a promover la regeneración celular y contribuye a nutrir la piel de forma directa.",
      "Reduce las cicatrices y las manchas de la piel.",
      "Protege la piel del deterioro y desgaste.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema para talones resecos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Urea 15% Lactato amonio 12 % , crema base no iónica csp 50 g",
    uso: "Antes de aplicar la crema se deben lavar los pies con agua tibia y jabón  , luego se deben secar cuidadosamente, especialmente entre los dedos y en la zona de los talones. Se recomienda aplicar una cantidad moderada de la crema en el área afectada realizando un suave masaje con movimientos circulares hasta que se absorba por completo. Para mejores resultados, es recomendable usarla por la noche, antes de acostarse.",
    recomendaciones: `Se recomienda aplicar   la crema 1 a 2 veces por día y no exceder cantidad de crema recomendada. Evitar aplicar sobre heridas abiertas, cortes o piel irritada. En caso de presentar irritación, enrojecimiento o ardor, suspender el uso y consultar a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "Brinda una hidratación profunda y duradera de la piel ",
      "Ayuda a reparar la piel dañada y reseca ",
      "Evita la aparición de grietas y callos en los talones ",
      "Proporciona sensación de frescura, descanso y bienestar, reduciendo la incomodidad al caminar",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Tensora",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ DMAE 2.5% , VIT E 1% , VIT C  2% ;  Crema tensora csp 50 g ",
    uso: "Primero se debe limpiar y secar la piel del rostro previamente a la aplicación de la crema , se recomienda colocar una pequeña cantidad de crema sobre el rostro y el cuello realizando  movimientos   suaves en forma circular sobre la piel hasta que la crema se absorba por completo .Se recomienda aplicar especialmente en las zonas donde suelen aparecer signos de envejecimiento, como la frente, el contorno de ojos  y alrededor de los labios.",
    recomendaciones: `Evita el contacto directo con los ojos y otras mucosas, no aplicar la crema sobre zonas irritadas, con heridas o brotes activos  y no exceder la cantidad recomendada. Si observas enrojecimiento, ardor o irritación persistente, suspende su uso y consulta a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Preparado únicamente para uso externo `,
    beneficios: [
      "Brinda una mejor tensión y firmeza de la piel ",
      "Brinda un aspecto juvenil y revitalizado",
      "Ayuda a facilitar la aplicación del maquillaje ",
      "Ayuda a hidratar la piel y nutrirla ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Emulsión Limpiadora",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Betaína 8% Petrolato 10% Dimeticona 1 % ",
    uso: "Aplicar una cantidad adecuada en la  cara y cuello, dejar actuar 30 segundos  y luego para ayudar a eliminar el maquillaje , impurezas y exceso de grasa en el rostro , luego  enjuagar con abundante agua tibia y secar suavemente , para luego continuar con los otros pasos de la rutina skin care ",
    recomendaciones: `Evita el contacto directo con los ojos. No aplicar sobre piel irritada o lesionada.  Si aparece enrojecimiento, picazón o ardor, suspender su uso y consulte con un profesional. Conservar el producto en un lugar fresco, seco y alejado de la luz solar directa. Mantenlo fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "Proporciona una limpieza profunda, rápida  y eficaz",
      "Mejora la textura y el aspecto de la piel de la piel",
      "Hidrata y suaviza la piel ",
      "Apta para aplicación sobre  pieles sensibles  ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Emulsión Nutritiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      " Vitamina A palmitato 500000 ui Vitamina E 0.05 % Alantoina 0.25% emulsión nutritiva csp 300 ml",
    uso: "Limpia y seca tu piel antes de aplicar la crema. Aplica una cantidad adecuada de la emulsión nutritiva y masajea suavemente hasta su absorción , se recomienda utilizarla una o dos veces al día, según sea necesario. Aplicar 1 o 2 veces por día en la zona afectada indicada para piel seca, irritaciones, quemaduras, uso externo",
    recomendaciones: `Evita el contacto con las mucosas, heridas abiertas. si observa alguna reacción desfavorable suspenda su uso si observas alguna reacción desfavorable como irritación , enrojecimiento o dolor . Para obtener  una hidratación profunda, aplica después del baño. Si observas enrojecimiento, ardor o irritación persistente, suspende su uso y consulta a un profesional de la salud. No es recomendable excederse con la cantidad de crema ni la frecuencia de aplicación de la misma. Preparado únicamente para uso externo`,
    beneficios: [
      "Mantiene la piel hidratada, suave y saludable ",
      "Estimula la formación de colágeno y la renovación celular, ideal para pieles secas, sensibles o irritadas.",
      "Mejora la apariencia de la piel, aportando elasticidad y previniendo la resequedad y el envejecimiento prematuro.",
      "Es una crema de rápida absorción y fácil aplicación ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Serum de Ácido Hialurónico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Ac Hialurónico1.5 % serum csp 30 g",
    uso: "Limpia e hidrata tu piel antes de usar el serum usando productos como el agua micelar  .Es recomendable  aplicar 2-3 gotas de Serum en el área realizando movimientos suaves y circulares. Masajea ligeramente con las yemas de los dedos y deja que se absorba antes de aplicar otro  producto.",
    recomendaciones: `No es recomendable excederse con la cantidad de gel ni la frecuencia de aplicación de la misma. Evitar aplicar sobre heridas abiertas, cortes o piel irritada. En caso de presentar irritación, enrojecimiento o ardor, suspender el uso y consultar a un profesional de la salud. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños. Preparado únicamente para uso externo.`,
    beneficios: [
      "Brinda una hidratación profunda de la piel ",
      "Mejora la elasticidad ,  la firmeza  y textura de la piel ",
      "Ayuda a conseguir una piel más suave y rejuvenecida ",
      "Estimula la producción natural de colágeno de la piel ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Tónico Facial",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Hamamelis 5%,Aloe Vera 5%, Hibisco 5 %, Agua de rosas 10 % BRUMA FACIAL csp 100 ml",
    uso: "Para obtener los mejores resultados, comienza limpiando bien tu rostro usando el agua micelar  y seca suavemente con una toalla limpia. Luego, rociar  el tónico facial a una distancia de 15 a 20 cm, asegurando una distribución uniforme sobre todo el rostro. Deja que el producto se absorba por completo de forma natural, sin frotar ni enjuagar. Una vez absorbido, continua con tu rutina aplicando el Serum o tratamiento habitual. Utilizar el  tónico facial dos veces al día, por la mañana y por la noche, como parte de tu cuidado diario.",
    recomendaciones: `Evita el contacto directo con los ojos. No aplicar sobre piel irritada o lesionada. Si aparece enrojecimiento, picazón o ardor, suspender su uso y consulte con un profesional. Conservar el producto en un lugar fresco, seco y alejado de la luz solar directa. Mantenlo fuera del alcance de los niños. Preparado únicamente para uso externo .
`,
    beneficios: [
      "Brinda una hidratación rápida y profunda de la piel",
      "Mejora el aspecto de la piel y da una luminosidad inmediata de la misma ",
      "Ayuda a rejuvenecer la piel y reducir el deterioro de la misma  ",
      "Es de rápida y fácil aplicación ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Skin Care",
    nombre: "Gel para contorno de ojos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "RIGIN 3% ;Contorno de ojos  csp 15 g",
    uso: "Antes de aplicar el gel, asegúrate de limpiar y secar bien la piel del contorno de ojos. Coloca una pequeña cantidad del producto en la yema del dedo  y  aplica suavemente sobre el hueso orbital, realizando pequeños toques sin arrastrar ni frotar la piel. Extender el producto desde el lagrimal hacia la sien, siguiendo la línea natural donde suelen aparecer las arrugas de expresión. ",
    recomendaciones: `Evite aplicar sobre párpados móviles o zonas irritadas y dentro del ojo. Usar solo la cantidad recomendada, ya que el exceso puede causar molestias e irritación . Si aparece enrojecimiento, picazón o ardor, suspenda su uso y consulta a un profesional. Conservar el producto en un lugar fresco, seco y alejado de la luz solar directa. Mantenlo fuera del alcance de los niños. Preparado únicamente para uso externo. `,
    beneficios: [
      "Protege y fortalece la piel",
      "Previene y reduce las arrugas y líneas  de expresión",
      "Hidrata y suaviza la piel mejorando el aspecto  ",
      "Brinda una mayor elasticidad y firmeza de la piel  ",
    ],
    receta: false,
    video: false,
  },

  {
    categoria: "Medicamentos de uso tópico",
    nombre: "Spray Antimicótico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Clotrimazol 1.5 % exipientes  , spray csp 60 ml",
    uso: `Antes de aplicar el spray , se deben  lavar los pies con agua y jabón, asegurando una correcta higiene entre los dedos. Secar completamente la zona antes de aplicar el producto. Agitar el envase y pulverizar el spray a una distancia de 10 a 15 cm sobre el área afectada, permitiendo su completa absorción antes de colocarse el calzado. Se recomienda su uso preferentemente por la noche. `,
    recomendaciones: `No aplicar en áreas sensibles la piel (rostro , genitales etc) . Suspender el uso ante signos de irritación, enrojecimiento, ardor o picazón persistente, y consultar a un profesional de la salud. Conservar el producto bien cerrado, en un lugar fresco y seco, protegido de la luz y fuera del alcance de los niños.
Preparado únicamente para uso externo. `,
    beneficios: [
      "Tiene una amplia acción contra diferentes tipos de hongos de la piel ",
      "Es una solución de rápido secado, facilitando su uso en el día a día, especialmente en la zona de los pies.",
      "Reduce eficazmente el enrojecimiento, descamación y el picor (picazón).",
      "Es de fácil y rápida aplicación ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Medicamentos de uso tópico",
    nombre: "Gel Antiinflamatorio",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/Diclofenac Dietilamina 2%, Arnica 5% Gel analgésico Antiinflamatorio csp 60 g",
    uso: `Aplique el gel sobre la piel limpia y seca, evitando heridas, cortes o infecciones. Use entre 0.5 y 4 gramos según el tamaño del área afectada y masajee suavemente hasta que se absorba realizando movimientos circulares. Repita 2-3 veces al día, respetando las indicaciones médicas y evite lavar o exponer al agua la piel tratada durante al menos una hora. `,
    recomendaciones: `No aplique más de 8 g al día en manos, muñecas o codos, ni más de 16 g en pies, tobillos o rodillas. No aplicar bajo vendajes oclusivos . Este producto es solo para uso externo y no debe ingerirse ni aplicarse sobre mucosas. Guardar el producto en un lugar fresco, seco y fuera del alcance de los niños.`,
    beneficios: [
      "Acción dual potente  , el diclofenac actúa reduciendo la inflamación, mientras el árnica ayuda a disminuir el dolor y mejorar la circulación local.",
      "Es altamente efectivo para tratar contusiones, esguinces, desgarros musculares y torceduras.",
      "Ayuda a mejorar la movilidad y reducir la rigidez en articulaciones (rodillas, manos, tobillos) afectadas por osteoartritis.",
      "Fácil aplicación y rápida acción ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Medicamentos de uso tópico",
    nombre: "Crema Antimicótica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Miconazol 2% Gentamicina0.1% Betametsona 0.1% csp30 g",
    uso: `Aplicar 1 o 2 veces por día. Lave y seque la zona antes de usar. Aplique una capa delgada y extiéndala hasta que se absorba por completo ,aplique la crema una o dos veces al día.`,
    recomendaciones: `Conservar a temperatura inferior a 40°c alejado del alcance de niños . Evite el contacto con los ojos, mucosas  . No aplicar  en zonas sensibles de la piel  como el  (rostro, párpados , zonas íntimas etc. ) o bajo vendajes oclusivos. Suspenda el uso si presenta reacciones adversas  , como irritación , dolor , enrojecimiento . Preparado indicado únicamente para uso externo 
`,
    beneficios: [
      "Reduce la inflamación, el enrojecimiento y la picazón en la piel.",
      "Combate infecciones causadas por hongos y bacterias.",
      "Elimina bacterias que infectan heridas menores, eccemas o dermatitis",
      "Útil para el tratamiento de heridas leves y superficiales de la piel.",
    ],
    receta: true,
    video: true,
  },
  {
    categoria: "Medicamentos de uso tópico",
    nombre: "Spray Repelente de Insectos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ dietiltoluamida 25% ; Ac Citronella 2.5 %; exp (glicerina,alcohol ) csp 100 ml",
    uso: `Antes de aplicar el repelente, la  piel debe estar  limpia y seca. Agita bien el envase y rocía el producto a una distancia adecuada (entre 10 y 15 cm) sobre las zonas expuestas del cuerpo. Evita aplicar directamente en el rostro: en su lugar, rocía un poco en tus manos y luego distribúyelo con cuidado, evitando el contacto con ojos, boca y mucosas.
No uses una cantidad excesiva; una capa ligera es suficiente para que el producto sea efectivo. Tampoco lo apliques sobre heridas, irritaciones o piel dañada. Si estás usando protector solar, primero aplica el protector, deja que se absorba y luego coloca el repelente.`,
    recomendaciones: `Evita aplicar directamente en el rostro: en su lugar, rocía un poco en tus manos y luego distribúyelo con cuidado, evitando el contacto con ojos, boca y mucosas.
No uses una cantidad excesiva; una capa ligera es suficiente para que el producto sea efectivo. Tampoco lo apliques sobre heridas, irritaciones o piel dañada. Si estás usando protector solar, primero aplica el protector, deja que se absorba y luego coloca el repelente. 
`,
    beneficios: [
      "Amplia protección contra diferentes tipos de insectos no solo mosquitos , sino también moscas , pulgas , chinches etc.",
      "Tiene un  efecto prolongado  brindando varias horas de protección .",
      "Es de  fácil aplicación  distribuyéndose de manera rápida y uniforme sobre la piel o la ropa.",
      "Alta potencia y durabilidad.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Medicamentos de uso tópico",
    nombre: "Spray de Clorhexidina",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Clorhexidina 1% exp alcohol, agua purificada solución csp 60 ml",
    uso: `Limpia y seca la zona afectada. Aplica el spray a una distancia de 10-15 cm  cubriendo toda el área y deja actuar durante 1 minuto ,no es necesario enjuagar. Usa el spray máximo 2 veces al día y no más de 5 días seguidos, salvo indicación médica. 
`,
    recomendaciones: `Si experimentas reacciones adversas ,como dolor , ardor o  enrojecimiento , deja de usar y consulta con un médico. Mantén la zona limpia y seca para promover la curación. Conservar el producto bien cerrado, en un lugar fresco y seco, protegido de la luz y fuera del alcance de los niños. No aplicar en ojos , mucosas o áreas sensibles de la piel . Preparado únicamente para uso externo`,
    beneficios: [
      "Es un producto de acción rápida y duradera con una fácil aplicación.",
      "Es muy eficaz en la desinfección de la piel, pequeñas heridas, arañazos y quemaduras superficiales",
      "Apto para pieles sensibles",
      "Es un desinfectante de amplio espectro antibacteriano",
    ],
    receta: false,
    video: false,
  },

  {
    categoria: "Medicamentos de uso tópico",
    nombre: "Ungüento Antimicótico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ BIFONAZOL 2%; Unguento para los hongos de las uñas csp 20 g",
    uso: `Lavar y secar bien las uñas afectadas con agua y jabón antes de aplicar el ungüento. Si la uña está muy engrosada, puedes limarla suavemente para facilitar la penetración de la pomada . Luego, aplica una capa fina del ungüento cubriendo toda la superficie de la uña afectada . `,
    recomendaciones: `Se recomienda aplicar la pomada antes de acostarse, para que actúe durante más tiempo sin ser removida por lavados o contacto con objetos. Finalmente, lava bien tus manos después de la aplicación para evitar la transmisión de la infección a otras áreas del cuerpo o a otras personas. Preparado indicado únicamente para uso externo 
`,
    beneficios: [
      "Devuelve la textura, dureza y coloración normal a la lámina de la uña.",
      "Ayuda a eliminar el mal olor, la picazón y el despellejamiento de la piel .",
      "Se aplica solo una vez al día, preferentemente por la noche, preferiblemente sobre la uña limpia y lijada.",
      "Penetra en la uña para atacar el hongo, promoviendo el crecimiento de una uña sana.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Hepáticas",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ ext. fluido BOLDO 2%  ext fluido Zanahoria 1 % ;Tint  CARQUEJA 20% Tint   ALCACHOFA 40%  gotas csp 60 ml ( USO INTERNO)",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua  `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas cerca de las comidas principales y para niño se recomienda 15 a 20 gotas  , administrar 2 o 3 veces por día , no es recomendable el excederse  con el número de tomas , ni la dosis indicada Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños. Preparado de uso interno `,
    beneficios: [
      "Ayuda a reducir la sensación de 'hinchazón' o pesadez estomacal , especialmente después de comidas ",
      "Estimula la producción de bilis en el hígado y facilita la digestión de las grasas ",
      "Sus componentes ayudan a mejorar el funcionamiento general del hígado y la vesícula biliar.",
      "Gracias a su combinación de extractos vegetales, acelera el proceso digestivo para que los alimentos no resulten pesados.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Antioxidantes",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Tintura de CARDO MARIANO csp para 60 ml ",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por día , no es recomendable el excederse  con el número de tomas , ni la dosis indicada  Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños  Preparado de uso interno.
`,
    beneficios: [
      "Acción antioxidante ayudando a prevenir  el deterioro celular  y la formación de radicales libres  ",
      "Contribuyen a mejorar el bienestar general del organismo , regulando los niveles de glucosa en sangre y reduciendo  el colesterol en sangre. ",
      "Ayudan a fortalecer las defensas  del  cuerpo ",
      "Facilita la producción de bilis y enzimas digestivas, lo que reduce la pesadez, la hinchazón y las digestiones lentas.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Circulatorias",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "RP/ Tintura de Castaño de las Indias 25% , Tintura de Hamamelis 25% ; Tintura de centella Asiatica 25 %c ; Tintura de Ginko Biloba 25% csp para 60 ml ",
    uso: ` Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por día , no es recomendable el excederse  con el número de tomas , ni la dosis indicada  Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños  Preparado de uso interno.

`,
    beneficios: [
      "Disminuyen la inflamación y la pesadez en las piernas y pies. ",
      "Ayudan a prevenir la aparición de varices, arañitas y mejoran la resistencia de los vasos sanguíneos, mejorando la circulación y el aspecto estético  ",
      "Reducen la viscosidad de la sangre, permitiendo un mejor flujo en las extremidades, mejorando el Flujo Sanguíneo.",
      "Tienen propiedades que reducen la hinchazón y la inflamatoria",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Sedantes",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Tintura de Tilo 25% ; Tintura de Melisa 25% ;  Tintura de Pasiflora ; Titura de Valeriana 25% csp para 60 ml  ",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por día , no es recomendable el excederse  con el número de tomas , ni la dosis indicada Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños  Preparado de uso interno.`,
    beneficios: [
      "Ayudan a la conciliación del sueño profundo durante la noche ",
      "Alivian la ansiedad, estrés y el insomnio diario  ",
      "Por su composición 100 % de origen natural ofrecen una alternativa con menos efectos secundarios.",
      "Sus componentes naturales ayudan a aliviar la tensión física asociada al estrés promoviendo la relajación muscular  durante el descanso.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas Inmunoestimulantes",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Tintura de  Echinacea 50% ; Tintura de uña de gato 50%c csp para 60 ml ",
    uso: `Antes de usar se deben agitar  , este preparado se puede administrar de forma sublingual o diluido en un vaso de agua `,
    recomendaciones: `La dosis habitual para adultos es  30-40 gotas administras 2 o 3 veces por día , no es recomendable el excederse  con el número de tomas , ni la dosis indicada Se debe guardar en un lugar fresco, seco y fuera del alcance de los niños Preparado de uso interno.
`,
    beneficios: [
      "Estimulan la producción de inmunoglobulinas , ayudando al cuerpo a Refuerzo de las defensas naturales ",
      "Prevención de infecciones respiratorias como faringitis, amigdalitis, rinitis, otitis y bronquitis.",
      "Ayudan a disminuir la intensidad y duración de enfermedades, siendo útiles en épocas de estrés, fatiga o cambios estacionales.",
      "Facilitan una respuesta inmunológica más equilibrada, especialmente en niños con problemas respiratorios crónicos o personas con defensas bajas",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Adelgazante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Hisopo 15 % ,Fucus 20 % , sen 10  % ,cola de caballo 20 % , Apio 15 %   Cedrón 15 %  Anis 15 %    25 g ",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día`,
    recomendaciones: `-`,
    beneficios: [
      "Ayudan a eliminar la retención de líquidos, reduciendo la hinchazón.",
      "Aportan una sensación de saciedad , para  reducir la ingesta de alimentos.",
      "Ayudan a mejorar la función intestinal y la evacuación.",
      "Ayudan a reducir la inflamación abdominal y pesadez y mejorando la digestión ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antidiabética",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Pezuña de vaca 20%,Sarandi 20% Ortiga 20% Poleo csp 25 g",
    uso: `Se recomienda usar entre 1  a 2  gramos de hierba (una cucharada de té) por cada 100-200 ml de agua hirviendo dejar reposar por 10 min . Se recomienda tomar entre 1 a 3  tazas por día  . `,
    recomendaciones: `-`,
    beneficios: [
      "Ayuda a mejorar la sensibilidad a la insulina y reducir los niveles de azúcar en sangre en ayunas",
      "Efecto Hipoglucemiante .",
      "Alternativa natural para el tratamiento de la prediabetes.",
      "Efecto Antioxidante y depurativo.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antihipertensiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Olivo hojas 25%  Diente de León 10% Cola de Caballo 25%  Manzanilla 25 g",
    uso: `Se recomienda usar entre 1  a 2  gramos de hierba (una cucharada de té) por cada 100-200 ml de agua hirviendo dejar reposar por 10 min . Se recomienda tomar entre 1 a 3  tazas por día. `,
    recomendaciones: `-`,
    beneficios: [
      "Reducción de la Hipertensión arterial .",
      "Efecto  Vasodilatador que favorece la relajación  y dilatación  los vasos sanguíneos, disminuyendo la tensión arterial.",
      " Efecto Diurético ayudando a eliminar el exceso de líquidos y sodio, facilitando la circulación.",
      "Favorecen la  Salud Cardiovascular por sus propiedades hipotensivas.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antirreumática",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Fresno 10% , Sause c nacional 10%,Diente de Leon 10%,  Ortiga 10 % ,Jarilla hojas 10%",
    uso: `Tomar una cantidad de la tisana   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: `-`,
    beneficios: [
      "Reducción de la inflamación",
      "Alivio del dolor articular y dolores  crónicos y articulares, siendo eficaz en casos de artritis reumatoide.",
      "Regeneración de tejidos  desgastados.",
      "Mejora de la circulación sanguínea .",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Bronquial",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Pulmonaria 30 % ,Ambay 20 % ,Anacahuita 20 % ,Llanten csp 250 g",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: `-`,
    beneficios: [
      "Acción Expectorante: Ayuda a eliminar el exceso de flema en las vías respiratorias.",
      "Efecto Antiséptico y Balsámico: Alivia la garganta y las molestias del tracto respiratorio superior.",
      "Descongestiva: Facilita la respiración en casos de resfriados, gripes o bronquitis.",
      "Alivio de la Tos: Actúa como antitusivo natural para disminuir la tos constante",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Circulatoria",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Malva 30%, Hamamelis 10% ,Centella 20% Sanguinaria10%  ,Manzanilla csp 25 g   ",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: ``,
    beneficios: [
      "Mejora el flujo sanguíneo  .",
      "Fortalece venas y capilares sanguíneos.",
      "Acción antiinflamatoria y diurética",
      "Regula el ritmo cardíaco, actúa como sedante ligero y mejora la oxigenación muscular.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Digestiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Manzanilla 20%,Yerba de Pollo 20% ,Poleo Hojas 20 %, Menta Hojas 20%,Peperina Hojas csp 250 g",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min 1 taza después de las comidas principales.`,
    recomendaciones: "-",
    beneficios: [
      "Ayuda a procesar alimentos pesados y a metabolizar grasas, reduciendo la sensación de pesadez estomacal .",
      "Relaja el tracto digestivo, aliviando cólicos y espasmos.",
      "Ayuda a reducir la Acidez y Náuseas",
      "ayudan a proteger y estimular el buen funcionamiento del hígado.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Laxante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Sen 20%, Zaragatona Rubia 20% Manzanilla 20% Diente de León csp 25 g",
    uso: `Tomar una cantidad de la  tisana   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día.`,
    recomendaciones: `-`,
    beneficios: [
      "Activa el tránsito intestinal, facilitando la evacuación en casos de estreñimiento ocasional.",
      "Aumenta el contenido de agua en el intestino, lo que ayuda a que el proceso de defecación sea menos doloroso.",
      "Acción Antiinflamatoria y alivio de la irritación intestinal causada por el esfuerzo.",
      "Ayudan a regular el tránsito estomacal ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Sedante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Pasionaria 20% ; Melisa 20% ; Tilo csp 25 g ",
    uso: `Tomar una cantidad de la mezcla herbal   ( 1 cuchara de té) y agréguele agua hirviendo  y dejar reposar por  10 /15 min , consumir 3 a 4 veces por día `,
    recomendaciones: `-`,
    beneficios: [
      "Reducción de la ansiedad y el estrés",
      "Mejora de la calidad del sueño ",
      "Ayuda a reducir el insomnio durante la noche",
      "Efecto antiespasmódico y analgésico",
    ],
    receta: false,
    video: false,
  },
    {
    categoria: "Productos de origen natural",
    nombre: "Tisana Hepática",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Boldo 30%,Manzanilla 10% Diente de León 10% Carqueja 20% Poleo csp 25 g",
    uso: `Tomar una cantidad de la mezcla herbal ( 1 cuchara de tè) y agréguele agua hirviendo y dejar reposar por 10 /15 min , consumir 3 a 4 veces por día`,
    recomendaciones: `-`,
    beneficios: [
      "Ayuda a mejorar la función hepática y la digestión ",
      "Estimula la producción de bilis, lo que facilita la digestión de las grasas y evita la hinchazón, las náuseas y el malestar abdominal.",
      "Favorece la eliminación natural de toxinas, ayudando a purificar la sangre y reduciendo la acumulación de grasa en el hígado.",
      "Reduce la inflamación general en el tracto digestivo ",
    ],
    receta: false,
    video: false,
  },
      {
    categoria: "Productos de origen natural",
    nombre: "Tisana Diurética",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Composición Cola de caballo 20%Ortiga 20%Romero 10%Polero 10% Zarzaparrilla csp 25g",
    uso: `Tomar una cantidad de la mezcla herbal ( 1 cuchara de tè) y agréguele agua hirviendo y dejar reposar por 10 /15 min , consumir 3 a 4 veces por día`,
    recomendaciones: `-`,
    beneficios: [
      "Desinflamante , ayuda  eliminar el exceso de agua acumulada en el cuerpo  para disminuir la hinchazón abdominal y mejoran el aspecto de la celulitis.",
      "Facilitan la limpieza de toxinas y desechos del organismo.",
      "Efecto Antigaseoso y digestivo",
      "Acción antioxidante. ",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de ashwagandha",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Rp/ Extracto seco de ashwagandha 300 mg  ; excipientes csp 50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica. Para mejorar su absorción, se recomienda tomar las cápsulas antes  de acostarse para potenciar el efecto sedante  y la conciliación del sueño  , después de las comidas `,
    recomendaciones: `Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales. `,
    beneficios: [
      "Ayuda al cuerpo a adaptarse al estrés físico y emocional, reduciendo la fatiga y calmando los nervios.",
      "Favorece el descanso, combate el insomnio , ayudando a mejorar el descanso ",
      "Tiene propiedades antiinflamatorias   e inmunoestimulantes ",
      "Mejora la fuerza muscular, la resistencia y el rendimiento mental o cognitivo.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas Cúrcuma y Pimienta Negra",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Extracto seco de Curcuma 500 mg  y extracto seco de Pimienta 50 mg ; excipientes  csp 50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica . Para mejorar su absorción, se recomienda tomar las cápsulas acompañadas de comidas que contengan grasas saludables (como aceite de oliva o palta). Estas capsulas se deben tomar durante 2 o  3 meses y luego se debe descansar por 1 mes y luego del descanso se puede repetir el tratamiento  `,
    recomendaciones: `
    Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Reduce dolores crónicos, articulares (rodillas, espalda) y musculares.",
      "Estimula la producción de bilis, facilitando la digestión y el alivio de la inflamación abdominal",
      "Tienen un efecto antioxidante e inmunoestimulante",
      "Ayudan al bienestar cardiovascular y cerebral ",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Magnesio Quelado",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Bisglicinato de Magnesio + excipientes cps 500 mg ",
    uso: "La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica . Estas capsulas se pueden tomar en cualquier momento del día según los requerimientos personales. ",
    recomendaciones: ` Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario.Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos.Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Gracias a su estructura molecular le permite que se  absorban rápidamente en el cuerpo .",
      "Previene calambres, espasmos y es ideal para la recuperación deportiva",
      "Ayuda a mejorar el descanso profundo y a calmar la ansiedad ",
      "Contribuye a la fijación de calcio en huesos y ayuda a regular la presión arterial.",
    ],
    receta: false,
    video: false,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Citrato de Magnesio",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Rp/ Citrato Magnesio anhidro ; excipientes  cps para  50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica . Estas capsulas se pueden tomar en cualquier momento del día según los requerimientos personales.`,
    recomendaciones: `Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Ayuda a prevenir contracturas, calambres y espasmos musculares",
      "Facilita la absorción de calcio para huesos sanos , participando en el metabolismo energético, disminuyendo la fatiga y el cansancio muscular.",
      "Contribuye a regular la presión arterial y mantener un ritmo cardíaco saludable",
      "Favorece un descanso reparador y profundo, disminuyendo insomnio , la ansiedad y el  estrés",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Colágeno tipo II",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Colágeno tipo II 40 mg; Vitamina D3 6 mcg; Vitamina C 20 mg; Magnesio citrato 200 mg   csp para 50 capsulas ",
    uso: "La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica .Estas capsulas se pueden tomar en cualquier momento del día según los requerimientos personales. ",
    recomendaciones: `Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Facilita la recuperación articular tras el ejercicio físico intenso. ",
      "Aumenta la flexibilidad y comodidad en movimientos, reduciendo la rigidez articular.",
      "Ayuda a la protección y regeneración del cartílago y huesos ",
      "Ayuda a disminuir la inflamación en enfermedades como la artritis reumatoide y la artrosis.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Melena de león",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo:
      "Extracto seco de Melena de león 400 mg  ; excipientes  csp 50 capsulas ",
    uso: `La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica . Para mejorar su absorción, se recomienda tomar las cápsulas antes o después de comidas que  las comidas para ayudar a facilitar su absorción .  `,
    recomendaciones: `Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Mejora la función cerebral, la memoria y la concentración.",
      "Favorece la mucosa gástrica y regula la microbiota contribuyendo a mejorar el sistema inmune del cuerpo ",
      "Tiene propiedades antiinflamatorias  ",
      "Ayuda a reducir el estrés, la ansiedad y los síntomas depresivos mediante la regulación de neurotransmisores",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas Vitamina C",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: "Vitamina C ; excipientes csp para 500 mg ",
    uso: "La dosis indicada es de 1 o 2 cápsulas por día ,según la indicación médica. Estas capsulas se pueden tomar en cualquier momento del día según los requerimientos personales. ",
    recomendaciones: `Las cápsulas deben guardarse en un lugar seco, fresco y alejado de la luz solar directa. La humedad y el calor pueden alterar la estructura de la cápsula o degradar el principio activo , se recomienda conservarlas entre 15 °C y 25 °C, a menos que el envase indique lo contrario. Mantener las cápsulas siempre en su envase original, bien cerrado, para evitar contaminación, exposición al aire o confusión con otros medicamentos. Es importante no tocar las cápsulas con las manos sucias o mojadas, ya que la humedad puede dañarlas. Deben mantenerse fuera del alcance de los niños: para evitar ingestas accidentales.`,
    beneficios: [
      "Contribuyen a fortalecer el sistema inmune del cuerpo  ",
      "Mejora la asimilación del hierro proveniente de los alimentos, previniendo la anemia",
      "Tienen un efecto antioxidante que previene del deterioro celular",
      "Es esencial para la reparación de tejidos, curación de heridas y el mantenimiento de huesos y dientes.",
    ],
    receta: false,
    video: true,
  },
  {
    categoria: "Suplementos",
    nombre: "Creatina en polvo",
    img: ["1.jpg", "2.jpg", "3.jpg"],
    compo: `Creatina monohidratada micronizada 100 % pura csp 100 g `,
    uso: `La creatina en polvo es un suplemento sensible a la humedad, al calor y a la luz, por lo que es importante guardarla en un ambiente alejado de fuentes de calor, como hornos o luz solar directa. La temperatura ambiente (15-25 °C) es ideal.`,
    recomendaciones: `Debe mantenerse el envase bien cerrado después de cada uso, ya que la humedad puede alterar la estructura del polvo y favorecer su degradación. No se deben  cucharas húmedas al manipularla .Es recomendable tomar la cantidad recomendada de creatina (3 a 5 gramos por día) , junto con una bebida dulce como jugo , para mejorar su absorción .`,
    beneficios: [
      "Aumenta la fuerza y el rendimiento físico durante el entrenamiento ",
      "Promueve la protección neuromuscular y antienvejecimiento de los músculos",
      "Mejora la función cognitiva y la concentración",
      "Favorece el bienestar físico y el crecimiento muscular post entrenamiento ",
    ],
    receta: false,
    video: true,
  },
];
function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <Header></Header>
      <Routes>
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/quienesSomos" element={<QuienesSomos></QuienesSomos>} />
        <Route
          path="/preparados"
          element={<Preparados products={products}></Preparados>}
        />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route
          path="/item/:name"
          element={<Product products={products}></Product>}
        />
        <Route path="/FAQ" element={<Recomendaciones />}></Route>
      </Routes>
      <BotonesChat></BotonesChat>
      <Footer></Footer>
    </main>
  );
}

export default App;
