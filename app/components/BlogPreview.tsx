import "./BlogPreview.scss";

export default function BlogPreview() {
  const posts = [
    {
      title: "Recent Cyber Threats in 2026",
      excerpt: "Stay updated with the latest cyber threats and scams.",
      link: "#",
      category: "Threats",
    },
    {
      title: "How to Secure Your Personal Devices",
      excerpt: "Tips and best practices to keep your devices safe.",
      link: "#",
      category: "Guides",
    },
    {
      title: "Professional System Audits Explained",
      excerpt: "Learn how audits help protect organizations.",
      link: "#",
      category: "Enterprise",
    },
  ];

  return (
    <section id="blog" className="blog-preview">
      <div className="container">
        <h3 className="title">Latest Insights</h3>
        <p className="subtitle">
          Our cybersecurity experts share insights, alerts, and best practices.
        </p>

        <div className="posts-grid">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <span className="post-category">{post.category}</span>
              <h4 className="post-title">{post.title}</h4>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={post.link} className="post-link">
                Read article →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
