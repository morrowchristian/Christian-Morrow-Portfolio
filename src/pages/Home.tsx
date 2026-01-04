// src/pages/Home.tsx
import HeroSection from "../components/HeroSection";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />

      <section className="featured-section">
        <h2>Featured Work</h2>
        <div className="featured-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};
