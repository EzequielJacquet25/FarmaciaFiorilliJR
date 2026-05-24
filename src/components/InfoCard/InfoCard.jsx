import "./InfoCard.css";

export default function InfoCard({
  icon,
  title,
  text,
  variant = "light",
  children,
}) {
  return (
    <article className={`info-card info-card-${variant} flex flex-col center`}>
      {icon && (
        <span className="material-symbols-outlined info-card-icon">{icon}</span>
      )}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {children}
    </article>
  );
}
