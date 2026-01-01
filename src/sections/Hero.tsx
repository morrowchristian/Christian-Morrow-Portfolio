// src/sections/Hero.tsx
import React from "react";
import RevealSection from "../components/RevealSection";
import { motion, type Variants } from "framer-motion";

const motionTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } 
  }
};

const Hero: React.FC = () => {
  return (
    <RevealSection id="hero" className="hero-section">
      <div className="hero-content">
        <motion.span
          className="hero-eyebrow"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Christian Morrow
        </motion.span>

        <motion.h1
          className="hero-title"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Software Engineer building modern, full-stack web applications.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          B.S. in Software Systems (Latin Honors), University of Tennessee at Chattanooga — May 2025.
        </motion.p>

        <motion.p
          className="hero-tagline"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Experienced in building production-ready applications from the ground up using modern JavaScript and Python stacks.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/Christian_Morrow_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          className="scroll-prompt"
          aria-label="Scroll to Projects"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↓ Scroll to explore ↓
        </motion.a>
      </div>
    </RevealSection>
  );
};

export default Hero;
