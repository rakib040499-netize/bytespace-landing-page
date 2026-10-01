import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo.jsx";
import Button from "./ui/Button.jsx";

const footerLinks = [
  { title: "Featured Courses", items: ["Featured Categories", "Business", "IT", "Design"] },
  { title: "Development", items: ["Marketing", "Photography", "Finance", "Sport"] },
  { title: "Become a Creator", items: ["Affiliate Program", "Contact", "Help", "About"] },
];

function footerPath(label) {
  if (label === "Become a Creator" || label === "Affiliate Program") return "/signup";
  if (label === "About") return "/#home";
  return `/courses?q=${encodeURIComponent(label === "Featured Categories" ? "" : label)}`;
}

export default function Footer() {
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-9 px-4 py-10 md:grid-cols-[1.15fr_1.85fr]">
        <div>
          <Logo dark />
          <p className="mt-3 max-w-sm text-[10px] leading-5 text-slate-500">Stay up to date with our latest features and releases by joining our newsletter.</p>
          <form onSubmit={(event) => { event.preventDefault(); setSubscriptionMessage("This demo does not send or save email addresses."); }} className="mt-4 flex max-w-sm gap-2">
            <input type="email" required placeholder="Enter your email" aria-label="Email" className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2 text-[10px]" />
            <Button className="px-4 py-2 text-xs">Subscribe</Button>
          </form>
          <p className="mt-2 max-w-sm text-[9px] leading-4 text-slate-500">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          <p role="status" aria-live="polite" className="mt-1 min-h-4 text-[9px] text-slate-500">{subscriptionMessage}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-1 text-[10px] sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold">{group.title}</h4>
              <ul className="mt-4 space-y-3 text-slate-600">
                {group.items.map((item) => <li key={item}><Link to={footerPath(item)} className="hover:text-brand">{item}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-slate-100 px-4 py-4 text-[9px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-5"><span>Privacy Policy</span><span>Terms of Service</span><span>Cookies Settings</span></div>
      </div>
    </footer>
  );
}
