import "./CategoryFilter.css";

export default function CategoryFilter({
  label,
  active = false,
  icon = "chevron_right",
  onClick,
}) {
  return (
    <button
      type="button"
      className={`category-filter ${active ? "category-filter-active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span>{label}</span>
      <span className="material-symbols-outlined category-filter-icon" aria-hidden="true">
        {icon}
      </span>
    </button>
  );
}
