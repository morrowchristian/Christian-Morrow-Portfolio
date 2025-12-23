export type Project = {
  name: string;
  shortTagline: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "North Georgia Awning Website",
    shortTagline: "Modern business website built with React and TypeScript.",
    description:
      "A clean, responsive marketing website for North Georgia Awning. Built with React and TypeScript, featuring modular components, mobile‑first layout, and a professional aesthetic tailored for a real business client.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://github.com/morrowchristian/north-georgia-awning-website"
  },
  {
    name: "Event Dashboard",
    shortTagline: "Interactive event management dashboard with React.",
    description:
      "A dashboard interface for managing events, attendees, and scheduling. Designed with reusable components, clear data presentation, and a focus on intuitive user workflows.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://github.com/morrowchristian/event-dashboard"
  },
  {
    name: "MyNotes (SwiftUI)",
    shortTagline: "Block‑based note‑taking app for iOS.",
    description:
      "A modern SwiftUI note‑taking app focused on fast, low‑friction capture with a clean UI and structured block editing. Built with SwiftUI’s declarative architecture and smooth state management.",
    tech: ["Swift", "SwiftUI"],
    link: "https://github.com/morrowchristian/MyNotes"
  },
  {
    name: "TimeSpan Calculator",
    shortTagline: "Chrome extension for time duration calculations.",
    description:
      "A Chrome extension that computes time spans for scheduling and payroll workflows. Designed for repeated daily use with a simple, focused UI and reliable calculation logic.",
    tech: ["JavaScript", "Chrome Extension APIs", "HTML", "CSS"],
    link: "https://github.com/morrowchristian/timespan-calculator"
  }
];
