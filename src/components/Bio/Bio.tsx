// src/components/Bio/Bio.tsx
import "./Bio.css";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="bio" className="bio">
      <Container>
        <Grid
          ref={ref}
          columns="1fr 1fr"
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          <div className="bio__content">
            <h1 className="bio__title">Christian Morrow</h1>
            <p className="bio__subtitle">
              Full‑Stack Software Engineer crafting intentional, expressive UI.
            </p>
          </div>

          <div className="bio__image-wrapper">
            <img src="/me.jpg" alt="Christian Morrow" className="bio__image" />
          </div>
        </Grid>
      </Container>
    </section>
  );
};
