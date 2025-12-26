const Skills = () => {
  return (
    <section id="skills" className="section skills reveal">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skills-block">
          <h3>Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Django</li>
            <li>Swift</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skills-block">
          <h3>Engineering Traits</h3>
          <ul>
            <li>Clean Architecture</li>
            <li>Intentional UI/UX</li>
            <li>Git Discipline</li>
            <li>Maintainable Codebases</li>
            <li>API Design</li>
            <li>Iterative Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
