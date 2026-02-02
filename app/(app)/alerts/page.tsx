"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/alerts.scss";

type AlertType = "email" | "link" | "phone";
type RiskLevel = "safe" | "suspicious" | "danger";
type AlertStatus = "new" | "read" | "resolved";

const alerts = [
  {
    id: "1",
    type: "email" as AlertType,
    title: "Phishing email detected",
    description: "Email pretending to be from your bank.",
    risk: "danger" as RiskLevel,
    date: "Today · 14:32",
    status: "new" as AlertStatus,
  },
  {
    id: "2",
    type: "link" as AlertType,
    title: "Suspicious link blocked",
    description: "Shortened URL redirecting to unknown domain.",
    risk: "suspicious" as RiskLevel,
    date: "Yesterday · 19:10",
    status: "read" as AlertStatus,
  },
  {
    id: "3",
    type: "phone" as AlertType,
    title: "Spam phone number detected",
    description: "+33 6 12 34 56 78 reported by multiple users.",
    risk: "safe" as RiskLevel,
    date: "2 days ago",
    status: "resolved" as AlertStatus,
  },
];

const filters: (AlertType | "all")[] = ["all", "email", "link", "phone"];

export default function AlertsPage() {
  const [filter, setFilter] = useState<AlertType | "all">("all");

  const filteredAlerts =
    filter === "all" ? alerts : alerts.filter((alert) => alert.type === filter);
  const [alertsState, setAlertsState] = useState(alerts);

  function resolveAlert(id: string) {
    setAlertsState((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "resolved" } : alert,
      ),
    );
  }

  function markAsRead(id: string) {
    setAlertsState((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "read" } : alert,
      ),
    );
  }

  return (
    <main className="alerts-page">
      {/* HEADER */}
      <header className="alerts-header">
        <div>
          <h1>Security Alerts</h1>
          <p>All threats detected by Oxo</p>
        </div>

        <div className="alerts-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>
      </header>

      {/* TIMELINE */}
      <section className="alerts-list">
        {filteredAlerts.map((alert) => (
          <Link
            key={alert.id}
            href={`/alerts/${alert.id}`}
            className="alert-link"
          >
            <div className={`alert-card ${alert.risk} ${alert.status}`}>
              <div className="alert-icon">
                {alert.type === "email" && "📧"}
                {alert.type === "link" && "🔗"}
                {alert.type === "phone" && "📱"}
              </div>

              <div className="alert-content">
                <div className="alert-top">
                  <h3>{alert.title}</h3>

                  <div className="badges">
                    {alert.status === "new" && (
                      <span className="badge new">NEW</span>
                    )}
                    <span className={`risk ${alert.risk}`}>{alert.risk}</span>
                  </div>
                </div>

                <p className="description">{alert.description}</p>
                <span className="date">{alert.date}</span>
              </div>
            </div>
            <div className="alert-actions">
              {alert.status === "new" && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    markAsRead(alert.id);
                  }}
                >
                  Mark as read
                </button>
              )}

              {alert.status !== "resolved" && (
                <button
                  className="resolve"
                  onClick={(e) => {
                    e.preventDefault();
                    resolveAlert(alert.id);
                  }}
                >
                  Resolve
                </button>
              )}
            </div>
          </Link>
        ))}

        {filteredAlerts.length === 0 && (
          <div className="empty-state">
            <span>🟢</span>
            <p>No alerts for this category</p>
          </div>
        )}
      </section>
    </main>
  );
}
