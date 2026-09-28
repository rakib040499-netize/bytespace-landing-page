export default function Partners() {
  return (
    <section className="border-b border-slate-100 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-6 px-4">
        {["Acme", "Globex", "Initech", "Umbrella"].map((n) => (
          <span key={n} className="text-lg font-semibold text-slate-400">{n}</span>
        ))}
      </div>
    </section>
  );
}
