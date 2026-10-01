import { paths } from "../../data.js";
import { Briefcase, Brush, Camera, Code2, Laptop, Megaphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const pathIcons = [Brush, Code2, Laptop, Briefcase, Megaphone, Camera];

export default function Paths() {
  return (
    <section id="paths" className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Explore Diverse Learning Paths at Bytespace" subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories." />
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map((path, index) => {
            const Icon = pathIcons[index];
            return (
            <div key={path} className="flex h-[84px] flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-center">
              <span className="grid size-8 place-items-center rounded-full bg-lime text-ink"><Icon size={16} strokeWidth={2.2} /></span>
              <span className="text-[11px] font-medium">{path}</span>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
