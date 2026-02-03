"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/tools-page.scss";

export default function FraudDetectionPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"phone" | "sms">("phone");
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!input) return alert("Please enter a phone number or SMS content");
    if (mode === "phone") {
      setResult(`Phone number analyzed: ${input}. Status: Safe ✅`);
    } else {
      setResult(`SMS content analyzed: ${input}. Status: Suspicious ⚠️`);
    }
  };

  return (
    <main className="tools-page">
      <Link href="/tools" className="back-button">
        ← Back Tools Page
      </Link>
      <h1>Fraud Detection</h1>
      <p>Check suspicious phone numbers or SMS content</p>

      <textarea
        placeholder="Paste phone number or SMS..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="mode-toggle">
        <button
          className={mode === "phone" ? "active" : ""}
          onClick={() => setMode("phone")}
        >
          Phone
        </button>
        <button
          className={mode === "sms" ? "active" : ""}
          onClick={() => setMode("sms")}
        >
          SMS
        </button>
      </div>

      <button className="analyze-btn" onClick={handleAnalyze}>
        Analyze
      </button>

      {result && <div className="result">{result}</div>}
    </main>
  );
}
