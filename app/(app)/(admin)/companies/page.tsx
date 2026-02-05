"use client";

import Link from "next/link";
import "../styles/adminPages.scss";

const companies = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
  users: 10 + i,
  alerts: i % 4,
  risk: 40 + (i % 50),
}));

export default function AdminCompaniesPage() {
  return (
    <main className="admin-page">
      <h1>Companies</h1>

      <div className="table">
        {companies.map((c) => (
          <Link
            key={c.id}
            href={`/admin/companies/${c.id}`}
            className="table-row"
          >
            <span>{c.name}</span>
            <span>{c.users} users</span>
            <span>{c.alerts} alerts</span>
            <span className="risk">{c.risk}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
