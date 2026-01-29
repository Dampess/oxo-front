import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function AuditsPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        {/* ================= HERO ================= */}
        <h1 className="title">Security Audits & Monitoring</h1>
        <p className="subtitle">
          Gain full visibility into your systems, identify weaknesses, and
          strengthen your security posture with continuous audits and
          monitoring.
        </p>

        {/* ================= OVERVIEW ================= */}
        <div className="card">
          <h3>What is a Security Audit?</h3>
          <p>
            A security audit is a comprehensive assessment of your systems,
            infrastructure, and digital processes. Oxo audits help you identify
            vulnerabilities, misconfigurations, and risky behaviors before they
            can be exploited.
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="card">
          <h3>What Oxo Audits Cover</h3>
          <ul>
            <li>Infrastructure and system configuration review</li>
            <li>Email and communication security assessment</li>
            <li>Exposure to phishing, malware, and fraud risks</li>
            <li>Domain, link, and external surface analysis</li>
            <li>Security policy and access control evaluation</li>
          </ul>
        </div>

        {/* ================= CONTINUOUS MONITORING ================= */}
        <div className="card">
          <h3>Continuous Monitoring</h3>
          <p>
            Oxo does not stop at a one-time audit. Our monitoring tools
            continuously track your exposure to emerging threats, alerting you
            in real time when risks are detected.
          </p>
          <ul>
            <li>Real-time alerts and risk notifications</li>
            <li>Threat trend analysis over time</li>
            <li>Early detection of abnormal behavior</li>
          </ul>
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="card">
          <h3>Business Benefits</h3>
          <ul>
            <li>Reduce the risk of data breaches and fraud</li>
            <li>Improve compliance with security standards</li>
            <li>Increase trust with customers and partners</li>
            <li>Clear, actionable security recommendations</li>
          </ul>
        </div>

        {/* ================= CTA ================= */}
        <div className="cta">
          <Link href="/contact" className="primary">
            Request an Audit
          </Link>
          <Link href="/solutions/business" className="secondary">
            Back to Business Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
