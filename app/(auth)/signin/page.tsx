"use client";

import "../styles/auth.scss";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Sign in</h1>
        <p className="auth-subtitle">
          Access your Oxo dashboard and security tools.
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

          <button className="auth-button">Sign in</button>
        </form>

        <div className="auth-footer">
          No account yet? <Link href="/signup">Create one</Link>
        </div>
      </div>
    </main>
  );
}
