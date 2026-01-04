// src/pages/ProjectB.tsx
import React from "react";
import projects from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";

const ProjectB: React.FC = () => {
  const project = projects.find(p => p.id === "project-b");
  if (!project) return <p>Project not found</p>;

  return <ProjectDetail project={project} />;
};

export default ProjectB;