/**
 * Victor MVP — Sidebar Component (v1.0)
 * --------------------------------------
 * Description:
 *   The Sidebar provides navigation across all primary Victor modules.
 *   Includes expand/collapse behavior and Lucide-react icons.
 *
 * Future Notes:
 *   - Add "Investor", "Property Manager", and "Tenant" modules as MVP expands.
 *   - Connect route paths to dynamic dashboard pages.
 *   - Integrate user context to highlight active links.
 *
 * Author: Joseph Thon + ChatGPT (GPT-5)
 * Date: 2025-10-12
 */

"use client";
import { useState } from "react";
import { Home, Briefcase, DollarSign, Building2, MessageSquare, Menu } from "lucide-react";
import Link from "next/link";

// 🧭 Navigation items for MVP Phase 1
const navItems = [
  { name: "Dashboard", icon: <Home size={18} />, href: "/dashboard" },
  { name: "Projects", icon: <Briefcase size={18} />, href: "/projects" },
  { name: "Financials", icon: <DollarSign size={18} />, href: "/financials" },
  { name: "Property Hub", icon: <Building2 size={18} />, href: "/property-hub" },
  { name: "Markus AI", icon: <MessageSquare size={18} />, href: "/markus" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`${
        open ? "w-64" : "w-20"
      } h-screen bg-white shadow-medium flex flex-col transition-all duration-300`}
    >
      {/* 🏗️ Header Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-heading text-victor-red">
          {open ? "Victor" : "V"}
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-500 hover:text-victor-red transition"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* 📂 Navigation Items */}
      <nav className="flex flex-col p-4 space-y-3 text-gray-700">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-gray hover:text-victor-red transition"
          >
            {item.icon}
            {open && <span className="text-sm font-medium">{item.name}</span>}
          </Link>
        ))}

        {/* 🔜 Placeholder for Phase 2 Modules */}
        {/*
        <Link href="/investors" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-gray transition">
          <TrendingUp size={18} />
          {open && <span className="text-sm font-medium">Investors</span>}
        </Link>
        */}
      </nav>

      {/* ⚙️ Footer Section */}
      <div className="mt-auto p-4 text-xs text-cool-gray border-t border-gray-200">
        {open ? "© 2025 Victor Platform" : "© 25"}
      </div>
    </aside>
  );
}
