import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function ComplianceTrustPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Compliance & Trust</h1>
        <p className="subtitle">
          Strengthen compliance and build trust with customers, partners, and
          regulators.
        </p>

        <div className="card">
          <h3>Security & Compliance Alignment</h3>
          <p>
            Oxo helps organizations align their security posture with industry
            standards and regulatory expectations.
          </p>
        </div>

        <div className="card">
          <h3>Supported Objectives</h3>
          <ul>
            <li>Risk visibility and documentation</li>
            <li>Continuous monitoring evidence</li>
            <li>Security maturity assessment</li>
            <li>Customer trust reinforcement</li>
          </ul>
        </div>

        <div className="card">
          <h3>Who It’s For</h3>
          <ul>
            <li>Compliance and risk teams</li>
            <li>Security leaders</li>
            <li>Organizations handling sensitive data</li>
          </ul>
        </div>

        <div className="cta">
          <Link href="/contact" className="primary">
            Discuss Compliance
          </Link>
          <Link href="/solutions/business" className="secondary">
            Back to Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
