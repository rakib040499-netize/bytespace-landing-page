import Button from "../ui/Button.jsx";

export default function Hero() {
  return (
    <section id="home" className="grid-bg pb-20 pt-6 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Get Access to Hundreds of Courses Available</h1>
          <p className="mt-4 max-w-md text-white/80">Pick a course, learn at your own pace, and get help from a mentor when you get stuck.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-md gap-2 rounded-full bg-white p-1.5">
            <input type="search" placeholder="Search for a course" aria-label="Search courses" className="min-w-0 flex-1 rounded-full px-4 text-sm text-ink outline-none" />
            <Button variant="primary">Search</Button>
          </form>
        </div>
        <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full bg-lime" />
          <div className="absolute bottom-0 left-1/2 h-4/5 w-3/5 -translate-x-1/2 rounded-t-full bg-slate-200" aria-hidden />
          <div className="absolute -left-2 bottom-6 rounded-2xl bg-white px-4 py-3 text-ink shadow-lg">
            <p className="text-xs text-slate-500">Course completion</p>
            <p className="text-xl font-bold">95%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
