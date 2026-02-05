"use client";

import "../styles/adminPages.scss";

export default function AdminSettingsPage() {
  return (
    <main className="admin-settings">
      <header className="settings-header">
        <h1>Platform Settings</h1>
        <p>Global configuration of the OXO security platform</p>
      </header>

      {/* SECURITY */}
      <section className="settings-section">
        <h2>Platform Security</h2>

        <div className="settings-card">
          <label>
            <input type="checkbox" defaultChecked />
            Enforce MFA for all admins
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Log all privileged actions
          </label>

          <label>
            <input type="checkbox" />
            Restrict admin access by IP allowlist
          </label>
        </div>
      </section>

      {/* ROLES */}
      <section className="settings-section">
        <h2>Admin Access & Roles</h2>

        <div className="settings-card">
          <p>Allowed roles</p>

          <div className="tags">
            <span>Super Admin</span>
            <span>Security Admin</span>
            <span>Support</span>
            <span>Read-only</span>
          </div>

          <button className="link">Manage admin users →</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="settings-section">
        <h2>Feature Flags</h2>

        <div className="settings-card">
          <label>
            <input type="checkbox" defaultChecked />
            Enable AI threat scoring
          </label>

          <label>
            <input type="checkbox" />
            Enable experimental dashboards
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Enable API access for enterprises
          </label>
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="settings-section">
        <h2>Internal Alerts</h2>

        <div className="settings-card">
          <label>
            <input type="checkbox" defaultChecked />
            Notify on critical platform incidents
          </label>

          <label>
            <input type="checkbox" />
            Notify when a company is suspended
          </label>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="settings-section">
        <h2>Audit & Compliance</h2>

        <div className="settings-card">
          <p>Audit retention</p>

          <select>
            <option>30 days</option>
            <option>90 days</option>
            <option>180 days</option>
            <option>1 year</option>
          </select>

          <button className="link">Export audit logs</button>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="settings-section danger-zone">
        <h2>Maintenance</h2>

        <div className="settings-card">
          <button className="danger">Enable maintenance mode</button>

          <button className="danger-outline">Rotate platform secrets</button>
        </div>
      </section>
    </main>
  );
}
