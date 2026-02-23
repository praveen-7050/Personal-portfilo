import React from "react";
import "../assets/Styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I’m Praveen N, a passionate Full Stack Developer dedicated to building responsive, interactive, and high-performance web applications. I specialize in designing seamless user experiences on the frontend with React while creating robust,
              scalable backend solutions using Python and modern web technologies.
            </p>
            <p className="about-extra">
              I continuously explore new tools and frameworks to expand my skill set and deliver efficient, maintainable code. My goal is to craft end-to-end web experiences that are both visually appealing and functionally powerful. I thrive in
              collaborative environments, enjoy solving complex problems, and take pride in contributing to impactful projects that make a difference.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <div className="about-image-wrapper">
              <img src="/images/PRAVEEN N PHOTO.jpg" alt="Praveen N" className="about-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
