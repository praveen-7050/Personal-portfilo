import React from "react";
import "../assets/Styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container text-center">
        <h1 className="hero-title">
          Hi, I’m <span className="animated-name"> Praveen N</span>
        </h1>
        <p className="hero-subtitle">Frontend Developer</p>
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
    </section>
  );
};

export default Hero;
