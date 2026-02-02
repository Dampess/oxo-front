"use client";

import { useParams } from "next/navigation";
import "../../styles/alerts-detail-company.scss";

export default function CompanyAlertDetailPage() {
  const { id } = useParams();

  // Mock data – API plus tard
  const alert = {
    id,
    type: "email",
    title: "Phishing campaign targeting finance department",
    risk: "danger",
    status: "new",
    date: "Today · 09:21",
    impacted: "finance@company.com",
    summary:
      "A coordinated phishing campaign attempted to impersonate the company’s banking partner to extract credentials from finance employees.",
    indicators: [
      "Spoofed sender domain",
      "Credential harvesting link",
      "Urgent financial language",
      "Known malicious IP address",
    ],
    recommendation: [
      "Block sender domain globally",
      "Notify finance team members",
      "Force password reset for impacted users",
      "Add indicators to SIEM",
    ],
    technical: {
      sender: "alerts@secure-bank-support.com",
      domain: "secure-bank-support.com",
      domainReputation: "Malicious",
      ipOrigin: "Russia",
      detectedLink: "hxxps://secure-bank-login[.]info",
    },
  };

  return (
    <main className="company-alert-detail">
      {/* HEADER */}
      <header className={`alert-header ${alert.risk}`}>
        <div className="left">
          <span className="type">
            {alert.type === "email" && "📧 Email Threat"}
          </span>
          <h1>{alert.title}</h1>
          <span className="meta">
            {alert.date} · Target: <strong>{alert.impacted}</strong>
          </span>
        </div>

        <div className="right">
          <span className={`status ${alert.status}`}>{alert.status}</span>
          <span className={`risk ${alert.risk}`}>{alert.risk}</span>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="section">
        <h2>Incident summary</h2>
        <p>{alert.summary}</p>
      </section>

      {/* INDICATORS */}
      <section className="section">
        <h2>Threat indicators</h2>
        <ul className="indicators">
          {alert.indicators.map((item) => (
            <li key={item}>⚠️ {item}</li>
          ))}
        </ul>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="section recommendation">
        <h2>Recommended actions</h2>
        <ul>
          {alert.recommendation.map((rec) => (
            <li key={rec}>✅ {rec}</li>
          ))}
        </ul>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="section technical">
        <h2>Technical details</h2>

        <div className="tech-grid">
          <div>
            <strong>Sender</strong>
            <span>{alert.technical.sender}</span>
          </div>

          <div>
            <strong>Domain</strong>
            <span>{alert.technical.domain}</span>
          </div>

          <div>
            <strong>Domain reputation</strong>
            <span>{alert.technical.domainReputation}</span>
          </div>

          <div>
            <strong>IP origin</strong>
            <span>{alert.technical.ipOrigin}</span>
          </div>

          <div>
            <strong>Detected link</strong>
            <span>{alert.technical.detectedLink}</span>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="actions">
        <button className="btn primary">Mark as resolved</button>
        <button className="btn">Assign to team</button>
        <button className="btn ghost">Export report</button>
      </section>
    </main>
  );
}
