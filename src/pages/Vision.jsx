import "./Vision.css";
import Vision from "../assets/vision.png";
import Mission from "../assets/mission.png";
import Footer from "./Footer";
import logo from "../assets/Logo.png";

function Vision() {
  return (
    <div className="vision-container">
      <div className="logo-section">
        <img
          src={logo}
          alt="IT School Logo"
          className="contact-logo"
        />
      </div>

      <header
        className="vision-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${visionImg})`,
        }}
      >
        <h1>Vision & Mission</h1>

        <p>
          Guiding our future in Information Technology education through
          innovation, excellence, and lifelong learning.
        </p>
      </header>

      {/* Vision Section */}
      <section
        className="vision-box"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.92), rgba(255,255,255,.92)), url(${visionImg})`,
        }}
      >
        <h2>Our Vision</h2>

        <p>
          To become a leading institution in Information Technology education,
          recognized for academic excellence, innovation, research, and
          professional development. We aspire to empower students with advanced
          technical knowledge, critical thinking skills, and creative
          problem-solving abilities that enable them to thrive in an
          increasingly digital and connected world.
        </p>

        <p>
          Through continuous improvement, industry partnerships, and the
          integration of emerging technologies, we aim to develop graduates who
          are capable of contributing to technological advancement, economic
          growth, and social development at both national and international
          levels.
        </p>
      </section>

      {/* Mission Section */}
      <section
        className="mission-box"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.92), rgba(255,255,255,.92)), url(${missionImg})`,
        }}
      >
        <h2>Our Mission</h2>

        <p>
          Our mission is to provide high-quality Information Technology
          education through innovative teaching methodologies, hands-on
          learning experiences, modern facilities, and industry-relevant
          training programs. We are committed to fostering an environment that
          encourages creativity, collaboration, and continuous learning.
        </p>

        <p>
          We strive to prepare students with the technical expertise,
          leadership qualities, communication skills, and ethical values
          necessary to succeed in the rapidly evolving technology industry.
          Through real-world projects and practical experience, students gain
          the confidence and competence needed to excel in their professional
          careers.
        </p>
      </section>

      {/* Values Section */}
      <section className="values-box">
        <h2>Our Core Values</h2>

        <ul>
          <li>Innovation and Creativity</li>
          <li>Academic Excellence</li>
          <li>Integrity and Professional Ethics</li>
          <li>Student-Centered Learning</li>
          <li>Research and Development</li>
          <li>Teamwork and Collaboration</li>
          <li>Community Engagement</li>
          <li>Continuous Improvement</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Vision;