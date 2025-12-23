const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>

      <div className="skills-grid">
        <div>
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h4>Backend</h4>
          <ul>
            <li>Django REST Framework</li>
            <li>Python</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div>
          <h4>Databases</h4>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div>
          <h4>Other</h4>
          <ul>
            <li>Swift / SwiftUI</li>
            <li>Chrome Extensions</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
