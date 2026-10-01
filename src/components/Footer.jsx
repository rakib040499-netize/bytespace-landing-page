import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo.jsx";
import Button from "./ui/Button.jsx";

const footerLinks = {
  Explore: [
    { label: "Browse courses", to: "/courses" },
    { label: "Learning paths", href: "/#paths" },
    { label: "Learner stories", href: "/#reviews" },
  ],
  Account: [
    { label: "Log in", to: "/login" },
    { label: "Sign up", to: "/signup" },
  ],
};

export default function Footer() {
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-3 max-w-sm text-sm text-slate-500">Get updates about new courses and learning resources.</p>
          <form onSubmit={(event) => { event.preventDefault(); setSubscriptionMessage("This demo does not send or save email addresses."); }} className="mt-4 flex max-w-sm gap-2">
            <input type="email" required placeholder="Your email" aria-label="Email" className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm" />
            <Button>Subscribe</Button>
          </form>
          <p role="status" aria-live="polite" className="mt-2 min-h-5 text-xs text-slate-500">{subscriptionMessage}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-semibold">{group}</h4>
              <ul className="mt-3 space-y-2 text-slate-500">
                {items.map((item) => <li key={item.label}>{item.to ? <Link to={item.to} className="hover:text-brand">{item.label}</Link> : <a href={item.href} className="hover:text-brand">{item.label}</a>}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">© 2026 ByteSpace. All rights reserved.</p>
    </footer>
  );
}
