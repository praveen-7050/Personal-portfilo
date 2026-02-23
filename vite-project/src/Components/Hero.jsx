import React, { useState, useEffect } from "react";
import "../assets/Styles/hero.css";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m <span className="animated-name">Praveen N</span>
          </h1>
          <p className="hero-subtitle">
            <Typewriter text="Full Stack Developer" speed={150} />
          </p>

          <a href="#projects" className="cta-btn btn btn-primary btn-lg mt-3">
            View Projects
          </a>

          <div className="hero-social mt-4">
            <a href="https://github.com/praveen-7050" target="_blank" rel="noreferrer" className="social-icon">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/praveen-n-61493826b/" target="_blank" rel="noreferrer" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src="/images/PRAVEEN N PHOTO.jpg" alt="Praveen N" className="hero-image floating" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
