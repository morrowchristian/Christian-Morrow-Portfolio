// src/components/HeroSection.tsx
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Christian Morrow</h1>
      <p>Full‑Stack Software Engineer</p>

      <div>
        <button>View Projects</button>
        <button>Download Resume</button>
      </div>
    </section>
  );
};

export default HeroSection;
