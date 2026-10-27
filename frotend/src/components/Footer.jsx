import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const QUICK_LINKS = [
  { to: "/maternal", label: "Maternal Care" },
  { to: "/baby", label: "Baby Care" },
  { to: "/mental-health", label: "Mental Health" },
  { to: "/health-info", label: "Health Information" },
];

const SERVICES = [
  { to: "/facilities", label: "Health Facilities" },
  { to: "/appointments", label: "Appointments" },
  { to: "/register", label: "Create Account" },
  { to: "/login", label: "Log in" },
];

const COMPANY = [
  { to: "/about", label: "About AfyaLink" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      {/* Emergency strip — white on teal for high contrast */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-3 text-sm sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 font-medium">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            In an emergency, call <strong className="text-brand-secondary">999</strong> or go to the nearest health facility.
          </p>
          <p className="text-white/75">Available in English · Kiswahili · Somali</p>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Column 1 — Brand */}
        <div>
          <Link to="/" className="flex items-center" aria-label="AfyaLink home">
            <img
              src={logo}
              alt="AfyaLink"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Community health information and support for mothers, newborns, and
            families in Northeastern Kenya.
          </p>

          {/* Language pills (visual indicator, matches navbar switcher) */}
          <div className="mt-5 flex items-center gap-2">
            {["EN", "SW", "SO"].map((code) => (
              <span
                key={code}
                className="rounded-md border border-white/30 px-2 py-1 text-xs font-semibold text-white/80"
              >
                {code}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2 — Health information */}
        <FooterColumn title="Health Topics" links={QUICK_LINKS} />

        {/* Column 3 — Services */}
        <FooterColumn title="Services" links={SERVICES} />

        {/* Column 4 — Company + Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {COMPANY.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/80 transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-secondary">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <MailIcon />
              <a
                href="mailto:support@afyalink.health"
                className="transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline"
              >
                support@afyalink.health
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon />
              <a
                href="tel:+254700000000"
                className="transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline"
              >
                +254 700 000 000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon />
              <span>Garissa, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — copyright + legal + back to top */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} AfyaLink. All rights reserved.</p>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/privacy" className="transition hover:text-brand-secondary">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition hover:text-brand-secondary">
                Terms
              </Link>
            </li>
            <li>
              <a
                href="#top"
                className="inline-flex items-center gap-1 transition hover:text-brand-secondary"
              >
                Back to top
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 19V5M5 12l7-7 7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Reusable column ---------- */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-white/80 transition hover:text-brand-secondary focus:outline-none focus-visible:text-brand-secondary focus-visible:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Inline icons ---------- */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-secondary">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-secondary">
      <path
        d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-secondary">
      <path
        d="M12 22s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}