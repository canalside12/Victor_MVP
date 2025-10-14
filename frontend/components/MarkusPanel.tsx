// MarkusPanel.tsx
// Victor MVP — Markus Panel (themed v1)
// Visual tweaks: lavender tint for Markus area and themed bubbles

"use client";
import React, { useState } from "react";

export default function MarkusPanel() {
  const [messages, setMessages] = useState([
    {
      sender: "markus",
      text: "Good afternoon. How may I assist you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    // For now, just append the message locally
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-md h-[500px] overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="bg-lavender/30 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h2 className="text-victor-red font-semibold">Markus AI Assistant</h2>
        <span className="text-sm text-cool-gray">🤖 Online</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "markus" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.sender === "markus" ? "bg-white text-graphite border border-lavender/40" : "bg-victor-red text-white"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={handleSend}
        className="border-t border-gray-200 flex items-center p-3 bg-gray-50"
      >
        <input
          type="text"
          placeholder="Ask Markus anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lavender"
        />
        <button
          type="submit"
          className="ml-3 bg-victor-red text-white px-4 py-2 rounded-md text-sm hover:bg-[#C8103E] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
