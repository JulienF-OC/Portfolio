import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ dark, setDark }) {
  return (
    <section id="Navbar">
      <nav className="Nav-content">
        <div className="Logo">
          <h1>
            Franz
            <br />
            Julien
          </h1>
        </div>

        <div className="link">
          <NavLink to="/" end>
            Accueil
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mes projets
          </NavLink>

          <a href="#">Qui suis-je ?</a>
          <a href="#">Contact</a>

          {/* Bouton Dark Mode */}
          <button
            className="dark-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
