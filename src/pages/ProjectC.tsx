// src/pages/ProjectC.tsx
import React from "react";
import projects from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";

const ProjectC: React.FC = () => {
  const project = projects.find(p => p.id === "project-c");
  if (!project) return <p>Project not found</p>;

  return <ProjectDetail project={project} />;
};

export default ProjectC;