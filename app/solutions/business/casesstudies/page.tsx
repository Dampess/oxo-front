import "../../../styles/solutions-sub.scss";

export default function CaseStudiesPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Case Studies</h1>
        <p className="subtitle">
          Discover how organizations use Oxo to reduce risk and stop digital
          threats.
        </p>

        <div className="card">
          <h3>Real Results</h3>
          <p>
            Our customers rely on Oxo to detect threats early, prevent fraud,
            and strengthen their overall security posture.
          </p>
        </div>

        <div className="card">
          <h3>What You’ll Learn</h3>
          <ul>
            <li>Challenges faced by organizations</li>
            <li>Solutions implemented with Oxo</li>
            <li>Measurable security improvements</li>
          </ul>
        </div>

        <div className="cta">
          <a href="/contact" className="primary">
            Request Case Studies
          </a>
          <a href="/solutions/business" className="secondary">
            Back to Solutions
          </a>
        </div>
      </div>
    </main>
  );
}
