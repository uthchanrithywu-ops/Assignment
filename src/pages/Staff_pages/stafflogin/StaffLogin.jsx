import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StaffLogin.css";

function StaffLogin({ onAuthenticated }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");

    function failLogin(message) {
      setError(message);
      window.alert(message);
    }

    if (!username || !password) {
      failLogin("Enter your username and password to continue.");
      return;
    }

    let account;
    try {
      account = JSON.parse(localStorage.getItem("staffAccount") || "null");
    } catch {
      failLogin("The saved staff account is unreadable. Please create it again.");
      return;
    }

    if (!account || typeof account.username !== "string" || typeof account.password !== "string") {
      failLogin("No staff account was found in this browser. Create an account first.");
      return;
    }

    if (account.username.trim().toLowerCase() !== username || account.password !== password) {
      failLogin("Username or password is incorrect.");
      return;
    }

    try {
      onAuthenticated();
      window.alert("Login successful. Opening the staff portal.");
      navigate("/staff", { replace: true });
    } catch {
      failLogin("Your browser could not start the staff session. Enable browser storage and try again.");
    }
  }

  return (
    <main className="staff-login-page">
      <section className="staff-login-card" aria-labelledby="staff-login-title">
        <p className="staff-login-eyebrow">Staff Portal</p>
        <h1 id="staff-login-title">Log in</h1>
        <p className="staff-login-copy">Sign in to continue to staff pages.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="staff-username">Username</label>
          <input id="staff-username" name="username" type="text" autoComplete="username" required />
          <label htmlFor="staff-password">Password</label>
          <div className="staff-password-field">
            <input id="staff-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required />
            <button
              className="staff-password-toggle"
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((shown) => !shown)}
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.3 9.5 7-.4 1.1-1.2 2.2-2.2 3.2M6.2 6.2A12.7 12.7 0 0 0 2.5 12c1 2.7 4.5 7 9.5 7 1.4 0 2.7-.4 3.8-1"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"/><circle cx="12" cy="12" r="2.5"/></svg>
              )}
            </button>
          </div>
          {error && <p className="staff-login-error" role="alert">{error}</p>}
          <button type="submit">Log In</button>
          
         
        </form>
        <p className="staff-login-signup-link">Need an account? <Link to="/staff/signup">Create one</Link></p>
        <Link className="staff-login-home" to="/">Back to website</Link>
      </section>
    </main>
  );
}

export default StaffLogin;
