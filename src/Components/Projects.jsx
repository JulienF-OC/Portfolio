import projects from "../data/projects.json";
import ProjectCard from "./ProjectsCard.jsx";
import "./Projects.scss";

function Projects() {
  return (
    <section id="Main-projects">
      <section className="Cards-projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}

export default Projects;
