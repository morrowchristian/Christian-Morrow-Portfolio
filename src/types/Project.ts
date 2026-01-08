// src/types/Project.ts
export interface Project {
  id: string;
  title: string;
  summary: string;
  techStack: string[];
  image?: string;
  images?: string[];
  description?: string;
  demo?: string;
  repo?: string;
}
