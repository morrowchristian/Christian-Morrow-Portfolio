import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import RevealSection from "../components/RevealSection";
import {
  SiReact,
  SiTypescript,
  SiDjango,
  SiSwift,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiFigma,
  SiGithub
} from "react-icons/si";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const languages = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Swift", icon: <SiSwift /> }
];

const engineeringTraits = [
  { title: "Clean Architecture", description: "Design modular, maintainable systems from the ground up." },
  { title: "Intentional UI/UX", description: "Every interface is designed for clarity and usability." },
  { title: "Git Discipline", description: "Structured commit history and collaborative workflows." },
  { title: "Test-Driven Development", description: "Ensure reliability and maintainability through automated tests." }
];

const frameworksAndSoftware = [
  { name: "React", icon: <SiReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> }
];

const Skills = () => {
  return (
    <RevealSection id="skills" className="section skills">
      <h2>Skills</h2>
      <p>
        I combine modern web technologies with solid engineering practices to build scalable, maintainable applications. Here's a closer look at my technical toolkit and engineering approach.
      </p>

      <motion.div
        className="skills-containers"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Container 1: Languages */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Languages</h3>
          <div className="skills-list">
            {languages.map((lang) => (
              <div key={lang.name} className="skill-item">
                <div className="skill-icon">{lang.icon}</div>
                <span className="skill-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Container 2: Engineering Traits */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Engineering Traits</h3>
          <div className="traits-list">
            {engineeringTraits.map((trait) => (
              <div key={trait.title} className="trait-item">
                <h4>{trait.title}</h4>
                <p>{trait.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Container 3: Frameworks/Software */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Frameworks/Software</h3>
          <div className="skills-list">
            {frameworksAndSoftware.map((tech) => (
              <div key={tech.name} className="skill-item">
                <div className="skill-icon">{tech.icon}</div>
                <span className="skill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </RevealSection>
  );
};

export default Skills;
