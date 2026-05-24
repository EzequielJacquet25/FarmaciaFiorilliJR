import "./FeatureCard.css";

export default function FeatureCard({
  title,
  text,
  icon,
  variant = "light",
  subtitle,
  children,
  className = "",
}) {
  return (
    <article className={`feature-card feature-card-${variant} ${className}`}>
      {icon && (
        <span className="material-symbols-outlined feature-card-icon">
          {icon}
        </span>
      )}

      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        {subtitle && <p className="feature-card-subtitle">{subtitle}</p>}
        {text && <p className="feature-card-text">{text}</p>}
        {children}
      </div>
    </article>
  );
}