export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className={`text-2xl font-bold sm:text-3xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-sm ${light ? "text-white/80" : "text-slate-500"}`}>{subtitle}</p>}
    </div>
  );
}
