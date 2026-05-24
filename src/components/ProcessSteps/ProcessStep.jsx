import "./ProcessStep.css";

export default function ProcessStep({ number, title, text, last = false }) {
  return (
    <div className="process-step">
      <div className="process-step-left">
        <div className="process-step-number">{number}</div>
        {!last && <div className="process-step-line"></div>}
      </div>

      <div className="process-step-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}