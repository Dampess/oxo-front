import "./HowItWorks.scss";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h3 className="title">How Oxo Works</h3>
        <p className="subtitle">
          A simple, transparent process designed to protect you.
        </p>

        <div className="steps">
          {/* Step 1 */}
          <div className="step">
            <div className="step-number">01</div>
            <h4 className="step-title">Submit</h4>
            <p className="step-text">
              Provide a link, email, phone number, or system for analysis.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-number">02</div>
            <h4 className="step-title">Analyze</h4>
            <p className="step-text">
              Oxo securely inspects potential threats using trusted security
              methods.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-number">03</div>
            <h4 className="step-title">Act</h4>
            <p className="step-text">
              Receive clear results and actionable recommendations to stay safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
