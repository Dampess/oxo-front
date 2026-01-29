import "../styles/about.scss";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about">
      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="container">
          <h1>About Oxo</h1>
          <p>
            Oxo helps people and organizations navigate the digital world
            safely, with clarity, confidence, and trust.
          </p>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="about-why">
        <div className="container">
          <h2>Why Oxo exists</h2>
          <p>
            Digital threats are everywhere. Phishing, scams, malicious links,
            identity fraud — they target everyone.
          </p>
          <p>
            Oxo was created to make digital protection accessible,
            understandable and actionable, without fear-driven messaging or
            unnecessary complexity.
          </p>
        </div>
      </section>

      {/* ================= DIFFERENCE ================= */}
      <section className="about-difference">
        <div className="container grid-3">
          <div className="card">
            <h3>Clarity first</h3>
            <p>
              No technical jargon. Clear results, simple explanations,
              actionable recommendations.
            </p>
          </div>

          <div className="card">
            <h3>Built for everyone</h3>
            <p>
              From individuals to large organizations, Oxo adapts to your needs,
              scale and usage.
            </p>
          </div>

          <div className="card">
            <h3>Trust by design</h3>
            <p>
              Privacy-first, transparent systems, and security principles
              embedded at every level.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="about-manifesto">
        <div className="container">
          <h2>The Oxo Manifesto</h2>

          <ul>
            <li>Security should empower, not intimidate.</li>
            <li>Technology should protect people, not confuse them.</li>
            <li>Trust is earned through transparency.</li>
            <li>Digital safety is a right, not a privilege.</li>
          </ul>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="about-values">
        <div className="container grid-2">
          <div>
            <h3>Our commitment</h3>
            <p>
              Oxo continuously evolves to stay ahead of emerging threats, while
              respecting users’ privacy and autonomy.
            </p>
          </div>

          <div>
            <h3>Looking forward</h3>
            <p>
              Our mission is to become a trusted digital companion — helping
              users see, understand, and act before threats cause harm.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="container">
          <h2>Protect your digital world</h2>
          <p>Start scanning, exploring, and securing with Oxo today.</p>

          <div className="cta-actions">
            <Link href="/scan" className="button-primary">
              Start a scan
            </Link>
            <Link href="/solutions" className="button-secondary">
              Explore solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
