export default function Partners() {
  return (
    <section className="border-b border-slate-100 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-6 px-4">
        {["Acme", "Globex", "Initech", "Umbrella", "Pioneer", "Northstar"].map((n) => (
          <span key={n} className="text-lg font-semibold tracking-wide text-slate-400">{n}</span>
        ))}
      </div>
    </section>
  );
}
