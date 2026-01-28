"use client";

import "../styles/auth.scss";

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create an account</h1>
        <p className="auth-subtitle">
          Start protecting your digital activity in minutes.
        </p>

        <form className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input type="email" placeholder="you@company.com" />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className="auth-field">
            <label>Confirm password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button className="auth-button">Create account</button>
        </form>

        <div className="auth-footer">
          Already have an account? <a href="/signin">Sign in</a>
        </div>
      </div>
    </main>
  );
}
