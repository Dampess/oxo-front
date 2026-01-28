import "../../../styles/solutions-sub.scss";

export default function EmailPhishingPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Email & Phishing Protection</h1>
        <p className="subtitle">
          Protect your organization against phishing, spoofing, and social
          engineering attacks.
        </p>

        <div className="card">
          <h3>Smart Email Analysis</h3>
          <p>
            Oxo analyzes email content, metadata, and sender behavior to detect
            phishing attempts with high precision.
          </p>
        </div>

        <div className="card">
          <h3>Protection Features</h3>
          <ul>
            <li>Phishing and spear-phishing detection</li>
            <li>Malicious attachment analysis</li>
            <li>URL inspection and sandboxing</li>
            <li>Sender reputation scoring</li>
          </ul>
        </div>

        <div className="card">
          <h3>Business Impact</h3>
          <ul>
            <li>Lower risk of account compromise</li>
            <li>Reduced employee exposure to scams</li>
            <li>Stronger email trust environment</li>
          </ul>
        </div>

        <div className="cta">
          <a href="/contact" className="primary">
            Secure My Emails
          </a>
          <a href="/solutions/business" className="secondary">
            Back to Solutions
          </a>
        </div>
      </div>
    </main>
  );
}
