// src/components/Resume/Resume.tsx
import "./Resume.css";
import { resume } from "../../data/resume";
import type { ResumeExperience, ResumeSkillGroup } from "../../data/resume";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Resume: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="resume" className="resume">
      <Container>
        <h2 className="resume__title">Resume</h2>

        <Grid
          ref={ref}
          columns="1fr 1fr"
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {/* Experience */}
          <div className="resume__experience">
            {resume.experience.map((item: ResumeExperience) => (
              <div key={item.company} className="resume__item">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="resume__skills">
            {resume.skills.map((group: ResumeSkillGroup) => (
              <div key={group.title} className="resume__skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill: string) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Grid>
      </Container>
    </section>
  );
};
