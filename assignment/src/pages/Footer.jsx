import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>IT School</h2>
          <p>Build your future in technology with our comprehensive programs. Trust us to provide you with the best education and training.</p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/courses">Courses</a>
          <a href="/development">Development</a>
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