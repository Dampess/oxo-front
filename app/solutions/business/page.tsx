import "../../styles/solutions-business.scss";

export default function BusinessSolutionsPage() {
  return (
    <main className="solutions business">
      {/* HERO */}
      <section className="solutions-hero">
        <div className="container">
          <h1>Enterprise-grade threat protection</h1>
          <p>
            Protect your organization from phishing, fraud, and digital threats
            with advanced detection and monitoring.
          </p>

          <div className="hero-cta">
            <a href="/contact" className="button-primary">
              Request a demo
            </a>
            <a href="/solutions" className="button-secondary">
              View all solutions
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="solutions-features">
        <div className="container grid-2">
          <div className="feature">
            <h3>Email & phishing protection</h3>
            <p>
              Detect phishing campaigns, spoofed domains, and malicious
              attachments before they reach users.
            </p>
          </div>

          <div className="feature">
            <h3>Link & domain analysis</h3>
            <p>
              Analyze URLs, domains, and redirections to identify malicious
              infrastructure.
            </p>
          </div>

          <div className="feature">
            <h3>Fraud detection</h3>
            <p>
              Identify impersonation, payment fraud, and social engineering
              attacks.
            </p>
          </div>

          <div className="feature">
            <h3>Audits & monitoring</h3>
            <p>
              Continuous monitoring, security audits, and risk reporting for
              your organization.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="solutions-benefits">
        <div className="container">
          <h2>Designed for modern organizations</h2>

          <ul>
            <li>SMEs & startups</li>
            <li>IT & security teams</li>
            <li>Finance & legal departments</li>
            <li>Compliance-driven industries</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="solutions-cta">
        <div className="container">
          <h2>Strengthen your security posture</h2>
          <p>
            Get visibility, control, and protection against evolving digital
            threats.
          </p>

          <a href="/contact" className="button-primary">
            Talk to our team
          </a>
        </div>
      </section>
    </main>
  );
}
