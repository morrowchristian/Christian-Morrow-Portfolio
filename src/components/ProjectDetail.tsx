// src/components/ProjectDetail.tsx
import React from "react";
import type { Project } from "../types/Project";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectDetail.css";

interface Props {
  project: Project;
}

const ProjectDetail: React.FC<Props> = ({ project }) => {
  const moreProjects = projects.filter(p => p.id !== project.id);

  return (
    <div className="project-detail">
      <section className="project-hero">
        {project.image && (
          <img src={project.image} alt={project.title} className="project-image" />
        )}
        <h1>{project.title}</h1>
        <p className="summary">{project.summary}</p>
      </section>

      <section className="project-info">
        <h2>Tech Stack</h2>
        <ul className="tech-list">
          {project.techStack.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
        </div>
      </section>

      <section className="more-projects">
        <h2>More Projects</h2>
        <div className="more-grid">
          {moreProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
