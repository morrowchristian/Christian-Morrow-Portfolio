// src/components/Portfolio/Portfolio.tsx
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__inner">
        <h2 className="portfolio__title">Portfolio</h2>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
