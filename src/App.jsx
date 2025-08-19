import "./App.css";
import { Routes, Route } from "react-router";
import logo from "./assets/logoFarmaciaFiorilliJR.png";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer.jsx";
import Home from "./components/Home";
import BotonesChat from "./components/BotonesChat";
import SobreNosotros from "./components/SobreNosotros";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Preparados from "./components/Preparados";
import NotFound from "./components/NotFound";

const productos = [
  {
    categoria: "Skin Care",
    nombre: "Agua Micerlar",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas curcuma y pimienta negra",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Magnesio Quelado",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Citrato de Magnesio",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Colageno tipo II",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de Melena de león",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas Vitamina C",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Creatina en polvo",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Antiage",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Crema Antimicótica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Nutritiva con vitamina A y E",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Crema para talones resecos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Crema Tensora",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Emulsión Limpiadora",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Emulsión Nutritiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Gel Antinflamatorio",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Gotas hepaticas",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Gotas Serum de Acido Hialuronico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Spay Antimicótico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Spray de Clorhexidina",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Tonico Facial",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Medicamentos de uso topico",
    nombre: "Ungüento Antimicótico",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Skin Care",
    nombre: "Crema para contorno de ojos",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Suplementos",
    nombre: "Cápsulas de ashwagandha",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Adelgazante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antidiabetica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antihipertensiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Antirreumatica",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Bronquial",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Circulatoria",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Digestiva",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Laxante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    categoria: "Productos de origen natural",
    nombre: "Tisana Sedante",
    img: ["1.jpg", "2.jpg", "3.jpg"],
  },
];

function App() {
  return (
    <>
      <Header logo={logo} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home productos={productos} />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />} />
        <Route
          path="/preparados"
          element={<Preparados productos={productos} />}
        />
      </Routes>
      <BotonesChat />
      <Footer />
    </>
  );
}

export default App;
