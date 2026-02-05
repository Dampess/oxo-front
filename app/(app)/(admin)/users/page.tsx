"use client";

import "../styles/adminPages.scss";

const users = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@company.com`,
  role: i % 5 === 0 ? "admin" : "user",
  company: `Company ${i % 6}`,
}));

export default function AdminUsersPage() {
  return (
    <main className="admin-page">
      <h1>Users</h1>

      <div className="table">
        {users.map((u) => (
          <div key={u.id} className="table-row">
            <span>{u.name}</span>
            <span>{u.email}</span>
            <span>{u.company}</span>
            <span className={`badge ${u.role}`}>{u.role}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
