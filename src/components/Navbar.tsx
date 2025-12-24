import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep an up‑to‑date reference to the active section without re‑binding listeners.
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    // Observe each section to:
    // 1) update the active nav link based on viewport position
    // 2) trigger reveal animations when a panel becomes dominant
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            entry.target.classList.add("visible"); // one‑time reveal
          }
        });
      },
      {
        threshold: 0.6, // tuned for snap‑scroll panels
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Lightweight scroll listener for the progress bar.
    // Computes scroll position as a percentage of total document height.
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      const bar = document.getElementById("progress-bar");
      if (bar) bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Keyboard navigation between snap-scroll panels.
    // Attached once; uses activeRef to avoid re-binding on state changes.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

      // Prevent browser's default scroll behavior (which causes double movement)
      e.preventDefault();

      const sections = Array.from(document.querySelectorAll("section"));
      const currentIndex = sections.findIndex(
        (s) => s.id === activeRef.current
      );

      if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      }

      if (e.key === "ArrowUp" && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close menu when selecting a link
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="nav-container">
      {/* Desktop navigation */}
      <ul className="nav-desktop">
        <li><a href="#hero" className={active === "hero" ? "active-link" : ""}>Home</a></li>
        <li><a href="#about" className={active === "about" ? "active-link" : ""}>About</a></li>
        <li><a href="#skills" className={active === "skills" ? "active-link" : ""}>Skills</a></li>
        <li><a href="#projects" className={active === "projects" ? "active-link" : ""}>Projects</a></li>
        <li><a href="#contact" className={active === "contact" ? "active-link" : ""}>Contact</a></li>
      </ul>

      {/* Mobile trigger: single-line signal bar */}
      <button
        className={`signal-toggle ${menuOpen ? "open" : ""}`}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="signal-bar"></span>
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={handleNavClick}>Home</a>
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#skills" onClick={handleNavClick}>Skills</a>
        <a href="#projects" onClick={handleNavClick}>Projects</a>
        <a href="#contact" onClick={handleNavClick}>Contact</a>
      </div>

      {/* Soft focus background effect */}
      <div className={`focus-overlay ${menuOpen ? "open" : ""}`}></div>
    </nav>
  );
};

export default Navbar;
