export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-gray text-graphite font-sans p-6">
      <div className="w-full max-w-md victor-card text-center space-y-4">
        <h1 className="text-2xl font-heading text-graphite">Victor MVP</h1>
        <p className="text-cool-gray">
          Home renovation management simplified — powered by Markus AI.
        </p>
        <button className="victor-button-primary w-full">
          Get Started
        </button>
        <button className="victor-button-secondary w-full">
          Learn More
        </button>
      </div>
    </main>
  );
}
