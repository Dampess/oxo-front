import "./HeroSection.scss";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h2 className="hero-title">Protect Your Digital World</h2>

        <p className="hero-text">
          Oxo helps individuals and professionals secure their digital life
          effortlessly. Check links, emails, phone numbers, and run system
          audits all in one trusted platform.
        </p>

        <Link href="/solutions" className="hero-button">
          See Our Solutions
        </Link>
      </div>
    </section>
  );
}
