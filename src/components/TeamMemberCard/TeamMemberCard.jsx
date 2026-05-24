import "./TeamMemberCard.css";

export default function TeamMemberCard({
  image,
  name,
  role,
  description,
}) {
  return (
    <article className="team-card">
      <div className="team-card-image-wrap">
        <img className="team-card-image" src={image} alt={name} />
        <div className="team-card-overlay"></div>
      </div>

      <h4 className="team-card-name">{name}</h4>
      <p className="team-card-role">{role}</p>
      <p className="team-card-description">{description}</p>
    </article>
  );
}