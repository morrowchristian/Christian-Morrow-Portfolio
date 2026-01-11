// src/components/Services/Services.tsx
import "./Services.css";
import { services } from "../../data/services";
import { ServiceCard } from "./ServiceCard";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Services: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h2 className="services__title">Services</h2>

        <div
          ref={ref}
          className={`services__grid animate ${
            isVisible ? "animate--visible" : ""
          }`}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
