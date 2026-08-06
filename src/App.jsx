import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import AnalyticsConsent from "./components/AnalyticsConsent/AnalyticsConsent";
import { initializeAnalytics, trackPageView } from "./services/analyticsService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BotonesChat from "./components/BotonesChat/BotonesChat";
import { products } from "./data/products";

const Home = lazy(() => import("./components/Home/Home"));
const QuienesSomos = lazy(() => import("./components/QuienesSomos/QuienesSomos"));
const Preparados = lazy(() => import("./components/Preparados/Preparados"));
const Product = lazy(() => import("./components/Product/Product"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const Recomendaciones = lazy(() => import("./components/Recomendaciones/Recomendaciones"));
const Especialidades = lazy(() => import("./components/Especialidades/Especialidades"));
const PedidoDePreparado = lazy(
  () => import("./components/PedidoDePreparado/PedidoDePreparado"),
);

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => { initializeAnalytics(); }, []);
  const location = useLocation();
  useEffect(() => { trackPageView(location.pathname); }, [location.pathname]);
  return (
    <div className="app-shell">
      <Header></Header>
      <Suspense
        fallback={
          <main className="route-loader" aria-live="polite">
            Cargando contenido…
          </main>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/preparados" element={<Preparados products={products} />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/pedido-de-preparado" element={<PedidoDePreparado />} />
          <Route path="/item/:name" element={<Product products={products} />} />
          <Route path="/FAQ" element={<Recomendaciones />} />
        </Routes>
      </Suspense>
      <BotonesChat></BotonesChat>
      <Footer></Footer>
      <AnalyticsConsent />
    </div>
  );
}

export default App;
