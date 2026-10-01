import { stats } from "../../data.js";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const perks = ["Upload lessons and publish in a few clicks", "See who finishes and where people drop off", "Get paid when people enroll"];

export default function Growth() {
  return (
    <section className="relative isolate overflow-hidden bg-soft/70 py-14 sm:py-16">
      <span aria-hidden="true" className="hero-sparkle absolute -left-8 top-16 h-20 w-20 bg-lime/80 sm:h-28 sm:w-28" />
      <span aria-hidden="true" className="absolute bottom-10 right-[7%] h-10 w-10 rotate-45 bg-lime/70" />
      <div className="relative mx-auto max-w-6xl space-y-14 px-4 sm:space-y-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Your Path to Professional Growth Starts Here!</h2>
          <p className="mt-3 text-sm text-slate-500">Most people here started with a single short course and kept going.</p>
          <dl className="mt-6 flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-brand">{s.value}</dt>
                <dd className="text-xs text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative h-72 overflow-hidden rounded-lg bg-gradient-to-br from-white to-lime/40 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Students collaborating"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
            <p className="text-xs text-slate-500">Course completion</p>
            <p className="text-xl font-bold text-brand">87%</p>
          </div>
        </div>
      </div>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-lg bg-gradient-to-br from-brand/20 to-white shadow-lg md:order-1">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Laptop and planning desk"
            className="h-72 w-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold">Create & Manage Courses Easily.</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-xs text-white">✓</span>{p}
              </li>
            ))}
          </ul>
          <Button as={Link} to="/signup" variant="dark" className="mt-6">Start teaching</Button>
        </div>
      </div>
      </div>
    </section>
  );
}
