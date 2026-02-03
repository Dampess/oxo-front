"use client";

import "../styles/adminDashboard.scss";
import Link from "next/link";

const stats = [
  { label: "Total Users", value: 4821 },
  { label: "Companies", value: 312 },
  { label: "Critical Alerts", value: 29 },
  { label: "Monthly Revenue", value: "€42,300" },
];

const alerts = [
  {
    id: "1",
    company: "Acme Corp",
    type: "Phishing Campaign",
    risk: "danger",
    date: "Today · 10:42",
  },
  {
    id: "2",
    company: "Globex",
    type: "Malicious Domain",
    risk: "warning",
    date: "Yesterday · 18:10",
  },
];

export default function AdminDashboardPage() {
  return (
    <main className="admin-dashboard">
      <header>
        <h1>Admin Overview</h1>
        <p>Global visibility over the Oxo platform</p>
      </header>

      {/* KPIs */}
      <section className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <span>{s.label}</span>
            <strong>{s.value}</strong>
          </div>
        ))}
      </section>

      {/* Alerts */}
      <section className="section">
        <h2>Critical Alerts</h2>

        <div className="alerts-list">
          {alerts.map((a) => (
            <Link
              key={a.id}
              href={`/admin/security`}
              className={`alert-row ${a.risk}`}
            >
              <div>
                <strong>{a.type}</strong>
                <span>{a.company}</span>
              </div>
              <span>{a.date}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
