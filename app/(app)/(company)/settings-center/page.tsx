"use client";

import "../styles/settings-center.scss";

export default function CompanySettingsPage() {
  return (
    <main className="company-settings">
      <header className="settings-header">
        <h1>Company Settings</h1>
        <p>Manage your organization preferences and security</p>
      </header>

      {/* ORGANIZATION */}
      <section className="settings-card">
        <h2>Organization</h2>

        <div className="form-grid">
          <div>
            <label>Company name</label>
            <input type="text" defaultValue="Acme Corporation" />
          </div>

          <div>
            <label>Primary domain</label>
            <input type="text" defaultValue="acme.com" />
          </div>

          <div>
            <label>Country</label>
            <input type="text" defaultValue="France" />
          </div>

          <div>
            <label>Industry</label>
            <input type="text" defaultValue="Fintech" />
          </div>
        </div>

        <button className="primary">Save changes</button>
      </section>

      {/* SECURITY */}
      <section className="settings-card">
        <h2>Security</h2>

        <div className="security-options">
          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span />
            Enforce 2FA for all users
          </label>

          <label className="toggle">
            <input type="checkbox" />
            <span />
            Restrict access by IP address
          </label>

          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span />
            Alert admins on critical threats
          </label>
        </div>
      </section>

      {/* USERS & ROLES */}
      <section className="settings-card">
        <h2>Users & Roles</h2>

        <p className="muted">
          Manage users from the Team section. Define default permissions for new
          members.
        </p>

        <div className="role-select">
          <label>Default role for new users</label>
          <select>
            <option>Viewer</option>
            <option>Analyst</option>
            <option>Admin</option>
          </select>
        </div>
      </section>

      {/* BILLING SHORTCUT */}
      <section className="settings-card">
        <h2>Billing</h2>

        <p>
          Manage your subscription, invoices and payment methods from the Plan
          page.
        </p>

        <button className="link">Go to billing →</button>
      </section>

      {/* DANGER ZONE */}
      <section className="settings-card danger-zone">
        <h2>Danger zone</h2>

        <p>
          Deleting your organization will permanently remove all users, alerts
          and data.
        </p>

        <button className="danger">Delete organization</button>
      </section>
    </main>
  );
}
