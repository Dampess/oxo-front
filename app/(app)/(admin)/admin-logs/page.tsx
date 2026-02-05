"use client";
import "../styles/adminPages.scss";

const logs = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  actor: i % 2 === 0 ? "Admin" : "System",
  action: "Updated company settings",
  date: "2024-02-12 13:21",
}));

export default function AdminLogsPage() {
  return (
    <main className="admin-page">
      <h1>Audit Logs</h1>

      <div className="table">
        {logs.map((l) => (
          <div key={l.id} className="table-row">
            <span>{l.actor}</span>
            <span>{l.action}</span>
            <span>{l.date}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
