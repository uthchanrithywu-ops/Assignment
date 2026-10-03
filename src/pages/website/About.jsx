import "./About.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/Video.mp4";

const values = [
  {
    number: "01",
    title: "Learn by doing",
    description: "Build practical skills through projects and hands-on activities.",
  },
  {
    number: "02",
    title: "Keep exploring",
    description: "Stay curious, adapt to new technology, and keep learning.",
  },
  {
    number: "03",
    title: "Grow together",
    description: "Share ideas, collaborate, and support one another's progress.",
  },
];

const courses = [
  "Web Development",
  "Software Engineering",
  "Database Management",
  "Networking & Cybersecurity",
  "Mobile App Development",
  "Artificial Intelligence",
];

function About() {
  return (
    <>
      <div className="about-page">
        <header className="about-header">
          <video className="about-header-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="about-header-overlay" aria-hidden="true" />
          <span className="about-eyebrow">A place to build what’s next</span>
          <h1>About IT School</h1>
          <p>
            We make technology education practical, welcoming, and connected
            to the opportunities of tomorrow.
          </p>
          <Link className="about-hero-link" to="/courses">
            Explore our courses <span aria-hidden="true">→</span>
          </Link>
        </header>

        <main className="about-content">
          <section className="about-intro" aria-labelledby="about-story-title">
            <div className="about-intro-label">Who we are</div>
            <div>
              <h2 id="about-story-title">Technology skills start with the right place to learn.</h2>
              <p>
                IT School is a learning community for people ready to explore
                the digital world. We bring core concepts and practical work
                together so students can build confidence, create projects, and
                prepare for a future in technology.
              </p>
              <Link className="about-text-link" to="/vision">
                Read our vision and mission <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          <section className="about-values" aria-labelledby="about-values-title">
            <div className="about-section-heading">
              <span className="about-eyebrow-dark">How we learn</span>
              <h2 id="about-values-title">A practical path forward</h2>
              <p>Learning is strongest when students can put ideas into action.</p>
            </div>
            <div className="about-value-grid">
              {values.map((value) => (
                <article className="about-value-card" key={value.number}>
                  <span className="about-value-number">{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-courses" aria-labelledby="about-courses-title">
            <div>
              <span className="about-eyebrow-dark">What you can explore</span>
              <h2 id="about-courses-title">Technology courses for your next step</h2>
              <p>Start with the area that interests you and grow your skills from there.</p>
            </div>
            <div className="about-course-list">
              {courses.map((course) => (
                <Link to="/courses" className="about-course-link" key={course}>
                  <span>{course}</span><span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default About;
