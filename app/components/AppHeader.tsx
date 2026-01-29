"use client";

import "./AppHeader.scss";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="left">
        <span className="page-title">Dashboard</span>
      </div>

      <div className="right">
        <button className="header-btn">🔔</button>
        <button className="header-btn">🦊</button>
        <div className="sidebar-footer">
          <button className="logout">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
