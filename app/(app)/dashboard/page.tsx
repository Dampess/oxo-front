"use client";

import PersonalDashboard from "../(individual)/dashboard/IndividualDashboard";
import CompanyDashboard from "../(company)/dashboard/CompanyDashboard";

function getUserType(): "personal" | "company" {
  // mock pour l’instant
  return "company";
}

export default function DashboardPage() {
  const userType = getUserType();

  if (userType === "company") {
    return <CompanyDashboard />;
  }

  return <PersonalDashboard />;
}
