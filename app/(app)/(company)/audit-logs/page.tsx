"use client";

import { useState } from "react";
import "../styles/audit-logs.scss";
export type AuditLog = {
  id: number;
  user: string;
  action: string;
  target: string;
  status: "success" | "warning" | "error";
  date: string;
};

const STATUSES: AuditLog["status"][] = ["success", "warning", "error"];
const users = ["All", "Alice Martin", "John Doe", "Sarah Klein"];
const actions = [
  "All",
  "Login",
  "Alert Resolved",
  "User Invited",
  "Settings Updated",
];

const logs: AuditLog[] = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  user: ["Alice", "John", "Sarah"][i % 3],
  action: ["Login", "Alert resolved", "Settings updated"][i % 3],
  target: "Security System",
  status: STATUSES[i % STATUSES.length],
  date: `2024-02-${(i % 28) + 1}`,
}));

function exportCSV(logs: AuditLog[]) {
  const headers = ["User", "Action", "Target", "Status", "Date"];
  const rows = logs.map((l) =>
    [l.user, l.action, l.target, l.status, l.date].join(","),
  );

  const csvContent = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "audit_logs.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function AuditLogsPage() {
  const [selectedUser, setSelectedUser] = useState("All");
  const [selectedAction, setSelectedAction] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);

  const perPage = 10;

  const filteredLogs = logs.filter((log) => {
    const matchUser = selectedUser === "All" || log.user === selectedUser;
    const matchAction =
      selectedAction === "All" || log.action === selectedAction;
    return matchUser && matchAction;
  });

  const totalPages = Math.ceil(filteredLogs.length / perPage);
  const visibleLogs = filteredLogs.slice((page - 1) * perPage, page * perPage);

  return (
    <main className="audit-logs">
      <header className="audit-header">
        <div>
          <h1>Audit Logs</h1>
          <p>Track all security and administrative actions</p>
        </div>

        <div className="actions">
          <button onClick={() => exportCSV(filteredLogs)}>Export CSV</button>
          <button disabled>Export PDF</button>
        </div>
      </header>

      {/* FILTERS */}
      <section className="filters">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((u) => (
            <option key={u}>{u}</option>
          ))}
        </select>

        <select
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
        >
          {actions.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </section>

      {/* TABLE */}
      <section className="logs-table">
        <div className="table-header">
          <span>User</span>
          <span>Action</span>
          <span>Target</span>
          <span>Status</span>
          <span>Date</span>
        </div>

        {visibleLogs.map((log) => (
          <div
            key={log.id}
            className="table-row"
            onClick={() => setSelectedLog(log)}
          >
            <span>{log.user}</span>
            <span>{log.action}</span>
            <span>{log.target}</span>
            <span className={`status ${log.status}`}>{log.status}</span>
            <span className="date">{log.date}</span>
          </div>
        ))}
      </section>

      {selectedLog && (
        <aside className="log-drawer">
          <header>
            <h3>Audit Log Detail</h3>
            <button onClick={() => setSelectedLog(null)}>✕</button>
          </header>

          <div className="drawer-content">
            <p>
              <strong>User:</strong> {selectedLog.user}
            </p>
            <p>
              <strong>Action:</strong> {selectedLog.action}
            </p>
            <p>
              <strong>Target:</strong> {selectedLog.target}
            </p>
            <p>
              <strong>Status:</strong> {selectedLog.status}
            </p>
            <p>
              <strong>Date:</strong> {selectedLog.date}
            </p>
            <p>
              <strong>IP Address:</strong> 192.168.12.{selectedLog.id}
            </p>
            <p>
              <strong>User Agent:</strong> Chrome / macOS
            </p>
          </div>
        </aside>
      )}

      {/* PAGINATION */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ◀
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          ▶
        </button>
      </div>
    </main>
  );
}
