import React from "react";
import { useLanguage } from "../../context/LanguageContext";

/* ---------- Icons (inline SVGs, no extra deps) ---------- */
const ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  accessible: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  inclusive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <path d="M15 20c0-2.3 1.6-4 3.8-4 1.6 0 2.9.8 3.2 2" />
    </svg>
  ),
  reliable: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9L12 3z" />
    </svg>
  ),
};

const CARD_META = [
  {
    key: "commit1",
    fallback: "Accessible Information",
    icon: "accessible",
    tag: "01",
    accent: "from-sky-500 to-cyan-500",
    ring: "ring-sky-100",
    chip: "bg-sky-50 text-sky-700",
  },
  {
    key: "commit2",
    fallback: "Inclusive Design",
    icon: "inclusive",
    tag: "02",
    accent: "from-emerald-500 to-teal-500",
    ring: "ring-emerald-100",
    chip: "bg-emerald-50 text-emerald-700",
  },
  {
    key: "commit3",
    fallback: "Privacy First",
    icon: "shield",
    tag: "03",
    accent: "from-violet-500 to-fuchsia-500",
    ring: "ring-violet-100",
    chip: "bg-violet-50 text-violet-700",
  },
  {
    key: "commit4",
    fallback: "Reliable Guidance",
    icon: "reliable",
    tag: "04",
    accent: "from-amber-500 to-orange-500",
    ring: "ring-amber-100",
    chip: "bg-amber-50 text-amber-700",
  },
];

/* ---------- Component ---------- */
export default function Commitment() {
  const { t } = useLanguage();
  const a = t.about || {};

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Trusted by families
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {a.commitTitle || "Our Commitment"}
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            {a.whyDesc || "Four promises that shape every article, appointment, and conversation on AfyaLink."}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CARD_META.map((meta) => {
            const label = a[meta.key] || meta.fallback;
            return (
              <article
                key={meta.key}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ${meta.ring} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Gradient top edge */}
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${meta.accent} opacity-80`}
                  aria-hidden="true"
                />

                {/* Hover gradient wash */}
                <span
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]`}
                  aria-hidden="true"
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon badge */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${meta.accent} text-white shadow-md shadow-slate-200 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <span className="h-6 w-6">{ICONS[meta.icon]}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold tracking-tight text-slate-900">
                        {label}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-widest ${meta.chip}`}
                      >
                        {meta.tag}
                      </span>
                    </div>

                    {/* Subtle underline that expands on hover */}
                    <span
                      className={`mt-3 block h-px w-8 bg-gradient-to-r ${meta.accent} transition-all duration-300 group-hover:w-16`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 flex items-start justify-center gap-3 rounded-xl border border-amber-200/70 bg-amber-50/60 px-4 py-3 text-sm text-amber-900 sm:mx-auto sm:max-w-2xl">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          <p className="font-medium leading-relaxed">
            {a.disclaimer ||
              "AfyaLink does not replace qualified healthcare professionals."}
          </p>
        </div>
      </div>
    </section>
  );
}