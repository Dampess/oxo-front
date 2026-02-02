"use client";

import { useState } from "react";
import "../styles/check-tools.scss";

export default function CheckEmailPage() {
  const [mode, setMode] = useState<"sender" | "content">("sender");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function analyze() {
    if (!value) return;
    setResult(
      mode === "sender"
        ? "Sender reputation looks suspicious ⚠️"
        : "Email content contains phishing patterns 🚨",
    );
  }

  return (
    <main className="check-tool">
      <header>
        <h1>Check Email</h1>
        <p>Quickly analyze an email sender or its content</p>
      </header>

      <div className="card">
        <div className="toggle">
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

        <textarea
          placeholder={
            mode === "sender"
              ? "example@domain.com"
              : "Paste the email content here..."
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
