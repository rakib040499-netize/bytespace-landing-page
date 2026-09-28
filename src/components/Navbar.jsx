import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo.jsx";
import Button from "./ui/Button.jsx";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Paths", href: "#paths" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />
        <ul className="hidden gap-8 text-sm text-white md:flex">
          {links.map((l) => (
            <li key={l.label}><a href={l.href} className="hover:text-lime">{l.label}</a></li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="text-sm font-medium text-white hover:text-lime">Log in</Link>
          <Button as={Link} to="/signup">Sign up</Button>
        </div>
        <button className="text-white md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="mx-4 rounded-2xl bg-white p-4 shadow-lg md:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-700">{l.label}</a>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="mt-2 block py-2 text-sm font-medium text-slate-700">Log in</Link>
          <Button as={Link} to="/signup" onClick={() => setOpen(false)} className="mt-2 w-full">Sign up</Button>
        </div>
      )}
    </header>
  );
}
