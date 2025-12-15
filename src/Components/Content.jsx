import React from "react";
import "./Content.scss";

function Content() {
  return (
    <section id="Main">
      <div className="hero">
        <h1>Développeur web</h1>

        <p>
          Je crée des expériences web modernes, élégantes et efficaces. Chaque
          projet est pensé pour allier design, performance et clarté.
        </p>

        <button className="cta-neon">En savoir plus sur moi</button>
      </div>
    </section>
  );
}

export default Content;
