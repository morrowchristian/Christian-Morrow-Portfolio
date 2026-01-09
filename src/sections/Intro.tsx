// src/sections/Intro.tsx
import "../styles/sections/Intro.css";

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-grid layout-wrapper">
        {/* LEFT — Text */}
        <div className="intro-text">
          <h1>Christian Morrow</h1>
          <h2>Full‑Stack Software Engineer</h2>

          <p>
            I’m a full‑stack software engineer focused on building clean,
            intentional, and maintainable systems. I care deeply about UI/UX,
            architecture, and creating expressive, modern interfaces.
          </p>

          <p>
            Outside of development, I’m always exploring new tools, refining
            workflows, and pushing for clarity and craftsmanship in everything
            I build.
          </p>

          <a href="#projects" className="button">
            View Projects
          </a>
        </div>

        {/* RIGHT — Visual or Portrait */}
        <div className="intro-visual">
          {/* Add an image, SVG, or animation here */}
        </div>
      </div>
    </section>
  );
}
