"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/tools-page.scss";

export default function IpScanPage() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleScan = () => {
    if (!ip) return alert("Please enter an IP address");
    // ⚠️ Mock scan
    const lastDigit = parseInt(ip.split(".").pop() || "0", 10);
    const status = lastDigit % 2 === 0 ? "Safe ✅" : "Suspicious ⚠️";
    setResult(`IP ${ip} scanned. Status: ${status}`);
  };

  return (
    <main className="tools-page">
      <Link href="/tools" className="back-button">
        ← Back Tools Page
      </Link>
      <h1>IP Scan</h1>
      <p>Analyze the security status of an IP address</p>

      <input
        type="text"
        placeholder="Enter IP address (e.g., 192.168.0.1)"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />

      <button className="analyze-btn" onClick={handleScan}>
        Scan IP
      </button>

      {result && <div className="result">{result}</div>}
    </main>
  );
}
