import React from "react";
import "./Courses.css";
import Footer from "./Footer";
import logo from "../assets/Logo.png";


function Courses() {
  return (
    <>

      <section className="programs-section">
        <div className="logo-section">
          <img
            src={logo}
            alt="IT School Logo"
            className="contact-logo"
          />
        </div>
        <div className="container">
          <h2>Our Courses</h2>

          <p className="programs-subtitle">
            We provide high-quality information technology programs designed
            to prepare students for the rapidly evolving digital world.
            Our curriculum combines theoretical knowledge with practical
            experience to ensure graduates are industry-ready.
          </p>

          <div className="program-cards">

            <div className="program-card">
              <h3>Web Development</h3>
              <p>
                Learn to build modern websites and web applications using
                HTML, CSS, JavaScript, React, and back-end technologies.
                Students gain hands-on experience creating responsive and
                user-friendly solutions for businesses and organizations.
              </p>
            </div>

            <div className="program-card">
              <h3>Software Engineering</h3>
              <p>
                Develop strong programming and software design skills through
                courses in system analysis, software architecture, testing,
                project management, and agile development practices.
              </p>
            </div>

            <div className="program-card">
              <h3>Database Management</h3>
              <p>
                Learn how to design, implement, secure, and maintain databases.
                Topics include SQL, database administration, data modeling,
                performance optimization, and business intelligence systems.
              </p>
            </div>

            <div className="program-card">
              <h3>Networking & Cybersecurity</h3>
              <p>
                Gain expertise in network infrastructure, cloud computing,
                security protocols, ethical hacking, and cyber defense
                strategies to protect digital assets and systems.
              </p>
            </div>

            <div className="program-card">
              <h3>Mobile Application Development</h3>
              <p>
                Design and develop innovative mobile applications for Android
                and iOS platforms while learning mobile UI/UX design, APIs,
                and modern development frameworks.
              </p>
            </div>

            <div className="program-card">
              <h3>Artificial Intelligence</h3>
              <p>
                Explore machine learning, deep learning, computer vision,
                natural language processing,and intelligent systems through
                practical projects and real-world applications.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}

export default Courses;