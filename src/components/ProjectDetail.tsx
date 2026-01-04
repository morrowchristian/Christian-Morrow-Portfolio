import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import "../styles/ProjectDetail.css";

interface Props {
  project: Project;
}

const ProjectDetail: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-detail">

      {/* Back Button */}
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      {/* Hero Section */}
      <section className="project-hero">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        )}
        <h1>{project.title}</h1>
        <p className="summary">{project.summary}</p>
      </section>

      {/* Project Info */}
      <section className="project-info">
        <h2>Tech Stack</h2>
        <ul className="tech-list">
          {project.techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
