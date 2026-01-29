"use client";

import { useState } from "react";
import "../styles/check-link.scss";

export default function CheckLinkPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"url" | "domain">("url");
  const [result, setResult] = useState<string | null>(null);
  const quota = 15; // Exemple dynamique

  const handleAnalyze = () => {
    if (!input) return alert("Please enter a URL or domain");
    if (mode === "url") {
      setResult(`URL analyzed: ${input}. Status: Safe ✅`);
    } else {
      setResult(`Domain analyzed: ${input}. Status: Suspicious ⚠️`);
    }
  };

  return (
    <main className="check-link">
      <div className="container">
        <h1 className="title">Check Link / Domain</h1>
        <p className="subtitle">Analyze a link or a domain reputation.</p>

        <div className="link-form">
          <input
            type="text"
            placeholder="Paste your URL or domain..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="mode-toggle">
            <button
              className={mode === "url" ? "active" : ""}
              onClick={() => setMode("url")}
            >
              URL
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
        </div>

        <div className="quota">Quota remaining: {quota} checks</div>

        {result && <div className="result">{result}</div>}
      </div>
    </main>
  );
}
