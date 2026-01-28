"use client";

import Link from "next/link";
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
        <Link href="/" className="nav-link">
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
        </Link>

        {/* Desktop Nav */}
        <nav className="nav">
          <div className="nav-principal">
            {/* ENTREPRISE */}
            <div className="nav-item">
              <a className="nav-link">Company</a>

              <div className="dropdown">
                <div className="dropdown-column">
                  <span className="dropdown-title">Security Solutions</span>
                  <Link href="/solutions/business/email&phishing">
                    Email & Phishing Protection
                  </Link>
                  <Link href="/solutions/business/link&domain">
                    Link & Domain Analysis
                  </Link>
                  <Link href="/solutions/business/fraud">Fraud Detection</Link>
                  <Link href="/solutions/business/audits">System Audits</Link>
                </div>

                <div className="dropdown-column">
                  <span className="dropdown-title">For Businesses</span>
                  <Link href="/solutions/business/usescases">Use Cases</Link>
                  <Link href="/solutions/business/compliance">
                    Compliance & Trust
                  </Link>
                  <Link href="/solutions/business/casesstudies">
                    Case Studies
                  </Link>
                </div>

                <div className="dropdown-cta">
                  <Link href="/solutions/business" className="nav-button">
                    Our Solutions
                  </Link>
                </div>
              </div>
            </div>

            {/* PARTICULIER */}
            <div className="nav-item">
              <a className="nav-link">Individual</a>

              <div className="dropdown dropdown-personal">
                <div className="dropdown-column">
                  <span className="dropdown-title">Protect Yourself</span>
                  <Link href="/solutions/personal/linkcheck">Check a Link</Link>
                  <Link href="/solutions/personal/emailcheck">
                    Scan an Email
                  </Link>
                  <Link href="/solutions/personal/phonenumber">
                    Verify a Phone Number
                  </Link>
                  <Link href="/solutions/personal/devicessec">
                    Quick System Scan
                  </Link>
                </div>

                <div className="dropdown-highlight">
                  <p>
                    Stay safe online in seconds. No technical knowledge
                    required.
                  </p>
                  <Link href="/solutions/personal" className="nav-button">
                    Our Solutions
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </div>
          <Link href="/signin" className="nav-link">
            Sign in
          </Link>
          <Link href="/signup" className="button-secondary">
            Sign up
          </Link>
          <Link href="/downloads" className="nav-button">
            Downloads
          </Link>
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
              <Link href="/solutions/business/email&phishing">
                Email & Phishing Protection
              </Link>
              <Link href="/solutions/business/link&domain">
                Link & Domain Analysis
              </Link>
              <Link href="/solutions/business/fraud">Fraud Detection</Link>
              <Link href="/solutions/business/audits">System Audits</Link>
              <Link href="/solutions/business/usescases">Use Cases</Link>
              <Link href="/solutions/business/compliance">
                Compliance & Trust
              </Link>
              <Link href="/solutions/business/casesstudies">Case Studies</Link>
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
              <Link href="/solutions/personal/linkcheck">Check a Link</Link>
              <Link href="/solutions/personal/emailcheck">Scan an Email</Link>
              <Link href="/solutions/personal/phonenumber">
                Verify a Phone Number
              </Link>
              <Link href="/solutions/personal/devicessec">
                Quick System Scan
              </Link>
            </div>
          )}

          {/* Buttons */}
          <div className="mobile-btn">
            <Link href="/signin" className="button-secondary">
              Sign in
            </Link>
            <Link href="/signup" className="button-secondary">
              Sign up
            </Link>
          </div>
          <Link href="/downloads" className="nav-button">
            Downloads
          </Link>
        </div>
      )}
    </header>
  );
}
