import "./ProcessStepCard.css";

export default function ProcessStepCard({ icon, title, text }) {
  return (
    <div className="process-step-card">
      <div className="process-step-card-icon-wrap">
        <span className="material-symbols-outlined process-step-card-icon">
          {icon}
        </span>
      </div>

      <h4 className="process-step-card-title">{title}</h4>
      <p className="process-step-card-text">{text}</p>
    </div>
  );
}