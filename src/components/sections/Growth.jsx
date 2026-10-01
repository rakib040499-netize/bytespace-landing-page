import { courses, stats } from "../../data.js";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const perks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export default function Growth() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-lime-50 via-white to-indigo-100 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:space-y-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-3xl font-bold leading-tight">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-4 max-w-lg text-xs leading-5 text-slate-500 sm:text-sm">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="mt-7 flex gap-7 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xl font-semibold text-brand sm:text-2xl">{stat.value}</dt>
                  <dd className="mt-1 text-[10px] text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto h-[300px] w-full max-w-[470px] sm:h-[350px]">
            <article className="absolute left-0 top-6 w-[62%] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
              <img src={courses[0].image} alt="Design course preview" className="h-28 w-full object-cover" />
              <div className="p-2">
                <p className="truncate text-[10px] font-semibold">{courses[0].title}</p>
                <p className="mt-1 text-[8px] text-brand">by {courses[0].author}</p>
                <p className="mt-1 text-[9px] font-bold text-brand">${courses[0].price}<span className="ml-1 font-normal text-slate-400">/lifetime</span></p>
              </div>
            </article>
            <div aria-hidden="true" className="absolute right-3 top-8 z-20 flex -rotate-6 flex-col gap-2">
              {[0, 1, 2, 3].map((bar) => <span key={bar} className="h-2 w-11 rounded-full bg-lime shadow-sm sm:h-3 sm:w-14" />)}
            </div>
            <img src="/assets/learner-headset.png" alt="Learner holding a laptop" className="absolute bottom-0 right-[8%] z-10 h-[95%] max-w-[78%] object-contain object-bottom drop-shadow-xl" />
            <div className="absolute bottom-6 right-0 z-20 w-36 rounded-lg bg-white p-3 shadow-lg sm:w-40">
              <p className="text-[9px] text-slate-500">Learning Progress</p>
              <p className="mt-1 text-2xl font-bold text-ink">55%</p>
              <div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative mx-auto h-[300px] w-full max-w-[470px] overflow-hidden rounded-lg sm:h-[350px]">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85" alt="ByteSpace learner" className="h-full w-full object-cover object-center" />
            <div className="absolute left-2 top-4 space-y-2">
              <div className="rounded-lg bg-brand px-3 py-2 text-white shadow-md"><p className="text-[8px]">Total Revenue</p><p className="mt-1 text-sm font-bold">$120.29</p></div>
              <div className="rounded-lg bg-brand px-3 py-2 text-white shadow-md"><p className="text-[8px]">Year to Date</p><p className="mt-1 text-sm font-bold">$1,200.38</p></div>
            </div>
            <div className="absolute bottom-3 right-2 rounded-lg bg-white px-3 py-2 text-[9px] shadow-lg">Happy Students <span className="block text-lime-600">★★★★★</span></div>
          </div>
          <div>
            <h2 className="max-w-md text-3xl font-bold leading-tight">Create &amp; Manage Courses Easily.</h2>
            <p className="mt-4 max-w-lg text-xs leading-5 text-slate-600 sm:text-sm">ByteSpace supports individuals or entities in the creation, publication, monetization, and distribution of educational courses.</p>
            <ul className="mt-5 space-y-2 text-xs sm:text-sm">
              {perks.map((perk) => <li key={perk} className="flex items-center gap-2"><span className="grid size-4 place-items-center rounded-full bg-brand text-[10px] text-white">✓</span>{perk}</li>)}
            </ul>
            <Button as={Link} to="/signup" variant="dark" className="mt-5">Become a Creator</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
