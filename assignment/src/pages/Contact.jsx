import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";
import logo from "../assets/Logo.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Form Submit\n" +
      "Name: " +
      name +
      "\nEmail: " +
      email +
      "\nMessage: " +
      message
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* NEW LOGO SECTION */}
      <div className="logo-section">
        <div className="logo-box">
          <img src={logo} alt="IT School Logo" className="contact-logo" />
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="contact-container">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We are here to help you anytime</p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-info">
        <div className="info-card">
          <h3>Email</h3>
          <p>ITschooladmin@gmail.com</p>
        </div>

        <div className="info-card">
          <h3>Phone</h3>
          <p>+855 12 345 678</p>
        </div>

        <div className="info-card">
          <h3>Address</h3>
          <p>Phnom Penh, Cambodia</p>
        </div>
      </div>

      {/* FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>

      <Footer />
    </>
  );
}

export default Contact;