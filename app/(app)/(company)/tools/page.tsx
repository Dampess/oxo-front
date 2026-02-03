"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/tools.scss";

type ToolType = "email" | "link" | "fraud" | "ip";

const tools: { label: string; type: ToolType; description: string }[] = [
  {
    label: "Check Email",
    type: "email",
    description: "Analyze email sender or content.",
  },
  {
    label: "Check Link / Domain",
    type: "link",
    description: "Scan a link or domain for safety.",
  },
  {
    label: "Fraud Detection",
    type: "fraud",
    description: "Check suspicious phone numbers or SMS content.",
  },
  {
    label: "Manual IP Scan",
    type: "ip",
    description: "Quick scan of IP addresses or endpoints.",
  },
];

export default function CompanyToolsPage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.label.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="company-tools">
      <header className="tools-header">
        <h1>Security Tools</h1>
        <p>Quick access to manual scans and security actions</p>
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <section className="tools-grid">
        {filteredTools.map((tool) => (
          <Link
            key={tool.label}
            href={`/tools/${tool.type === "email" ? "check-email" : tool.type === "link" ? "check-link" : tool.type === "ip" ? "ip-scan" : "scam-detection"}`}
            className="tool-card"
          >
            <div className="tool-icon">
              {tool.type === "email" && "📧"}
              {tool.type === "link" && "🔗"}
              {tool.type === "fraud" && "📱"}
              {tool.type === "ip" && "🛠️"}
            </div>
            <div className="tool-info">
              <strong>{tool.label}</strong>
              <p>{tool.description}</p>
            </div>
          </Link>
        ))}
        {filteredTools.length === 0 && (
          <div className="empty-state">
            <span>🔍</span>
            <p>No tools found for your search.</p>
          </div>
        )}
      </section>
    </main>
  );
}
