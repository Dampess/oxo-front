"use client";

import { useState } from "react";
import "../styles/settings.scss";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Visa **** 1234");

  const handleSaveProfile = () => {
    alert("Profile updated (mock) ✅");
  };

  const handleChangePassword = () => {
    alert("Password changed (mock) ✅");
  };

  const handleUpdatePayment = () => {
    alert("Payment method updated (mock) ✅");
  };

  return (
    <main className="settings-page">
      <h1>Account Settings</h1>
      <p>Manage your account details, password, and payment method.</p>

      {/* PROFILE */}
      <div className="card">
        <h2>Profile</h2>
        <label>
          Full Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button className="primary" onClick={handleSaveProfile}>
          Save Profile
        </button>
      </div>

      {/* PASSWORD */}
      <div className="card">
        <h2>Change Password</h2>
        <label>
          Current Password
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>

        <label>
          New Password
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>

        <button className="primary" onClick={handleChangePassword}>
          Change Password
        </button>
      </div>

      {/* PAYMENT */}
      <div className="card">
        <h2>Payment Method</h2>
        <p>Current: {paymentMethod}</p>
        <button className="primary" onClick={handleUpdatePayment}>
          Update Payment Method
        </button>
      </div>
    </main>
  );
}
