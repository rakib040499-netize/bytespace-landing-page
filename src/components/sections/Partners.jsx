import { CircleDot, Globe2, Sun, Waves, Zap } from "lucide-react";

const logoMarks = [Waves, Sun, Zap, CircleDot, Globe2];

export default function Partners() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-5 px-4">
        {logoMarks.map((Mark, index) => (
          <span key={index} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 sm:text-sm">
            <Mark size={20} strokeWidth={2.5} className="text-slate-400" />
            Logoipsum
          </span>
        ))}
      </div>
    </section>
  );
}
