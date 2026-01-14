import React from "react";
import "../assets/Styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m <span className="animated-name">Praveen N</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>

          <a href="#projects" className="cta-btn btn-lg mt-3">
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
          <img src="/images/PRAVEEN N PHOTO.jpg" alt="Praveen N" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
