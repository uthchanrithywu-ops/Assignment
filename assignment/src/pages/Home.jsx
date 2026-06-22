import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/Logo.png";
import Footer from "./Footer";
import Menu from "../components/Menu";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="logo-section">
        <img
          src={logo}
          alt="IT School Logo"
          className="contact-logo"
        />
      </div>


      <div className="home-container">
        <header className="hero">
          <h1>IT School</h1>
          <p>
            Learn modern technology, build real-world projects, and develop
            the skills needed for a successful IT career.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/courses")}>
              Explore Courses
            </button>

            <button onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </header>

        <section className="intro">
          <h2>Welcome to IT School</h2>
          <p>
            We are committed to providing high-quality IT education that is
            simple, practical, and industry-focused.
          </p>
        </section>

        <section className="features">
          <h2>Why Choose Us</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Easy Learning</h3>
              <p>Step-by-step lessons designed for beginners.</p>
            </div>

            <div className="feature-card">
              <h3>Practical Experience</h3>
              <p>Work on real projects while you learn.</p>
            </div>

            <div className="feature-card">
              <h3>Career Focused</h3>
              <p>Skills that prepare you for real IT jobs.</p>
            </div>
          </div>
        </section>

        <section className="info">
          <h2>What You Will Learn</h2>

          <ul>
            <li>Web Development (HTML, CSS, JavaScript, React)</li>
            <li>Programming Fundamentals (Python, Java)</li>
            <li>Database Systems (SQL & Data Management)</li>
            <li>Computer & IT Essentials</li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;