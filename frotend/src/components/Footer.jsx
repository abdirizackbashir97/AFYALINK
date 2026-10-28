import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../i18n/translations";

const QUICK_LINKS = [
  { to: "/maternal", labelKey: "linkMaternal" },
  { to: "/baby", labelKey: "linkBaby" },
  { to: "/mental-health", labelKey: "linkMental" },
  { to: "/health-info", labelKey: "linkHealthInfo" },
];

const SERVICES = [
  { to: "/facilities", labelKey: "linkFacilities" },
  { to: "/appointments", labelKey: "linkAppointments" },
  { to: "/programs", labelKey: "linkPrograms" },
  { to: "/community", labelKey: "linkCommunity" },
];

const COMPANY = [
  { to: "/about", labelKey: "linkAbout" },
  { to: "/impact", labelKey: "linkImpact" },
  { to: "/contact", labelKey: "linkContact" },
];

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900">
      {/* Emergency notice */}
      <div className="mx-auto max-w-7xl px-3 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div className="flex flex-col items-start gap-3 rounded-xl bg-brand-primary px-4 py-3.5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
          <p className="flex items-start gap-2.5 text-sm font-medium sm:items-center sm:gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand-primary sm:mt-0 sm:h-7 sm:w-7">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-3.5 sm:w-3.5">
                <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="break-words">
              {t.footer.emergencyTitle}{" "}
              <strong className="text-brand-secondary">999</strong>{" "}
              {t.footer.emergencyEnd}
            </span>
          </p>
          <p className="text-[11px] text-white/80 sm:text-xs lg:text-sm">
            {t.footer.languagesAvailable}
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mx-auto max-w-7xl px-3 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <NewsletterCard />
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-8 px-3 py-10 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand column */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center" aria-label={t.nav.homeAria}>
            <img
              src={logo}
              alt="AfyaLink"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:mt-4">
            {t.footer.brandDescription}
          </p>

          {/* Language pills — CLICKABLE, synced with navbar */}
          <div className="mt-4 flex items-center gap-2 sm:mt-5">
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
                    "rounded-md border px-2 py-1 text-xs font-semibold transition",
                    active
                      ? "border-brand-secondary bg-brand-secondary text-white"
                      : "border-gray-300 text-gray-700 hover:border-brand-primary hover:text-brand-primary",
                  ].join(" ")}
                >
                  {lang.label}
                </button>
              );
            })}
          </div>

          {/* Social */}
          <div className="mt-5 flex items-center gap-2 sm:mt-6">
            <SocialLink href="https://wa.me/254700123456" label="WhatsApp" icon={<WhatsAppIcon />} />
            <SocialLink href="https://facebook.com" label="Facebook" icon={<FacebookIcon />} />
            <SocialLink href="https://x.com" label="X" icon={<XIcon />} />
          </div>
        </div>

        <FooterColumn title={t.footer.healthTopics} links={QUICK_LINKS} />
        <FooterColumn title={t.footer.services} links={SERVICES} />

        {/* Company + Contact */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {t.footer.company}
          </h3>
          <ul className="mt-3 space-y-2 text-sm sm:mt-4">
            {COMPANY.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="break-words text-gray-700 transition hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary focus-visible:underline"
                >
                  {t.footer[link.labelKey]}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {t.footer.contact}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 sm:mt-4">
            <li className="flex items-center gap-2">
              <MailIcon />
              <a
                href="mailto:info@afya.org"
                className="break-all transition hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary focus-visible:underline"
              >
                info@afya.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon />
              <a
                href="tel:+254700123456"
                className="break-words transition hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary focus-visible:underline"
              >
                +254 700 123 456
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon />
              <span>Garissa, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-3 py-4 text-xs text-gray-600 sm:px-6 sm:py-5 md:flex-row lg:px-8">
          <p className="text-center md:text-left">
            © {year} AfyaLink. {t.footer.rights}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <li>
              <Link to="/privacy" className="transition hover:text-brand-primary">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition hover:text-brand-primary">
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <a
                href="#top"
                className="inline-flex items-center gap-1 transition hover:text-brand-primary"
              >
                {t.footer.backToTop}
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

/* ---------- Newsletter ---------- */
function NewsletterCard() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setError(t.newsletter.invalidEmail);
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-primary/15 bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/10 p-4 sm:p-6 md:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-secondary/10 blur-2xl sm:h-40 sm:w-40"
      />

      <div className="relative grid items-center gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-white sm:h-8 sm:w-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-4 sm:w-4">
                <path
                  d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-primary sm:text-xs">
              {t.newsletter.kicker}
            </p>
          </div>

          <h2 className="mt-2 break-words text-lg font-bold text-gray-900 sm:mt-3 sm:text-xl md:text-2xl">
            {t.newsletter.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t.newsletter.descriptionBefore}{" "}
            <strong className="text-brand-primary">{t.newsletter.descriptionBold}</strong>{" "}
            {t.newsletter.descriptionAfter}
          </p>
        </div>

        <div>
          {subscribed ? (
            <div className="flex items-start gap-3 rounded-xl border border-brand-secondary/30 bg-white p-3 sm:p-4">
              <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-secondary text-white sm:h-9 sm:w-9">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[18px] sm:w-[18px]">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-brand-primary">
                  {t.newsletter.subscribedTitle}
                </p>
                <p className="mt-0.5 text-xs text-gray-600">
                  {t.newsletter.subscribedMessage}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2" noValidate>
              <label htmlFor="footer-email" className="sr-only">
                {t.newsletter.emailLabel}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder={t.newsletter.placeholder}
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "footer-email-error" : undefined}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary sm:px-4"
                />
                <button
                  type="submit"
                  className="w-full whitespace-nowrap rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary sm:w-auto"
                >
                  {t.newsletter.subscribe}
                </button>
              </div>
              {error && (
                <p id="footer-email-error" className="text-xs text-brand-primary">
                  {error}
                </p>
              )}
              <p className="text-xs text-gray-500">
                {t.newsletter.privacyPrefix}{" "}
                <Link to="/privacy" className="text-brand-primary hover:underline">
                  {t.newsletter.privacyLink}
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Footer column ---------- */
function FooterColumn({ title, links }) {
  const { t } = useLanguage();
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm sm:mt-4">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="break-words text-gray-700 transition hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary focus-visible:underline"
            >
              {t.footer[link.labelKey]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Social ---------- */
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
    >
      {icon}
    </a>
  );
}

/* ---------- Icons ---------- */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand-primary">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand-primary">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand-primary">
      <path d="M12 22s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 3.5A11.9 11.9 0 003.4 20.6L2 22l1.4-1.4A11.9 11.9 0 1020.5 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.4A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2-1.4-.5-.6-.8-1.3-.9-1.6 0-.1.1-.3.2-.4l.4-.5c.1-.1.1-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.7 2.7 4.2 3.8.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.4-.2z"
        fill="currentColor"
      />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" fill="currentColor" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.7L5.3 22H2.2l7.7-8.8L1.5 2h6.8l4.7 6.2L18.9 2zm-1.1 18h1.8L7.3 3.8H5.4L17.8 20z" fill="currentColor" />
    </svg>
  );
}