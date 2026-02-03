"use client";

import "../styles/plan-company.scss";

const currentPlan = {
  name: "Business Pro",
  price: "49€ / month",
  seats: 25,
  status: "Active",
  renewalDate: "March 2, 2024",
};

const paymentMethod = {
  brand: "Visa",
  last4: "4242",
  exp: "08/26",
};

const invoices = [
  { date: "02 Feb 2024", amount: "49€", status: "Paid" },
  { date: "02 Jan 2024", amount: "49€", status: "Paid" },
  { date: "02 Dec 2023", amount: "49€", status: "Paid" },
];

const usage = {
  alerts: 312,
  domains: 5,
  users: 24,
};

export default function CompanyPlanPage() {
  return (
    <main className="company-plan">
      <header className="plan-header">
        <h1>Subscription & Billing</h1>
        <p>Manage your plan, payments and invoices</p>
      </header>

      {/* CURRENT PLAN */}
      <section className="plan-card">
        <div className="plan-info">
          <h2>{currentPlan.name}</h2>
          <span className="price">{currentPlan.price}</span>
          <span className="status">{currentPlan.status}</span>

          <ul>
            <li>✔ Up to {currentPlan.seats} users</li>
            <li>✔ Advanced phishing detection</li>
            <li>✔ Domain & fraud monitoring</li>
            <li>✔ Priority support</li>
          </ul>
        </div>

        <div className="plan-actions">
          <button className="primary">Upgrade plan</button>
          <button className="danger">Cancel subscription</button>
          <span className="renewal">
            Next renewal: <strong>{currentPlan.renewalDate}</strong>
          </span>
        </div>
      </section>

      {/* BILLING */}
      <section className="billing-grid">
        <div className="billing-card">
          <h3>Payment method</h3>
          <p>
            {paymentMethod.brand} •••• {paymentMethod.last4}
          </p>
          <p>Expires {paymentMethod.exp}</p>
          <button className="link">Change payment method</button>
        </div>

        <div className="billing-card">
          <h3>Usage this month</h3>
          <ul>
            <li>
              <strong>{usage.alerts}</strong> alerts analyzed
            </li>
            <li>
              <strong>{usage.domains}</strong> domains protected
            </li>
            <li>
              <strong>{usage.users}</strong> active users
            </li>
          </ul>
        </div>
      </section>

      {/* INVOICES */}
      <section className="invoices">
        <h2>Payment history</h2>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={i}>
                <td>{inv.date}</td>
                <td>{inv.amount}</td>
                <td>
                  <span className={`badge ${inv.status.toLowerCase()}`}>
                    {inv.status}
                  </span>
                </td>
                <td>
                  <button className="link">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
