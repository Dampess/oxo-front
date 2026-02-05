"use client";
import "../styles/adminPages.scss";

const alerts = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  company: `Company ${i % 5}`,
  type: ["Email", "Link", "Phone"][i % 3],
  risk: ["low", "medium", "high"][i % 3],
  date: "2024-02-12 14:32",
}));

export default function AdminAlertsPage() {
  return (
    <main className="admin-page">
      <h1>Global Alerts</h1>

      <div className="table">
        {alerts.map((a) => (
          <div key={a.id} className={`table-row ${a.risk}`}>
            <span>{a.company}</span>
            <span>{a.type}</span>
            <span>{a.date}</span>
            <span className="risk">{a.risk}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
