"use client";

import "../styles/compliance.scss";

type ComplianceItem = {
  id: number;
  name: string;
  status: "success" | "warning" | "error";
  lastUpdated: string;
};

const complianceChecklist: ComplianceItem[] = [
  {
    id: 1,
    name: "GDPR Readiness",
    status: "warning",
    lastUpdated: "2026-02-01",
  },
  {
    id: 2,
    name: "ISO 27001 Certification",
    status: "success",
    lastUpdated: "2026-01-15",
  },
  {
    id: 3,
    name: "NIS2 Directive Compliance",
    status: "error",
    lastUpdated: "2026-01-20",
  },
  {
    id: 4,
    name: "Phishing Awareness Training",
    status: "success",
    lastUpdated: "2026-01-25",
  },
];

export default function CompanyCompliancePage() {
  return (
    <main className="company-compliance">
      <header>
        <h1>Compliance Overview</h1>
        <p>Check your company’s readiness against standards and regulations</p>
      </header>

      <section className="compliance-list">
        {complianceChecklist.map((item) => (
          <div key={item.id} className={`compliance-card ${item.status}`}>
            <strong>{item.name}</strong>
            <span className="status">{item.status.toUpperCase()}</span>
            <span className="updated">Last updated: {item.lastUpdated}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
