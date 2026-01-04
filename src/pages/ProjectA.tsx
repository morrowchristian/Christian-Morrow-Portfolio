// src/pages/ProjectA.tsx
import React from "react";
import projects from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";

const ProjectA: React.FC = () => {
  const project = projects.find(p => p.id === "project-a");
  if (!project) return <p>Project not found</p>;

  return <ProjectDetail project={project} />;
};

export default ProjectA;