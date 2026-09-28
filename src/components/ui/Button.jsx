const variants = {
  primary: "bg-lime text-ink hover:brightness-95",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-white/60 text-white hover:bg-white/10",
};

export default function Button({ variant = "primary", className = "", as: Tag = "button", ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
