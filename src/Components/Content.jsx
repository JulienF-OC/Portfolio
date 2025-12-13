import React from "react";
import "./Content.scss";

function Content() {
  return (
    <section id="Main">
      <div className="cards">
        <div className="Card">
          <img src="/moi.png" alt="Photo de moi" />
          <div className="Card-content">
            <h2>Développeur web en formation</h2>
            <p>
              Je m’appelle Franz Julien et je suis actuellement en formation de
              développeur web chez OpenClassrooms. Passionné par le
              développement front-end, je conçois des interfaces modernes,
              accessibles et performantes, en particulier avec React. J’accorde
              une grande importance à la structure du code, à la lisibilité et à
              l’expérience utilisateur. À travers ce portfolio, je présente les
              projets que j’ai réalisés durant ma formation, qui illustrent mon
              évolution et mes compétences techniques. Je suis actuellement à la
              recherche d’une opportunité pour continuer à progresser et mettre
              mes compétences au service de projets concrets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
