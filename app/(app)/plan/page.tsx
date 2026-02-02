"use client";

import { useState } from "react";
import "../styles/plan.scss";

interface Payment {
  date: string;
  amount: string;
  status: "Paid" | "Failed";
}

export default function PlanPage() {
  const [plan, setPlan] = useState<"Free" | "Pro" | "Enterprise">("Free");

  const plans = [
    { name: "Free", price: "$0", quota: 10 },
    { name: "Pro", price: "$19", quota: 100 },
    { name: "Enterprise", price: "$99", quota: 1000 },
  ];

  const history: Payment[] = [
    { date: "2026-01-01", amount: "$19", status: "Paid" },
    { date: "2025-12-01", amount: "$19", status: "Paid" },
  ];

  const renewalDate = "2026-02-15";

  const handleChangePlan = (newPlan: string) => {
    setPlan(newPlan as any);
    alert(`Plan changed to ${newPlan} (mock) ✅`);
  };

  const handleCancelPlan = () => {
    alert("Subscription canceled (mock) ⚠️");
  };

  return (
    <main className="plan-page">
      <h1>Subscription & Plan</h1>
      <p>View your current plan, manage subscription and payment history.</p>

      <div className="current-plan card">
        <h2>Current Plan: {plan}</h2>
        <p>
          Quota remaining: {plans.find((p) => p.name === plan)?.quota} checks
        </p>
        <p>Next Renewal: {renewalDate}</p>
        <div className="actions">
          <button onClick={handleCancelPlan} className="cancel">
            Cancel Subscription
          </button>
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`plan-card ${plan === p.name ? "active" : ""}`}
          >
            <h3>{p.name}</h3>
            <p className="price">{p.price}/month</p>
            <p className="quota">Quota: {p.quota} checks</p>
            {plan === p.name ? (
              <button disabled>Current Plan</button>
            ) : (
              <button onClick={() => handleChangePlan(p.name)}>Upgrade</button>
            )}
          </div>
        ))}
      </div>

      <div className="payment-history card">
        <h2>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, i) => (
              <tr key={i}>
                <td>{h.date}</td>
                <td>{h.amount}</td>
                <td>{h.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
