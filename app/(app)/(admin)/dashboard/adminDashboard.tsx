"use client";

import Link from "next/link";
import "../styles/adminPages.scss";

const kpis = [
  { label: "Companies", value: 128 },
  { label: "Users", value: 2_431 },
  { label: "Critical Alerts (24h)", value: 17 },
  { label: "Avg Risk Score", value: "62 / 100" },
  { label: "MRR", value: "€24,300" },
];

const riskyCompanies = [
  { id: 1, name: "Acme Corp", risk: 82 },
  { id: 2, name: "Globex", risk: 77 },
  { id: 3, name: "Initech", risk: 74 },
];

export default function AdminDashboardPage() {
  return (
    <main className="admin-dashboard">
      <h1>Admin Overview</h1>
      <p className="subtitle">
        Global visibility over the security posture of the platform
      </p>

      {/* KPIs */}
      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <span className="label">{kpi.label}</span>
            <strong className="value">{kpi.value}</strong>
          </div>
        ))}
      </section>

      {/* Risky companies */}
      <section className="section">
        <h2>Companies at Risk</h2>

        <div className="table">
          {riskyCompanies.map((c) => (
            <Link key={c.id} href={`/companies/${c.id}`} className="table-row">
              <span>{c.name}</span>
              <span className="risk">{c.risk}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
