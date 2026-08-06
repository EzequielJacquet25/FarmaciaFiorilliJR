import Button from "../Button/Button";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { trackProductClick } from "../../services/analyticsService";
export default function ProductCard({
  image,
  category,
  title,
  principles = [],
  receta,
}) {
  const navigate = useNavigate();
  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img
          className="product-card-image"
          src={`/JPG/${title.trim().replace(/\s+/g, "")}/${image}`}
          alt={title}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/placeholder-product.svg";
          }}
        />
        <div className="product-card-badge">{category}</div>
      </div>

      <h3 className="product-card-title">{title}</h3>

      <div className="product-card-principles">
        <span className="product-card-principles-label">Beneficios:</span>

        <div className="product-card-tags">
          {principles.map((item) => (
            <span key={item} className="product-card-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="product-card-footer">
        {receta ? (
          <span className="product-card-details">Venta Bajo Receta</span>
        ) : (
          <span className="product-card-details">Venta Libre</span>
        )}
        <Button variant="primary" onClick={() => { trackProductClick({ nombre: title, categoria: category }); navigate(`/item/${title}`); }}>
          Ver Detalles
        </Button>
      </div>
    </article>
  );
}
