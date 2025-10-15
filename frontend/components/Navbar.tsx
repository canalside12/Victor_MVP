"use client";

import { Bell, User, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="hidden md:flex items-center justify-between w-full bg-white border-b border-gray-200 shadow-soft px-6 py-3">
      <h1 className="text-xl font-heading text-victor-red tracking-tight">Victor</h1>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-graphite" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-victor-red"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <User className="w-5 h-5 text-graphite" />
          <span className="text-sm font-medium text-graphite">Profile</span>
        </div>
        <Settings className="w-5 h-5 text-graphite cursor-pointer hover:text-victor-red" />
      </div>
    </header>
  );
}
