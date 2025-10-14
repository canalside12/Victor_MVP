// Header.tsx
// Victor MVP — Themed Header (v1)
// Visual updates: uses text-graphite, bg-white, shadow-soft; call-to-action highlighted with victor-red

import React from "react";

export default function Header() {
  const userName = "Ms. Rivera"; // Placeholder until Supabase auth connects
  const greeting = "Good afternoon";

  return (
    <header className="w-full bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-soft">
      {/* Left Section — Greeting */}
      <div>
        <h1 className="text-xl font-semibold text-graphite">
          {greeting}, <span className="text-victor-red">{userName}</span>
        </h1>
        <p className="text-sm text-cool-gray">Here’s an overview of your current activity.</p>
      </div>

      {/* Center — Search Bar */}
      <div className="hidden md:flex flex-1 mx-8 max-w-md">
        <input
          type="text"
          placeholder="Search projects, properties, or tasks..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lavender"
        />
      </div>

      {/* Right — Icons */}
      <div className="flex items-center gap-4">
        <button
          title="Notifications"
          className="text-cool-gray hover:text-victor-red transition-colors"
        >
          🔔
        </button>
        <button
          title="Chat with Markus"
          className="text-cool-gray hover:text-victor-red transition-colors"
        >
          🤖
        </button>
        <button
          title="Profile Settings"
          className="w-8 h-8 rounded-full bg-lavender text-victor-red font-bold flex items-center justify-center hover:bg-lavender/90 transition-colors"
        >
          M
        </button>
      </div>
    </header>
  );
}
