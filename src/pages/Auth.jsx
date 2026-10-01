import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import Logo from "../components/ui/Logo.jsx";
import Button from "../components/ui/Button.jsx";

export default function Auth({ mode }) {
  const isSignup = mode === "signup";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const e = {};
    if (isSignup && form.name.trim().length < 2) e.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.password.length < 8) e.password = "Use at least 8 characters.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setDone(Object.keys(e).length === 0);
  };

  const field = ({ name, label, placeholder, type = "text", autoComplete, Icon }) => {
    const passwordField = name === "password";
    const inputType = passwordField && showPassword ? "text" : type;

    return (
      <div>
        <label htmlFor={name} className="text-sm font-semibold text-slate-800">{label}</label>
        <div className="relative mt-2">
          <Icon aria-hidden="true" size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id={name}
            name={name}
            type={inputType}
            autoComplete={autoComplete}
            value={form[name]}
            placeholder={placeholder}
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? `${name}-error` : undefined}
            onChange={(event) => {
              setForm({ ...form, [name]: event.target.value });
              setDone(false);
            }}
            className={`w-full rounded-md border bg-white py-3 pl-11 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15 ${passwordField ? "pr-12" : "pr-4"} ${errors[name] ? "border-red-400" : "border-slate-200"}`}
          />
          {passwordField && (
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded text-slate-500 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          )}
        </div>
        {errors[name] && <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">{errors[name]}</p>}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      <section className="grid-bg relative hidden min-h-screen overflow-hidden px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-16">
        <Logo />
        <div className="relative z-10 mb-[25vh] max-w-lg">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-lime">
            <span className="size-1.5 rounded-full bg-lime" /> YOUR SPACE TO GROW
          </p>
          <h2 className="max-w-md text-4xl font-bold leading-tight xl:text-5xl">
            {isSignup ? "Make room for what’s next." : "Pick up where your curiosity left off."}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            Learn practical skills from people who love sharing what they know.
          </p>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 right-[5%] h-[48%] w-[68%] rounded-t-[48%] bg-lime" />
        <img
          src="/assets/learner-headset.png"
          alt="Learner holding a laptop and wearing headphones"
          className="absolute bottom-0 right-[3%] z-10 h-[48%] max-w-[68%] object-contain object-bottom"
        />
        <div className="absolute bottom-8 left-12 z-20 rounded-md bg-white px-4 py-3 text-xs font-semibold text-brand shadow-lg xl:left-16">
          Learn at your own pace
        </div>
        <span aria-hidden="true" className="hero-sparkle absolute right-[12%] top-[18%] size-12 bg-lime/90" />
        <span aria-hidden="true" className="absolute right-[7%] top-[34%] size-4 rotate-12 bg-yellow-300" />
      </section>

      <section className="flex min-h-screen flex-col">
        <div className="grid-bg relative overflow-hidden px-6 py-6 text-white sm:px-10 lg:hidden">
          <Logo />
          <h2 className="relative z-10 mt-6 max-w-sm text-2xl font-bold leading-tight">
            {isSignup ? "Make room for what’s next." : "Pick up where your curiosity left off."}
          </h2>
          <p className="relative z-10 mt-2 max-w-sm text-sm text-white/75">Learn practical skills from people who love sharing what they know.</p>
          <span aria-hidden="true" className="hero-sparkle absolute right-7 top-10 size-10 bg-lime" />
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10 lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <span className="text-sm font-medium text-slate-500">ByteSpace account</span>
              <Link to="/" className="text-sm font-semibold text-brand hover:underline">Back home</Link>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{isSignup ? "Join the community" : "Welcome back"}</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-ink">{isSignup ? "Create your account" : "Sign in to ByteSpace"}</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {isSignup ? "Start learning something new today." : "Continue learning at your own pace."}
            </p>

            <form onSubmit={submit} noValidate className="mt-7 space-y-5">
              {isSignup && field({ name: "name", label: "Full name", placeholder: "Your name", autoComplete: "name", Icon: UserRound })}
              {field({ name: "email", label: "Email address", placeholder: "you@example.com", type: "email", autoComplete: "email", Icon: Mail })}
              {field({ name: "password", label: "Password", placeholder: "At least 8 characters", type: "password", autoComplete: isSignup ? "new-password" : "current-password", Icon: LockKeyhole })}
              <Button type="submit" className="w-full gap-2 rounded-md py-3">
                {isSignup ? "Create account" : "Log in"}<ArrowRight size={17} />
              </Button>
              {done && (
                <p role="status" aria-live="polite" className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm leading-5 text-emerald-800">
                  Your details are valid. This demo does not create or save accounts.
                </p>
              )}
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              {isSignup ? "Already have an account?" : "New to ByteSpace?"}{" "}
              <Link to={isSignup ? "/login" : "/signup"} className="font-semibold text-brand hover:underline">
                {isSignup ? "Log in" : "Create an account"}
              </Link>
            </p>
            <p className="mt-10 border-t border-slate-100 pt-5 text-center text-xs leading-5 text-slate-400">
              By continuing, you’re joining a learning community built for curious minds.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
