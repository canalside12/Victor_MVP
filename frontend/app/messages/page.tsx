"use client";

import { MessageSquare } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-victor-red" />
        <h1 className="text-2xl font-heading">Messages</h1>
      </header>

      <div className="victor-card text-sm text-cool-gray">
        <p>
          This is your Messages hub. Future versions will display threaded
          conversations, notifications, and Markus AI responses here.
        </p>
      </div>
    </div>
  );
}
