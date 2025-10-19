"use client";

import { FC, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  const handleSave = async () => {
    if (!projectName) return alert("Project name is required");

    setSaving(true);
    const { error } = await supabase
      .from("projects")
      .insert([{ name: projectName, description: projectDescription }]);

    if (error) {
      console.error("Error saving project:", error.message);
      alert("Failed to save project");
    } else {
      setProjectName("");
      setProjectDescription("");
      onClose();
    }
    setSaving(false);
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">New Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          className="w-full border p-2 mb-3 rounded"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="w-full border p-2 mb-3 rounded"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />

        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
