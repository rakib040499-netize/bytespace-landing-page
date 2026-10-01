import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const { title, author, rating, price, image, lessons, duration, comments, level, learners } = course;
  return (
    <Link to={`/courses/${course.id}`} className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-brand/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
      <div className="relative h-28 p-2 pb-0">
        <img src={image} alt={title} className="h-full w-full rounded-lg object-cover" />
        <div className="absolute inset-x-4 bottom-2 flex justify-between gap-1 text-[8px] text-white">
          {[`${lessons} Lessons`, duration, `${comments} Comments`].map((item) => (
            <span key={item} className="rounded-full bg-slate-900/65 px-1.5 py-1 leading-none">{item}</span>
          ))}
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 truncate text-[11px] font-semibold group-hover:text-brand">{title}</h3>
          <span className="shrink-0 text-[10px] text-slate-500">{rating} <span className="text-slate-300">★</span></span>
        </div>
        <p className="mt-0.5 text-[8px] text-brand">by {author}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] text-slate-600">▥ &nbsp;{level}</span>
          <div className="flex items-center -space-x-1" aria-label={`${learners} learners`}>
            {[["J", "bg-rose-300"], ["M", "bg-sky-300"], ["A", "bg-amber-300"], ["S", "bg-indigo-300"]].map(([initial, color]) => (
              <span key={initial} className={`grid size-4 place-items-center rounded-full border border-white text-[7px] font-bold text-white ${color}`}>{initial}</span>
            ))}
            <span className="grid size-4 place-items-center rounded-full border border-white bg-lime text-[6px] font-bold text-ink">{learners}</span>
          </div>
        </div>
        <div className="mt-2 border-t border-slate-100 pt-1.5 text-[10px]">
          <span className="font-bold text-brand">${price}</span><span className="ml-1 text-[8px] text-slate-500">/lifetime</span>
        </div>
      </div>
    </Link>
  );
}
