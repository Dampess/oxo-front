// ===== Types =====
export type SidebarItem = {
  label: string;
  href: string;
  icon: string;
};

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

export type UserRole = "personal" | "company" | "admin";

export const sidebarConfig: Record<UserRole, SidebarSection[]> = {
  personal: [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: "📊" },
        { label: "Alerts", href: "/alerts", icon: "🚨" },
      ],
    },
    {
      title: "Security Tools",
      items: [
        { label: "Check Email", href: "/check-email", icon: "📧" },
        { label: "Check Link", href: "/check-link", icon: "🔗" },
        { label: "Fraud Detection", href: "/fraud-detection", icon: "📱" },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "Plan", href: "/plan", icon: "💳" },
        { label: "Settings", href: "/settings", icon: "⚙️" },
      ],
    },
  ],

  company: [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: "📊" },
        { label: "Alerts", href: "/alerts-center", icon: "🚨" },
      ],
    },
    {
      title: "Security",
      items: [
        { label: "Analytics", href: "/analytics", icon: "🔍" },
        { label: "Compliance", href: "/compliance", icon: "✅" },
        { label: "Audit Logs", href: "/audit-logs", icon: "📱" },
        { label: "Intégrations", href: "/integration", icon: "🔗" },
        { label: "Tools", href: "/tools", icon: "🛠️" },
      ],
    },
    {
      title: "Management",
      items: [
        { label: "Team", href: "/team", icon: "👥" },
        { label: "Plan", href: "/plan-company", icon: "💳" },
        { label: "Settings", href: "/settings-center", icon: "⚙️" },
      ],
    },
  ],

  admin: [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: "📊" },
        { label: "Incidents", href: "/incidents", icon: "🚨" },
        { label: "Alerts", href: "/admin-alerts", icon: "⚠️" },
      ],
    },
    {
      title: "Management",
      items: [
        { label: "Companies", href: "/companies", icon: "🏢" },
        { label: "Users", href: "/users", icon: "👥" },
      ],
    },
    {
      title: "System",
      items: [
        { label: "Audit Logs", href: "/admin-logs", icon: "📜" },
        { label: "Settings", href: "/admin-settings", icon: "⚙️" },
      ],
    },
  ],
};
