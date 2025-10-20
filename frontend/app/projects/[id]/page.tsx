"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

interface Project {
  id: string;
  name: string;
  description?: string | null;
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

      if (error) console.error(error);
      else setProject(data);
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
        onClick={() => router.back()}
      >
        ← Back to Projects
      </button>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p>{project.description || "No description available."}</p>
    </div>
  );
}
