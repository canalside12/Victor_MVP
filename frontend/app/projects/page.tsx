"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

interface Project {
  id: string;
  name: string;
  description: string | null;
  status?: string | null;
  address?: string | null;
  budget?: number | null;
  notes?: string | null;
  created_at?: string;
}

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching project:", error);
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="p-6">Loading project details...</p>;
  if (!project) return <p className="p-6">Project not found.</p>;

  return (
    <div className="p-6">
      <button
        className="mb-4 text-blue-600 underline"
        onClick={() => router.back()}
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="mb-4">{project.description || "No description"}</p>

      <div className="space-y-2">
        <p><strong>Status:</strong> {project.status || "Pending"}</p>
        <p><strong>Address:</strong> {project.address || "N/A"}</p>
        <p><strong>Budget:</strong> {project.budget ? `$${project.budget}` : "N/A"}</p>
        <p><strong>Notes:</strong> {project.notes || "None"}</p>
        <p className="text-gray-500 text-sm">
          Created at: {new Date(project.created_at || "").toLocaleString()}
        </p>
      </div>
    </div>
  );
}
