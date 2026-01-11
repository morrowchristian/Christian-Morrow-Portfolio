// src/components/Bio/Bio.tsx
import "./Bio.css";
import profileImg from "../../assets/profile.jpg"; // adjust path as needed

export const Bio: React.FC = () => {
  return (
    <section id="bio" className="bio">
      <div className="bio__inner">
        {/* LEFT COLUMN */}
        <div className="bio__content">
          <p className="bio__location">📍 Cleveland, TN</p>

          <h1 className="bio__name">Christian Morrow</h1>

          <h2 className="bio__headline">
            I Build Custom Website Solutions That Help Your Business Grow
          </h2>

          <p className="bio__subtext">
            I help you increase conversion and performance in every possible way.
          </p>

          <div className="bio__buttons">
            <a href="#portfolio" className="bio__button bio__button--primary">
              See my work
            </a>
            <a href="#services" className="bio__button bio__button--secondary">
              Start a project
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bio__image-wrapper">
          <div className="bio__image-bg"></div>
          <img src={profileImg} alt="Christian Morrow" className="bio__image" />
        </div>
      </div>
    </section>
  );
};
