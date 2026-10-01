import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { categories, courses } from "../data.js";
import Logo from "../components/ui/Logo.jsx";

const lessons = [
  "Welcome to the course",
  "Finding your visual direction",
  "Building a strong foundation",
  "From first draft to final design",
  "Sharing your work with the world",
];

const reviews = [
  { name: "Nadia Karim", date: "2 weeks ago", text: "Clear, practical lessons. I was able to apply the process to a project I was already working on." },
  { name: "Rifat Mahmud", date: "1 month ago", text: "A thoughtful course with just the right amount of detail. The examples made each step easy to follow." },
  { name: "Maliha Noor", date: "1 month ago", text: "The instructor explains the why behind each decision, not just the steps. Really useful." },
];

function getCourse(id) {
  return courses.find((item) => String(item.id) === id) ?? courses[0];
}

function PageHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4">
        <Logo dark />
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          <Link to="/courses" className="hover:text-brand">Explore courses</Link>
          <Link to="/" className="hover:text-brand">For creators</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-brand">Log in</Link>
          <Link to="/signup" className="rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">Get started</Link>
        </div>
      </nav>
    </header>
  );
}

function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <PageHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">{children}</main>
    </div>
  );
}

function CourseTile({ course }) {
  return (
    <Link to={`/courses/${course.id}`} className="group overflow-hidden rounded-md border border-slate-200 bg-white transition hover:border-brand/40 hover:shadow-md">
      <img src={course.image} alt="" className="aspect-[16/9] w-full object-cover" />
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{course.category}</p>
        <h2 className="mt-2 min-h-12 font-semibold leading-6 group-hover:text-brand">{course.title}</h2>
        <p className="mt-2 text-sm text-slate-500">{course.author}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
          <span className="font-semibold text-slate-700">★ {course.rating} <span className="font-normal text-slate-400">(128)</span></span>
          <span className="font-bold">${course.price}</span>
        </div>
      </div>
    </Link>
  );
}

export function CourseSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [activeCategory, setActiveCategory] = useState("All");
  const term = (searchParams.get("q") ?? "").trim().toLowerCase();
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesTerm = !term || `${course.title} ${course.author} ${course.category}`.toLowerCase().includes(term);
    return matchesCategory && matchesTerm;
  });

  return (
    <PageShell>
      <p className="text-sm font-medium text-brand">LEARN SOMETHING NEW</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Find your next course</h1>
      <p className="mt-3 max-w-xl text-slate-600">Practical lessons from people who do the work every day.</p>
      <form onSubmit={(event) => { event.preventDefault(); setSearchParams(query ? { q: query } : {}); }} className="mt-7 flex max-w-2xl gap-2 rounded-md border border-slate-300 p-1.5 focus-within:border-brand">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses, topics, or instructors" aria-label="Search courses" className="min-w-0 flex-1 px-3 py-2 text-sm outline-none" />
        <button className="rounded bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark">Search</button>
      </form>
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Course categories">
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full border px-4 py-2 text-sm ${activeCategory === category ? "border-lime bg-lime font-semibold text-ink" : "border-slate-200 text-slate-600 hover:border-brand"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-b border-slate-200 pb-4">
        <h2 className="font-semibold">{term ? `Results for “${searchParams.get("q") }”` : "Popular courses"}</h2>
        <span className="text-sm text-slate-500">{filteredCourses.length} courses</span>
      </div>
      {filteredCourses.length ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => <CourseTile key={course.id} course={course} />)}
        </div>
      ) : (
        <p className="py-16 text-center text-slate-500">No courses found. Try another search.</p>
      )}
    </PageShell>
  );
}

