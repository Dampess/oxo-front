"use client";

import { useState } from "react";
import "./AppHeader.scss";

export default function AppHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const notifications = [
    "Phishing email detected",
    "Suspicious link blocked",
    "Spam phone number detected",
  ];

  const handleToggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSupport(false); // ferme support si ouvert
  };

  const handleToggleSupport = () => {
    setShowSupport(!showSupport);
    setShowNotifications(false); // ferme notifications si ouvert
  };

  return (
    <header className="app-header">
      <div className="left">
        <span className="page-title">Dashboard</span>
      </div>

      <div className="right">
        {/* Notifications */}
        <div className="header-btn-wrapper">
          <button className="header-btn" onClick={handleToggleNotifications}>
            🔔
          </button>
          {showNotifications && (
            <div className="dropdown notifications">
              <ul>
                {notifications.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
                {notifications.length === 0 && <li>No new notifications</li>}
              </ul>
            </div>
          )}
        </div>

        {/* Support */}
        <div className="header-btn-wrapper">
          <button className="header-btn" onClick={handleToggleSupport}>
            🦊
          </button>
          {showSupport && (
            <div className="dropdown support">
              <p>Need help?</p>
              <button onClick={() => alert("Opening support chat...")}>
                Contact Support
              </button>
            </div>
          )}
        </div>

        <div className="sidebar-footer">
          <button className="logout">Logout</button>
        </div>
      </div>
    </header>
  );
}
