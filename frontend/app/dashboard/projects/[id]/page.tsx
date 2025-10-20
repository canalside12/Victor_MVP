"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabaseClient";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error loading project:", error);
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="p-6">Loading project...</p>;
  if (!project) return <p className="p-6">Project not found.</p>;

  return (
    <div className="p-6">
      <button
        className="mb-4 text-blue-600 underline"
        onClick={() => router.push("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="mb-4 text-gray-700">{project.description}</p>

      <div className="space-y-2">
        <p><strong>Status:</strong> {project.status || "Pending"}</p>
        <p><strong>Budget:</strong> {project.budget ? `$${project.budget}` : "N/A"}</p>
        <p><strong>Address:</strong> {project.address || "Not provided"}</p>
        <p><strong>Notes:</strong> {project.notes || "No notes yet"}</p>
      </div>
    </div>
  );
}
