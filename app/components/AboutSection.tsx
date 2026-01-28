import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="image"></div>
      <div className="container text-center">
        <h3 className="title">Our Story & Mission</h3>

        <p className="text">
          Founded with the vision of making cybersecurity accessible to
          everyone, Oxo was created to bridge the gap between complex security
          tools and real-world users.
        </p>

        <p className="text">
          We believe protection should not be reserved for experts only.
          Individuals, small businesses, and enterprises all deserve clear,
          reliable, and transparent security insights.
        </p>

        <p className="highlight">
          See the threats. Smell the dangers. Protect what matters most.
        </p>
      </div>
    </section>
  );
}
