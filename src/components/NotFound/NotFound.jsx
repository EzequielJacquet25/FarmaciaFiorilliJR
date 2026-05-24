import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound-container">
        {/* Icono */}
        <div className="notfound-icon">
          <span className="material-symbols-outlined">error_outline</span>
        </div>

        {/* Texto */}
        <div className="notfound-text">
          <span className="notfound-error">Error 404</span>

          <h1>Fórmula no encontrada</h1>

          <p>
            No hemos podido localizar la página que busca. Permítanos guiarle de
            vuelta a nuestro catálogo de soluciones personalizadas.
          </p>
        </div>

        {/* Botones */}
        <div className="notfound-actions">
          <Link to="/" className="flex center">
            <span className="material-symbols-outlined">arrow_back</span>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
