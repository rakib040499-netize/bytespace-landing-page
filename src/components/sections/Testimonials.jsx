import { testimonials } from "../../data.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-gradient-to-br from-indigo-50 via-white to-lime-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-5 md:grid-cols-2">
          <h2 className="max-w-md text-3xl font-bold leading-tight">Discover What Our Community Is Saying</h2>
          <p className="text-xs leading-5 text-slate-600 sm:text-sm">At Bytespace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-xl bg-white p-4 sm:p-5">
              <img src={testimonial.avatar} alt="" className="size-10 rounded-full object-cover" />
              <figcaption className="mt-3 text-xs"><strong className="block text-sm">{testimonial.name}</strong><span className="text-brand">{testimonial.role}</span></figcaption>
              <blockquote className="mt-4 text-xs leading-5 text-slate-600">“{testimonial.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
