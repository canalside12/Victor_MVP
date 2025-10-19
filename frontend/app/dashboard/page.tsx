"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import ProjectModal from "../../components/ProjectModal";

interface Project {
  id: number;
  name: string;
  description: string;
}

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data as Project[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Project
      </button>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-2 border p-2 rounded">
              <h2 className="font-semibold">{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          fetchProjects();
        }}
      />
    </div>
  );
}