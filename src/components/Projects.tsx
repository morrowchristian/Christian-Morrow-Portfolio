import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h3>Projects</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h4>{project.name}</h4>
            <p className="project-tagline">{project.shortTagline}</p>
            <p>{project.description}</p>

            <p className="tech-list">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>

            <a href={project.link} target="_blank">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
