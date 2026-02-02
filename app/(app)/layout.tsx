"use client";

import AppHeader from "../components/AppHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import Footer from "../components/Footer";
import "./styles/app-layout.scss";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <DashboardSidebar />
      <div className="app-content">
        <AppHeader />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
