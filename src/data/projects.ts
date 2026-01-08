// src/data/projects.ts
import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: "event-dashboard",
    title: "Event Dashboard",
    summary:
      "A real‑time event management dashboard featuring analytics, filtering, and a clean UI for tracking activity.",
    description:
      "A full event monitoring dashboard built with React and TypeScript. It includes real‑time filtering, analytics panels, and a responsive layout. Designed to demonstrate data‑driven UI patterns and clean component architecture.",
    techStack: ["React", "TypeScript", "Tailwind", "API Integration"],
    image: "/assets/event-dashboard.png",
    images: ["/assets/event-dashboard.png"],
    demo: "",
    repo: "https://github.com/morrowchristian/event-dashboard"
  },
  {
    id: "north-georgia-awning-website",
    title: "North Georgia Awning Website",
    summary:
      "A modern, responsive business website built for a local awning company, focusing on clean design and accessibility.",
    description:
      "A production‑ready business website built with React and custom CSS. Features include responsive layouts, accessible navigation, and a clean, professional aesthetic tailored for a local business.",
    techStack: ["React", "JavaScript", "CSS", "Responsive Design"],
    image: "/assets/north-georgia-awning.png",
    images: ["/assets/north-georgia-awning.png"],
    demo: "",
    repo: "https://github.com/morrowchristian/north-georgia-awning-website"
  },
  {
    id: "timespan-calculator",
    title: "Timespan Calculator",
    summary:
      "A utility tool for calculating precise time differences with a simple, intuitive interface.",
    description:
      "A lightweight time calculation tool built with vanilla JavaScript. It provides accurate time differences and a clean UI, demonstrating utility‑focused front‑end development.",
    techStack: ["JavaScript", "HTML", "CSS"],
    image: "/assets/timespan-calculator.png",
    images: ["/assets/timespan-calculator.png"],
    demo: "",
    repo: "https://github.com/morrowchristian/timespan-calculator"
  },
  {
    id: "mynotes",
    title: "MyNotes",
    summary:
      "A lightweight note‑taking app with local storage persistence and a clean, distraction‑free UI.",
    description:
      "A simple but effective note‑taking application built with React and TypeScript. Notes persist using LocalStorage, and the UI focuses on clarity and minimalism.",
    techStack: ["React", "TypeScript", "LocalStorage"],
    image: "/assets/mynotes.png",
    images: ["/assets/mynotes.png"],
    demo: "",
    repo: "https://github.com/morrowchristian/MyNotes"
  }
];

export default projects;
