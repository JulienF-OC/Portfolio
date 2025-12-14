import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
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
          <a href="#">Accueil</a>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mes projets
          </NavLink>
          <a href="#">Qui suis-je ?</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
