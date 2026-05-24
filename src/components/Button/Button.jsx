import "./Button.css";

export default function Button({
  onClick,
  children,
  variant = "primary",
  icon = null,
  type = "button",
}) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );
}
