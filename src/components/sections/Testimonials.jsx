import { testimonials } from "../../data.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading title="Discover What Our Community Is Saying" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-slate-200 p-6">
            <blockquote className="text-sm text-slate-600">{t.text}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime font-bold">{t.name[0]}</span>
              <span className="text-sm"><strong className="block">{t.name}</strong><span className="text-slate-500">{t.role}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
