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

  const handleSend = () => {
    if (!input.trim()) return;
    // Append user message
    setMessages([...messages, { sender: "user", text: input }]);
    // Simulate Markus response (TODO: Replace with xAI API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "markus", text: "Thanks for your message! How can I help with your renovation project?" },
      ]);
    }, 500);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="markus-panel bg-white border border-cool-gray/20 rounded-xl shadow-soft w-full max-w-md h-[500px] overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="bg-lavender-mist/30 border-b border-cool-gray/20 px-4 py-3 flex items-center justify-between">
        <h2 className="text-victor-red font-heading text-lg">Markus AI Assistant</h2>
        <span className="text-sm text-cool-gray">🤖 Online</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-gray/10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "markus" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                msg.sender === "markus"
                  ? "bg-white text-graphite border border-lavender-mist/40"
                  : "bg-victor-red text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="border-t border-cool-gray/20 flex items-center p-3 bg-gray-50">
        <input
          type="text"
          placeholder="Ask Markus anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-md border border-cool-gray/50 px-3 py-2 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-lavender-mist"
          aria-label="Message Markus AI"
        />
        <button
          onClick={handleSend}
          className="ml-3 victor-button-primary text-sm"
          aria-label="Send message to Markus AI"
        >
          Send
        </button>
      </div>
    </div>
  );
}
