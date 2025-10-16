"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Messages() {
  return (
    <div className="flex min-h-screen bg-slate-gray text-graphite p-6">
      <h1 className="text-2xl heading">Messages Page</h1>
      <p className="text-sans">This is a placeholder for the Messages page.</p>
    </div>
  );
}
