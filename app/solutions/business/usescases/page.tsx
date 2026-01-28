import "../../../styles/solutions-sub.scss";

export default function UseCasesPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Use Cases</h1>
        <p className="subtitle">
          Real-world applications of Oxo security solutions across industries.
        </p>

        <div className="card">
          <h3>Common Scenarios</h3>
          <ul>
            <li>Protecting employees from phishing attacks</li>
            <li>Preventing customer-facing fraud</li>
            <li>Monitoring brand impersonation</li>
            <li>Securing digital communications</li>
          </ul>
        </div>

        <div className="card">
          <h3>Industries</h3>
          <ul>
            <li>Finance and fintech</li>
            <li>E-commerce</li>
            <li>Healthcare</li>
            <li>SaaS and technology</li>
          </ul>
        </div>

        <div className="cta">
          <a href="/contact" className="primary">
            Explore Use Cases
          </a>
          <a href="/solutions/business" className="secondary">
            Back to Solutions
          </a>
        </div>
      </div>
    </main>
  );
}
