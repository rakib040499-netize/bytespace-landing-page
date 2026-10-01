import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function CtaBanner() {
  return (
    <section className="grid-bg relative isolate overflow-hidden py-14 sm:py-16">
      <span aria-hidden="true" className="hero-sparkle absolute left-[8%] top-8 h-16 w-16 bg-lime sm:h-24 sm:w-24" />
      <span aria-hidden="true" className="absolute right-[12%] top-10 h-8 w-8 rotate-45 bg-yellow-300 sm:h-12 sm:w-12" />
      <span aria-hidden="true" className="absolute bottom-5 right-[28%] h-10 w-3 -rotate-45 bg-lime sm:h-14 sm:w-4" />
      <div className="relative mx-auto max-w-5xl px-6 py-8 text-center sm:px-10 sm:py-10">
        <SectionHeading light title="Unlock Your Potential as a Creator with ByteSpace" subtitle="Teach what you know and build an audience while you do it." />
        <Button as={Link} to="/signup" className="mt-6 px-8">Join now</Button>
      </div>
    </section>
  );
}
