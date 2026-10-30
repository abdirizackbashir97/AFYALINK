import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import whoWeAreImg from "../assets/who-we-are.png";

/* ============ SVG Icon Library ============ */
const ICONS = {
  target: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
  eye: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>),
  shield: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>),
  shieldCheck: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M8 12l3 3 5-6" /></svg>),
  globe: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>),
  users: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
  heartHands: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" /></svg>),
  arrow: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>),
  check: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>),
  spark: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.5 2.4-7.4L2 9.6h7.6z" /></svg>),
  quote: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.4A1.83 1.83 0 0 1 7.17 9.4V6Zm11 0A5.17 5.17 0 0 0 13 11.17V18h6.83v-6.83h-3.43A1.83 1.83 0 0 1 18.17 9.4V6Z" /></svg>),
  star: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.6 6.9L22 9.9l-5.6 4.7 1.7 7.1L12 17.6 5.9 21.7l1.7-7.1L2 9.9l7.4-1z" /></svg>),
  stethoscope: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M4 3v6a6 6 0 0 0 12 0V3" /><path d="M4 3h2" /><path d="M14 3h2" /><circle cx="18" cy="14" r="3" /><path d="M12 15v3a5 5 0 0 0 5 5h2" /></svg>),
  book: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 22V5.5z" /><path d="M8 7h7" /><path d="M8 11h7" /><path d="M8 15h4" /></svg>),
  alert: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>),
  linkedin: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>),
};

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 items-center justify-center rounded-full bg-slate-900 px-2.5 text-[10px] font-black tracking-[0.15em] text-white">{number}</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">{label}</span>
      <span className="h-px w-8 bg-slate-300" aria-hidden="true" />
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="flex items-center gap-2 py-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <span className="h-1 w-1 rounded-full bg-emerald-400" />
        <span className="h-1 w-1 rounded-full bg-teal-400" />
        <span className="h-1 w-1 rounded-full bg-lime-400" />
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  );
}

