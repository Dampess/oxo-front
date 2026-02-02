"use client";

import { useParams } from "next/navigation";
import "./alert-detail.scss";

export default function AlertDetailPage() {
  const { id } = useParams();

  // ⚠️ mock data (API plus tard)
  const alert = {
    id,
    type: "email",
    title: "Phishing email detected",
    risk: "danger",
    date: "Today · 14:32",
    summary:
      "This email impersonates a banking institution and attempts to steal sensitive information.",
    indicators: [
      "Suspicious sender domain",
      "Urgent language detected",
      "Malicious link found in content",
    ],
    recommendation: [
      "Do not reply to this email",
      "Do not click on any links",
      "Delete the email immediately",
      "Report it to your email provider",
    ],
    technical: {
      sender: "support@secure-bank-alerts.com",
      domainReputation: "Bad",
      ipOrigin: "Russia",
      linkDetected: "hxxps://secure-login-bank[.]info",
    },
  };

  return (
    <main className="alert-detail">
      {/* HEADER */}
      <header className={`alert-header ${alert.risk}`}>
        <div className="left">
          <span className="type">
            {alert.type === "email" && "📧 Email Alert"}
          </span>
          <h1>{alert.title}</h1>
          <span className="date">{alert.date}</span>
        </div>

        <span className={`risk-badge ${alert.risk}`}>
          {alert.risk === "danger" && "🔴 High risk"}
          {alert.risk === "suspicious" && "🟠 Medium risk"}
          {alert.risk === "safe" && "🟢 Low risk"}
        </span>
      </header>

      {/* SUMMARY */}
      <section className="alert-section">
        <h2>What happened?</h2>
        <p>{alert.summary}</p>
      </section>

      {/* INDICATORS */}
      <section className="alert-section">
        <h2>Threat indicators detected</h2>
        <ul className="indicators">
          {alert.indicators.map((item) => (
            <li key={item}>⚠️ {item}</li>
          ))}
        </ul>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="alert-section recommendation">
        <h2>What should you do?</h2>
        <ul>
          {alert.recommendation.map((rec) => (
            <li key={rec}>✅ {rec}</li>
          ))}
        </ul>
      </section>

      {/* TECH DETAILS */}
      <section className="alert-section technical">
        <h2>Technical details</h2>

        <div className="tech-grid">
          <div>
            <strong>Sender</strong>
            <span>{alert.technical.sender}</span>
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
            <span className="mono">{alert.technical.linkDetected}</span>
            <button className="inline">Analyze this link</button>
          </div>
        </div>
      </section>
      <footer className="alert-actions">
        <button className="secondary">← Back to alerts</button>

        <div className="right">
          <button className="ghost">Mark as read</button>
          <button className="danger">Resolve alert</button>
        </div>
      </footer>
    </main>
  );
}
