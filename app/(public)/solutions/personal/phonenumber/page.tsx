import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function VerifyPhonePage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Verify a Phone Number</h1>
        <p className="subtitle">
          Identify suspicious or fraudulent phone numbers before responding.
        </p>

        <div className="card">
          <h3>Phone Scam Detection</h3>
          <p>
            Oxo helps you determine whether a phone number is linked to known
            scam campaigns or suspicious activity.
          </p>
        </div>

        <div className="card">
          <h3>What We Check</h3>
          <ul>
            <li>Reported scam activity</li>
            <li>Geographic inconsistencies</li>
            <li>Unusual calling behavior</li>
            <li>Known fraud databases</li>
          </ul>
        </div>

        <div className="card">
          <h3>Protect Yourself From</h3>
          <ul>
            <li>Phone and SMS scams</li>
            <li>Fake customer support calls</li>
            <li>Identity theft attempts</li>
          </ul>
        </div>

        <div className="cta">
          <Link href="/verify-number" className="primary">
            Verify a Number
          </Link>
          <Link href="/solutions/personal" className="secondary">
            Back to Personal Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
