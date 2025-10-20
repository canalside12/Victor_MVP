"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

interface Project {
  id: string;
  name: string;
  description?: string | null;
  status?: string | null;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="p-6">Loading projects...</p>;

  if (projects.length === 0)
    return <p className="p-6">No projects found. Create one to get started!</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="p-4 border rounded-lg shadow hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">
              {project.description || "No description"}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Status: {project.status || "Pending"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
