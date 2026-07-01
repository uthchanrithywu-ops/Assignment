import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>IT School</h2>
          <p>
            Build your future in technology with our comprehensive programs.
            Trust us to provide you with the best education and training.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vision">Vision</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/development">Development</Link>
          
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: ITSchooladmin@gmail.com</p>
          <p>Phone: +855 12 345 678</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 IT School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;