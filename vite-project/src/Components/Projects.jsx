import React, { useEffect, useRef } from "react";
import "../assets/Styles/projects.css";

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

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
      live: "https://calculator-web-praveen.netlify.app/",
      github: "https://github.com/praveen-7050/java-script-small-projects.git",
    },
    {
      title: "TO DO List App",
      description: "A functional TO-DO list app  built with vanilla JavaScript.",
      tools: "JavaScript ES6+, HTML5, CSS3 Bootstrap",
      image: "/images/Todo-list.PNG",
      live: "https://todolistwebpraveen.netlify.app/",
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
    {
      title: "Task Manager",
      description: "A task management app built with TypeScript to create and delete tasks with type-safe components and clean UI.",
      tools: "Typescript, HTML5, CSS3",
      image: "/images/Task_manager.PNG",
      live: "https://to-d-ts.vercel.app/",
      github: "https://github.com/praveen-7050/Typescript.git",
    },
  ];

  const reactProjects = [
    {
      title: "Movie Booking App",
      description: "A fully responsive React app for booking movie tickets.",
      tools: "React 18, Bootstrap 5, CSS3",
      image: "/images/Movie.PNG",
      live: "https://movie-booking-webdev.vercel.app/",
      github: "https://github.com/praveen-7050/Movie-Booking-web.git",
    },
    {
      title: "Tic Tac Game",
      description: "A fully responsive React app for Tic Tac Game.",
      tools: "HTML, CSS3, Bootstrap 5, React 18",
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
      <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="project-card" ref={addToRefs}>
          <div className="card-img-wrapper">
            <img src={project.image} alt={project.title} className="card-img-top" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="tools">{project.tools}</p>
            <p className="card-text">{project.description}</p>
          </div>
          <div className="card-footer d-flex justify-content-center gap-2">
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-live">
              <i className="bi bi-eye-fill me-2"></i>Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-github">
              <i className="bi bi-github me-2"></i>GitHub
            </a>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Full-Stack Projects</h2>
        <p className="section-subtitle mb-5 text-center">My work across front-end and back-end technologies.</p>

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
