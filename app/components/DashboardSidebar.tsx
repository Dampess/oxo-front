"use client";

import "./DashboardSidebar.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sections = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: "📊",
      },
    ],
  },
  {
    title: "Business Security",
    items: [
      {
        label: "Email & Phishing",
        href: "/app/email-protection",
        icon: "📧",
      },
      {
        label: "Link & Domain Analysis",
        href: "/app/link-analysis",
        icon: "🔗",
      },
      {
        label: "Fraud Detection",
        href: "/app/fraud-detection",
        icon: "🚨",
      },
      {
        label: "System Audits",
        href: "/app/audits",
        icon: "🧪",
      },
      {
        label: "Compliance & Trust",
        href: "/app/compliance",
        icon: "🛡️",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Team & Users",
        href: "/app/team",
        icon: "👥",
      },
      {
        label: "Settings",
        href: "/app/settings",
        icon: "⚙️",
      },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton toggle MOBILE */}
      <button
        className={`sidebar-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ➤
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-logo">
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

        <nav className="sidebar-nav">
          {sections.map((section) => (
            <div key={section.title} className="sidebar-section">
              <p className="sidebar-section-title">{section.title}</p>

              {section.items.map((item) => {
                const active = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`sidebar-link ${active ? "active" : ""}`}
                    onClick={() => setOpen(false)} // 👈 ferme sur mobile
                  >
                    <span className="icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay mobile */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
