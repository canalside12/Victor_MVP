// KPIWidget.tsx
// Victor MVP — KPI Widget (themed v1)
// Uses theme tokens for trend coloring and card styling

import React from "react";

interface KPIWidgetProps {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  subtext?: string;
}

export default function KPIWidget({
  label,
  value,
  trend = "neutral",
  subtext,
}: KPIWidgetProps) {
  const trendColor =
    trend === "up"
      ? "text-success-green"
      : trend === "down"
      ? "text-error-red"
      : "text-cool-gray";
  const trendSymbol = trend === "up" ? "↑" : trend === "down" ? "↓" : "•";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <p className="text-sm text-cool-gray">{label}</p>
      <div className="flex items-baseline justify-between mt-2">
        <h3 className="text-2xl font-semibold text-graphite">{value}</h3>
        <span className={`text-sm font-medium ${trendColor}`}>
          {trendSymbol}
        </span>
      </div>
      {subtext && <p className="text-xs text-cool-gray mt-1">{subtext}</p>}
    </div>
  );
}
