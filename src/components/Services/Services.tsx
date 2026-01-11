import "./Services.css";
import { services } from "../../data/services";
import { ServiceCard } from "./ServiceCard";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { Grid } from "../Grid/Grid";
import { Container } from "../Container/Container";

export const Services: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="services" className="services">
      <Container>
        <h2 className="services__title">Services</h2>

        <Grid
          ref={ref}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};
