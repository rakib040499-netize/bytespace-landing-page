import { Link } from "react-router-dom";

export default function Logo({ dark = false }) {
  return (
    <Link to="/" className={`flex items-center gap-2 text-lg font-bold ${dark ? "text-ink" : "text-white"}`}>
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-lime text-sm text-ink">B</span>
      ByteSpace
    </Link>
  );
}
