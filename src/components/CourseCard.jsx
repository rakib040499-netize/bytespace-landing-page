export default function CourseCard({ course }) {
  const { title, author, rating, price } = course;
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      <div className="h-36 bg-gradient-to-br from-brand to-lime" aria-hidden />
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold">{title}</h3>
        <p className="text-xs text-slate-500">by {author}</p>
        <div className="flex items-center justify-between text-sm">
          <span>⭐ {rating}</span>
          <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold">${price}</span>
        </div>
      </div>
    </article>
  );
}
