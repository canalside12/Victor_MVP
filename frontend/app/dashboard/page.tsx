"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { useState, useEffect } from "react";
import { Menu, Home, FolderKanban, MessageSquare } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    console.log("Dashboard hydrated");
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-gray text-graphite">
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4 space-y-6 shadow-soft">
        <h1 className="text-xl heading text-victor-red tracking-tight">Victor</h1>
        <nav className="space-y-3">
          <Link href="/dashboard" className="flex items-center gap-2 text-graphite hover:text-victor-red">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/projects" className="flex items-center gap-2 text-graphite hover:text-victor-red">
            <FolderKanban className="w-5 h-5" /> Projects
          </Link>
          <Link href="/messages" className="flex items-center gap-2 text-graphite hover:text-victor-red">
            <MessageSquare className="w-5 h-5" /> Messages
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl heading">My Projects</h2>
            <button
              className="victor-button-primary"
              onClick={() => {
                console.log("New Project button clicked");
                setIsModalOpen(true);
              }}
            >
              + New Project
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div key={project} className="victor-card text-left">
                <h3 className="text-lg font-semibold text-graphite mb-2">Project {project}</h3>
                <p className="text-cool-gray text-sm mb-4">
                  Example description for renovation project #{project}.
                </p>
                <button
                  className="victor-button-secondary w-full"
                  onClick={() => console.log(`View Details for Project ${project} clicked`)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}