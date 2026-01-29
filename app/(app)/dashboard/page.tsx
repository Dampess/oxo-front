"use client";

import "../styles/dashboard.scss";

export default function DashboardPage() {
  return (
    <main className="dashboard">
      {/* ================= RISK STATUS ================= */}
      <section className="risk-status high">
        <div>
          <h1>🚨 Immediate action required</h1>
          <p>1 high-risk threat detected in the last 24 hours.</p>
        </div>
        <a href="/app/email-protection" className="btn">
          Review threat
        </a>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-grid">
        <div className="stat-card">
          <span className="icon">🚨</span>
          <div>
            <p className="label">Threats detected</p>
            <p className="value">12</p>
            <p className="meta">Last 7 days</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="icon">📧</span>
          <div>
            <p className="label">Top channel</p>
            <p className="value">Email</p>
            <p className="meta">67% of threats</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="icon">📈</span>
          <div>
            <p className="label">Risk trend</p>
            <p className="value danger">+14%</p>
            <p className="meta">vs last week</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="icon">⏳</span>
          <div>
            <p className="label">Remaining scans</p>
            <p className="value">18</p>
            <p className="meta">Pro plan</p>
          </div>
        </div>
      </section>

      {/* ================= RECENT THREATS ================= */}
      <section className="recent-threats">
        <h2>Recent threats</h2>

        <div className="threat-list">
          <div className="threat-item high">
            <span>📧</span>
            <div className="info">
              <p className="title">Fake PayPal invoice</p>
              <p className="meta">Email · 2 hours ago</p>
            </div>
            <a href="/app/email-protection/1">Review</a>
          </div>

          <div className="threat-item medium">
            <span>🔗</span>
            <div className="info">
              <p className="title">Suspicious shortened link</p>
              <p className="meta">Link · Yesterday</p>
            </div>
            <a href="/app/link-analysis/2">Review</a>
          </div>

          <div className="threat-item low">
            <span>📧</span>
            <div className="info">
              <p className="title">Marketing email flagged</p>
              <p className="meta">Email · 2 days ago</p>
            </div>
            <a href="/app/email-protection/3">Details</a>
          </div>
        </div>
      </section>

      {/* ================= USAGE ================= */}
      <section className="usage-card">
        <div className="usage-header">
          <h3>Monthly usage</h3>
          <span>82 / 100 analyses</span>
        </div>

        <div className="progress">
          <div className="bar" style={{ width: "82%" }} />
        </div>

        <p className="usage-info">You are close to your monthly limit.</p>

        <a href="/pricing" className="upgrade">
          Upgrade plan
        </a>
      </section>
    </main>
  );
}
