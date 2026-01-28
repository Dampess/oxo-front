import "./FeaturesSection.scss";

export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h3 className="title">Features & Benefits</h3>
        <p className="subtitle">
          Powerful tools designed to detect, understand, and neutralize digital
          threats.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">👁</div>
            <h4 className="feature-title">Link & Email Checking</h4>
            <p className="feature-text">
              Instantly verify the safety of links and emails before
              interacting.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon"></div>
            <h4 className="feature-title">Number Validation</h4>
            <p className="feature-text">
              Detect suspicious or fraudulent numbers to prevent scams.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🛡</div>
            <h4 className="feature-title">System Audit</h4>
            <p className="feature-text">
              Run secure audits for personal or professional systems with clear
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
