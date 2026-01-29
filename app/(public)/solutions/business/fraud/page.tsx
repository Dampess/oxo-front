import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function FraudDetectionPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Fraud Detection</h1>
        <p className="subtitle">
          Detect, analyze, and prevent digital fraud before it impacts your
          business.
        </p>

        <div className="card">
          <h3>Advanced Fraud Intelligence</h3>
          <p>
            Oxo continuously analyzes digital signals to identify fraudulent
            behaviors across emails, links, domains, and user interactions.
          </p>
        </div>

        <div className="card">
          <h3>Key Capabilities</h3>
          <ul>
            <li>Detection of impersonation and spoofing attempts</li>
            <li>Behavioral anomaly analysis</li>
            <li>Identification of scam campaigns and patterns</li>
            <li>Risk scoring based on real-time signals</li>
          </ul>
        </div>

        <div className="card">
          <h3>Why It Matters</h3>
          <ul>
            <li>Reduce financial losses</li>
            <li>Protect brand reputation</li>
            <li>Detect fraud earlier in the attack chain</li>
          </ul>
        </div>

        <div className="cta">
          <Link href="/contact" className="primary">
            Talk to an Expert
          </Link>
          <Link href="/solutions/business" className="secondary">
            Back to Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
