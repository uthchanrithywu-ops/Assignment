import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StaffSignup.css";

function StaffSignup({ onAuthenticated }) {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = String(formData.get("username") || "").trim().toLowerCase();
        const password = String(formData.get("password") || "");
        const confirmPassword = String(formData.get("confirmPassword") || "");

        if (username.length < 3) {
            setError("Choose a username with at least 3 characters.");
            return;
        }
        if (password.length < 8) {
            setError("Choose a password with at least 8 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("The passwords do not match.");
            return;
        }

        try {
            // This frontend demo keeps one account per browser. A new signup replaces it.
            localStorage.setItem("staffAccount", JSON.stringify({ username, password }));
            onAuthenticated();
            navigate("/staff", { replace: true });
        } catch {
            setError("Could not save your account in this browser. Check your browser storage settings.");
        }
    }

    return (
        <main className="staff-signup-page">
            <section className="staff-signup-card" aria-labelledby="staff-signup-title">
                <p className="staff-signup-eyebrow">Staff Portal</p>
                <h1 id="staff-signup-title">Create account</h1>
                <p className="staff-signup-copy">Create a staff account to access the portal. This demo keeps one account in this browser; a new signup replaces it.</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="signup-username">Username</label>
                    <input
                        id="signup-username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        minLength={3}
                        maxLength={32}
                        required
                    />

                    <label htmlFor="signup-password">Password</label>
                    <div className="staff-signup-password-field">
                        <input
                            id="signup-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="new-password"
                            minLength={8}
                            required
                        />
                        <button
                            className="staff-signup-password-toggle"
                            type="button"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            aria-pressed={showPassword}
                            onClick={() => setShowPassword((shown) => !shown)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <label htmlFor="signup-confirm-password">Confirm password</label>
                    <input
                        id="signup-confirm-password"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        minLength={8}
                        required
                    />

                    {error && <p className="staff-signup-error" role="alert">{error}</p>}
                    <button className="staff-signup-submit" type="submit">Create account</button>
                </form>

                <p className="staff-signup-login">Already have an account? <Link to="/staff/login">Log in</Link></p>
            </section>
        </main>
    );
}

export default StaffSignup;
