// /app/dashboard/page.tsx
// Victor MVP — Main Dashboard Page

import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import QuickActions from "@/components/QuickActions";
import KPIWidget from "@/components/KPIWidget";
import MarkusPanel from "@/components/MarkusPanel";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Quick Access Toolbar */}
      <QuickActions />

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <KPIWidget
          label="Active Projects"
          value={3}
          trend="up"
          subtext="2 ahead of schedule"
        />
        <KPIWidget
          label="Budget Used"
          value="38%"
          trend="down"
          subtext="Under projected spend"
        />
        <KPIWidget
          label="ROI Forecast"
          value="8.3%"
          trend="up"
          subtext="Harbor property leading"
        />
      </div>

      {/* Markus AI Panel */}
      <div className="flex justify-center mt-8">
        <MarkusPanel />
      </div>
    </DashboardLayout>
  );
}
