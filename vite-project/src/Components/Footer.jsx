import React from "react";
import "../assets/Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-name">Praveen N</h4>
            <p className="footer-desc">Full Stack Developer passionate about creating innovative web solutions.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Connect</h5>
            <div className="footer-social">
              <a href="https://github.com/praveen-7050" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/praveen-n-61493826b/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:praveen.n7050@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="footer-copy text-center">© {new Date().getFullYear()} Praveen N. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
