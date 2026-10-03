import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffLogin.css";

function StaffLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameValue, setUsernameValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("staffAccount") || "null")?.username || "";
    } catch {
      return "";
    }
  });
  const [isCreatingAccount, setIsCreatingAccount] = useState(() => {
    try {
      return !JSON.parse(localStorage.getItem("staffAccount") || "null")?.username;
    } catch {
      return true;
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") || "").trim().toLowerCase();
    const password = formData.get("password");
    const savedAccount = localStorage.getItem("staffAccount");

    if (!username || !password) {
      setError("Enter your username and password to continue.");
      return;
    }

    if (isCreatingAccount) {
      let existingAccount;
      try {
        existingAccount = savedAccount ? JSON.parse(savedAccount) : null;
      } catch {
        existingAccount = null;
      }

      // Accounts saved by the earlier email form have no username and cannot be used here.
      if (existingAccount && !existingAccount.username) {
        localStorage.removeItem("staffAccount");
      } else if (existingAccount) {
        setError("A staff account already exists on this browser. Log in instead.");
        return;
      }

      localStorage.setItem("staffAccount", JSON.stringify({ username, password }));
      // Creating the account is the first successful authentication, so send the
      // user straight into the staff area instead of requiring a second submit.
      sessionStorage.setItem("staffLoggedIn", "true");
      navigate("/staff", { replace: true });
      return;
    }

    let account;
    try {
      account = savedAccount ? JSON.parse(savedAccount) : null;
    } catch {
      account = null;
    }
    if (
      !account ||
      typeof account.username !== "string" ||
      account.username.trim().toLowerCase() !== username ||
      account.password !== password
    ) {
      setError("Account not found or password is incorrect. Create an account first.");
      return;
    }

    // Frontend-only demo gate. Connect this to the school's authentication service for real access control.
    sessionStorage.setItem("staffLoggedIn", "true");
    navigate("/staff", { replace: true });
  }

  return (
    <main className="staff-login-page">
      <section className="staff-login-card">
        <p className="staff-login-eyebrow">Staff Portal</p>
        <h1>{isCreatingAccount ? "Create account" : "Log in"}</h1>
        <p className="staff-login-copy">{isCreatingAccount ? "Create your staff account before logging in." : "Sign in to continue to staff pages."}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="staff-username">Username</label>
          <input id="staff-username" name="username" type="text" autoComplete="username" value={usernameValue} onChange={(event) => setUsernameValue(event.target.value)} required />
          <label htmlFor="staff-password">Password</label>
          <div className="staff-password-field">
            <input id="staff-password" name="password" type={showPassword ? "text" : "password"} autoComplete={isCreatingAccount ? "new-password" : "current-password"} required />
            <button
              className="staff-password-toggle"
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.3 9.5 7-.4 1.1-1.2 2.2-2.2 3.2M6.2 6.2A12.7 12.7 0 0 0 2.5 12c1 2.7 4.5 7 9.5 7 1.4 0 2.7-.4 3.8-1"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"/><circle cx="12" cy="12" r="2.5"/></svg>
              )}
            </button>
          </div>
          {error && <p className="staff-login-error" role="alert">{error}</p>}
          <button type="submit">{isCreatingAccount ? "Create Account" : "Log In"}</button>
        </form>
        <button
          className="staff-login-toggle"
          type="button"
          onClick={() => { setIsCreatingAccount(!isCreatingAccount); setError(""); }}
        >
          {isCreatingAccount ? "Already have an account? Log in" : "Need an account? Create one"}
        </button>
      </section>
    </main>
  );
}

export default StaffLogin;
