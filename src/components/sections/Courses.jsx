import { useState } from "react";
import { Link } from "react-router-dom";
import { homeCategories, courses } from "../../data.js";
import CourseCard from "../CourseCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Courses() {
  const [active, setActive] = useState("Featured");
  const list = active === "Featured" ? courses : courses.filter((course) => course.homeCategory === active);

  return (
    <section id="courses" className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
      <SectionHeading title="Discover Your Passion, Build Your Skills" subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life." />
      <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-x-2 gap-y-2">
        {homeCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full px-3 py-1.5 text-[10px] font-medium transition ${active === category ? "bg-lime text-ink" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            {category}
          </button>
        ))}
        <Link to="/courses" className="px-2 py-1.5 text-[10px] font-semibold text-brand hover:underline">+ More</Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
      {list.length === 0 && <p className="mt-10 text-center text-sm text-slate-500">No featured courses in this topic yet.</p>}
    </section>
  );
}
