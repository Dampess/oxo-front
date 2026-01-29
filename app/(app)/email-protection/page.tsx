"use client";

import { useState } from "react";
import "../styles/email-protection.scss";

export default function CheckEmailPage() {
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<"sender" | "content">("sender");
  const [result, setResult] = useState<string | null>(null);
  const quota = 10;

  const handleAnalyze = () => {
    if (!email) return alert("Please enter an email");

    if (mode === "sender") {
      setResult(`Analyzed sender: ${email.split("@")[1]}. Status: Safe ✅`);
    } else {
      setResult(`Content analyzed. Status: Suspicious ⚠️`);
    }
  };

  return (
    <main className="email-protection">
      <div className="container">
        <h1>Check Email</h1>
        <p className="subtitle">
          Analyze an email sender or its content easily.
        </p>

        <div className="scan-card">
          <textarea
            placeholder="Paste your email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mode-toggle">
            <button
              className={mode === "sender" ? "active" : ""}
              onClick={() => setMode("sender")}
            >
              Sender
            </button>
            <button
              className={mode === "content" ? "active" : ""}
              onClick={() => setMode("content")}
            >
              Content
            </button>
          </div>

          <div className="scan-footer">
            <span className="quota">Quota remaining: {quota} checks</span>
            <button className="scan-btn" onClick={handleAnalyze}>
              Analyze
            </button>
          </div>
        </div>

        {result && (
          <div
            className={`result-card ${result.includes("Safe") ? "safe" : "suspicious"}`}
          >
            <h3>Analysis Result</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
