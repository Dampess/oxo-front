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
      {
        label: "Alerts",
        href: "/alerts",
        icon: "🚨",
        badge: 2, // mock (plus tard dynamique)
      },
    ],
  },
  {
    title: "Protection",
    items: [
      {
        label: "Check Email",
        href: "/email-protection",
        icon: "📧",
      },
      {
        label: "Check Link",
        href: "/link-protection",
        icon: "🔗",
      },
      {
        label: "Fraud Detection",
        href: "/fraud-detection",
        icon: "📱",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Settings",
        href: "/settings",
        icon: "⚙️",
      },
      {
        label: "Plan",
        href: "/plan",
        icon: "📅",
      },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle mobile */}
      <button
        className={`sidebar-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ➤
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-logo">
          <Image
            src="/logo_oxo.png"
            alt="Oxo logo"
            width={56}
            height={56}
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
                    onClick={() => setOpen(false)}
                  >
                    <span className="icon">{item.icon}</span>
                    <span>{item.label}</span>

                    {item.badge && <span className="badge">{item.badge}</span>}
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
