"use client";

import Image from "next/image";
import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEnterpriseOpen, setMobileEnterpriseOpen] = useState(false);
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Brand */}
        <a href="/" className="nav-link">
          <div className="brand">
            <Image
              src="/logo_oxo.jpg"
              alt="Oxo logo"
              width={70}
              height={70}
              className="logo"
            />
            <div>
              <div className="brand-name">Oxo</div>
              <div className="brand-tagline">See. Smell. Protect.</div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="nav">
          <div className="nav-principal">
            {/* ENTREPRISE */}
            <div className="nav-item">
              <a className="nav-link">Company</a>

              <div className="dropdown">
                <div className="dropdown-column">
                  <span className="dropdown-title">Security Solutions</span>
                  <a href="/solutions/business/email&phishing">
                    Email & Phishing Protection
                  </a>
                  <a href="/solutions/business/link&domain">
                    Link & Domain Analysis
                  </a>
                  <a href="/solutions/business/fraud">Fraud Detection</a>
                  <a href="/solutions/business/audits">System Audits</a>
                </div>

                <div className="dropdown-column">
                  <span className="dropdown-title">For Businesses</span>
                  <a href="/solutions/business/usescases">Use Cases</a>
                  <a href="/solutions/business/compliance">
                    Compliance & Trust
                  </a>
                  <a href="/solutions/business/casesstudies">Case Studies</a>
                </div>

                <div className="dropdown-cta">
                  <a href="/solutions/business" className="nav-button">
                    Our Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* PARTICULIER */}
            <div className="nav-item">
              <a className="nav-link">Individual</a>

              <div className="dropdown dropdown-personal">
                <div className="dropdown-column">
                  <span className="dropdown-title">Protect Yourself</span>
                  <a href="/solutions/personal/linkcheck">Check a Link</a>
                  <a href="/solutions/personal/emailcheck">Scan an Email</a>
                  <a href="/solutions/personal/phonenumber">
                    Verify a Phone Number
                  </a>
                  <a href="/solutions/personal/devicessec">Quick System Scan</a>
                </div>

                <div className="dropdown-highlight">
                  <p>
                    Stay safe online in seconds. No technical knowledge
                    required.
                  </p>
                  <a href="/solutions/personal" className="nav-button">
                    Our Solutions
                  </a>
                </div>
              </div>
            </div>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/blog" className="nav-link">
              Blog
            </a>
          </div>
          <a href="/signin" className="nav-link">
            Sign in
          </a>
          <a href="/signup" className="button-secondary">
            Sign up
          </a>
          <a href="/downloads" className="nav-button">
            Downloads
          </a>
        </nav>

        {/* Burger */}
        <button className="burger" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {/* Entreprise Dropdown */}
          <a
            className="mobile-title"
            onClick={() => setMobileEnterpriseOpen(!mobileEnterpriseOpen)}
          >
            Company {mobileEnterpriseOpen ? "▲" : "▼"}
          </a>
          {mobileEnterpriseOpen && (
            <div className="mobile-dropdown">
              <a href="/solutions/business/email&phishing">
                Email & Phishing Protection
              </a>
              <a href="/solutions/business/link&domain">
                Link & Domain Analysis
              </a>
              <a href="/solutions/business/fraud">Fraud Detection</a>
              <a href="/solutions/business/audits">System Audits</a>
              <a href="/solutions/business/usescases">Use Cases</a>
              <a href="/solutions/business/compliance">Compliance & Trust</a>
              <a href="/solutions/business/casesstudies">Case Studies</a>
            </div>
          )}

          {/* Particulier Dropdown */}
          <a
            className="mobile-title"
            onClick={() => setMobilePersonalOpen(!mobilePersonalOpen)}
          >
            Individual {mobilePersonalOpen ? "▲" : "▼"}
          </a>
          {mobilePersonalOpen && (
            <div className="mobile-dropdown">
              <a href="/solutions/personal/linkcheck">Check a Link</a>
              <a href="/solutions/personal/emailcheck">Scan an Email</a>
              <a href="/solutions/personal/phonenumber">
                Verify a Phone Number
              </a>
              <a href="/solutions/personal/devicessec">Quick System Scan</a>
            </div>
          )}

          {/* Buttons */}
          <div className="mobile-btn">
            <a href="/signin" className="button-secondary">
              Sign in
            </a>
            <a href="/signup" className="button-secondary">
              Sign up
            </a>
          </div>
          <a href="/downloads" className="nav-button">
            Downloads
          </a>
        </div>
      )}
    </header>
  );
}
