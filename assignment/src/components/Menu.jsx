import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button
        className="menu-btn"
        onClick={() => setShowSidebar(true)}
      >
        ☰
      </button>

      <div
        className={`sidebar ${showSidebar ? "active" : ""}`}
        onMouseLeave={() => setShowSidebar(false)}
      >
        <div className="logo">Menu</div>

        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setShowSidebar(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setShowSidebar(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setShowSidebar(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Courses" onClick={() => setShowSidebar(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/vision" onClick={() => setShowSidebar(false)}>
              Vision
            </Link>
          </li>
          <li>
            <Link to="/Development" onClick={() => setShowSidebar(false)}>
              Development
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Menu;