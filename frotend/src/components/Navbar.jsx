import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
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
  { to: "/contact", labelKey: "contact" },
];

const ABOUT_LINKS = [
  { to: "/about", labelKey: "aboutMain", defaultLabel: "About AfyaLink" },
  { to: "/about/who-we-are", labelKey: "whoWeAre", defaultLabel: "Who We Are" },
  { to: "/about/our-team", labelKey: "ourTeam", defaultLabel: "Our Team" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Auto-close mobile menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9999] w-full">
        {/* Top info bar */}
        <div className="bg-brand-primary">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-2 px-3 py-1.5 text-[11px] text-white sm:px-6 sm:py-2 sm:text-xs lg:px-8">
            <a
              href="tel:+254700123456"
              className="flex min-w-0 items-center gap-1.5 font-medium transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline"
            >
              <PhoneIcon />
              <span className="truncate">+254 700 123 456</span>
            </a>

            <a
              href="mailto:info@afya.org"
              className="hidden min-w-0 items-center gap-1.5 font-medium transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline sm:flex"
            >
              <MailIcon />
              <span className="truncate">info@afya.org</span>
            </a>
          </div>
        </div>

        {/* White pill navbar wrapper */}
        <div className="bg-brand-primary">
          <div className="mx-auto max-w-screen-2xl px-2 pb-1.5 sm:px-4 sm:pb-2 lg:px-6">
            <nav
              className="rounded-[10px] border-b-4 border-brand-secondary bg-white shadow-md"
              aria-label={t.nav.mainNavigation}
            >
              <div className="flex items-center justify-between gap-1.5 px-2.5 py-2 sm:gap-2 sm:px-4 sm:py-3 md:px-6">
                {/* Logo */}
                <Link
                  to="/"
                  className="flex shrink-0 items-center"
                  aria-label={t.nav.homeAria}
                >
                  <img
                    src={logo}
                    alt="AfyaLink"
                    className="h-7 w-auto object-contain sm:h-8 md:h-9"
                  />
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-0.5 lg:flex lg:gap-1">
                  {PRIMARY_LINKS.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          [
                            "whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3",
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
                    <AboutDropdown />
                  </li>
                  <li>
                    <MoreMenu />
                  </li>
                </ul>

                {/* Desktop right side */}
                <div className="hidden shrink-0 items-center gap-2 lg:flex lg:gap-3">
                  <LanguageSwitcher />
                  <Link
                    to="/login"
                    className="whitespace-nowrap rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary xl:px-6"
                  >
                    {t.nav.login}
                  </Link>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
                  <LanguageSwitcher compact />
                  <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                    aria-label={t.nav.toggleMenu}
                    className="rounded-md p-1.5 text-brand-primary hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary sm:p-2"
                  >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                  </button>
                </div>
              </div>

              {/* Mobile menu */}
              {mobileOpen && (
                <div
                  id="mobile-menu"
                  className="max-h-[70vh] overflow-y-auto border-t border-gray-200 px-2 pb-3 pt-1.5 sm:px-4 sm:pb-4 sm:pt-2 lg:hidden text-gray-900"
                >
                  <ul className="flex flex-col gap-0.5">
                    {[...PRIMARY_LINKS, ...ABOUT_LINKS, ...MORE_LINKS].map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            [
                              "block rounded-md px-3 py-2 text-sm font-medium sm:text-base",
                              isActive
                                ? "bg-brand-secondary/10 font-semibold text-brand-primary"
                                : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary",
                            ].join(" ")
                          }
                        >
                          {/* Fallback ensures text is never blank */}
                          {t.about?.[link.labelKey] || t.nav[link.labelKey] || link.defaultLabel}
                        </NavLink>
                      </li>
                    ))}
                    <li className="pt-2">
                      <Link
                        to="/login"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md bg-brand-primary px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-secondary sm:text-base"
                      >
                        {t.nav.login}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[88px] sm:h-[100px] lg:h-[108px]" aria-hidden="true" />
    </>
  );
}

/* ---------- About Dropdown ---------- */
function AboutDropdown() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const isActive = location.pathname.startsWith("/about");

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
        className={[
          "flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
          isActive
            ? "bg-brand-secondary/10 font-semibold text-brand-primary"
            : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary",
        ].join(" ")}
      >
        {t.nav.about}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg text-gray-900">
          {ABOUT_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/about"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "block px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-secondary/10 font-semibold text-brand-primary"
                    : "text-gray-700 hover:bg-brand-secondary/10 hover:text-brand-primary",
                ].join(" ")
              }
            >
              {/* Reads from t.about (where we put the translations), falls back to English if missing */}
              {t.about?.[link.labelKey] || link.defaultLabel}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- More Dropdown ---------- */
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
        className="flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary xl:px-3"
      >
        {t.nav.more}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-lg border border-gray-200 bg-white py-1 shadow-lg text-gray-900">
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
              "whitespace-nowrap font-semibold transition",
              compact ? "px-1.5 py-1 text-[10px] sm:px-2 sm:text-xs" : "px-2.5 py-1.5 text-xs sm:text-sm",
              active
                ? "bg-brand-secondary text-white"
                : "bg-transparent text-brand-primary hover:bg-brand-secondary/10",
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand-secondary sm:h-3.5 sm:w-3.5">
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand-secondary sm:h-3.5 sm:w-3.5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}