export function CourseDetail() {
  const { id } = useParams();
  const course = getCourse(id);
  return (
    <PageShell>
      <div className="mb-7 text-sm text-slate-500"><Link to="/courses" className="hover:text-brand">Courses</Link><span className="px-2">/</span>{course.category}</div>
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <section>
          <p className="text-sm font-semibold text-brand">{course.category}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">{course.title}</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Build practical skills with a step-by-step course designed to take you from the fundamentals to a finished project.</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="font-semibold text-slate-800">★ {course.rating} <span className="font-normal">course rating</span></span>
            <Link to={`/courses/${course.id}/reviews`} className="text-brand underline underline-offset-4">128 reviews</Link>
            <span>2,480 learners</span>
          </div>
          <Link to={`/creators/${encodeURIComponent(course.author)}`} className="mt-6 inline-flex items-center gap-3 text-sm hover:text-brand">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80" alt="" className="size-11 rounded-full object-cover" />
            <span><span className="block text-xs text-slate-500">Created by</span><span className="font-semibold">{course.author}</span></span>
          </Link>
          <img src={course.image} alt={`Preview for ${course.title}`} className="mt-8 aspect-video w-full rounded-md object-cover" />
          <h2 className="mt-9 text-xl font-bold">What you’ll learn</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {["Build a strong foundation", "Create work you can share", "Use practical, repeatable methods", "Plan your next steps with confidence"].map((item) => <p key={item} className="flex gap-2"><span className="font-bold text-brand">✓</span>{item}</p>)}
          </div>
          <h2 className="mt-9 text-xl font-bold">Course content</h2>
          <p className="mt-2 text-sm text-slate-500">5 lessons · 2h 40m total</p>
          <ol className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            {lessons.map((lesson, index) => <li key={lesson} className="flex items-center justify-between py-3 text-sm"><span>{index + 1}. {lesson}</span><span className="text-slate-400">{index === 0 ? "12 min" : "28 min"}</span></li>)}
          </ol>
        </section>
        <aside className="h-fit rounded-md border border-slate-200 p-5 lg:sticky lg:top-6">
          <p className="text-3xl font-bold">${course.price}</p>
          <p className="mt-1 text-sm text-slate-500">One-time payment · lifetime access</p>
          <Link to={`/courses/${course.id}/learn`} className="mt-5 block rounded bg-brand px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-dark">Start learning</Link>
          <p className="mt-5 text-sm font-semibold">This course includes</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600"><li>✓ 5 on-demand lessons</li><li>✓ Downloadable resources</li><li>✓ Certificate of completion</li><li>✓ Access on mobile and desktop</li></ul>
          <Link to={`/courses/${course.id}/reviews`} className="mt-5 block border-t border-slate-200 pt-4 text-sm font-semibold text-brand">Read learner reviews →</Link>
        </aside>
      </div>
    </PageShell>
  );
}

export function CourseLessons() {
  const { id } = useParams();
  const course = getCourse(id);
  const [activeLesson, setActiveLesson] = useState(0);
  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <PageHeader />
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-7 lg:grid-cols-[1fr_330px]">
        <section>
          <Link to={`/courses/${course.id}`} className="text-sm font-medium text-brand">← Back to course</Link>
          <h1 className="mt-3 text-2xl font-bold">{course.title}</h1>
          <div className="mt-5 flex aspect-video items-end rounded-md bg-cover bg-center p-5 sm:p-8" style={{ backgroundImage: `linear-gradient(0deg, rgba(10,20,55,.78), rgba(10,20,55,.05)), url(${course.image})` }}>
            <div className="flex w-full items-end justify-between gap-4 text-white">
              <div><p className="text-sm text-white/75">Lesson {activeLesson + 1} of {lessons.length}</p><h2 className="mt-1 text-xl font-bold sm:text-2xl">{lessons[activeLesson]}</h2></div>
              <button onClick={() => setActiveLesson((activeLesson + 1) % lessons.length)} aria-label="Play next lesson" className="grid size-12 shrink-0 place-items-center rounded-full bg-lime text-lg font-bold text-ink">▶</button>
            </div>
          </div>
          <h2 className="mt-7 text-xl font-bold">About this lesson</h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-600">In this lesson, {course.author} walks through the core ideas and shows how to put them into practice. Follow along at your own pace and revisit any section whenever you need a refresher.</p>
          <div className="mt-6 flex flex-wrap gap-3"><button onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))} className="rounded border border-slate-300 px-4 py-2.5 text-sm font-semibold hover:border-brand">Previous lesson</button><button onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))} className="rounded bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">Next lesson</button></div>
        </section>
        <aside className="h-fit rounded-md border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-5"><h2 className="font-bold">Course lessons</h2><p className="mt-1 text-sm text-slate-500">{activeLesson} of {lessons.length} completed</p><div className="mt-3 h-1.5 overflow-hidden rounded bg-slate-100"><div className="h-full bg-lime" style={{ width: `${(activeLesson / lessons.length) * 100}%` }} /></div></div>
          <ol className="divide-y divide-slate-100">
            {lessons.map((lesson, index) => <li key={lesson}><button onClick={() => setActiveLesson(index)} aria-current={activeLesson === index ? "step" : undefined} className={`flex w-full gap-3 p-4 text-left text-sm hover:bg-slate-50 ${activeLesson === index ? "bg-blue-50" : ""}`}><span className={`grid size-6 shrink-0 place-items-center rounded-full text-xs ${index < activeLesson ? "bg-lime text-ink" : "bg-slate-100 text-slate-500"}`}>{index < activeLesson ? "✓" : index + 1}</span><span><span className="block font-medium">{lesson}</span><span className="mt-1 block text-xs text-slate-400">{index === 0 ? "12 min" : "28 min"}</span></span></button></li>)}
          </ol>
        </aside>
      </main>
    </div>
  );
}

