"use client";

import "./DashboardSidebar.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { sidebarConfig, UserRole } from "../sidebar.config";

function getUserRole(): UserRole {
  // mock — plus tard via auth
  return "admin";
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const role = getUserRole();
  const sections = sidebarConfig[role];

  return (
    <>
      {/* MOBILE TOGGLE */}
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
            width={48}
            height={48}
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
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
