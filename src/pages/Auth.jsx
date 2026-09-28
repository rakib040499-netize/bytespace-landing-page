import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/ui/Logo.jsx";
import Button from "../components/ui/Button.jsx";

export default function Auth({ mode }) {
  const isSignup = mode === "signup";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

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

  const field = (key, label, type = "text") => (
    <div>
      <label htmlFor={key} className="text-sm font-medium">{label}</label>
      <input
        id={key} type={type} value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-brand"
      />
      {errors[key] && <p className="mt-1 text-xs text-red-600">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="grid-bg grid min-h-screen place-items-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <Logo dark />
        <h1 className="mt-6 text-2xl font-bold">{isSignup ? "Welcome to ByteSpace" : "Welcome Back"}</h1>
        <form onSubmit={submit} noValidate className="mt-6 space-y-4">
          {isSignup && field("name", "Full name")}
          {field("email", "Email", "email")}
          {field("password", "Password", "password")}
          <Button className="w-full">{isSignup ? "Create account" : "Log in"}</Button>
          {done && <p role="status" className="text-center text-sm text-green-700">Form is valid. This is a demo, so nothing was saved.</p>}
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          {isSignup ? "Already have an account?" : "New to ByteSpace?"}{" "}
          <Link to={isSignup ? "/login" : "/signup"} className="font-semibold text-brand">{isSignup ? "Log in" : "Sign up"}</Link>
        </p>
      </div>
    </div>
  );
}
