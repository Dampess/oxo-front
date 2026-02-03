"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/enterprise-dashboard.scss";

// ==== MOCK DATA ====
const stats = [
  {
    label: "Global Risk Score",
    value: 68,
    suffix: "/100",
    filter: "riskScore",
  },
  { label: "Active Alerts", value: 12, filter: "activeAlerts" },
  { label: "Protected Domains", value: 5, filter: "protectedDomains" },
  { label: "Users Covered", value: 24, filter: "usersCovered" },
];

const alerts = Array.from({ length: 25 }, (_, i) => ({
  id: (i + 1).toString(),
  type: ["email", "link", "phone"][i % 3] as "email" | "link" | "phone",
  title: [
    "Phishing campaign detected",
    "Malicious domain accessed",
    "Fraud phone number reported",
  ][i % 3],
  risk: ["safe", "suspicious", "danger"][i % 3] as
    | "safe"
    | "suspicious"
    | "danger",
  date: `2023-02-${(i % 28) + 1} · ${8 + (i % 10)}:${(i % 60)
    .toString()
    .padStart(2, "0")}`,
  user: ["Alice Martin", "John Doe", "Sarah Klein"][i % 3],
}));

const users = ["All", "Alice Martin", "John Doe", "Sarah Klein"];
const types = ["All", "Email", "Link", "Phone"];
const periods = ["All", "Today", "This Week", "This Month"];

export default function CompanyDashboardPage() {
  const [selectedUser, setSelectedUser] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 10;
  const [scanMode, setScanMode] = useState<"email" | "link" | "phone" | "ip">(
    "email",
  );
  const [scanInput, setScanInput] = useState("");
  const [scanResult, setScanResult] = useState<{
    status: "safe" | "suspicious" | "danger";
    title: string;
    summary: string;
  } | null>(null);

  function handleQuickScan() {
    if (!scanInput) return alert("Please enter data to scan");

    // Simulation rapide
    const statuses = ["safe", "suspicious", "danger"] as const;
    const status = statuses[Math.floor(Math.random() * 3)];
    setScanResult({
      status,
      title: `Quick scan result: ${status.toUpperCase()}`,
      summary: `Scanned content in mode "${scanMode}"`,
    });
  }

  // Filtrage
  const filteredAlerts = alerts.filter((a) => {
    const matchUser = selectedUser === "All" || a.user === selectedUser;
    const matchType =
      selectedType === "All" || a.type === selectedType.toLowerCase();
    return matchUser && matchType;
  });

  const totalPages = Math.ceil(filteredAlerts.length / logsPerPage);
  const displayedAlerts = filteredAlerts.slice(
    (currentPage - 1) * logsPerPage,
    currentPage * logsPerPage,
  );

  // Graph mock en CSS
  const trendData = [
    { label: "Week -2", critical: 5, resolved: 3 },
    { label: "Week -1", critical: 8, resolved: 7 },
    { label: "Week 0", critical: 3, resolved: 5 },
    { label: "Week +1", critical: 6, resolved: 8 },
  ];

  return (
    <main className="company-dashboard">
      {/* QUICK SCAN WIDGET */}
      <section className="quick-scan">
        <h2>Quick Security Scan</h2>

        <div className="scan-tabs">
          <button
            className={scanMode === "email" ? "active" : ""}
            onClick={() => setScanMode("email")}
          >
            Email
          </button>
          <button
            className={scanMode === "link" ? "active" : ""}
            onClick={() => setScanMode("link")}
          >
            Link / Domain
          </button>
          <button
            className={scanMode === "phone" ? "active" : ""}
            onClick={() => setScanMode("phone")}
          >
            Phone / SMS
          </button>
          <button
            className={scanMode === "ip" ? "active" : ""}
            onClick={() => setScanMode("ip")}
          >
            IP
          </button>
        </div>

        <textarea
          placeholder={
            scanMode === "email"
              ? "Paste your email here..."
              : scanMode === "link"
                ? "Paste link or domain..."
                : scanMode === "ip"
                  ? "Paste IP Adress..."
                  : "Paste phone number or message..."
          }
          value={scanInput}
          onChange={(e) => setScanInput(e.target.value)}
        />

        <div className="scan-actions">
          <button className="scan-btn" onClick={handleQuickScan}>
            Scan
          </button>
          <Link
            href={
              scanMode === "email"
                ? "/check-email"
                : scanMode === "link"
                  ? "/check-link"
                  : scanMode === "ip"
                    ? "/ip-scan"
                    : "/scam-detection"
            }
            className="view-more"
          >
            See full tool →
          </Link>
        </div>

        {scanResult && (
          <div className={`scan-result ${scanResult.status}`}>
            <strong>{scanResult.title}</strong>
            <p>{scanResult.summary}</p>
          </div>
        )}
      </section>
      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <h1>Security Overview</h1>
          <p>Real-time visibility of your organization’s security posture</p>
        </div>
        <Link href="/alerts-center" className="view-alerts">
          View all alerts →
        </Link>
      </header>

      {/* KPIs */}
      <section className="stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card"
            onClick={() => alert(`Filter by ${stat.label}`)}
          >
            <span className="label">{stat.label}</span>
            <span className="value">
              {stat.value}
              {stat.suffix && <small>{stat.suffix}</small>}
            </span>
          </div>
        ))}
      </section>

      {/* Graph CSS */}
      <section className="alerts-graph">
        <h2>Critical vs Resolved Alerts</h2>
        <div className="trend-chart">
          {trendData.map((t) => (
            <div key={t.label} className="bar-group">
              <div
                className="bar critical"
                style={{ height: `${t.critical * 10}px` }}
              >
                <span>{t.critical}</span>
              </div>
              <div
                className="bar resolved"
                style={{ height: `${t.resolved * 10}px` }}
              >
                <span>{t.resolved}</span>
              </div>
              <div className="label">{t.label}</div>
            </div>
          ))}
        </div>
        <div className="legend">
          <div>
            <span className="box critical"></span> Critical
          </div>
          <div>
            <span className="box resolved"></span> Resolved
          </div>
        </div>
      </section>
      {/* Active Alerts */}
      <section className="alerts-list-section">
        <h2>Active Threats</h2>
        {/* Filters */}
        <div className="log-filters">
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="alerts-list">
          {displayedAlerts.map((alert) => (
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

              <div className="content">
                <strong>{alert.title}</strong>
                <span className="date">{alert.date}</span>
              </div>

              <span className={`risk ${alert.risk}`}>{alert.risk}</span>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            ◀
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            ▶
          </button>
        </div>
      </section>
    </main>
  );
}
