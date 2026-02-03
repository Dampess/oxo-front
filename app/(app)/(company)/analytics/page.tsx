"use client";

import "../styles/analytics.scss";

type AlertTrend = {
  week: string;
  critical: number;
  resolved: number;
};

const alertTrends: AlertTrend[] = [
  { week: "Week -3", critical: 5, resolved: 3 },
  { week: "Week -2", critical: 8, resolved: 6 },
  { week: "Week -1", critical: 4, resolved: 7 },
  { week: "Current Week", critical: 6, resolved: 5 },
];

const kpis = [
  { label: "Average MTTR (hrs)", value: 4.2 },
  { label: "Open Critical Alerts", value: 12 },
  { label: "Resolved Alerts Last 30d", value: 53 },
];

export default function CompanyAnalyticsPage() {
  return (
    <main className="company-analytics">
      <header>
        <h1>Analytics Dashboard</h1>
        <p>Advanced insights into your security posture and trends</p>
      </header>

      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <span className="label">{kpi.label}</span>
            <span className="value">{kpi.value}</span>
          </div>
        ))}
      </section>

      <section className="trend-graph">
        <h2>Critical vs Resolved Alerts Trend</h2>
        <div className="bars">
          {alertTrends.map((week) => (
            <div key={week.week} className="week-bar">
              <span className="week-label">{week.week}</span>
              <div
                className="bar critical"
                style={{ height: `${week.critical * 10}px` }}
              ></div>
              <div
                className="bar resolved"
                style={{ height: `${week.resolved * 10}px` }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
