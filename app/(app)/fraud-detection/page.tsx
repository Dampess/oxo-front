"use client";

import { useState } from "react";
import "../styles/fraud-detection.scss";

export default function FraudDetectionPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"info" | "phone">("info");
  const [result, setResult] = useState<string | null>(null);
  const quota = 5; // Exemple dynamique selon le plan

  const handleAnalyze = () => {
    if (!input) return alert("Please enter some information or a phone number");

    let analysisResult = "";
    if (mode === "info") {
      // Simulation d'analyse transaction ou info
      const isFraud = Math.random() > 0.7;
      analysisResult = isFraud
        ? "⚠️ Potential fraud detected. Please review carefully!"
        : "✅ No fraud detected. The transaction seems safe.";
    } else {
      // Simulation d'analyse numéro de téléphone
      const isSuspicious = Math.random() > 0.6;
      analysisResult = isSuspicious
        ? `⚠️ The phone number ${input} is suspicious!`
        : `✅ The phone number ${input} seems safe.`;
    }

    setResult(analysisResult);
  };

  return (
    <main className="fraud-detection">
      <div className="container">
        <h1 className="title">Fraud Detection</h1>
        <p className="subtitle">
          Analyze transactions, suspicious info, or phone numbers.
        </p>

        <div className="mode-toggle">
          <button
            className={mode === "info" ? "active" : ""}
            onClick={() => setMode("info")}
          >
            Info / Transaction
          </button>
          <button
            className={mode === "phone" ? "active" : ""}
            onClick={() => setMode("phone")}
          >
            Phone Number
          </button>
        </div>

        <div className="scan-card">
          <textarea
            placeholder={
              mode === "info"
                ? "Paste transaction details or suspicious info..."
                : "Enter the phone number to check..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="scan-footer">
            <span className="quota">Quota remaining: {quota} analyses</span>
            <button className="scan-btn" onClick={handleAnalyze}>
              Analyze
            </button>
          </div>
        </div>

        {result && (
          <div
            className={`result-card ${
              result.includes("✅") ? "safe" : "danger"
            }`}
          >
            <h3>Analysis Result</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
