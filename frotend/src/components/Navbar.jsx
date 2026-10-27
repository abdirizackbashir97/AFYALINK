import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../i18n/translations";

const PRIMARY_LINKS = [
  { to: "/", labelKey: "home" },
  { to: "/maternal", labelKey: "maternal" },
  { to: "/baby", labelKey: "baby" },
  { to: "/mental-health", labelKey: "mentalHealth" },
  { to: "/facilities", labelKey: "facilities" },
  { to: "/appointments", labelKey: "appointments" },
];

const MORE_LINKS = [
  { to: "/health-info", labelKey: "healthInfo" },
  { to: "/programs", labelKey: "programs" },
  { to: "/community", labelKey: "community" },
  { to: "/impact", labelKey: "impact" },
  { to: "/about", labelKey: "about" },
  { to: "/contact", labelKey: "contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-primary">
      {/* Top info bar — phone + email */}
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs text-white sm:flex-row sm:px-6 lg:px-8">
        <a
          href="tel:+254700123456"
          className="flex items-center gap-2 font-medium whitespace-nowrap transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline"
        >
          <PhoneIcon />
          <span>+254 700 123 456</span>
        </a>

        <a
          href="mailto:info@afya.org"
          className="hidden items-center gap-2 font-medium whitespace-nowrap transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline sm:flex"
        >
          <MailIcon />
          <span>info@afya.org</span>
        </a>
      </div>

      {/* Rounded white navbar pill on teal */}
      <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 lg:px-8">
        <nav
          className="rounded-[10px] border-b-4 border-brand-secondary bg-white shadow-md"
          aria-label={t.nav.mainNavigation}
        >
          <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-6">
            {/* Logo — shrink-0 so it never squishes */}
            <Link
              to="/"
              className="flex shrink-0 items-center"
              aria-label={t.nav.homeAria}
            >
              <img
                src={logo}
                alt="AfyaLink"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop links — nowrap prevents wrapping */}
            <ul className="hidden items-center gap-1 lg:flex">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
                        isActive
                          ? "bg-brand-secondary/10 font-semibold text-brand-primary"
                          : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary",
                      ].join(" ")
                    }
                  >
                    {t.nav[link.labelKey]}
                  </NavLink>
                </li>
              ))}
              <li>
                <MoreMenu />
              </li>
            </ul>

            {/* Desktop right side — shrink-0 so lang + login never squish */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <LanguageSwitcher />
              <Link
                to="/login"
                className="whitespace-nowrap rounded-md bg-brand-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              >
                {t.nav.login}
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher compact />
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={t.nav.toggleMenu}
                className="rounded-md p-2 text-brand-primary hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div
              id="mobile-menu"
              className="border-t border-gray-200 px-4 pb-4 pt-2 sm:px-6 lg:hidden"
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
                            ? "bg-brand-secondary/10 font-semibold text-brand-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary",
                        ].join(" ")
                      }
                    >
                      {t.nav[link.labelKey]}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md bg-brand-primary px-3 py-2 text-center text-base font-semibold text-white hover:bg-brand-secondary"
                  >
                    {t.nav.login}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

/* ---------- More dropdown ---------- */
function MoreMenu() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
        className="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
      >
        {t.nav.more}
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
        <div className="absolute right-0 mt-2 w-52 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {MORE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "block whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-secondary/10 font-semibold text-brand-primary"
                    : "text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary",
                ].join(" ")
              }
            >
              {t.nav[link.labelKey]}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Language switcher ---------- */
function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageSwitcher}
      className="flex shrink-0 items-center overflow-hidden rounded-md border border-gray-300"
    >
      {LANGUAGES.map((lang) => {
        const active = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            aria-pressed={active}
            aria-label={lang.name}
            className={[
              "whitespace-nowrap px-2.5 py-1.5 text-xs font-semibold transition",
              active
                ? "bg-brand-secondary text-white"
                : "bg-transparent text-brand-primary hover:bg-brand-secondary/10",
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

/* ---------- Icons ---------- */
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
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-secondary">
      <path
        d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-secondary">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}