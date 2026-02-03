"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/tools-page.scss";

export default function CheckEmailPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"sender" | "content">("sender");
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!input) return alert("Please enter an email");
    if (mode === "sender") {
      setResult(
        `Expéditeur analysé : ${input.split("@")[1] || "unknown"}. Statut : Safe ✅`,
      );
    } else {
      setResult("Contenu analysé. Statut : Suspicious ⚠️");
    }
  };

  return (
    <main className="tools-page">
      <Link href="/tools" className="back-button">
        ← Back Tools Page
      </Link>
      <h1>Check Email</h1>
      <p>Analyze either the sender or the content of an email</p>

      <textarea
        placeholder="Paste your email here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
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

      <button className="analyze-btn" onClick={handleAnalyze}>
        Analyze
      </button>

      {result && <div className="result">{result}</div>}
    </main>
  );
}
