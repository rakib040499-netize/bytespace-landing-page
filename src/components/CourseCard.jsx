import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const { title, author, rating, price, image, lessons, duration, comments, level, learners } = course;
  return (
    <Link to={`/courses/${course.id}`} className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
      <img src={image} alt={title} className="h-36 w-full object-cover" />
      <div className="space-y-2 p-4">
        <p className="text-xs text-slate-500">{lessons} Lessons <span className="px-1">·</span> {duration} <span className="px-1">·</span> {comments} Comments</p>
        <h3 className="line-clamp-2 text-sm font-semibold group-hover:text-brand">{title}</h3>
        <p className="text-xs text-slate-500">{author}</p>
        <div className="flex items-center justify-between text-sm">
          <span>⭐ {rating}</span>
          <span className="text-xs text-slate-500">{level} <span className="px-1">·</span> {learners}</span>
        </div>
        <div className="flex items-baseline gap-1 border-t border-slate-100 pt-2">
          <span className="text-lg font-bold">${price}</span>
          <span className="text-xs text-slate-500">/lifetime</span>
        </div>
      </div>
    </Link>
  );
}
