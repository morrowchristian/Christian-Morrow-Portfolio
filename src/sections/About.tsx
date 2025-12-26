const About = () => {
  return (
    <section id="about" className="section reveal about">
      <h2>About</h2>

      <div className="about-grid">
        <div className="about-block">
          <h3>What I Do</h3>
          <p>
            I’m a full‑stack software engineer who takes projects from rough concept to reliable,
            production‑ready software. I focus on clear architecture, small composable pieces, and
            code that another developer can understand and extend without friction.
          </p>
        </div>

        <div className="about-block">
          <h3>How I Build</h3>
          <p>
            On the frontend, I work primarily with React and TypeScript to build focused, minimal
            interfaces that prioritize clarity and usability. On the backend, I’ve delivered APIs
            and internal tools using Django REST Framework, supported by relational databases such
            as PostgreSQL and MySQL.
          </p>
        </div>

        <div className="about-block">
          <h3>Recent Work</h3>
          <p>
            My recent work includes a marketing site for a client, an event management dashboard,
            an iOS note‑taking app built with SwiftUI, and a Chrome extension for time calculations
            published on the Chrome Web Store. I enjoy projects that solve concrete problems, evolve
            through iteration, and leave room for thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
