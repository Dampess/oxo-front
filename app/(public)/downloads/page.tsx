"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/downloads.scss";

export default function DownloadsPage() {
  const [segment, setSegment] = useState<"personal" | "business">("personal");

  return (
    <main className="downloads">
      {/* ================= HERO ================= */}
      <section className="downloads-hero">
        <h1 className="title">Download Oxo apps & tools</h1>
        <p className="subtitle">
          Secure your digital activity with Oxo applications for desktop and
          mobile platforms.
        </p>
      </section>

      {/* ================= TABS ================= */}
      <div className="downloads-tabs">
        <button
          className={segment === "personal" ? "active" : ""}
          onClick={() => setSegment("personal")}
        >
          Personal
        </button>
        <button
          className={segment === "business" ? "active" : ""}
          onClick={() => setSegment("business")}
        >
          Business
        </button>
      </div>

      {/* ================= GRID ================= */}
      <section className="downloads-grid">
        {/* WINDOWS */}
        <div className="download-card">
          <div className="os">Windows</div>
          <p className="desc">
            {segment === "personal"
              ? "Protect your personal browsing, emails and downloads."
              : "Advanced endpoint protection and threat monitoring for teams."}
          </p>
          <div className="meta">Windows 10+</div>
          <Link href="#" className="btn">
            Download for Windows
          </Link>
        </div>

        {/* MAC */}
        <div className="download-card">
          <div className="os">macOS</div>
          <p className="desc">
            {segment === "personal"
              ? "Lightweight protection for macOS users."
              : "Enterprise-grade macOS security agent."}
          </p>
          <div className="meta">macOS 12+</div>
          <Link href="#" className="btn">
            Download for macOS
          </Link>
        </div>

        {/* MOBILE */}
        <div className="download-card">
          <div className="os">Mobile</div>
          <p className="desc">
            {segment === "personal"
              ? "Scan links, SMS and emails on the go."
              : "Secure mobile access for employees and executives."}
          </p>
          <div className="meta">iOS & Android</div>
          <Link href="#" className="btn">
            Coming soon
          </Link>
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="downloads-info">
        <p>
          All Oxo applications are digitally signed, regularly updated and
          comply with industry security standards. Business editions include
          centralized management and advanced reporting.
        </p>
      </section>
    </main>
  );
}
