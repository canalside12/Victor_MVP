// QuickActions.tsx
// Victor MVP — Quick Actions (themed v1)
// Updated to use victor-red and lavender styles; preserved original structure

import React from "react";

export default function QuickActions() {
  const actions = [
    { label: "Add Project", icon: "➕" },
    { label: "View Reports", icon: "📊" },
    { label: "Invite Contractor", icon: "👷" },
    { label: "Contact Markus", icon: "🤖" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-wrap gap-3 justify-start hover:shadow-md transition-shadow">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-lavender text-victor-red text-sm font-medium rounded-lg hover:bg-lavender/90 transition-colors"
        >
          <span>{action.icon}</span>
          {action.label}
        </button>
      ))}
    </div>
  );
}
