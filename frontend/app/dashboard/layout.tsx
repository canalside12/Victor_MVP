"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}