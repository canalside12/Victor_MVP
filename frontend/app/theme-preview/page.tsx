export default function ThemePreview() {
  const colors = [
    { name: "Victor Red", value: "#E11D48" },
    { name: "Lavender Mist", value: "#D6BCFA" },
    { name: "Slate Gray", value: "#F3F4F6" },
    { name: "Graphite Text", value: "#1F2937" },
    { name: "Cool Gray", value: "#6B7280" },
    { name: "Success Green", value: "#16A34A" },
    { name: "Error Red", value: "#F87171" },
  ];

  return (
    <main className="min-h-screen bg-slate-gray text-graphite p-8 space-y-10">
      <h1 className="text-4xl font-heading font-bold text-victor-red">
        Victor Theme Preview
      </h1>

      {/* Color Swatches */}
      <section>
        <h2 className="text-2xl font-heading mb-4">🎨 Color Palette</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {colors.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-soft"
              style={{ backgroundColor: c.value }}
            >
              <span
                className={`text-sm font-medium ${
                  c.name === "Slate Gray" || c.name === "Lavender Mist"
                    ? "text-graphite"
                    : "text-white"
                }`}
              >
                {c.name}
              </span>
              <span
                className={`text-xs ${
                  c.name === "Slate Gray" || c.name === "Lavender Mist"
                    ? "text-gray-700"
                    : "text-gray-200"
                }`}
              >
                {c.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-heading mb-4">🔤 Typography</h2>
        <div className="space-y-3">
          <p className="text-4xl font-heading text-victor-red">Poppins — Heading</p>
          <p className="text-lg font-sans text-graphite">Inter — Body text sample</p>
        </div>
      </section>

      {/* Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading mb-4">🧩 Component Samples</h2>

        <div className="victor-card">
          <h3 className="font-heading text-xl mb-2">Victor Card</h3>
          <p className="text-sm text-cool-gray">
            This is a sample card using the .victor-card class.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="victor-button-primary">Primary Button</button>
          <button className="victor-button-secondary">Secondary Button</button>
        </div>

        <div className="markus-panel mt-6">
          <p className="markus-message">
            “Greetings! Markus here — everything seems to be styled properly, sir.”
          </p>
        </div>
      </section>
    </main>
  );
}