export default function WhoWeAre() {
  const { t } = useLanguage();
  const w = t.about?.whoWeArePage || {};
  const teamPage = t.about?.ourTeamPage || {};

  const stats = [
    { value: w.stat1Val || "12,000+", label: w.stat1 || "Mothers Reached", progress: 85 },
    { value: w.stat2Val || "45+",     label: w.stat2 || "Partner Clinics",  progress: 65 },
    { value: w.stat3Val || "120+",    label: w.stat3 || "Health Topics",    progress: 90 },
    { value: w.stat4Val || "3",       label: w.stat4 || "Languages",        progress: 100 },
  ];

  const values = [
    { key: "val1", title: w.val1 || "Trusted",     desc: w.val1Desc || "...", Icon: ICONS.shield,     accent: "from-emerald-500 via-teal-500 to-cyan-500", glow: "bg-emerald-400/40", tag: w.val1Tag || "Evidence-based" },
    { key: "val2", title: w.val2 || "Accessible",  desc: w.val2Desc || "...", Icon: ICONS.globe,      accent: "from-teal-500 via-cyan-500 to-sky-500",     glow: "bg-teal-400/40",    tag: w.val2Tag || "Inclusive" },
    { key: "val3", title: w.val3 || "Community",   desc: w.val3Desc || "...", Icon: ICONS.users,      accent: "from-lime-500 via-emerald-500 to-teal-500", glow: "bg-lime-400/40",    tag: w.val3Tag || "Local" },
    { key: "val4", title: w.val4 || "Inclusive",   desc: w.val4Desc || "...", Icon: ICONS.heartHands, accent: "from-cyan-500 via-sky-500 to-teal-500",     glow: "bg-cyan-400/40",    tag: w.val4Tag || "Multilingual" },
  ];

  const phases = [
    { num: "01", title: w.phase1Title || "Community Research",   desc: w.phase1Desc || "...", tag: w.phase1Tag || "Listen" },
    { num: "02", title: w.phase2Title || "Platform Development", desc: w.phase2Desc || "...", tag: w.phase2Tag || "Build" },
    { num: "03", title: w.phase3Title || "Future Expansion",     desc: w.phase3Desc || "...", tag: w.phase3Tag || "Grow" },
  ];

  const approachSteps = [
    { title: w.approach1Title || "Community-led",         desc: w.approach1Desc || "...", Icon: ICONS.users },
    { title: w.approach2Title || "Culturally grounded",   desc: w.approach2Desc || "...", Icon: ICONS.globe },
    { title: w.approach3Title || "Privacy by default",    desc: w.approach3Desc || "...", Icon: ICONS.shield },
    { title: w.approach4Title || "Iterate with feedback", desc: w.approach4Desc || "...", Icon: ICONS.spark },
  ];

  const partners = [
    { name: w.partner1 || "Garissa County Health",  role: w.partner1Role || "County Partner",   initials: "GC" },
    { name: w.partner2 || "Mandera Clinic Network", role: w.partner2Role || "Clinic Partner",   initials: "MC" },
    { name: w.partner3 || "CHW Alliance Kenya",     role: w.partner3Role || "Community Partner", initials: "CA" },
    { name: w.partner4 || "University of Nairobi",  role: w.partner4Role || "Research Partner", initials: "UN" },
    { name: w.partner5 || "Ministry of Health",     role: w.partner5Role || "Government",       initials: "MH" },
    { name: w.partner6 || "UNFPA Kenya",            role: w.partner6Role || "Agency",           initials: "UK" },
  ];

  const voices = [
    { quote: w.voice1Quote || "...", name: w.voice1Name || "Halima A.", role: w.voice1Role || "...", location: w.voice1Location || "...", accent: "from-emerald-500 via-teal-500 to-cyan-500" },
    { quote: w.voice2Quote || "...", name: w.voice2Name || "Mohamed I.", role: w.voice2Role || "...", location: w.voice2Location || "...", accent: "from-teal-500 via-cyan-500 to-sky-500" },
    { quote: w.voice3Quote || "...", name: w.voice3Name || "Abdi K.", role: w.voice3Role || "...", location: w.voice3Location || "...", accent: "from-lime-500 via-emerald-500 to-teal-500" },
    { quote: w.voice4Quote || "...", name: w.voice4Name || "Fatuma H.", role: w.voice4Role || "...", location: w.voice4Location || "...", accent: "from-cyan-500 via-sky-500 to-teal-500" },
    { quote: w.voice5Quote || "...", name: w.voice5Name || "Amina S.", role: w.voice5Role || "...", location: w.voice5Location || "...", accent: "from-emerald-500 via-lime-500 to-teal-500" },
    { quote: w.voice6Quote || "...", name: w.voice6Name || "Dr. Ibrahim M.", role: w.voice6Role || "...", location: w.voice6Location || "...", accent: "from-teal-500 via-emerald-500 to-lime-500" },
  ];

  const team = [
    { name: teamPage.devName || "Abdirizack Bashor", role: teamPage.devRole || "...", bio: teamPage.devDesc || "...", initials: "AB", accent: "from-emerald-500 via-teal-500 to-cyan-500", linkedin: "#" },
    { name: w.team1Name || "Dr. Amina Yusuf",         role: w.team1Role || "...",     bio: w.team1Bio || "...",     initials: "AY", accent: "from-teal-500 via-cyan-500 to-sky-500",     linkedin: "#" },
    { name: w.team2Name || "Yasmin Hassan",           role: w.team2Role || "...",     bio: w.team2Bio || "...",     initials: "YH", accent: "from-lime-500 via-emerald-500 to-teal-500", linkedin: "#" },
  ];

  const reviewPoints = [
    { title: w.review1Title || "...", desc: w.review1Desc || "...", Icon: ICONS.stethoscope, accent: "from-emerald-500 via-teal-500 to-cyan-500", soft: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
    { title: w.review2Title || "...", desc: w.review2Desc || "...", Icon: ICONS.book,        accent: "from-teal-500 via-cyan-500 to-sky-500",     soft: "bg-teal-50 text-teal-600 ring-teal-100" },
    { title: w.review3Title || "...", desc: w.review3Desc || "...", Icon: ICONS.alert,       accent: "from-amber-500 via-orange-500 to-red-500",  soft: "bg-amber-50 text-amber-700 ring-amber-100" },
  ];

  const languages = [
    { code: "EN", name: w.lang1Name || "English",   greeting: w.lang1Greeting || "Hello",   nativeName: "English",   accent: "from-emerald-500 via-teal-500 to-cyan-500", glow: "bg-emerald-400/40" },
    { code: "SW", name: w.lang2Name || "Kiswahili", greeting: w.lang2Greeting || "Habari",  nativeName: "Kiswahili", accent: "from-teal-500 via-cyan-500 to-sky-500",      glow: "bg-teal-400/40" },
    { code: "SO", name: w.lang3Name || "Somali",    greeting: w.lang3Greeting || "Salaam",  nativeName: "Soomaali",  accent: "from-lime-500 via-emerald-500 to-teal-500",  glow: "bg-lime-400/40" },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-white" />
          <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-teal-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t.about?.aboutMain || "About AfyaLink"}
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                {w.title || "Who We Are"}
              </h1>

              <div className="mt-6 flex items-center gap-1.5">
                <span className="h-1 w-12 rounded-full bg-emerald-500" />
                <span className="h-1 w-6 rounded-full bg-teal-400" />
                <span className="h-1 w-3 rounded-full bg-lime-400" />
              </div>

              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-emerald-700 sm:text-xl">
                {w.subtitle || "A community-first approach to maternal and newborn health."}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {w.description || "AfyaLink is a community-focused health information platform..."}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200/70 pt-8">
                {stats.slice(0, 3).map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black tracking-tight text-slate-900">{s.value}</span>
                    <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link to="/about/our-team" className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700">
                  {w.joinBtn2 || "Explore Our Team"}
                  <span className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5">{ICONS.arrow}</span>
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700">
                  {w.joinBtn1 || "Contact Us"}
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-200/50 via-teal-100/50 to-lime-100/30 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-emerald-900/10">
                <img src={whoWeAreImg} alt="AfyaLink community" className="h-[420px] w-full object-cover sm:h-[520px]" />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:-left-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <span className="h-5 w-5">{ICONS.heartHands}</span>
                  </span>
                  <div>
                    <p className="text-xl font-black tracking-tight text-slate-900">{stats[0].value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">{w.heroFamiliesLabel || "Families served"}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 right-4 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <span className="h-3.5 w-3.5">{ICONS.check}</span>
                  </span>
                  <p className="text-xs font-bold text-slate-800">{w.heroTrustedLabel || "Trusted by CHWs"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 2. OUR STORY ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel number="01" label={w.labelOurStory || "Our Story"} />
              <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                {w.storyTitle || "Born from a real gap in care."}
              </h2>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-emerald-500" />
                <span className="h-1 w-5 rounded-full bg-teal-400" />
                <span className="h-1 w-2 rounded-full bg-lime-400" />
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                <span className="float-left mr-3 mt-1 text-6xl font-black leading-none text-emerald-600">A</span>
                {w.storyDesc || "fyaLink began with a simple observation..."}
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                {w.storyDesc2 || "We started with research..."}
              </p>

              <div className="mt-10 rounded-2xl border-l-4 border-emerald-500 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-lg font-medium italic leading-relaxed text-slate-700">
                  "{w.storyQuote || "If a mother can find trusted health guidance in her own language, she doesn't need to be told what to do — she already knows."}"
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-emerald-700">
                  {w.storyQuoteAttribution || "— AfyaLink founding principle"}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: w.storyPillar1Label || "Rooted",    desc: w.storyPillar1Desc || "Local research first" },
                  { label: w.storyPillar2Label || "Practical", desc: w.storyPillar2Desc || "Actionable guidance" },
                  { label: w.storyPillar3Label || "Ongoing",   desc: w.storyPillar3Desc || "Improved weekly" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-black uppercase tracking-[0.15em] text-emerald-700">{item.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 3. MISSION & VISION ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="02" label={w.labelPurpose || "Purpose · Direction"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              {w.missionVisionHeading || "What drives us forward"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { num: "01", title: w.missionTitle || "Our Mission", desc: w.missionDesc || "...", Icon: ICONS.target, accent: "from-emerald-500 via-teal-500 to-cyan-500", glow: "bg-emerald-400/40", tag: w.missionTag || "Every day" },
              { num: "02", title: w.visionTitle  || "Our Vision",  desc: w.visionDesc  || "...", Icon: ICONS.eye,    accent: "from-teal-500 via-cyan-500 to-sky-500",      glow: "bg-teal-400/40",    tag: w.visionTag || "Every family" },
            ].map((card) => (
              <article key={card.num} className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)] sm:p-10">
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${card.accent}`} aria-hidden="true" />
                <span className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full ${card.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`} aria-hidden="true" />
                <span aria-hidden="true" className="pointer-events-none absolute right-4 top-2 select-none text-[110px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-emerald-100/80">{card.num}</span>

                <div className="relative">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />{card.tag}
                  </span>
                  <div className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                    <span className="h-7 w-7">{card.Icon}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">{card.title}</h3>
                  <span className={`mt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r ${card.accent} transition-all duration-300 group-hover:w-16`} aria-hidden="true" />
                  <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 4. CORE VALUES ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="03" label={w.labelPrinciples || "The principles"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.valuesTitle || "Our Core Values"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.valuesSubtitle || "The principles that guide everything we build."}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <article key={v.key} className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)] sm:p-7">
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.accent}`} aria-hidden="true" />
                <span aria-hidden="true" className="pointer-events-none absolute right-3 top-2 select-none text-[72px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-emerald-100/80">0{i + 1}</span>
                <div className="relative flex flex-1 flex-col">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />{v.tag}
                  </span>
                  <div className={`mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.accent} text-white shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="h-6 w-6">{v.Icon}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-black tracking-tight text-slate-900">{v.title}</h3>
                  <span className={`mt-3 block h-0.5 w-8 rounded-full bg-gradient-to-r ${v.accent} transition-all duration-300 group-hover:w-14`} aria-hidden="true" />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. IMPACT STATS ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-green-800 to-teal-800 py-24 sm:py-32 text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center">
              <div className="flex items-center gap-3">
                <span className="flex h-7 items-center justify-center rounded-full bg-white/20 px-2.5 text-[10px] font-black tracking-[0.15em] text-white">04</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-100/90">{w.labelImpact || "Measured impact"}</span>
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              </div>
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">{w.statsTitle || "Our Impact So Far"}</h2>
            <p className="mt-5 text-base leading-relaxed text-emerald-50/85 sm:text-lg">{w.statsSubtitle || "Real numbers, real families..."}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15">
                <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">{s.value}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-100/90">{s.label}</p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/20">
                  <div className="h-full rounded-full bg-gradient-to-r from-lime-300 to-emerald-300 transition-all duration-700" style={{ width: `${s.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. JOURNEY ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="05" label={w.labelPath || "The path"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.journeyTitle || "The AfyaLink Journey"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.journeySubtitle || "How we are building a healthier future, step by step."}</p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-[60px] hidden h-0.5 bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 md:block" aria-hidden="true" />
            <div className="grid gap-8 md:grid-cols-3">
              {phases.map((p) => (
                <div key={p.num} className="group relative flex flex-col items-center text-center">
                  <div className="relative flex h-[120px] w-[120px] items-center justify-center">
                    <span className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border border-emerald-200 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:border-emerald-400">
                      <span className="text-2xl font-black tracking-tight text-emerald-600">{p.num}</span>
                    </span>
                  </div>
                  <span className="mt-4 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{p.tag}</span>
                  <div className="mt-5 w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-emerald-200 group-hover:shadow-xl">
                    <h3 className="text-lg font-black tracking-tight text-slate-900">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 7. OUR APPROACH ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel number="06" label={w.labelHowWeWork || "How we work"} />
              <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">{w.approachTitle || "Our Approach"}</h2>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-emerald-500" />
                <span className="h-1 w-5 rounded-full bg-teal-400" />
                <span className="h-1 w-2 rounded-full bg-lime-400" />
              </div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">{w.approachDesc || "We combine modern technology..."}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {approachSteps.map((step, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                  <span aria-hidden="true" className="pointer-events-none absolute -top-6 -right-4 select-none text-[80px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-emerald-100/80">0{i + 1}</span>
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-110">
                      <span className="h-5 w-5">{step.Icon}</span>
                    </div>
                    <h3 className="mt-5 text-base font-black tracking-tight text-slate-900">{step.title}</h3>
                    <span className="mt-3 block h-0.5 w-6 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-12" aria-hidden="true" />
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 8. COMMUNITY VOICE ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-10 shadow-lg sm:p-16">
            <span aria-hidden="true" className="absolute -top-2 left-6 text-[180px] leading-none text-emerald-100">
              <span className="h-24 w-24 block">{ICONS.quote}</span>
            </span>
            <div className="relative text-center">
              <div className="flex justify-center"><SectionLabel number="07" label={w.labelFromCommunity || "From the community"} /></div>
              <blockquote className="mt-8 text-2xl font-medium italic leading-relaxed text-slate-800 sm:text-3xl">
                "{w.testimonialQuote || "AfyaLink changed how I care for my family..."}"
              </blockquote>
              <div className="mt-10 flex items-center justify-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-base font-black text-white shadow-md">
                  {(w.testimonialAuthor || "Halima A.").charAt(0)}
                </span>
                <div className="text-left">
                  <p className="text-sm font-black tracking-tight text-slate-900">{w.testimonialAuthor || "Halima A."}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{w.testimonialRole || "Mother of two, Garissa County"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 9. VOICES GRID ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="08" label={w.labelCommunitySays || "What the community says"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.voicesTitle || "Voices from the families we serve"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.voicesDesc || "Real words from mothers, fathers, and community health workers..."}</p>
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (<span key={i} className="h-4 w-4 text-amber-400">{ICONS.star}</span>))}
              </div>
              <span className="text-sm font-black tracking-tight text-slate-900">4.9</span>
              <span className="text-xs font-medium text-slate-500">{w.reviewsCount || "· based on 500+ community reviews"}</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {voices.map((v, i) => (
              <article key={i} className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lg">
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.accent}`} aria-hidden="true" />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, s) => (<span key={s} className="h-3.5 w-3.5 text-amber-400">{ICONS.star}</span>))}
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">"{v.quote}"</p>
                <span className="mt-5 block h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" aria-hidden="true" />
                <div className="mt-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${v.accent} text-sm font-black text-white shadow-md`}>
                    {v.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black tracking-tight text-slate-900">{v.name}</p>
                    <p className="truncate text-xs font-semibold text-slate-500">{v.role} · {v.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 10. MEET THE TEAM ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="09" label={w.labelPeopleBehind || "The people behind AfyaLink"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.teamPreviewTitle || "Meet the people behind the platform"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.teamPreviewDesc || "A small, dedicated team..."}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <article key={i} className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lg">
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${member.accent}`} aria-hidden="true" />
                <div className="flex items-start justify-between">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-xl font-black tracking-tight text-white shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                    {member.initials}
                  </span>
                  <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600">
                    <span className="h-4 w-4">{ICONS.linkedin}</span>
                  </a>
                </div>
                <h3 className="mt-6 text-lg font-black tracking-tight text-slate-900">{member.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">{member.role}</p>
                <span className={`mt-4 block h-0.5 w-8 rounded-full bg-gradient-to-r ${member.accent}`} aria-hidden="true" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/about/our-team" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700">
              {w.teamPreviewCta || "Meet the full team"}
              <span className="h-4 w-4 transition-transform group-hover:translate-x-0.5">{ICONS.arrow}</span>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 11. MEDICAL REVIEW ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="10" label={w.labelMedicalReview || "Medical review · Safety"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.reviewTitle || "Health content you can trust"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.reviewSubtitle || "Every piece of content follows a clear review process..."}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviewPoints.map((rp, i) => (
              <article key={i} className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lg">
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${rp.accent}`} aria-hidden="true" />
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${rp.soft} ring-1 transition-all group-hover:scale-110`}>
                  <span className="h-6 w-6">{rp.Icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-black tracking-tight text-slate-900">{rp.title}</h3>
                <span className={`mt-3 block h-0.5 w-8 rounded-full bg-gradient-to-r ${rp.accent}`} aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{rp.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:flex-row sm:p-8">
            <div className="flex items-start gap-4 text-center sm:text-left">
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 sm:flex">
                <span className="h-5 w-5">{ICONS.shieldCheck}</span>
              </span>
              <div>
                <p className="text-base font-black tracking-tight text-slate-900">{w.reviewCtaTitle || "Read our full editorial policy"}</p>
                <p className="mt-1 text-sm text-slate-600">{w.reviewCtaDesc || "Transparency about who reviews our content..."}</p>
              </div>
            </div>
            <Link to="/about/editorial-policy" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-emerald-700">
              {w.reviewCtaBtn || "View policy"}
              <span className="h-4 w-4 transition-transform group-hover:translate-x-0.5">{ICONS.arrow}</span>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 12. LANGUAGES ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="11" label={w.labelLanguages || "Languages · Accessibility"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.languagesTitle || "Built in the languages families actually speak"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.languagesDesc || "AfyaLink is fully available in English, Kiswahili, and Somali..."}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {languages.map((lang) => (
              <article key={lang.code} className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lg">
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${lang.accent}`} aria-hidden="true" />
                <div className="relative flex flex-col items-center text-center">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${lang.accent} text-lg font-black tracking-tight text-white shadow-lg transition-transform group-hover:scale-105 group-hover:rotate-3`}>{lang.code}</span>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{lang.name}</p>
                  <p className="mt-3 text-4xl font-black tracking-tight text-slate-900">{lang.greeting}</p>
                  <span className={`mt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r ${lang.accent}`} aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold text-slate-500">{lang.nativeName}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{w.langTrust1 || "Screen-reader ready"}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{w.langTrust2 || "Large touch targets"}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-500" />{w.langTrust3 || "High-contrast text"}</span>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 13. PARTNERS ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="12" label={w.labelPartners || "Partners · Trust"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.partnersTitle || "Building this together"}</h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.partnersDesc || "AfyaLink is grounded in partnership..."}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-base font-black tracking-tight text-white shadow-md transition-transform group-hover:scale-105 group-hover:rotate-3">{p.initials}</span>
                  <div className="min-w-0">
                    <p className="truncate text-base font-black tracking-tight text-slate-900">{p.name}</p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{p.role}</p>
                  </div>
                </div>
                <span className="mt-4 block h-0.5 w-8 rounded-full bg-emerald-500 transition-all group-hover:w-16" aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{w.partnersTrust1 || "Community-reviewed"}</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{w.partnersTrust2 || "Privacy-first"}</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-500" />{w.partnersTrust3 || "Free forever"}</span>
          </div>
        </div>
      </section>

      {/* ═══════════ 14. CTA ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-700 via-green-800 to-teal-800 px-6 py-16 shadow-2xl sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 items-center justify-center rounded-full bg-white/20 px-2.5 text-[10px] font-black tracking-[0.15em] text-white">13</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-100/90">{w.labelGetInvolved || "Get involved"}</span>
                  <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                </div>
              </div>
              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{w.joinTitle || "Join Us in Making a Difference"}</h2>
              <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
                <span className="h-1 w-12 rounded-full bg-lime-300" />
                <span className="h-1 w-6 rounded-full bg-emerald-200" />
                <span className="h-1 w-3 rounded-full bg-teal-200" />
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">{w.joinDesc || "Whether you are a health professional..."}</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-emerald-800 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-emerald-50 sm:w-auto">
                  {w.joinBtn1 || "Contact Us"}
                  <span className="h-4 w-4 transition-transform group-hover:translate-x-0.5">{ICONS.arrow}</span>
                </Link>
                <Link to="/about/our-team" className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:w-auto">
                  {w.joinBtn2 || "Explore Our Team"}
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/80">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" />{w.ctaTrust1 || "Community-led"}</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />{w.ctaTrust2 || "Free forever"}</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-300" />{w.ctaTrust3 || "Privacy-first"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}