import "./NavLink.css";

export default function NavLink({ href = "#", children, active = false }) {
  return (
    <a className={`nav-link ${active ? "nav-link-active" : ""}`} href={href}>
      {children}
    </a>
  );
}