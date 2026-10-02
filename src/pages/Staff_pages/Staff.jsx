import { Link, useNavigate } from "react-router-dom";
import "./Staff.css";

function Staff() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("staffLoggedIn");
    navigate("/staff/login", { replace: true });
  }

  return (
    <section className="staff-page">
      <div className="staff-card">
        <p className="staff-eyebrow">IT School</p>
        <h1>Staff Portal</h1>
        <p>Welcome to the staff area. Staff resources and tools will be available here.</p>
        <div className="staff-actions">
          <Link className="staff-home-link" to="/">Back to Home</Link>
          <button className="staff-logout-button" type="button" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </section>
  );
}

export default Staff;
