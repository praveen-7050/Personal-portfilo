import React from "react";
import "../assets/Styles/skills.css";

const Skills = () => {
const skills = ["HTML5", "CSS3", "JavaScript ES6+","Typescripot", "React 18", "Python","Django","RestAPI","Bootstrap 5","TailwindCSS","MongoDB", "SQL", "Version Control (Git)","JWT Authentication"];

const tools = ["VS Code", "GitHub", "Chrome DevTools", "MongoDB Compass", "MongoDB Shell (mongosh)"];


  return (
    <section id="skills" className="skills-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Skills & Tools</h2>
        <p className="section-subtitle mb-5">Technologies and tools I work with</p>

        <h4 className="sub-heading mb-3">Skills</h4>
        <div className="row justify-content-center mb-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <div className="skill-card py-3 px-2">{skill}</div>
            </div>
          ))}
        </div>

        <h4 className="sub-heading mb-3">Tools</h4>
        <div className="row justify-content-center">
          {tools.map((tool, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <div className="tool-card py-3 px-2">{tool}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
