import "./SectionTitle.css";

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`section-title ${centered ? "section-title-centered" : ""}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}