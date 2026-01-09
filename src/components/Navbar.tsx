// src/components/Navbar.tsx
import { useEffect, useState } from "react";
import "../styles/components/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Scroll‑spy behavior
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar fade-in">
      <div className="navbar-container">
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <a href='/' className="navbar-name">
          Christian Morrow
        </a>
        <div className="navbar-links">
          <a href="#intro" className={active === "intro" ? "active" : ""}>About Me</a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>Contact Me</a>
        </div>
        <a href="/resume.pdf" download className="button navbar-resume"> 
        Download Resume 
        </a> 
      </div>
    </nav>
  );
}
