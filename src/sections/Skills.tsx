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
  visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const technologies = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Swift", icon: <SiSwift /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> }
];

const Skills = () => {
  return (
    <RevealSection id="skills" className="section skills">
      <header className="section-header">
        <span className="section-eyebrow">Technical Skills</span>
        <h2 className="section-title">Technologies & Tools</h2>
      </header>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="skill-item"
            variants={itemVariants}
          >
            <div className="skill-icon">{tech.icon}</div>
            <span className="skill-name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </RevealSection>
  );
};

export default Skills;
