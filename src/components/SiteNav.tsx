import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Story" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <Link to="/" className="flex items-baseline gap-2 font-serif text-xl tracking-tight text-foreground">
          <span className="text-2xl">Brew Lane</span>
          <span className="eyebrow hidden md:inline">est. 2014</span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 transition hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+15551234567"
            className="rounded-full border border-foreground/80 px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
          >
            Reserve a table
          </a>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-7 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-7 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full mx-6 rounded border border-border bg-background p-6 shadow-lg md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 font-serif text-2xl text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
