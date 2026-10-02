import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import logo from "../assets/Logo.png";

const links = [
  ["/courses", "Courses"],
  ["/development", "Development"],
  ["/contact", "Contact"],
  ["/staff/login", "Log In"],
];

function Menu() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <header className="side-nav">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <img className="brand-logo" src={logo} alt="IT School logo" />
          <span>IT School<small>Learn. Build. Grow.</small></span>
        </NavLink>
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${open ? "active" : ""}`} aria-label="Main navigation">
          <NavLink className="home-nav-link" to="/" end onClick={() => { setOpen(false); setAboutOpen(false); }}>Home</NavLink>
          <div className={`nav-dropdown ${aboutOpen ? "open" : ""}`}>
            <div className="nav-dropdown-heading">
              <NavLink to="/about" onClick={() => { setOpen(false); setAboutOpen(false); }}>
                About Us
              </NavLink>
              <button
                className="nav-dropdown-toggle"
                type="button"
                aria-label="Toggle About Us menu"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                <span aria-hidden="true">▾</span>
              </button>
            </div>
            <div className="nav-dropdown-menu">
              <NavLink to="/vision" onClick={() => { setOpen(false); setAboutOpen(false); }}>Vision &amp; Mission</NavLink>
              <NavLink to="/development" onClick={() => { setOpen(false); setAboutOpen(false); }}>Management Team</NavLink>
              <NavLink to="/development#teacher" onClick={() => { setOpen(false); setAboutOpen(false); }}>Our Teacher</NavLink>
            </div>
          </div>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${isActive ? "active" : ""}${to === "/staff/login" ? " staff-portal-link" : ""}`.trim()}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      {open && <button className="nav-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Menu;
