import Button from "../Button/Button";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
export default function ProductCard({
  image,
  category,
  title,
  principles = [],
  details,
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
        <Button variant="primary" onClick={() => navigate(`/item/${title}`)}>
          Ver Detalles
        </Button>
      </div>
    </article>
  );
}
