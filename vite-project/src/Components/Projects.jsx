import React from "react";
import "../assets/Styles/projects.css";

const Projects = () => {
  const htmlCssProjects = [
    {
      title: "Furniture E-commerce Website (indecasa)",
      description: "A responsive landing page using HTML5 and CSS3 with Bootstrap for Furniture Website.",
      tools: "HTML5, CSS3, Bootstrap 5",
      image: "/images/furniture.PNG",
      live: "https://indecasaweb.netlify.app/",
      github: "https://github.com/praveen-7050/Web-practice.git",
    },
    {
      title: "Travel Website (ComfortLine travels)",
      description: "Designed and developed a responsive travel-booking website using HTML,CSS, and Bootstrap.",
      tools: "HTML5, CSS3, Bootstrap 5",
      image: "/images/comfortline Travels.PNG",
      live: "https://comfortlinetravelsweb.netlify.app/",
      github: "https://github.com/praveen-7050/Web-practice.git",
    },
    {
      title: "Conference Website (Visionary 2025)",
      description: "Developed a responsive web application for a science conference event using HTML, CSS, Bootstrap, and JavaScript with a clean UI.",
      tools: "HTML5, CSS3, Bootstrap 5",
      image: "/images/confrence.PNG",
      live: "https://conferenceweb.netlify.app/",
      github: "https://github.com/praveen-7050/Web-practice.git",
    },
  ];

  const jsProjects = [
    {
      title: "Random Color Generator",
      description: "A tool that generates random colors with hex codes at the click of a button.",
      tools: "JavaScript ES6+, HTML5, CSS3",
      image: "/images/color Generator.PNG",
      live: "https://randomcolorgenerator-praveen.netlify.app/",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
    {
      title: "Calculator",
      description: "A functional calculator built with vanilla JavaScript.",
      tools: "JavaScript ES6+, HTML5, CSS3",
      image: "/images/claculator.PNG",
      live: "#",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
    {
      title: "Digital Timer",
      description: "A real-time digital clock using JavaScript’s Date API with smooth updates.",
      tools: "JavaScript ES6+, HTML5, CSS3",
      image: "/images/Digital Timer.PNG",
      live: "https://digital-timer-web-praveen.netlify.app/",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
    {
      title: "Form Validation with Authentication",
      description: "Login system with validation and role-based access using LocalStorage.",
      tools: "JavaScript ES6+, LocalStorage, HTML5, CSS3",
      image: "/images/formvalidation using js.PNG",
      live: "https://racecraft-technologies-authenciation.netlify.app/",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
    {
      title: "Text to Voice Converter",
      description: "Converts typed text into speech using JavaScript’s Web Speech API.",
      tools: "JavaScript, API, HTML5, CSS3",
      image: "/images/texttovoice.PNG",
      live: "https://text-to-voice-convertor-web.netlify.app/",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
    {
      title: "Drag and Drop",
      description: "A drag-and-drop interface showcasing DOM manipulation.",
      tools: "JavaScript, HTML5, CSS3",
      image: "/images/darg and drop.PNG",
      live: "https://darg-drop-web.netlify.app/",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
  ];

  const reactProjects = [
    {
      title: "Movie Booking App",
      description: "A fully responsive React app for booking movie tickets .",
      tools: "React 18, Bootstrap 5, CSS3 ",
      image: "/images/Movie.PNG",
      live: "https://movie-booking-webdev.vercel.app/",
      github: "https://github.com/praveen-7050/Personal-portfilo.git",
    },
    {
      title: "Tic Tac Game ",
      description: "A fully responsive React app for Tic Tac Game  .",
      tools: " HTML,CSS3,Bootstrap 5,React 18 ",
      image: "/images/TicTac.PNG",
      live: "https://tic-tac-nine-kohl.vercel.app/",
      github: "https://github.com/praveen-7050/Tic-Tac.git",
    },
    {
      title: "Form Validation",
      description: "A responsive React app with form validation and user authentication.",
      tools: "React 18, HTML, CSS, Bootstrap 5",
      image: "/images/FormValidation.PNG",
      live: "https://form-validation-web-plum.vercel.app/",
      github: "https://github.com/praveen-7050/mini-react-projects.git",
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive personal portfolio built with React, showcasing projects, skills, and contact information. Includes interactive components, form validation, and clean UI/UX design.",
      tools: "React 18, HTML5, CSS3, Bootstrap 5, JavaScript ES6+",
      image: "/images/portflio.PNG",
      live: "https://personal-portfilo-sooty.vercel.app/",
      github: "https://github.com/praveen-7050/Personal-portfilo.git",
    },
  ];
  const renderProjectCards = (projects) =>
    projects.map((project, index) => (
      <div key={index} className="col-lg-4 col-md-6 mb-4">
        <div className="card project-card h-100">
          <img src={project.image} className="card-img-top" alt={project.title} />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="tools">
              <strong>Tools:</strong> {project.tools}
            </p>
            <p className="card-text">{project.description}</p>
          </div>
          <div className="card-footer d-flex justify-content-center gap-2">
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              View Live
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    ));
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Front-End Projects</h2>
        <p className="section-subtitle mb-5 text-center">Some of my recent work organized by technology.</p>
        <h3 className="category-title">HTML & CSS Projects</h3>
        <div className="row justify-content-center mb-5">{renderProjectCards(htmlCssProjects)}</div>
        <h3 className="category-title">JavaScript Projects</h3>
        <div className="row justify-content-center mb-5">{renderProjectCards(jsProjects)}</div>
        <h3 className="category-title">React Projects</h3>
        <div className="row justify-content-center">{renderProjectCards(reactProjects)}</div>
      </div>
    </section>
  );
};
export default Projects;
