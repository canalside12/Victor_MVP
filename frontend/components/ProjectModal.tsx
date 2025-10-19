"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProjectModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Save button clicked", { name, description });

    try {
      const { data, error } = await supabase
        .from("projects")
        .insert([{ name, description }]);

      if (error) {
        console.error("Supabase insert error:", error.message);
        alert("Error saving project: " + error.message);
      } else {
        console.log("Project saved:", data);
        alert("✅ Project saved successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-medium w-full max-w-md p-6 space-y-4">
        <h2 className="text-lg heading text-graphite">Create New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-victor-red"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-victor-red"
            required
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="victor-button-secondary"
              disabled={loading}
            >
              Cancel
            </button>
            <button type="submit" className="victor-button-primary" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
