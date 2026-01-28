import "../styles/blog.scss";

const posts = [
  {
    title: "Top Cyber Threats to Watch in 2026",
    excerpt:
      "From phishing-as-a-service to AI-powered scams, discover the emerging threats shaping the digital risk landscape.",
    category: "Threat Intelligence",
    date: "Jan 12, 2026",
    slug: "#",
  },
  {
    title: "How to Detect a Malicious Link in Seconds",
    excerpt:
      "A practical guide to quickly identify dangerous links before clicking — even without technical knowledge.",
    category: "Practical Security",
    date: "Jan 5, 2026",
    slug: "#",
  },
  {
    title: "Why Businesses Underestimate Email Attacks",
    excerpt:
      "Email remains the primary attack vector. Here’s why organizations still struggle to defend against it.",
    category: "Business Security",
    date: "Dec 20, 2025",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="blog-page">
      {/* ================= HERO ================= */}
      <section className="blog-hero">
        <div className="container">
          <h1>Oxo Blog</h1>
          <p>
            Insights, analysis and practical guidance to help you understand
            digital threats and stay protected.
          </p>
        </div>
      </section>

      {/* ================= POSTS ================= */}
      <section className="blog-list">
        <div className="container">
          <div className="posts-grid">
            {posts.map((post, index) => (
              <article key={index} className="post-card">
                <div className="post-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>

                <h2 className="post-title">{post.title}</h2>

                <p className="post-excerpt">{post.excerpt}</p>

                <a href={post.slug} className="post-link">
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="blog-cta">
        <div className="container">
          <h2>Stay one step ahead</h2>
          <p>
            Test a suspicious link or email before it becomes a real threat.
          </p>

          <a href="/scan" className="button-primary">
            Start a scan
          </a>
        </div>
      </section>
    </main>
  );
}
