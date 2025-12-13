import React from "react";
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
          <a href="#">Projets</a>
          <a href="#">Qui suis-je ?</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
