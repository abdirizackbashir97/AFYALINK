import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

// Always visible on desktop
const PRIMARY_LINKS = [
  { to: "/", label: "Home" },
  { to: "/maternal", label: "Maternal Care" },
  { to: "/baby", label: "Baby Care" },
  { to: "/mental-health", label: "Mental Health" },
  { to: "/facilities", label: "Facilities" },
  { to: "/appointments", label: "Appointments" },
];

// Overflow dropdown on desktop, full list on mobile
const MORE_LINKS = [
  { to: "/health-info", label: "Health Info" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "sw", label: "SW" },
  { code: "so", label: "SO" },
];

export default function Navbar({ language = "en", onLanguageChange = () => {} }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-primary shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center" aria-label="AfyaLink home">
          <img src={logo} alt="AfyaLink" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop links — primary + More dropdown */}
        <ul className="hidden items-center gap-1 lg:flex">
          {PRIMARY_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
                    isActive
                      ? "bg-white/10 text-brand-secondary"
                      : "text-white hover:bg-white/5 hover:text-brand-secondary",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <MoreMenu />
          </li>
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher current={language} onChange={onLanguageChange} />
          <Link
            to="/login"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          >
            Log in
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher current={language} onChange={onLanguageChange} compact />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — shows ALL links */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-brand-primary px-4 pb-4 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {[...PRIMARY_LINKS, ...MORE_LINKS].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block rounded-md px-3 py-2 text-base font-medium",
                      isActive
                        ? "bg-white/10 text-brand-secondary"
                        : "text-white hover:bg-white/5 hover:text-brand-secondary",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="block rounded-md bg-white px-3 py-2 text-center text-base font-semibold text-brand-primary hover:bg-brand-secondary hover:text-white"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------- "More" dropdown (desktop only) ---------- */
function MoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
      >
        More
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-white py-1 shadow-xl">
          {MORE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "block px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-secondary/10 text-brand-primary"
                    : "text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Language switcher ---------- */
function LanguageSwitcher({ current, onChange, compact = false }) {
  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center overflow-hidden rounded-md border border-white/30"
    >
      {LANGUAGES.map((lang) => {
        const active = current === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onChange(lang.code)}
            aria-pressed={active}
            className={[
              "px-2.5 py-1.5 text-xs font-semibold transition",
              active
                ? "bg-brand-secondary text-white"
                : "bg-transparent text-white hover:bg-white/10",
              compact ? "" : "sm:text-sm",
            ].join(" ")}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}