import Button from "../ui/Button.jsx";

export default function Hero() {
  return (
    <section id="home" className="grid-bg relative isolate overflow-hidden pb-14 pt-6 text-white sm:pb-20">
      <span aria-hidden="true" className="hero-sparkle absolute left-[4%] top-28 h-20 w-20 bg-lime sm:h-28 sm:w-28" />
      <span aria-hidden="true" className="absolute right-[8%] top-24 h-5 w-5 rotate-12 bg-yellow-300 sm:h-8 sm:w-8" />
      <span aria-hidden="true" className="absolute bottom-12 left-[47%] h-10 w-10 rotate-45 rounded-sm bg-lime sm:h-14 sm:w-14" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 sm:pt-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-lime">ByteSpace learning platform</p>
          <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">Get Access to Hundreds of Courses Available</h1>
          <p className="mt-4 max-w-md text-white/80">Pick a course, learn at your own pace, and get help from a mentor when you get stuck.</p>
          <form action="/courses" method="get" className="mt-8 flex max-w-md gap-2 rounded-md bg-white p-1.5 shadow-lg">
            <input type="search" name="q" placeholder="Search for a course" aria-label="Search courses" className="min-w-0 flex-1 rounded px-4 text-sm text-ink outline-none" />
            <Button variant="primary">Search</Button>
          </form>
        </div>
        <div className="relative mx-auto flex h-[19rem] w-full max-w-md items-end justify-center sm:h-[26rem]">
          <div aria-hidden="true" className="absolute bottom-5 h-[72%] w-[76%] rotate-[-4deg] rounded-[46%_54%_8%_8%] bg-lime" />
          <img
            src="/assets/learner-headset.png"
            alt="Young man holding a laptop and wearing headphones"
            className="relative z-10 h-full max-w-full object-contain object-bottom drop-shadow-2xl"
          />
          <div aria-hidden="true" className="absolute right-0 top-8 z-20 rotate-6 rounded-md bg-white px-3 py-2 text-xs font-bold text-brand shadow-lg sm:right-2 sm:top-12 sm:px-4 sm:py-3 sm:text-sm">
            Learn at your pace
          </div>
        </div>
      </div>
    </section>
  );
}
