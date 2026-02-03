"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/tools-page.scss";

export default function CheckLinkPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"link" | "domain">("link");
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!input) return alert("Please enter a link or domain");
    if (mode === "link") {
      setResult(`Link analyzed: ${input}. Status: Safe ✅`);
    } else {
      setResult(`Domain analyzed: ${input}. Status: Suspicious ⚠️`);
    }
  };

  return (
    <main className="tools-page">
      <Link href="/tools" className="back-button">
        ← Back Tools Page
      </Link>
      <h1>Check Link / Domain</h1>
      <p>Analyze either a full link or just the domain</p>

      <input
        type="text"
        placeholder="Paste link or domain..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="mode-toggle">
        <button
          className={mode === "link" ? "active" : ""}
          onClick={() => setMode("link")}
        >
          Link
        </button>
        <button
          className={mode === "domain" ? "active" : ""}
          onClick={() => setMode("domain")}
        >
          Domain
        </button>
      </div>

      <button className="analyze-btn" onClick={handleAnalyze}>
        Analyze
      </button>

      {result && <div className="result">{result}</div>}
    </main>
  );
}
