import { useState } from "react";
import { categories, courses } from "../../data.js";
import CourseCard from "../CourseCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Courses() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading title="Discover Your Passion, Build Your Skills" subtitle="Filter by topic and find something you want to learn this week." />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${active === c ? "border-lime bg-lime" : "border-slate-200 hover:border-brand"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
      {list.length === 0 && <p className="mt-10 text-center text-sm text-slate-500">No courses in this category yet.</p>}
    </section>
  );
}
