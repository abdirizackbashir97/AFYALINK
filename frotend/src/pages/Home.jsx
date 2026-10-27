import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import heroMain from "../assets/Hero.png";
import hero1 from "../assets/Hero1.png";
import hero2 from "../assets/Hero2.png";

const HERO_SLIDES = [heroMain, hero1, hero2];
const SLIDE_DURATION = 5000;

const SERVICES = [
  { key: "maternal", href: "/maternal", Icon: MaternalIcon },
  { key: "baby", href: "/baby", Icon: BabyIcon },
  { key: "mental", href: "/mental-health", Icon: MentalIcon },
  { key: "info", href: "/health-info", Icon: InfoIcon },
  { key: "facilities", href: "/facilities", Icon: FacilityIcon },
  { key: "appointments", href: "/appointments", Icon: CalendarIcon },
];

/* ============ DEFAULT EXPORT ============ */
export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="bg-white">
      <Hero h={h} />
      <Stats h={h} />
      <Services h={h} />
      <HowItWorks h={h} />
      <Testimonial h={h} />
      <FinalCTA h={h} />
    </div>
  );
}

/* ============ HERO — images + content auto-change every 5s ============ */
function Hero({ h }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  // Auto-advance every 5s
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused]);

  // Fade content out → in whenever slide changes
  useEffect(() => {
    setContentVisible(false);
    const t = setTimeout(() => setContentVisible(true), 120);
    return () => clearTimeout(t);
  }, [activeSlide]);

  // Current slide content (fallback to base hero if slides array not ready)
  const slide = h.hero.slides?.[activeSlide] ?? h.hero;

  return (
    <section
      className="relative isolate min-h-[80vh] overflow-hidden rounded-b-3xl bg-brand-primary shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Rotating background images */}
      {HERO_SLIDES.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            i === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Light teal tint */}
      <div aria-hidden="true" className="absolute inset-0 bg-brand-primary/35" />

      {/* Radial darkening — behind text */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at center, rgba(15,118,110,0.75) 0%, rgba(15,118,110,0.45) 40%, rgba(15,118,110,0.05) 75%, transparent 100%)",
        }}
      />

      {/* Top/bottom fades */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-primary/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-primary/60 to-transparent"
      />

      {/* Content — fades when slide changes */}
      <div
        className={`relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-20 pb-28 text-center transition-all duration-500 ease-out sm:px-6 lg:px-8 ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-brand-secondary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary drop-shadow">
            {slide.kicker}
          </span>
          <span className="h-px w-10 bg-brand-secondary" />
        </div>

        {/* Headline */}
        <h1
          className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{
            textShadow:
              "0 2px 24px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          {slide.titleLine1}{" "}
          <span className="text-brand-secondary">{slide.titleHighlight}</span>{" "}
          {slide.titleLine2}
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
        >
          {slide.description}
        </p>

        {/* CTAs — slide-specific destination */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={slide.ctaPrimaryHref}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-brand-secondary px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_-10px_rgba(16,185,129,0.8)] transition hover:border-white hover:bg-white hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {slide.ctaPrimary}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to={slide.ctaSecondaryHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/15 px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md transition hover:border-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          >
            {slide.ctaSecondary}
          </Link>
        </div>

        {/* Trust line — same for every slide */}
        <ul
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          <ProofItem label={h.hero.proofFree} />
          <ProofItem label={h.hero.proofLanguages} />
          <ProofItem label={h.hero.proofFacilities} />
        </ul>
      </div>

      {/* Slide dots */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === activeSlide ? "true" : "false"}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeSlide
                ? "w-8 bg-brand-secondary"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* Small reusable proof item */
function ProofItem({ label }) {
  return (
    <li className="flex items-center gap-2 whitespace-nowrap">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-secondary/20">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-brand-secondary"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{label}</span>
    </li>
  );
}

/* ============ STATS STRIP ============ */
function Stats({ h }) {
  const items = [
    { value: h.stats.mothersValue, label: h.stats.mothersLabel },
    { value: h.stats.facilitiesValue, label: h.stats.facilitiesLabel },
    { value: h.stats.languagesValue, label: h.stats.languagesLabel },
    { value: h.stats.topicsValue, label: h.stats.topicsLabel },
  ];

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-3xl font-bold text-brand-primary sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
function Services({ h }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0F766E 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-secondary" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {h.services.kicker}
            </p>
            <span className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {h.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {h.services.subtitle}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ key, href, Icon }, index) => {
            const data = h.services[key];
            const num = String(index + 1).padStart(2, "0");

            return (
              <li key={key}>
                <Link
                  to={href}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-transparent to-brand-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="absolute right-5 top-5 text-xs font-bold tracking-wider text-gray-300 transition-colors group-hover:text-brand-secondary">
                    {num}
                  </span>
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-secondary/10 text-brand-primary shadow-sm transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-secondary/30">
                    <span className="h-7 w-7">
                      <Icon />
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-lg font-bold text-brand-primary">
                    {data.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-gray-600">
                    {data.description}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    {h.services.learnMore}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-secondary transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ============ HOW IT WORKS ============ */
function HowItWorks({ h }) {
  const steps = [
    { num: "01", title: h.howItWorks.step1Title, desc: h.howItWorks.step1Description },
    { num: "02", title: h.howItWorks.step2Title, desc: h.howItWorks.step2Description },
    { num: "03", title: h.howItWorks.step3Title, desc: h.howItWorks.step3Description },
  ];

  return (
    <section className="bg-brand-primary/5">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">
            {h.howItWorks.kicker}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            {h.howItWorks.title}
          </h2>
          <p className="mt-3 text-base text-gray-600">{h.howItWorks.subtitle}</p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.num}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-primary text-base font-bold text-white">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ TESTIMONIAL ============ */
function Testimonial({ h }) {
  const initial = (h.testimonial.author || "A").trim().charAt(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-brand-primary p-8 text-white shadow-lg sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">
            {h.testimonial.kicker}
          </p>
          <blockquote className="mt-4 text-xl leading-relaxed sm:text-2xl">
            “{h.testimonial.quote}”
          </blockquote>
          <footer className="mt-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-base font-bold text-brand-primary">
              {initial}
            </div>
            <div>
              <p className="font-semibold">{h.testimonial.author}</p>
              <p className="text-sm text-white/75">{h.testimonial.role}</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCTA({ h }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-secondary/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">
            {h.cta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-700">
            {h.cta.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              {h.cta.primary}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              {h.cta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ICONS ============ */
function MaternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      <path
        d="M12 21s-7-4.35-9-8.5C1.5 9 3 5.5 6.5 5c2-.3 3.6.7 4.5 2 .9-1.3 2.5-2.3 4.5-2C19 5.5 20.5 9 19 12.5 17 16.65 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BabyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 13.5s1.3 2 3.5 2 3.5-2 3.5-2M9 10h.01M15 10h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MentalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      <path
        d="M9 20V10a3 3 0 016 0v10M9 14h6M12 4v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 9h8M8 13h8M8 17h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FacilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      <path
        d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 10h17M8 3v4M16 3v4M12 14l1.8 1.8L17 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}