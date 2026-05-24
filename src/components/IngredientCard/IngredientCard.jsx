import "./IngredientCard.css";

export default function IngredientCard({
  badge,
  badgeIcon,
  title,
  text,
  badgeType = "text",
}) {
  return (
    <article className="ingredient-card">
      <div className="ingredient-card-badge">
        {badgeType === "icon" ? (
          <span className="material-symbols-outlined ingredient-card-badge-icon">
            {badgeIcon}
          </span>
        ) : (
          <span className="ingredient-card-badge-text">{badge}</span>
        )}
      </div>

      <div className="ingredient-card-content">
        <h4 className="ingredient-card-title">{title}</h4>
        <p className="ingredient-card-text">{text}</p>
      </div>
    </article>
  );
}