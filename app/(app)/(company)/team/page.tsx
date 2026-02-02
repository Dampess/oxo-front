"use client";

import { useState } from "react";
import "../styles/team.scss";

type Role = "Owner" | "Admin" | "Analyst" | "Viewer";

const members = [
  {
    id: "1",
    name: "Alice Martin",
    email: "alice@company.com",
    role: "Owner" as Role,
    status: "active",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@company.com",
    role: "Admin" as Role,
    status: "active",
  },
  {
    id: "3",
    name: "Sarah Klein",
    email: "sarah@company.com",
    role: "Analyst" as Role,
    status: "active",
  },
  {
    id: "4",
    name: "Mark Benson",
    email: "mark@company.com",
    role: "Viewer" as Role,
    status: "invited",
  },
];

export default function TeamPage() {
  const [team, setTeam] = useState(members);

  const updateRole = (id: string, role: Role) => {
    setTeam((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
  };

  return (
    <main className="team-page">
      {/* HEADER */}
      <header className="team-header">
        <div>
          <h1>Team & Roles</h1>
          <p>Manage your team members and access permissions</p>
        </div>

        <button className="invite-btn">➕ Invite member</button>
      </header>

      {/* TABLE */}
      <section className="team-table">
        <div className="table-head">
          <span>User</span>
          <span>Role</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {team.map((member) => (
          <div key={member.id} className="table-row">
            <div className="user">
              <div className="avatar">🦊</div>
              <div>
                <strong>{member.name}</strong>
                <span>{member.email}</span>
              </div>
            </div>

            <div>
              <select
                value={member.role}
                onChange={(e) => updateRole(member.id, e.target.value as Role)}
                disabled={member.role === "Owner"}
              >
                <option>Owner</option>
                <option>Admin</option>
                <option>Analyst</option>
                <option>Viewer</option>
              </select>
            </div>

            <div>
              <span className={`status ${member.status}`}>{member.status}</span>
            </div>

            <div className="actions">
              <button className="ghost">Remove</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
