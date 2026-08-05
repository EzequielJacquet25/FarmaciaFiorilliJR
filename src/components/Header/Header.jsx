import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { site } from "../../data/site";
import "./Header.css";

const navigationItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/preparados", label: "Preparados" },
  { to: "/quienesSomos", label: "Quiénes somos" },
  { to: "/especialidades", label: "Especialidades" },
  { to: "/FAQ", label: "Recomendaciones" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header fixed z-50">
      <nav className="header-nav" aria-label="Navegación principal">
        <Link to="/" className="header-brand" onClick={closeMenu}>
          <img src={logo} alt={site.name} className="logo-img" />
          <span>{site.name}</span>
        </Link>

        <button
          type="button"
          className="header-menu-button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        <div
          id="primary-navigation"
          className={`header-links ${isMenuOpen ? "header-links-open" : ""}`}
        >
          {navigationItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `header-link${isActive ? " header-link-active" : ""}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
