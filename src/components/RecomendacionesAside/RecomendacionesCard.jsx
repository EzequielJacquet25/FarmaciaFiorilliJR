import "./RecomenadiconesCard.css";
export default function RecommendationCard({ alt, title, description, link }) {
  const imagen = `/JPG/${title.trim().replace(/\s+/g, "")}/1.jpg`;
  return (
    <article className="recommendation-aside-card">
      <img src={imagen} alt={alt} className="recommendation-aside-card-image" />

      <h4 className="recommendation-aside-card-title">{title}</h4>

      <p className="recommendation-aside-card-description">{description}</p>

      <a href={link} className="recommendation-aside-card-link">
        <span>Ver más</span>
        <span className="material-symbols-outlined recommendation-aside-card-icon">
          chevron_right
        </span>
      </a>
    </article>
  );
}
