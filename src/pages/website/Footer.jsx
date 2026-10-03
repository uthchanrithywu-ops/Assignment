import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-brand" aria-labelledby="footer-brand-title">
          <Link className="footer-logo" to="/" aria-label="IT School home">
            <span className="footer-logo-mark">
              <img src={logo} alt="" aria-hidden="true" />
            </span>
            <span id="footer-brand-title">IT School</span>
          </Link>
          <p>
            Build your future in technology with practical learning and
            career-focused programs.
          </p>
        </section>

        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Explore</h3>
          <div className="footer-link-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/vision">Vision</Link>
            <Link to="/development">Development</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <section className="footer-contact" aria-labelledby="footer-contact-title">
          <h3 id="footer-contact-title">Get in touch</h3>
          <a href="mailto:ITschooladmin@gmail.com">ITschooladmin@gmail.com</a>
          <a href="tel:+85512345678">+855 12 345 678</a>
          <p>Phnom Penh, Cambodia</p>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© 2026 IT School. All rights reserved.</p>
        <Link to="/contact">Have a question? Contact us <span aria-hidden="true">→</span></Link>
      </div>
    </footer>
  );
}

export default Footer;
