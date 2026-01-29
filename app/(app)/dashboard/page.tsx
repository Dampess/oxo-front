import "../styles/dashboard.scss";

export default function DashboardPage() {
  return (
    <section className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">
        Overview of your security status and recent activity.
      </p>

      {/* STATS */}
      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>Threats Detected</h3>
          <p className="stat">124</p>
          <span>Last 30 days</span>
        </div>

        <div className="stat-card">
          <h3>Emails Scanned</h3>
          <p className="stat">8,430</p>
          <span>Protected inboxes</span>
        </div>

        <div className="stat-card">
          <h3>Links Analyzed</h3>
          <p className="stat">3,219</p>
          <span>Domains & URLs</span>
        </div>

        <div className="stat-card">
          <h3>Risk Level</h3>
          <p className="stat risk-low">Low</p>
          <span>Overall status</span>
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="dashboard-card">
        <h2>Recent Activity</h2>

        <ul className="activity-list">
          <li>Email phishing attempt blocked</li>
          <li>Malicious domain detected</li>
          <li>System audit completed</li>
          <li>New team member added</li>
        </ul>
      </div>
    </section>
  );
}
