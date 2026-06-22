import "./About.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/Logo.png";

function About() {
  return (
    <>

      <div className="about-page">
        <div className="about-header">
          <img
            src={logo}
            alt="IT School Logo"
            className="about-logo"
          />

          <h1>About IT School</h1>
          <p>
            Building future technology leaders through innovation, education,
            and practical experience.
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>
              IT School is a leading institution dedicated to providing
              high-quality education in Information Technology.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              To become a center of excellence in Information Technology
              education and produce graduates who can compete globally.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide innovative learning experiences and industry-focused
              training that empower students to become skilled IT professionals.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Courses</h2>
            <p>
              Explore our technology programs designed to prepare students for
              successful careers in the IT industry.
            </p>

            <div className="course-grid">
              <Link to="/courses" className="course-card">
                Web Development
              </Link>

              <Link to="/courses" className="course-card">
                Software Engineering
              </Link>

              <Link to="/courses" className="course-card">
                Database Management
              </Link>

              <Link to="/courses" className="course-card">
                Networking & Cybersecurity
              </Link>

              <Link to="/courses" className="course-card">
                Mobile Application Development
              </Link>

              <Link to="/courses" className="course-card">
                Artificial Intelligence
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;