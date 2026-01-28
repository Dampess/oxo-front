import "../styles/solutions.scss";

export default function SolutionsPage() {
  return (
    <main className="solutions">
      {/* ================= HERO ================= */}
      <section className="solutions-hero">
        <div className="container">
          <h1 className="title">Smart protection against digital threats</h1>
          <p className="subtitle">
            Analyze, detect, and prevent fraud, malicious links, and scam
            attempts in real time.
          </p>

          <div className="hero-cta">
            <a href="/solutions/business" className="btn primary">
              Business Solutions
            </a>
            <a href="/solutions/personal" className="btn secondary">
              Personal Protection
            </a>
          </div>
        </div>
      </section>

      {/* ================= SEGMENTS ================= */}
      <section className="solutions-segments">
        <div className="container grid-2">
          {/* BUSINESS */}
          <div className="segment-card">
            <h2>For businesses</h2>
            <p>
              Secure your communications, systems, and brand reputation against
              modern digital threats.
            </p>

            <ul>
              <li>Email & phishing protection</li>
              <li>Link & domain analysis</li>
              <li>Fraud detection</li>
              <li>Audit & continuous monitoring</li>
              <li>Compliance & trust</li>
            </ul>

            <a href="/solutions/business" className="segment-link">
              Explore business solutions →
            </a>
          </div>

          {/* PERSONAL */}
          <div className="segment-card highlight">
            <h2>For individuals</h2>
            <p>
              Stay safe online with simple tools to detect scams, fake emails,
              and dangerous links.
            </p>

            <ul>
              <li>Check a link</li>
              <li>Scan an email</li>
              <li>Verify a phone number</li>
              <li>Quick system scan</li>
            </ul>

            <a href="/solutions/personal" className="segment-link">
              Protect my digital life →
            </a>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="solutions-how">
        <div className="container">
          <h2 className="section-title">How it works</h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <h3>Smart analysis</h3>
              <p>
                Our systems analyze suspicious content in real time using
                advanced detection engines.
              </p>
            </div>

            <div className="step">
              <span>2</span>
              <h3>Risk detection</h3>
              <p>
                Threats are identified using AI models, behavioral analysis, and
                security rules.
              </p>
            </div>

            <div className="step">
              <span>3</span>
              <h3>Clear results & actions</h3>
              <p>
                Get clear insights, risk levels, and immediate recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="solutions-cta">
        <div className="container">
          <h2>Start analyzing now</h2>
          <p>
            Test a link, scan an email, or discover our professional security
            solutions.
          </p>

          <div className="cta-actions">
            <a href="/scan" className="btn primary">
              Test a link
            </a>
            <a href="/contact" className="btn secondary">
              Contact our team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
