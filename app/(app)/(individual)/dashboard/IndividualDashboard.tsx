"use client";

import "../styles/dashboard.scss";
import Link from "next/link";

const stats = [
  {
    label: "Emails analyzed",
    value: 124,
    icon: "📧",
  },
  {
    label: "Links checked",
    value: 342,
    icon: "🔗",
  },
  {
    label: "Threats blocked",
    value: 7,
    icon: "🚨",
  },
];

const recentAlerts = [
  {
    id: "1",
    type: "link",
    title: "Suspicious link blocked",
    risk: "danger",
    date: "2 hours ago",
  },
  {
    id: "2",
    type: "email",
    title: "Phishing email detected",
    risk: "suspicious",
    date: "Yesterday",
  },
  {
    id: "3",
    type: "phone",
    title: "Spam phone number reported",
    risk: "safe",
    date: "2 days ago",
  },
];

export default function DashboardPage() {
  return (
    <main className="dashboard">
      {/* STATUS */}
      <section className="dashboard-status">
        <div className="status-icon">🟢</div>
        <div>
          <h1>You are protected</h1>
          <p>Oxo is actively monitoring your activity.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="dashboard-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="icon">{stat.icon}</span>
            <div>
              <p className="value">{stat.value}</p>
              <p className="label">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* RECENT ALERTS */}
      <section className="dashboard-alerts">
        <div className="alerts-header">
          <h2>Recent activity</h2>
          <Link href="/alerts" className="view-all">
            View all
          </Link>
        </div>

        <div className="alerts-list">
          {recentAlerts.map((alert) => (
            <Link
              key={alert.id}
              href={`/alerts/${alert.id}`}
              className={`alert-item ${alert.risk}`}
            >
              <div className="alert-left">
                <span className="alert-icon">
                  {alert.type === "email" && "📧"}
                  {alert.type === "link" && "🔗"}
                  {alert.type === "phone" && "📱"}
                </span>
                <div>
                  <p className="alert-title">{alert.title}</p>
                  <span className="alert-date">{alert.date}</span>
                </div>
              </div>

              <span className={`alert-badge ${alert.risk}`}>{alert.risk}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
