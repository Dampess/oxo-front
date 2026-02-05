"use client";

import "../../styles/admin-details.scss";

export default function AdminUserDetailPage() {
  return (
    <main className="admin-detail">
      {/* HEADER */}
      <header className="detail-header">
        <div>
          <h1>Sarah Klein</h1>
          <p>Security Analyst · Active</p>
        </div>

        <div className="actions">
          <button className="danger">Disable</button>
          <button>Reset Password</button>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="detail-grid">
        <div className="card">
          <h3>User Info</h3>
          <ul>
            <li>
              <strong>ID:</strong> usr_98321
            </li>
            <li>
              <strong>Email:</strong> sarah@acme.com
            </li>
            <li>
              <strong>Company:</strong> Acme Corporation
            </li>
            <li>
              <strong>Role:</strong> Analyst
            </li>
            <li>
              <strong>Last login:</strong> 2h ago
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Activity</h3>
          <ul>
            <li>Alerts reviewed: 34</li>
            <li>Actions taken: 12</li>
            <li>Last action: Marked alert as resolved</li>
          </ul>
        </div>

        <div className="card">
          <h3>Security</h3>
          <ul>
            <li>MFA enabled: ✅</li>
            <li>Password strength: Strong</li>
            <li>Suspicious actions: 0</li>
          </ul>
        </div>
      </section>

      {/* AUDIT */}
      <section className="detail-links">
        <button>View audit logs</button>
        <button>Force logout</button>
      </section>
    </main>
  );
}
