"use client";

import { useState } from "react";
import "../styles/check-tools.scss";

export default function FraudDetectionPage() {
  const [mode, setMode] = useState<"phone" | "sms">("phone");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function analyze() {
    if (!value) return;
    setResult(
      mode === "phone"
        ? "This number has been reported multiple times 🚨"
        : "This SMS contains scam indicators ⚠️",
    );
  }

  return (
    <main className="check-tool">
      <header>
        <h1>Fraud Detection</h1>
        <p>Check suspicious phone numbers or SMS messages</p>
      </header>

      <div className="card">
        <div className="toggle">
          <button
            className={mode === "phone" ? "active" : ""}
            onClick={() => setMode("phone")}
          >
            Phone Number
          </button>
          <button
            className={mode === "sms" ? "active" : ""}
            onClick={() => setMode("sms")}
          >
            SMS Content
          </button>
        </div>

        <textarea
          placeholder={
            mode === "phone"
              ? "+33 6 12 34 56 78"
              : "Paste the SMS content here..."
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className="primary" onClick={analyze}>
          Analyze
        </button>
      </div>

      {result && <div className="result">{result}</div>}
    </main>
  );
}
