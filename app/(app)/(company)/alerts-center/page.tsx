"use client";

import { useState } from "react";
import "../styles/alerts-center.scss";
import Link from "next/link";

type AlertType = "email" | "link" | "phone";
type Risk = "safe" | "suspicious" | "danger";
type Status = "new" | "investigating" | "resolved";

const alerts = [
  {
    id: "1",
    type: "email" as AlertType,
    title: "Phishing campaign targeting finance team",
    target: "finance@company.com",
    risk: "danger" as Risk,
    status: "new" as Status,
    date: "Today · 09:21",
  },
  {
    id: "2",
    type: "link" as AlertType,
    title: "Malicious domain accessed",
    target: "employee laptop",
    risk: "suspicious" as Risk,
    status: "investigating" as Status,
    date: "Yesterday · 18:04",
  },
  {
    id: "3",
    type: "phone" as AlertType,
    title: "Fraud phone number detected",
    target: "+33 6 12 34 56 78",
    risk: "danger" as Risk,
    status: "resolved" as Status,
    date: "2 days ago",
  },
];

export default function CompanyAlertsPage() {
  const [filterRisk, setFilterRisk] = useState<Risk | "all">("all");
  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");

  const filteredAlerts = alerts.filter((alert) => {
    if (filterRisk !== "all" && alert.risk !== filterRisk) return false;
    if (filterStatus !== "all" && alert.status !== filterStatus) return false;
    return true;
  });

  return (
    <main className="company-alerts">
      {/* HEADER */}
      <header className="alerts-header">
        <div>
          <h1>Security Alerts</h1>
          <p>Threats detected across your organization</p>
        </div>
      </header>

      {/* FILTERS */}
      <section className="alerts-filters">
        <div className="filter-group">
          <span>Risk</span>
          {["all", "danger", "suspicious", "safe"].map((r) => (
            <button
              key={r}
              className={filterRisk === r ? "active" : ""}
              onClick={() => setFilterRisk(r as never)}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span>Status</span>
          {["all", "new", "investigating", "resolved"].map((s) => (
            <button
              key={s}
              className={filterStatus === s ? "active" : ""}
              onClick={() => setFilterStatus(s as never)}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* ALERTS TABLE */}
      <section className="alerts-table">
        {filteredAlerts.map((alert) => (
          <Link
            key={alert.id}
            href={`/alerts-center/${alert.id}`}
            className={`alert-row ${alert.risk}`}
          >
            <span className="icon">
              {alert.type === "email" && "📧"}
              {alert.type === "link" && "🔗"}
              {alert.type === "phone" && "📱"}
            </span>

            <div className="main">
              <strong>{alert.title}</strong>
              <span className="target">{alert.target}</span>
            </div>

            <span className={`status ${alert.status}`}>{alert.status}</span>

            <span className={`risk ${alert.risk}`}>{alert.risk}</span>

            <span className="date">{alert.date}</span>
          </Link>
        ))}

        {filteredAlerts.length === 0 && (
          <div className="empty">
            <span>🟢</span>
            <p>No alerts matching your filters</p>
          </div>
        )}
      </section>
    </main>
  );
}
