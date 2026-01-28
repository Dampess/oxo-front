"use client";

import { useState } from "react";
import "../styles/pricing.scss";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="pricing">
      {/* ================= HERO ================= */}
      <section className="pricing-hero">
        <div className="container">
          <h1 className="title">Simple & Transparent Pricing</h1>
          <p className="subtitle">
            Choose the plan that fits your needs individuals & businesses.
          </p>

          {/* TOGGLE */}
          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly <span>-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL ================= */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Personal Plans</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <p className="price">$0</p>

              <ul>
                <li>Limited link checks</li>
                <li>Manual email scan</li>
                <li>Phone number verification</li>
              </ul>

              <a href="/signup" className="btn secondary">
                Get started
              </a>
            </div>

            <div className="pricing-card highlight">
              <h3>Personal Pro</h3>
              <p className="price">
                {billing === "monthly" ? "$9" : "$86"}
                <span>/{billing === "monthly" ? "month" : "year"}</span>
              </p>

              <ul>
                <li>Unlimited link analysis</li>
                <li>Email phishing detection</li>
                <li>Device security checks</li>
                <li>Real-time alerts</li>
              </ul>

              <a href="/signup" className="btn primary">
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS ================= */}
      <section className="pricing-section alt">
        <div className="container">
          <h2 className="section-title">Business Plans</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Startup</h3>
              <p className="price">
                {billing === "monthly" ? "$49" : "$470"}
                <span>/{billing === "monthly" ? "month" : "year"}</span>
              </p>

              <ul>
                <li>Email & phishing protection</li>
                <li>Fraud detection</li>
                <li>Basic reporting</li>
              </ul>

              <a href="/contact" className="btn secondary">
                Contact sales
              </a>
            </div>

            <div className="pricing-card highlight">
              <h3>Enterprise</h3>
              <p className="price">Custom</p>

              <ul>
                <li>Full audits & compliance</li>
                <li>Custom integrations</li>
                <li>Dedicated security team</li>
              </ul>

              <a href="/contact" className="btn primary">
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="pricing-compare">
        <div className="container">
          <h2 className="section-title">Compare Features</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Free</th>
                  <th>Personal Pro</th>
                  <th>Startup</th>
                  <th>Enterprise</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Link analysis</td>
                  <td>Limited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Email phishing protection</td>
                  <td>—</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Fraud detection</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Compliance & trust tools</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>Community</td>
                  <td>Email</td>
                  <td>Priority</td>
                  <td>Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
