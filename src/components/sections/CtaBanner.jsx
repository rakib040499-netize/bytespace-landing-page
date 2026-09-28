import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function CtaBanner() {
  return (
    <section className="grid-bg py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionHeading light title="Unlock Your Potential as a Creator with ByteSpace" subtitle="Teach what you know and build an audience while you do it." />
        <Button as={Link} to="/signup" className="mt-6">Join now</Button>
      </div>
    </section>
  );
}
