// src/components/Portfolio/Portfolio.tsx
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Portfolio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <h2 className="portfolio__title">Portfolio</h2>

        <Grid
          ref={ref}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};
