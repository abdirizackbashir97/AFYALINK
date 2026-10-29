import React from "react";
import { useLanguage } from "../../context/LanguageContext";

/* ---------- Icons ---------- */
const ICONS = {
  mother: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  baby: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 14.5c.7 1 1.5 1.5 2.5 1.5s1.8-.5 2.5-1.5" />
    </svg>
  ),
  father: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
    </svg>
  ),
  caregiver: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="4" />
      <path d="M3 21v-2a6 6 0 0 1 12 0v2" />
      <path d="M18 8v6" />
      <path d="M15 11h6" />
    </svg>
  ),
  health: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 3v6a6 6 0 0 0 12 0V3" />
      <path d="M4 3h2" />
      <path d="M14 3h2" />
      <circle cx="18" cy="14" r="3" />
      <path d="M12 15v3a5 5 0 0 0 5 5h2" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  rural: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v11h14V10" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  urban: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="6" height="13" rx="1" />
      <rect x="10" y="3" width="6" height="18" rx="1" />
      <rect x="17" y="11" width="4" height="10" rx="1" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  ),
};

/* ---------- Component ---------- */
export default function WhoWeServe() {
  const { t } = useLanguage();
  const a = t.about || {};

  const categories = [
    {
      number: "01",
      title: a.serveGroup1 || "Families We Support",
      subtitle: a.serveGroup1Desc || "The heart of everything we do",
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
      glow: "bg-emerald-400/30",
      iconSoft: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      headerIcon: ICONS.mother,
      items: [
        { key: "serve1", fallback: "Mothers",    hintKey: "serve1Hint", icon: "mother",    hint: "Antenatal to postnatal" },
        { key: "serve2", fallback: "Newborns",   hintKey: "serve2Hint", icon: "baby",      hint: "First year of life" },
        { key: "serve3", fallback: "Fathers",    hintKey: "serve3Hint", icon: "father",    hint: "Supportive partners" },
        { key: "serve4", fallback: "Caregivers", hintKey: "serve4Hint", icon: "caregiver", hint: "Family & guardians" },
      ],
    },
    {
      number: "02",
      title: a.serveGroup2 || "Community & Care Workers",
      subtitle: a.serveGroup2Desc || "The network that makes it work",
      accent: "from-teal-500 via-lime-500 to-emerald-500",
      glow: "bg-teal-400/30",
      iconSoft: "bg-teal-50 text-teal-600 ring-teal-100",
      headerIcon: ICONS.community,
      items: [
        { key: "serve5", fallback: "Health Workers",           hintKey: "serve5Hint", icon: "health",    hint: "Clinical professionals" },
        { key: "serve6", fallback: "Community Health Workers", hintKey: "serve6Hint", icon: "community", hint: "Frontline in every village" },
        { key: "serve7", fallback: "Rural Families",           hintKey: "serve7Hint", icon: "rural",     hint: "Remote communities" },
        { key: "serve8", fallback: "Urban Families",           hintKey: "serve8Hint", icon: "urban",     hint: "Growing towns & cities" },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Mesh gradient backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-white" />
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />
      </div>

      {/* Dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            8 groups · one mission
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {a.serveTitle || "Who We Serve"}
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-12 rounded-full bg-emerald-500" />
            <span className="h-1 w-6 rounded-full bg-teal-400" />
            <span className="h-1 w-3 rounded-full bg-lime-400" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {a.serveDesc || "AfyaLink is built for everyone who cares for a mother or child."}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {categories.map((cat) => (
            <article
              key={cat.number}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)] hover:border-emerald-200"
            >
              {/* Top gradient bar */}
              <span
                className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${cat.accent}`}
                aria-hidden="true"
              />

              {/* Floating glow — appears on hover */}
              <span
                className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full ${cat.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
                aria-hidden="true"
              />

              {/* Big number watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 right-4 select-none text-[110px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-emerald-100/80"
              >
                {cat.number}
              </span>

              <div className="relative flex flex-1 flex-col p-7 sm:p-9">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.accent} text-white shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}
                  >
                    <span className="h-6 w-6">{cat.headerIcon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-base text-slate-600">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-100 via-slate-200 to-transparent" />

                {/* Item rows */}
                <ul className="mt-2 flex flex-col">
                  {cat.items.map((item, i) => (
                    <li
                      key={item.key}
                      className={`group/item relative flex items-center gap-4 py-4 ${
                        i < cat.items.length - 1 ? "border-b border-slate-100/80" : ""
                      }`}
                    >
                      {/* Icon */}
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${cat.iconSoft} ring-1 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-sm`}
                      >
                        <span className="h-5 w-5">{ICONS[item.icon]}</span>
                      </span>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-800 sm:text-base">
                          {a[item.key] || item.fallback}
                        </p>
                        <p className="mt-1 truncate text-sm leading-snug text-slate-600 sm:text-[15px]">
                          {a[item.hintKey] || item.hint}
                        </p>
                      </div>

                      {/* Arrow — slides in on hover */}
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 -translate-x-2 text-emerald-500 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      >
                        {ICONS.arrow}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            8 Groups
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            3 Languages
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            One Mission
          </span>
        </div>
      </div>
    </section>
  );
}