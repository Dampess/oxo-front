import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function CheckLinkPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Check a Link</h1>
        <p className="subtitle">
          Make sure a link is safe before clicking. Avoid scams, phishing, and
          malicious websites.
        </p>

        <div className="card">
          <h3>Instant Link Verification</h3>
          <p>
            Paste any URL and let Oxo analyze it in real time to detect
            phishing, malware, and suspicious behavior.
          </p>
        </div>

        <div className="card">
          <h3>What Oxo Checks</h3>
          <ul>
            <li>Domain reputation and age</li>
            <li>Redirection behavior</li>
            <li>Known phishing or scam patterns</li>
            <li>Malicious hosting indicators</li>
          </ul>
        </div>

        <div className="card">
          <h3>Why It Matters</h3>
          <ul>
            <li>Avoid fake websites and scams</li>
            <li>Protect personal data and credentials</li>
            <li>Browse with confidence</li>
          </ul>
        </div>

        <div className="cta">
          <Link href="/scan" className="primary">
            Check a Link
          </Link>
          <Link href="/solutions/personal" className="secondary">
            Back to Personal Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