export function CourseReviews() {
  const { id } = useParams();
  const course = getCourse(id);
  return (
    <PageShell>
      <Link to={`/courses/${course.id}`} className="text-sm font-medium text-brand">← Back to course</Link>
      <h1 className="mt-5 text-3xl font-bold">Learner reviews</h1>
      <p className="mt-2 text-slate-600">What learners are saying about {course.title}</p>
      <div className="mt-7 grid gap-8 border-y border-slate-200 py-7 sm:grid-cols-[220px_1fr]">
        <div><p className="text-5xl font-bold">{course.rating}</p><p className="mt-2 text-lg text-lime-600">★★★★★</p><p className="mt-1 text-sm text-slate-500">Course rating · 128 reviews</p></div>
        <div className="space-y-2 text-sm">{[5, 4, 3, 2, 1].map((score) => <div key={score} className="flex items-center gap-3"><span className="w-10 text-slate-500">{score} star</span><div className="h-2 flex-1 rounded bg-slate-100"><div className="h-full rounded bg-lime" style={{ width: `${score === 5 ? 76 : score === 4 ? 18 : 6}%` }} /></div><span className="w-8 text-right text-slate-500">{score === 5 ? "76%" : score === 4 ? "18%" : "2%"}</span></div>)}</div>
      </div>
      <div className="max-w-3xl divide-y divide-slate-200">
        {reviews.map((review) => <article key={review.name} className="py-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold">{review.name}</h2><p className="mt-1 text-xs text-slate-500">{review.date}</p></div><span className="text-lime-600" aria-label="5 out of 5 stars">★★★★★</span></div><p className="mt-4 leading-7 text-slate-600">{review.text}</p></article>)}
      </div>
    </PageShell>
  );
}

export function CreatorProfile() {
  const { creator } = useParams();
  const name = decodeURIComponent(creator ?? "Creator");
  const creatorCourses = courses.filter((course) => course.author === name);
  return (
    <PageShell>
      <section className="flex flex-col gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80" alt="" className="size-24 rounded-full object-cover" />
        <div><p className="text-sm font-semibold text-brand">COURSE CREATOR</p><h1 className="mt-1 text-3xl font-bold">{name}</h1><p className="mt-2 max-w-2xl text-slate-600">Educator and practitioner sharing useful, field-tested skills with curious learners.</p><p className="mt-3 text-sm text-slate-500">{creatorCourses.length || 1} course · 2,480 learners · ★ 4.8 average rating</p></div>
      </section>
      <h2 className="mt-8 text-xl font-bold">Courses by {name}</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{(creatorCourses.length ? creatorCourses : courses.slice(0, 3)).map((course) => <CourseTile key={course.id} course={course} />)}</div>
    </PageShell>
  );
}

export function NotFound() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <PageHeader />
      <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-8xl font-extrabold leading-none text-brand sm:text-9xl">404</p>
        <h1 className="mt-5 text-2xl font-bold">This page isn’t here</h1>
        <p className="mt-3 max-w-md text-slate-600">The link may be out of date, or the page may have moved. Let’s get you back to learning.</p>
        <Link to="/courses" className="mt-7 rounded bg-lime px-5 py-3 text-sm font-bold hover:bg-lime/80">Explore courses</Link>
      </main>
    </div>
  );
}