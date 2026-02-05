"use client";

import "../styles/adminPages.scss";

const incidents = [
  {
    id: 1,
    title: "Mass phishing campaign",
    status: "open",
    affectedCompanies: 4,
  },
  {
    id: 2,
    title: "Fraud domain propagation",
    status: "resolved",
    affectedCompanies: 2,
  },
];

export default function AdminIncidentsPage() {
  return (
    <main className="admin-page">
      <h1>Security Incidents</h1>

      {incidents.map((i) => (
        <div key={i.id} className="incident-card">
          <strong>{i.title}</strong>
          <p>{i.affectedCompanies} companies affected</p>
          <span className={`badge ${i.status}`}>{i.status}</span>
        </div>
      ))}
    </main>
  );
}
