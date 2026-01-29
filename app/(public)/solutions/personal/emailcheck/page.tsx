import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function ScanEmailPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Scan an Email</h1>
        <p className="subtitle">
          Detect phishing emails and suspicious messages before you respond.
        </p>

        <div className="card">
          <h3>Email Threat Detection</h3>
          <p>
            Oxo analyzes email content, sender information, and embedded links
            to identify phishing and scam attempts.
          </p>
        </div>

        <div className="card">
          <h3>What We Analyze</h3>
          <ul>
            <li>Sender authenticity</li>
            <li>Suspicious wording and social engineering</li>
            <li>Links and attachments</li>
            <li>Known scam signatures</li>
          </ul>
        </div>

        <div className="card">
          <h3>Stay Safe From</h3>
          <ul>
            <li>Fake delivery notifications</li>
            <li>Bank and payment scams</li>
            <li>Account takeover attempts</li>
          </ul>
        </div>

        <div className="cta">
          <Link href="/scan-email" className="primary">
            Scan an Email
          </Link>
          <Link href="/solutions/personal" className="secondary">
            Back to Personal Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
