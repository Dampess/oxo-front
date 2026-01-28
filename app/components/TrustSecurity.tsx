import "./TrustSecurity.scss";

export default function TrustSecurity() {
  return (
    <section className="trust-security">
      <div className="container">
        <h3 className="title">Trust & Security by Design</h3>
        <p className="subtitle">Your data. Your control. No compromise.</p>

        <div className="pillars">
          <div className="pillar">
            <h4 className="pillar-title">Privacy-First</h4>
            <p className="pillar-text">
              Oxo does not sell, share, or exploit your data. Analysis results
              belong to you — always.
            </p>
          </div>

          <div className="pillar">
            <h4 className="pillar-title">Secure Analysis</h4>
            <p className="pillar-text">
              Every scan is processed in isolated environments to prevent
              cross-contamination or exposure.
            </p>
          </div>

          <div className="pillar">
            <h4 className="pillar-title">Full Transparency</h4>
            <p className="pillar-text">
              Clear explanations, no black box decisions. You understand what is
              detected and why.
            </p>
          </div>

          <div className="pillar">
            <h4 className="pillar-title">Professional Standards</h4>
            <p className="pillar-text">
              Designed with industry best practices in mind for individuals,
              teams, and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
