import "../../styles/solutions-personal.scss";

export default function PersonalSolutionsPage() {
  return (
    <main className="solutions personal">
      {/* HERO */}
      <section className="solutions-hero">
        <div className="container">
          <h1>Personal digital protection</h1>
          <p>
            Simple tools to protect yourself from scams, phishing attempts, and
            malicious links.
          </p>

          <a href="/scan" className="button-primary">
            Start a free scan
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="solutions-features">
        <div className="container grid-2">
          <div className="feature">
            <h3>Check a suspicious link</h3>
            <p>
              Instantly analyze URLs to detect phishing, malware, or fraudulent
              websites.
            </p>
          </div>

          <div className="feature">
            <h3>Scan emails</h3>
            <p>
              Identify fake emails, impersonation attempts, and dangerous
              attachments.
            </p>
          </div>

          <div className="feature">
            <h3>Verify phone numbers</h3>
            <p>Detect scam calls, SMS fraud, and suspicious phone numbers.</p>
          </div>

          <div className="feature">
            <h3>Quick system scan</h3>
            <p>
              Run a lightweight scan to detect basic threats on your device.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT HELPS */}
      <section className="solutions-benefits">
        <div className="container">
          <h2>Why it matters</h2>

          <ul>
            <li>Avoid online scams and identity theft</li>
            <li>Stay safe while browsing and emailing</li>
            <li>No technical knowledge required</li>
            <li>Fast, clear, and actionable results</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="solutions-cta">
        <div className="container">
          <h2>Protect your digital life today</h2>
          <p>Start analyzing links, emails, and messages in seconds.</p>

          <a href="/scan" className="button-primary">
            Start scanning now
          </a>
        </div>
      </section>
    </main>
  );
}
