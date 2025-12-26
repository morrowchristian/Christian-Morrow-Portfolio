import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image: "/images/marketing-site.png",
    title: "Marketing Site",
    tagline: "A clean, responsive marketing site built for a client, focused on clarity and conversion.",
    tech: "React · TypeScript · CSS"
  },
  {
    image: "/images/event-dashboard.png",
    title: "Event Dashboard",
    tagline: "A dashboard for managing events, attendees, and scheduling with a clean, minimal UI.",
    tech: "React · Django REST Framework · PostgreSQL"
  },
  {
    image: "/images/ios-notes.png",
    title: "iOS Note‑Taking App",
    tagline: "A SwiftUI app for fast, minimal note‑taking with a focus on simplicity and speed.",
    tech: "Swift · SwiftUI"
  },
  {
    image: "/images/time-extension.png",
    title: "Time Calculation Extension",
    tagline: "A Chrome extension for quick time calculations, published on the Chrome Web Store.",
    tech: "JavaScript · Chrome APIs"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects reveal">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            {...p}
            style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;