const Projects = () => {
  return (
    <section id="projects" className="section projects reveal">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card reveal-card">
          <div className="project-image">
            <img src="/images/marketing-site.png" alt="Marketing Site" />
          </div>
          <h3>Marketing Site</h3>
          <p className="project-tagline">
            A clean, responsive marketing site built for a client, focused on clarity and conversion.
          </p>
          <p className="tech-list">React · TypeScript · CSS</p>
        </div>

        <div className="project-card reveal-card">
          <div className="project-image">
            <img src="/images/event-dashboard.png" alt="Event Dashboard" />
          </div>
          <h3>Event Dashboard</h3>
          <p className="project-tagline">
            A dashboard for managing events, attendees, and scheduling with a clean, minimal UI.
          </p>
          <p className="tech-list">React · Django REST Framework · PostgreSQL</p>
        </div>

        <div className="project-card reveal-card">
          <div className="project-image">
            <img src="/images/ios-notes.png" alt="iOS Note Taking App" />
          </div>
          <h3>iOS Note‑Taking App</h3>
          <p className="project-tagline">
            A SwiftUI app for fast, minimal note‑taking with a focus on simplicity and speed.
          </p>
          <p className="tech-list">Swift · SwiftUI</p>
        </div>

        <div className="project-card reveal-card">
          <div className="project-image">
            <img src="/images/time-extension.png" alt="Time Calculation Extension" />
          </div>
          <h3>Time Calculation Extension</h3>
          <p className="project-tagline">
            A Chrome extension for quick time calculations, published on the Chrome Web Store.
          </p>
          <p className="tech-list">JavaScript · Chrome APIs</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
