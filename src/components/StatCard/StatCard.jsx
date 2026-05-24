import "./StatCard.css";

export default function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <h3 className="stat-card-value">{value}</h3>
      <p className="stat-card-label">{label}</p>
    </div>
  );
}