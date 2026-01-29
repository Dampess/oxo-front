// app/(app)/layout.tsx
import "./styles/auth-layout.scss";
import DashboardSidebar from "../components/DashboardSidebar";
import AppHeaderr from "../components/AppHeader";
import Footer from "../components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <DashboardSidebar />

      <div className="app-content">
        <AppHeaderr />
        <main className="app-main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
