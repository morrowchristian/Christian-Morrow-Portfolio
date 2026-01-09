// src/Home.tsx
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import useReveal from "./hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <section id="intro" className="reveal">
        <Intro />
      </section>

      <section id="projects" className="reveal">
          <Projects />
      </section>

      <section id="contact" className="reveal">
          <Contact />
      </section>
    </>
  );
}
