"use client";

import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex items-center gap-2 mb-4">
        <Settings className="w-5 h-5 text-victor-red" />
        <h1 className="text-2xl font-heading">Settings</h1>
      </header>

      <div className="victor-card text-sm text-cool-gray">
        <p>
          Settings and preferences will go here — such as user profile info,
          notifications, and project visibility options.
        </p>
      </div>
    </div>
  );
}
