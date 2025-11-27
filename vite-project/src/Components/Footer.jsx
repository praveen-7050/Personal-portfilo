import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container text-center">
        <h4 className="footer-name">Praveen N</h4>

        <div className="footer-social mt-3">
          <a href="https://github.com/praveen-7050" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/praveen-n-61493826b/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="praveen.n7050@gmail.com" target="_blank" rel="noreferrer">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

        <p className="footer-copy mt-3">© {new Date().getFullYear()} Praveen N. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
