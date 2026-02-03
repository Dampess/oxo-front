"use client";

import { useState } from "react";
import "../styles/integration.scss";

export default function IntegrationsPage() {
  const [apiKey, setApiKey] = useState<string | null>("ox_live_********1234");

  return (
    <main className="integrations">
      <h1>API & Webhooks</h1>

      {/* API KEY */}
      <section className="card">
        <h2>API Key</h2>
        <p>Use this key to access Oxo programmatically</p>

        <div className="api-key">
          <code>{apiKey}</code>
          <button
            onClick={() => setApiKey("ox_live_" + Math.random().toString(36))}
          >
            Regenerate
          </button>
        </div>
      </section>

      {/* WEBHOOKS */}
      <section className="card">
        <h2>Webhooks</h2>
        <p>Receive real-time events from Oxo</p>

        <div className="webhook">
          <span>https://company.com/oxo/webhook</span>
          <span className="event">alerts.created</span>
        </div>

        <button>Add webhook</button>
      </section>
    </main>
  );
}
