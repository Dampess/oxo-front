import "../../../styles/solutions-sub.scss";

export default function LinkDomainPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Link & Domain Analysis</h1>
        <p className="subtitle">
          Analyze URLs and domains to detect malicious infrastructure and
          threats.
        </p>

        <div className="card">
          <h3>Deep URL Intelligence</h3>
          <p>
            Oxo inspects links and domains using reputation data, behavioral
            analysis, and infrastructure signals.
          </p>
        </div>

        <div className="card">
          <h3>What We Analyze</h3>
          <ul>
            <li>Domain age and registration data</li>
            <li>Hosting and IP reputation</li>
            <li>Redirection chains</li>
            <li>Malware and phishing indicators</li>
          </ul>
        </div>

        <div className="card">
          <h3>Use Cases</h3>
          <ul>
            <li>Email security validation</li>
            <li>Threat investigation</li>
            <li>Fraud and scam prevention</li>
          </ul>
        </div>

        <div className="cta">
          <a href="/scan" className="primary">
            Analyze a Link
          </a>
          <a href="/solutions/business" className="secondary">
            Back to Solutions
          </a>
        </div>
      </div>
    </main>
  );
}
