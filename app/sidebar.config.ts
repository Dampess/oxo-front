export type UserRole = "personal" | "company" | "admin";

export const sidebarConfig: Record<UserRole, unknown[]> = {
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
        { label: "Email Security", href: "/email-protection", icon: "📧" },
        { label: "Link & Domain", href: "/link-protection", icon: "🔗" },
        { label: "Fraud Detection", href: "/fraud-detection", icon: "🚨" },
      ],
    },
    {
      title: "Management",
      items: [
        { label: "Team", href: "/team", icon: "👥" },
        { label: "Plan", href: "/plan", icon: "💳" },
        { label: "Settings", href: "/settings", icon: "⚙️" },
      ],
    },
  ],

  admin: [
    {
      title: "Admin",
      items: [
        { label: "Overview", href: "/admin", icon: "🛠️" },
        { label: "Users", href: "/admin/users", icon: "👥" },
        { label: "Companies", href: "/admin/companies", icon: "🏢" },
        { label: "Billing", href: "/admin/billing", icon: "💰" },
      ],
    },
  ],
};
