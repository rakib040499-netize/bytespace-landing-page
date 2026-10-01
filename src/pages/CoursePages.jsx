import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { categories, courses } from "../data.js";
import CourseCard from "../components/CourseCard.jsx";
import Footer from "../components/Footer.jsx";
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
    <header className="grid-bg text-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-5 px-4">
        <Logo />
        <div className="hidden items-center gap-7 text-xs font-medium text-white/90 sm:flex">
          <Link to="/" className="hover:text-lime">Home</Link>
          <Link to="/courses" className="hover:text-lime">Course</Link>
          <Link to="/signup" className="hover:text-lime">Creator</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-xs font-medium text-white hover:text-lime">Log In</Link>
          <Link to="/signup" className="rounded-full bg-lime px-4 py-2 text-xs font-semibold text-ink hover:brightness-95">Join Us</Link>
        </div>
      </nav>
    </header>
  );
}

function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <PageHeader />
      {children}
      <Footer />
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
  const searchCourses = !term && activeCategory === "All" ? [...courses, ...courses, ...courses] : courses;
  const filteredCourses = searchCourses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesTerm = !term || `${course.title} ${course.author} ${course.category}`.toLowerCase().includes(term);
    return matchesCategory && matchesTerm;
  });

  return (
    <PageShell>
      <section className="grid-bg pb-7 pt-4 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-lg font-semibold sm:text-xl">Find Your Next Course</h1>
          <form onSubmit={(event) => { event.preventDefault(); setSearchParams(query ? { q: query } : {}); }} className="mx-auto mt-4 flex max-w-md gap-1 rounded-full bg-white p-1">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for your next skill" aria-label="Search courses" className="min-w-0 flex-1 rounded-full px-4 text-[10px] text-ink outline-none" />
            <button className="rounded-full bg-lime px-4 py-2 text-[10px] font-semibold text-ink">Search</button>
          </form>
        </div>
      </section>
      <main className="mx-auto max-w-6xl px-4 py-5 sm:py-7">
        <div className="flex items-center justify-between gap-3 text-[10px] text-slate-500">
          <div className="flex items-center gap-2"><span>Filter:</span><button className="rounded-full border border-slate-200 px-2.5 py-1">All</button><button className="rounded-full border border-slate-200 px-2.5 py-1">Level</button><button className="rounded-full border border-slate-200 px-2.5 py-1">Category</button></div>
          <label className="flex items-center gap-2">Sort by <select aria-label="Sort courses" className="rounded-full border border-slate-200 bg-white px-2.5 py-1"><option>Most relevant</option><option>Highest rated</option></select></label>
        </div>
        <div className="mt-4 flex gap-1.5 overflow-x-auto pb-2" aria-label="Course categories">
          {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] ${activeCategory === category ? "bg-lime font-semibold text-ink" : "bg-slate-100 text-slate-600"}`}>{category}</button>)}
        </div>
        <div className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2 text-[10px]">
          <h2 className="font-semibold">{term ? `Results for “${searchParams.get("q") }”` : "All Courses"}</h2>
          <span className="text-slate-500">{filteredCourses.length} courses</span>
        </div>
        {filteredCourses.length ? <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{filteredCourses.map((course, index) => <CourseCard key={`${course.id}-${index}`} course={course} />)}</div> : <p className="py-16 text-center text-sm text-slate-500">No courses found. Try another search.</p>}
        <nav aria-label="Course pages" className="mt-8 flex justify-center gap-2 text-xs">
          {["‹", "1", "2", "3", "4", "5", "›"].map((page, index) => <button key={`${page}-${index}`} className={`grid size-7 place-items-center rounded-full ${page === "1" ? "bg-lime font-semibold" : "border border-slate-200 text-slate-600"}`}>{page}</button>)}
        </nav>
      </main>
    </PageShell>
  );
}

export function CourseDetail() {
  const { id } = useParams();
  const course = getCourse(id);
  return (
    <PageShell>
      <section className="grid-bg pb-7 pt-4 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[10px] text-white/65"><Link to="/">Home</Link><span className="mx-2">/</span><Link to="/courses">Courses</Link><span className="mx-2">/</span>{course.homeCategory ?? course.category}</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <span className="rounded-full bg-lime px-2.5 py-1 text-[9px] font-semibold text-ink">{course.homeCategory ?? course.category}</span>
              <h1 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">{course.title}</h1>
              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/80">Build practical skills with a step-by-step course designed to take you from the fundamentals to a finished project.</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-white/90">
                <span className="font-semibold text-lime">★ {course.rating} <span className="font-normal text-white/75">Course Rating</span></span>
                <Link to={`/courses/${course.id}/reviews`} className="underline underline-offset-2">128 Reviews</Link>
                <span>2,480 Learners</span>
              </div>
              <Link to={`/creators/${encodeURIComponent(course.author)}`} className="mt-4 inline-flex items-center gap-2 text-xs">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80" alt="" className="size-8 rounded-full object-cover" />
                <span><span className="block text-[9px] text-white/65">Created by</span><span className="font-semibold">{course.author}</span></span>
              </Link>
            </div>
            <aside className="rounded-xl bg-white p-4 text-ink shadow-xl">
              <div className="flex items-end gap-2"><p className="text-2xl font-bold text-brand">${course.price}</p><p className="pb-1 text-[10px] text-slate-400 line-through">$49.00</p><span className="pb-1 text-[9px] font-semibold text-lime-700">50% off</span></div>
              <p className="mt-1 text-[9px] text-slate-500">One-time payment · lifetime access</p>
              <Link to={`/courses/${course.id}/learn`} className="mt-3 block rounded-full bg-lime px-4 py-2.5 text-center text-xs font-bold text-ink">Enroll Now</Link>
              <Link to={`/courses/${course.id}/learn`} className="mt-2 block rounded-full border border-brand px-4 py-2 text-center text-[10px] font-semibold text-brand">Preview This Course</Link>
              <p className="mt-3 text-center text-[9px] text-slate-500">30-Day Money-Back Guarantee</p>
            </aside>
          </div>
        </div>
      </section>
      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:py-8 lg:grid-cols-[1fr_300px]">
        <section>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900">
            <img src={course.image} alt={`Preview for ${course.title}`} className="h-full w-full object-cover opacity-80" />
            <Link to={`/courses/${course.id}/learn`} aria-label="Play course preview" className="absolute inset-0 grid place-items-center text-white"><span className="grid size-14 place-items-center rounded-full bg-lime text-xl text-ink shadow-lg">▶</span></Link>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[9px] text-white">Course Preview</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-[9px] text-slate-600"><span className="rounded-full bg-slate-100 px-2.5 py-1">17 Lessons</span><span className="rounded-full bg-slate-100 px-2.5 py-1">2 hours 16 mins</span><span className="rounded-full bg-slate-100 px-2.5 py-1">Beginner</span></div>
          <h2 className="mt-6 text-lg font-bold">Description</h2>
          <p className="mt-2 text-xs leading-5 text-slate-600">Learn the practical skills behind {course.title.toLowerCase()} with clear lessons, hands-on examples, and guidance from {course.author}. Build confidence as you work through each step and create something you can share.</p>
          <h2 className="mt-6 text-lg font-bold">What You’ll Learn</h2>
          <div className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-2">{["Build a strong foundation", "Create work you can share", "Use practical, repeatable methods", "Plan your next steps with confidence"].map((item) => <p key={item} className="flex gap-2"><span className="font-bold text-brand">✓</span>{item}</p>)}</div>
          <h2 className="mt-7 text-lg font-bold">Course Content</h2>
          <p className="mt-1 text-[10px] text-slate-500">17 lessons · 2 hours 16 mins total</p>
          <ol className="mt-3 divide-y divide-slate-100 border-y border-slate-200">{lessons.map((lesson, index) => <li key={lesson} className="flex items-center justify-between py-3 text-xs"><span>{index + 1}. {lesson}</span><span className="text-slate-400">{index === 0 ? "12 min" : "28 min"}</span></li>)}</ol>
        </section>
        <aside className="h-fit rounded-xl border border-slate-200 p-4">
          <h2 className="text-sm font-bold">This Course Includes</h2>
          <ul className="mt-3 space-y-3 text-[10px] text-slate-600"><li>✓ 17 on-demand lessons</li><li>✓ Downloadable resources</li><li>✓ Certificate of completion</li><li>✓ Access on mobile and desktop</li><li>✓ Lifetime access</li></ul>
          <Link to={`/courses/${course.id}/reviews`} className="mt-4 block border-t border-slate-100 pt-3 text-[10px] font-semibold text-brand">Read learner reviews →</Link>
        </aside>
      </main>
    </PageShell>
  );
}

export function CourseLessons() {
  const { id } = useParams();
  const course = getCourse(id);
  const [activeLesson, setActiveLesson] = useState(0);
  return (
    <PageShell>
      <section className="grid-bg py-5 text-white">
        <div className="mx-auto max-w-6xl px-4"><p className="text-[9px] text-white/60">COURSE LIBRARY / {course.homeCategory ?? course.category}</p><h1 className="mt-2 text-xl font-bold sm:text-2xl">{course.title}</h1><p className="mt-1 text-[10px] text-white/75">Continue learning with {course.author}</p></div>
      </section>
      <main className="mx-auto grid max-w-6xl gap-5 px-4 py-6 lg:grid-cols-[1fr_310px]">
        <section>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-950">
            <img src={course.image} alt="" className="h-full w-full object-cover opacity-70" />
            <button onClick={() => setActiveLesson((activeLesson + 1) % lessons.length)} aria-label="Play next lesson" className="absolute inset-0 grid place-items-center text-white"><span className="grid size-14 place-items-center rounded-full bg-lime text-xl text-ink shadow-xl">▶</span></button>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[9px] text-white">Lesson {activeLesson + 1} of {lessons.length}</span>
          </div>
          <h2 className="mt-5 text-base font-bold">{lessons[activeLesson]}</h2>
          <div className="mt-4 flex gap-5 border-b border-slate-200 text-[10px]"><button className="border-b-2 border-brand pb-2 font-semibold text-brand">Overview</button><button className="pb-2 text-slate-500">Resources</button><button className="pb-2 text-slate-500">Notes</button></div>
          <h3 className="mt-4 text-sm font-semibold">About this lesson</h3>
          <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-600">In this lesson, {course.author} walks through the core ideas and shows how to put them into practice. Follow along at your own pace and revisit any section whenever you need a refresher.</p>
          <div className="mt-5 flex flex-wrap justify-between gap-3"><Link to={`/courses/${course.id}`} className="rounded-full border border-slate-300 px-4 py-2 text-[10px] font-semibold">Back to course</Link><div className="flex gap-2"><button onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))} className="rounded-full border border-slate-300 px-4 py-2 text-[10px] font-semibold">Previous</button><button onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))} className="rounded-full bg-lime px-4 py-2 text-[10px] font-semibold">Next lesson</button></div></div>
        </section>
        <aside className="h-fit overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-4"><h2 className="text-sm font-bold">Course Lessons</h2><p className="mt-1 text-[9px] text-slate-500">{activeLesson} of {lessons.length} completed</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-lime" style={{ width: `${(activeLesson / lessons.length) * 100}%` }} /></div></div>
          <ol className="divide-y divide-slate-100">
            {lessons.map((lesson, index) => <li key={lesson}><button onClick={() => setActiveLesson(index)} aria-current={activeLesson === index ? "step" : undefined} className={`flex w-full gap-3 p-3 text-left hover:bg-slate-50 ${activeLesson === index ? "bg-blue-50" : ""}`}><span className={`grid size-6 shrink-0 place-items-center rounded-full text-[9px] ${index < activeLesson ? "bg-lime text-ink" : "bg-slate-100 text-slate-500"}`}>{index < activeLesson ? "✓" : index + 1}</span><span><span className="block text-[10px] font-medium">{lesson}</span><span className="mt-1 block text-[9px] text-slate-400">{index === 0 ? "12 min" : "28 min"}</span></span></button></li>)}
          </ol>
        </aside>
      </main>
    </PageShell>
  );
}

export function CourseReviews() {
  const { id } = useParams();
  const course = getCourse(id);
  return (
    <PageShell>
      <section className="grid-bg py-5 text-white"><div className="mx-auto max-w-6xl px-4"><p className="text-[9px] text-white/65">COURSE LIBRARY / REVIEWS</p><h1 className="mt-2 text-xl font-bold">Course Reviews</h1><p className="mt-1 text-[10px] text-white/75">{course.title}</p></div></section>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Link to={`/courses/${course.id}`} className="text-[10px] font-semibold text-brand">← Back to course</Link>
        <div className="mt-4 grid gap-6 rounded-xl border border-slate-200 p-4 sm:grid-cols-[190px_1fr] sm:p-6">
          <div className="text-center sm:text-left"><p className="text-4xl font-bold">{course.rating}</p><p className="mt-1 text-lg text-lime-600">★★★★★</p><p className="mt-1 text-[9px] text-slate-500">Course Rating · 128 Reviews</p></div>
          <div className="space-y-2 self-center text-[10px]">{[5, 4, 3, 2, 1].map((score) => <div key={score} className="flex items-center gap-3"><span className="w-10 text-slate-500">{score} star</span><div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-full rounded-full bg-lime" style={{ width: `${score === 5 ? 76 : score === 4 ? 18 : 6}%` }} /></div><span className="w-8 text-right text-slate-500">{score === 5 ? "76%" : score === 4 ? "18%" : "2%"}</span></div>)}</div>
        </div>
        <div className="mt-5 flex items-center justify-between"><h2 className="text-sm font-bold">Learner Reviews</h2><button className="rounded-full bg-lime px-4 py-2 text-[9px] font-semibold">Write a Review</button></div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">{reviews.map((review) => <article key={review.name} className="rounded-xl border border-slate-200 p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-xs font-semibold">{review.name}</h3><p className="mt-1 text-[9px] text-slate-500">{review.date}</p></div><span className="text-xs text-lime-600" aria-label="5 out of 5 stars">★★★★★</span></div><p className="mt-3 text-[10px] leading-5 text-slate-600">{review.text}</p></article>)}</div>
      </main>
    </PageShell>
  );
}

export function CreatorProfile() {
  const { creator } = useParams();
  const [following, setFollowing] = useState(false);
  const name = decodeURIComponent(creator ?? "Creator");
  const creatorCourses = courses.filter((course) => course.author === name);
  return (
    <PageShell>
      <section className="grid-bg py-7 text-white sm:py-9"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80" alt="" className="size-16 rounded-full border-2 border-white/70 object-cover" /><div className="min-w-0 flex-1"><p className="text-[9px] font-semibold uppercase tracking-wide text-lime">Course Creator</p><h1 className="mt-1 text-xl font-bold">{name}</h1><p className="mt-1 text-[10px] text-white/75">Proficient UI/UX Web Designer sharing practical skills with learners worldwide.</p><p className="mt-3 text-[9px] text-white/80">3 Products <span className="px-2">·</span> 12 Followers <span className="px-2">·</span> 4.8 Rating</p></div><button onClick={() => setFollowing((value) => !value)} className="rounded-full bg-lime px-5 py-2 text-[10px] font-semibold text-ink">{following ? "Following" : "Follow"}</button></div></section>
      <main className="mx-auto max-w-6xl px-4 py-6"><div className="flex items-center justify-between"><h2 className="text-sm font-bold">Courses by {name}</h2><Link to="/courses" className="text-[10px] font-medium text-brand">Most relevant</Link></div><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{(creatorCourses.length ? creatorCourses : courses.slice(0, 3)).map((course) => <CourseTile key={course.id} course={course} />)}</div></main>
    </PageShell>
  );
}

export function NotFound() {
  return (
    <PageShell>
      <main className="grid-bg flex min-h-[58vh] flex-col items-center justify-center px-4 py-16 text-center text-white">
        <p className="text-8xl font-extrabold leading-none text-lime sm:text-9xl">404</p>
        <h1 className="mt-3 max-w-xl text-2xl font-bold sm:text-3xl">The page you are looking for doesn’t exist</h1>
        <p className="mt-3 max-w-md text-[10px] text-white/70">This may be because the page has moved or the link is no longer available.</p>
        <Link to="/" className="mt-6 rounded-full bg-lime px-5 py-2.5 text-[10px] font-bold text-ink">Back to Home</Link>
      </main>
    </PageShell>
  );
}