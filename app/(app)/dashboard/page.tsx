"use client";

import PersonalDashboard from "../(individual)/dashboard/IndividualDashboard";
import CompanyDashboard from "../(company)/dashboard/CompanyDashboard";
import AdminDashboard from "../(admin)/dashboard/adminDashboard";

function getUserType(): "personal" | "company" | "admin" {
  // mock pour l’instant
  return "company";
}

export default function DashboardPage() {
  const userType = getUserType();

  if (userType === "company") {
    return <CompanyDashboard />;
  }

  if (userType === "admin") {
    return <AdminDashboard />;
  }

  return <PersonalDashboard />;
}
