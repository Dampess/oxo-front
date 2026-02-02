"use client";

import { useState } from "react";
import "../styles/check-tools.scss";

export default function CheckLinkPage() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function analyze() {
    if (!value) return;
    setResult("This link redirects to a suspicious domain 🚨");
  }

  return (
    <main className="check-tool">
      <header>
        <h1>Check Link or Domain</h1>
        <p>Analyze a URL or a domain before clicking</p>
      </header>

      <div className="card">
        <input
          type="text"
          placeholder="https://example.com or example.com"
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
