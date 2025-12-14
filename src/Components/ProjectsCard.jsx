function ProjectCard({ project }) {
  return (
    <article className="Card-projects">
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        loading="lazy"
      />

      <div className="Card-projects-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <ul className="Tech-list">
          {project.tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="Card-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Démo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
