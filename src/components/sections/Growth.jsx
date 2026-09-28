import { stats } from "../../data.js";
import Button from "../ui/Button.jsx";

const perks = ["Upload lessons and publish in a few clicks", "See who finishes and where people drop off", "Get paid when people enroll"];

export default function Growth() {
  return (
    <section className="mx-auto max-w-6xl space-y-20 px-4 py-16">
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
        <div className="h-64 rounded-3xl bg-gradient-to-br from-soft to-lime/40" aria-hidden />
      </div>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 h-64 rounded-3xl bg-gradient-to-br from-brand/20 to-soft md:order-1" aria-hidden />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold">Create & Manage Courses Easily.</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-xs text-white">✓</span>{p}
              </li>
            ))}
          </ul>
          <Button variant="dark" className="mt-6">Start teaching</Button>
        </div>
      </div>
    </section>
  );
}
