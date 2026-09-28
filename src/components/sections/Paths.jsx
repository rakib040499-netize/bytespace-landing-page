import { paths } from "../../data.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Paths() {
  return (
    <section id="paths" className="bg-soft py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Explore Diverse Learning Paths at ByteSpace" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map((p) => (
            <div key={p} className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime font-bold">{p[0]}</span>
              <span className="text-xs font-medium">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
