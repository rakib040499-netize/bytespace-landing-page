import Logo from "./ui/Logo.jsx";
import Button from "./ui/Button.jsx";
import { footerLinks } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          <Logo dark />
          <p className="mt-3 max-w-sm text-sm text-slate-500">Occasional emails with new courses and study tips. No spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex max-w-sm gap-2">
            <input type="email" required placeholder="Your email" aria-label="Email" className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm" />
            <Button>Subscribe</Button>
          </form>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm">
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-semibold">{group}</h4>
              <ul className="mt-3 space-y-2 text-slate-500">
                {items.map((i) => <li key={i}><a href="#home" className="hover:text-brand">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">© 2026 ByteSpace. All rights reserved.</p>
    </footer>
  );
}
