"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ProjectModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    if (!supabase) return; // prevent errors if client not initialized

    const { data, error } = await supabase
      .from("projects")
      .insert([{ name, description }]);

    if (error) {
      console.error("Supabase insert error:", error);
    } else {
      console.log("Project saved:", data);
      setName("");
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
