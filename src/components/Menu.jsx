import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import logo from "../assets/Logo.png";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/courses", "Courses"],
  ["/vision", "Vision"],
  ["/development", "Development"],
  ["/contact", "Contact"],
];

function Menu() {
  const [open, setOpen] = useState(false);

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
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
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
