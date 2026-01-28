import "./CTASection.scss";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container text-center">
        <h3 className="title">Ready to Protect Yourself?</h3>

        <p className="text">
          Get started now with Oxo and take control of your digital security.
        </p>

        <a href="/solutions" className="cta-button">
          See Our Solutions
        </a>
      </div>
      <div className="image"></div>
    </section>
  );
}
