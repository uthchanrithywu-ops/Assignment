import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffLogin.css";

function StaffLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
    const username = formData.get("username").trim();
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
      setIsCreatingAccount(false);
      setError("Account created. Log in with your new account.");
      event.currentTarget.querySelector('[name="password"]').value = "";
      return;
    }

    let account;
    try {
      account = savedAccount ? JSON.parse(savedAccount) : null;
    } catch {
      account = null;
    }
    if (!account || !account.username || account.username !== username || account.password !== password) {
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
          <input id="staff-password" name="password" type="password" autoComplete={isCreatingAccount ? "new-password" : "current-password"} required />
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
