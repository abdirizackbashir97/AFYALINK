import React from "react";
import { useLanguage } from "../../context/LanguageContext";

/* ---------- Step icons ---------- */
const ICONS = {
  language: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 3 2.7 15 0 18" />
      <path d="M12 3c-2.7 3-2.7 15 0 18" />
    </svg>
  ),
  explore: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 22V5.5z" />
      <path d="M8 7h7" />
      <path d="M8 11h7" />
      <path d="M8 15h4" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z" />
      <circle cx="12" cy="11" r="2.6" />
    </svg>
  ),
  reminders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M10.3 21a2 2 0 0 0 3.4 0" />
    </svg>
  ),
};

const STEP_META = [
  { key: "step1", fallback: "Select Language", icon: "language",  accent: "from-lime-300 to-emerald-300" },
  { key: "step2", fallback: "Explore Info",     icon: "explore",   accent: "from-emerald-300 to-teal-300" },
  { key: "step3", fallback: "Find Services",    icon: "services",  accent: "from-teal-300 to-green-300" },
  { key: "step4", fallback: "Use Reminders",    icon: "reminders", accent: "from-green-300 to-lime-300" },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const a = t.about || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-green-800 to-teal-800 py-20 sm:py-28 text-white">
      {/* Ambient glows — brighter greens */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-lime-300/25 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-50 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 animate-pulse" />
            Simple · Secure · Free
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {a.howTitle || "How AfyaLink Works"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-50/85 sm:text-lg">
            {a.howDesc ||
              "Four calm steps from opening the app to never missing a visit. No downloads, no forms, no barriers."}
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connector — desktop */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px md:block"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-gradient-to-r from-lime-300/0 via-lime-200/70 to-lime-300/0" />
          </div>

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {STEP_META.map((meta, i) => {
              const label = a[meta.key] || meta.fallback;
              return (
                <li key={meta.key} className="group relative flex flex-col items-center text-center">
                  {/* Circle badge */}
                  <div className="relative">
                    <span
                      className={`absolute inset-0 -m-2 rounded-full bg-gradient-to-br ${meta.accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-80`}
                      aria-hidden="true"
                    />

                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${meta.accent} text-emerald-950 shadow-xl ring-4 ring-emerald-900/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105`}
                    >
                      <span className="h-7 w-7">{ICONS[meta.icon]}</span>

                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-[11px] font-bold text-lime-200 ring-2 ring-lime-300/70">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="mt-5 text-base font-bold leading-snug text-white sm:text-lg">
                    {label}
                  </h3>

                  {/* Underline */}
                  <span
                    className={`mt-3 block h-0.5 w-8 rounded-full bg-gradient-to-r ${meta.accent} transition-all duration-300 group-hover:w-14`}
                    aria-hidden="true"
                  />

                  {/* Mobile connector */}
                  {i < STEP_META.length - 1 && (
                    <span
                      className="mt-8 h-8 w-px bg-gradient-to-b from-lime-200/60 to-white/0 md:hidden"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Footer chips */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-widest text-emerald-50/80">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
            No downloads
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Free forever
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Privacy first
          </span>
        </div>
      </div>
    </section>
  );
}