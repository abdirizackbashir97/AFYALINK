import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function CareCards() {
  const { t } = useLanguage();
  const a = t.about || {};

  const cards = [
    {
      number: "01",
      title: a.card1 || "Pregnancy Care",
      desc: a.card1d || "Guidance for a healthy pregnancy journey.",
      link: "/maternal",
      Icon: PregnancyIcon,
      tag: "Antenatal",
      accent: "from-emerald-500 to-teal-500",
      accentText: "text-emerald-600",
      accentBg: "bg-emerald-50",
      accentRing: "ring-emerald-100",
    },
    {
      number: "02",
      title: a.card2 || "Newborn Care",
      desc: a.card2d || "Essential tips for your baby's first months.",
      link: "/baby",
      Icon: NewbornIcon,
      tag: "First year",
      accent: "from-teal-500 to-cyan-500",
      accentText: "text-teal-600",
      accentBg: "bg-teal-50",
      accentRing: "ring-teal-100",
    },
    {
      number: "03",
      title: a.card3 || "Postnatal Care",
      desc: a.card3d || "Support for mothers after delivery.",
      link: "/maternal",
      Icon: PostnatalIcon,
      tag: "Recovery",
      accent: "from-lime-500 to-emerald-500",
      accentText: "text-lime-700",
      accentBg: "bg-lime-50",
      accentRing: "ring-lime-100",
    },
    {
      number: "04",
      title: a.card4 || "Healthcare Services",
      desc: a.card4d || "Find clinics and facilities near you.",
      link: "/facilities",
      Icon: HospitalIcon,
      tag: "Nearby",
      accent: "from-cyan-500 to-sky-500",
      accentText: "text-cyan-600",
      accentBg: "bg-cyan-50",
      accentRing: "ring-cyan-100",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* LEFT — Sticky editorial intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Care Journey · 4 Stages
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {a.careTitle || "Maternal & Newborn Care"}
            </h2>

            {/* Editorial rule */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1 w-10 rounded-full bg-emerald-500" />
              <span className="h-1 w-5 rounded-full bg-teal-400" />
              <span className="h-1 w-2 rounded-full bg-lime-400" />
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              {a.careDesc ||
                "Four connected stages — from the first trimester through your baby's first year — each one supported by trusted, local guidance you can act on."}
            </p>

            {/* Trust list */}
            <ul className="mt-10 space-y-3">
              {[
                "Trusted by community health workers",
                "Available in English · Kiswahili · Somali",
                "Free to access, always",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Editorial footer mark */}
            <div className="mt-12 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:flex">
              <span className="h-px w-10 bg-slate-300" />
              AfyaLink care journey
            </div>
          </div>

          {/* RIGHT — Numbered editorial list */}
          <ol className="relative flex flex-col">
            {/* Vertical connector line */}
            <span
              aria-hidden="true"
              className="absolute left-7 top-8 bottom-8 hidden w-px bg-gradient-to-b from-emerald-200/0 via-slate-200 to-teal-200/0 sm:block"
            />

            {cards.map((card, i) => {
              const { Icon } = card;
              return (
                <li key={card.number} className="relative">
                  <Link
                    to={card.link}
                    className="group relative flex items-start gap-5 rounded-2xl py-6 transition-all duration-300 hover:bg-white/90 hover:shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 sm:gap-7 sm:py-8"
                  >
                    {/* Number + dot */}
                    <div className="relative flex shrink-0 flex-col items-center sm:pl-1">
                      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:border-emerald-300 group-hover:bg-emerald-50">
                        <span className="text-[15px] font-black tracking-tight text-slate-400 transition-colors duration-300 group-hover:text-emerald-600">
                          {card.number}
                        </span>
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pt-1">
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Category icon */}
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.accentBg} ${card.accentText} ring-1 ${card.accentRing} transition-all duration-300 group-hover:scale-110`}
                        >
                          <span className="h-4 w-4">
                            <Icon />
                          </span>
                        </span>

                        {/* Tag */}
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-700 sm:text-2xl">
                        {card.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600">
                        {card.desc}
                      </p>

                      {/* Learn more row */}
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-600">
                        Learn more
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>

                    {/* Chevron on the far right */}
                    <span
                      aria-hidden="true"
                      className="mt-1 hidden h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-500 sm:flex"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>

                  {/* Divider */}
                  {i < cards.length - 1 && (
                    <div className="ml-20 h-px bg-gradient-to-r from-slate-100 via-slate-200/80 to-transparent sm:ml-24" />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ============ SVG ICONS (unchanged) ============ */

function PregnancyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true">
      <path d="M12 21s-7-4.35-9-8.5C1.5 9 3 5.5 6.5 5c2-.3 3.6.7 4.5 2 .9-1.3 2.5-2.3 4.5-2C19 5.5 20.5 9 19 12.5 17 16.65 12 21 12 21z" />
      <path d="M9 12h2l1.5-2 2 4 1.5-2h2" />
    </svg>
  );
}

function NewbornIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 14.5s1.3 2 3 2 3-2 3-2" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16.5" r="1.5" />
    </svg>
  );
}

function PostnatalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M9 21V9l6-6 6 6v12" />
      <path d="M14 13h4" />
      <path d="M14 17h4" />
      <path d="M6 13v8" />
      <path d="M9.5 17h-7" />
    </svg>
  );
}