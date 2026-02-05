"use client";

import Link from "next/link";
import "../../styles/admin-details.scss";

export default function AdminCompanyDetailPage() {
  return (
    <main className="admin-detail">
      {/* HEADER */}
      <header className="detail-header">
        <div>
          <h1>Acme Corporation</h1>
          <p>Enterprise customer · Active</p>
        </div>

        <div className="actions">
          <button className="danger">Suspend</button>
          <button>Edit</button>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="detail-grid">
        <div className="card">
          <h3>Company Info</h3>
          <ul>
            <li>
              <strong>ID:</strong> cmp_239482
            </li>
            <li>
              <strong>Plan:</strong> Enterprise
            </li>
            <li>
              <strong>Users:</strong> 42
            </li>
            <li>
              <strong>Domains:</strong> 8
            </li>
            <li>
              <strong>Created:</strong> 2023-08-14
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Security Overview</h3>
          <ul>
            <li>
              Active alerts: <strong>6</strong>
            </li>
            <li>
              Critical alerts: <strong className="danger">2</strong>
            </li>
            <li>
              Risk score: <strong>72 / 100</strong>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Compliance</h3>
          <ul>
            <li>ISO 27001: ✅</li>
            <li>SOC 2: ⚠️ Partial</li>
            <li>GDPR: ✅</li>
          </ul>
        </div>
      </section>

      {/* LINKS */}
      <section className="detail-links">
        <Link href="/admin/users">View users</Link>
        <Link href="/admin/logs">Audit logs</Link>
        <Link href="/admin/incidents">Incidents</Link>
      </section>
    </main>
  );
}
