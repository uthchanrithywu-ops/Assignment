import { NavLink, useNavigate } from "react-router-dom";
import "./Staff.css";
import logo from "../../../assets/RTUniversityMark.png";

function Staff({ onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/staff/login", { replace: true });
  }

  return (
    <section className="staff-page">
      <aside className="staff-sidebar">
        <NavLink to="/staff" end className="staff-brand">
          <img src={logo} alt="" />
          <span>RT University<small>Admin Portal</small></span>
        </NavLink>

        <p className="staff-nav-label">WORKSPACE</p>
        <nav className="Menu" aria-label="Staff navigation">
          <NavLink to="/staff" end className={({ isActive }) => `Menu-item${isActive ? " active" : ""}`}>
            <i className="bi bi-grid-1x2-fill" aria-hidden="true" /> Dashboard
          </NavLink>
          <NavLink to="/staff/Student" className="Menu-item"><i className="bi bi-people-fill" aria-hidden="true" /> Student Management</NavLink>
          <NavLink to="/staff/Staff" className="Menu-item"><i className="bi bi-person-badge-fill" aria-hidden="true" /> Staff Management</NavLink>
          <NavLink to="/staff/Class& Course" className="Menu-item"><i className="bi bi-journal-bookmark-fill" aria-hidden="true" /> Class &amp; Course Management</NavLink>
          <NavLink to="/staff/Finance" className="Menu-item"><i className="bi bi-cash-coin" aria-hidden="true" /> Finance Management</NavLink>
          <NavLink to="/staff/attendance" className="Menu-item"><i className="bi bi-calendar-check-fill" aria-hidden="true" /> Attendance &amp; Schedule</NavLink>
          <NavLink to="/staff/Reports" className="Menu-item"><i className="bi bi-bar-chart-fill" aria-hidden="true" /> Reports</NavLink>
          <NavLink to="/staff/Settings" className="Menu-item"><i className="bi bi-gear-fill" aria-hidden="true" /> Settings</NavLink>
        </nav>

        <div className="staff-sidebar-bottom">
          <button onClick={handleLogout} className="Menu-item logout-button" type="button">
            <i className="bi bi-box-arrow-right" aria-hidden="true" /> Log out
          </button>
        </div>
      </aside>

      <main className="staff-main">
        <header className="staff-topbar">
          <div>
            <p className="staff-eyebrow">RT University</p>
            <h1>Admin Dashboard</h1>
          </div>
          <span className="staff-role">Admin workspace</span>
        </header>
        
      </main>
    </section>
  );
}

export default Staff;
