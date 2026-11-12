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

function SectionLabel({ number, label, inverted = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-7 items-center justify-center rounded-full px-2.5 text-[10px] font-black tracking-[0.15em] ${inverted ? "bg-white/20 text-white" : "bg-slate-900 text-white"}`}>{number}</span>
      <span className={`text-[10px] font-bold uppercase tracking-[0.22em] ${inverted ? "text-emerald-100/90" : "text-slate-500"}`}>{label}</span>
      <span className={`h-px w-8 ${inverted ? "bg-white/30" : "bg-slate-300"}`} aria-hidden="true" />
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
    { 
      quote: w.voice1Quote || "Before AfyaLink...", 
      name: w.voice1Name || "Halima A.", 
      role: w.voice1Role || "Mother of two", 
      location: w.voice1Location || "Garissa County", 
      accent: "from-emerald-500 to-teal-500" 
    },
    { 
      quote: w.voice2Quote || "As a community health worker...", 
      name: w.voice2Name || "Mohamed I.", 
      role: w.voice2Role || "Community Health Worker", 
      location: w.voice2Location || "Mandera County", 
      accent: "from-teal-500 to-cyan-500" 
    },
    { 
      quote: w.voice3Quote || "My wife was nervous...", 
      name: w.voice3Name || "Abdi K.", 
      role: w.voice3Role || "Father & caregiver", 
      location: w.voice3Location || "Wajir County", 
      accent: "from-lime-500 to-emerald-500" 
    },
    { 
      quote: w.voice4Quote || "The nearest clinic finder...", 
      name: w.voice4Name || "Fatuma H.", 
      role: w.voice4Role || "Mother of three", 
      location: w.voice4Location || "Garissa County", 
      accent: "from-cyan-500 to-teal-500" 
    },
    { 
      quote: w.voice5Quote || "I volunteer with AfyaLink...", 
      name: w.voice5Name || "Amina S.", 
      role: w.voice5Role || "Community volunteer", 
      location: w.voice5Location || "Dadaab", 
      accent: "from-emerald-500 to-lime-500" 
    },
    { 
      quote: w.voice6Quote || "I've seen mothers...", 
      name: w.voice6Name || "Dr. Ibrahim M.", 
      role: w.voice6Role || "Clinical partner", 
      location: w.voice6Location || "Mandera County", 
      accent: "from-teal-500 to-emerald-500" 
    },
  ];

  const team = [
    { name: teamPage.devName || "Abdirizack Bashor", role: teamPage.devRole || "...", bio: teamPage.devDesc || "...", initials: "AB", accent: "from-emerald-500 via-teal-500 to-cyan-500", linkedin: "#" },
    { name: w.team1Name || "Dr. Amina Yusuf",         role: w.team1Role || "...",     bio: w.team1Bio || "...",     initials: "AY", accent: "from-teal-500 via-cyan-500 to-sky-500",     linkedin: "#" },
    { name: w.team2Name || "Yasmin Hassan",           role: w.team2Role || "...",     bio: w.team2Bio || "...",     initials: "YH", accent: "from-lime-500 via-emerald-500 to-teal-500", linkedin: "#" },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ═══════════ 1. PREMIUM HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-48 sm:pt-40 sm:pb-56">
        {/* Immersive Background Effects */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900/50 to-slate-900" />
          <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-emerald-500/20 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-teal-500/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            
            {/* Left Text Column */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-100 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t.about?.aboutMain || "About AfyaLink"}
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {/* 👇 FIXED: Pulling from t.about instead of w */}
                {t.about?.heroTitle || "Supporting Every Mother. Protecting Every Beginning."}
              </h1>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-1.5">
                <span className="h-1.5 w-12 rounded-full bg-emerald-500" />
                <span className="h-1.5 w-6 rounded-full bg-teal-400" />
                <span className="h-1.5 w-3 rounded-full bg-lime-400" />
              </div>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-emerald-100/80 sm:text-xl mx-auto lg:mx-0">
                {/* 👇 FIXED: Pulling from t.about instead of w */}
                {t.about?.heroDesc || "AfyaLink is dedicated to making maternal and newborn health information more accessible to families in Northeastern Kenya and beyond."}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link to="/maternal" className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400">
                  {/* 👇 FIXED: Pulling from t.about instead of w */}
                  {t.about?.heroBtn1 || "Explore Maternal Care"}
                  <span className="h-4 w-4 transition-transform group-hover:translate-x-1">{ICONS.arrow}</span>
                </Link>
                <Link to="/about/our-team" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10">
                  {/* 👇 FIXED: Pulling from t.about instead of w */}
                  {t.about?.heroBtn2 || "Discover Our Mission"}
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative order-1 lg:order-2 mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 blur-2xl" aria-hidden="true" />
              
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl">
                <img src={whoWeAreImg} alt="AfyaLink community" className="h-[400px] w-full object-cover sm:h-[500px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <span className="h-6 w-6">{ICONS.heartHands}</span>
                  </span>
                  <div>
                    <p className="text-2xl font-black tracking-tight text-slate-900">{stats[0].value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">{w.heroFamiliesLabel || "Families served"}</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute -top-4 right-4 sm:right-8 rounded-2xl border border-white/40 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-inner">
                    <span className="h-4 w-4">{ICONS.check}</span>
                  </span>
                  <p className="text-sm font-black text-slate-800">{w.heroTrustedLabel || "Trusted by CHWs"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ 2. NEW BENTO BOX IMPACT SECTION ═══════════ */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-24">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Main Big Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-white flex flex-col justify-between overflow-hidden relative group">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
             <div>
               <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200 bg-emerald-900/50 px-3 py-1 rounded-full">{w.labelImpact || "Measured Impact"}</span>
               <h3 className="mt-6 text-3xl sm:text-4xl font-black leading-tight">{w.statsTitle || "Our Impact So Far"}</h3>
               <p className="mt-4 text-emerald-100/90 text-sm sm:text-base max-w-md">{w.statsSubtitle || "Real numbers, real families, and a growing network of care across Northeastern Kenya."}</p>
             </div>
             <div className="mt-8 flex gap-8">
               <div>
                 <p className="text-4xl font-black">{stats[0].value}</p>
                 <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mt-1">{stats[0].label}</p>
               </div>
               <div>
                 <p className="text-4xl font-black">{stats[1].value}</p>
                 <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mt-1">{stats[1].label}</p>
               </div>
             </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <span className="h-12 w-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <span className="h-6 w-6">{ICONS.book}</span>
            </span>
            <p className="text-4xl font-black text-slate-900">{stats[2].value}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">{stats[2].label}</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <span className="h-12 w-12 rounded-full bg-lime-50 text-lime-600 flex items-center justify-center mb-4">
              <span className="h-6 w-6">{ICONS.globe}</span>
            </span>
            <p className="text-4xl font-black text-slate-900">{stats[3].value}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">{stats[3].label}</p>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. MISSION & VISION ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="01" label={w.labelPurpose || "Purpose · Direction"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              {w.missionVisionHeading || "What drives us forward"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { num: "01", title: w.missionTitle || "Our Mission", desc: w.missionDesc || "...", Icon: ICONS.target, accent: "from-emerald-500 via-teal-500 to-cyan-500", tag: w.missionTag || "Every day" },
              { num: "02", title: w.visionTitle  || "Our Vision",  desc: w.visionDesc  || "...", Icon: ICONS.eye,    accent: "from-teal-500 via-cyan-500 to-sky-500",      tag: w.visionTag || "Every family" },
            ].map((card) => (
              <article key={card.num} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-slate-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10">
                <span className={`absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r ${card.accent}`} aria-hidden="true" />
                <span aria-hidden="true" className="absolute right-4 top-2 select-none text-[110px] font-black leading-none text-slate-50 transition-colors duration-500 group-hover:text-emerald-50">{card.num}</span>
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{card.tag}
                  </span>
                  <div className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <span className="h-7 w-7">{card.Icon}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">{card.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. CORE VALUES ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="02" label={w.labelPrinciples || "The principles"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.valuesTitle || "Our Core Values"}</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.valuesSubtitle || "The principles that guide everything we build."}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <article key={v.key} className="group relative flex flex-col overflow-hidden rounded-3xl bg-slate-50 p-7 border border-slate-100 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:border-emerald-100">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.accent} text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <span className="h-6 w-6">{v.Icon}</span>
                </div>
                <h3 className="mt-6 text-lg font-black tracking-tight text-slate-900">{v.title}</h3>
                <span className={`mt-3 block h-0.5 w-8 rounded-full bg-gradient-to-r ${v.accent} transition-all duration-300 group-hover:w-14`} />
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 5. JOURNEY ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="03" label={w.labelPath || "The path"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.journeyTitle || "The AfyaLink Journey"}</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.journeySubtitle || "How we are building a healthier future, step by step."}</p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-[40px] hidden h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 md:block rounded-full" aria-hidden="true" />
            <div className="grid gap-10 md:grid-cols-3">
              {phases.map((p, i) => (
                <div key={p.num} className="group relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-slate-50 transition-all duration-500 group-hover:ring-emerald-100 group-hover:-translate-y-2">
                    <span className="text-2xl font-black text-emerald-600">{p.num}</span>
                  </div>
                  <span className="mt-6 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800">{p.tag}</span>
                  <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-xs">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════ 6. OUR APPROACH ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel number="04" label={w.labelHowWeWork || "How we work"} />
              <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">{w.approachTitle || "Our Approach"}</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">{w.approachDesc || "We combine modern technology..."}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {approachSteps.map((step, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all duration-500 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:border-emerald-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-50">
                    <span className="h-6 w-6">{step.Icon}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-black tracking-tight text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 7. VOICES GRID (NO IMAGES, GREEN GLASS) ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 py-24 sm:py-32">
        {/* Green Background Glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
          <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel number="05" label={w.labelCommunitySays || "What the community says"} inverted />
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">{w.voicesTitle || "Voices from the families we serve"}</h2>
            <p className="mt-6 text-base leading-relaxed text-emerald-100/80 sm:text-lg">{w.voicesDesc || "Real words from mothers, fathers, and community health workers..."}</p>
            
            {/* Rating Badge */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (<span key={i} className="h-4 w-4">{ICONS.star}</span>))}
              </div>
              <span className="text-sm font-black tracking-tight text-white">4.9</span>
              <span className="text-xs font-medium text-emerald-100/70">{w.reviewsCount || "· based on 500+ community reviews"}</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {voices.map((v, i) => (
              <article 
                key={i} 
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20"
              >
                {/* Top Accent Line */}
                <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${v.accent}`} aria-hidden="true" />
                
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, s) => (<span key={s} className="h-4 w-4">{ICONS.star}</span>))}
                </div>

                {/* Quote */}
                <p className="flex-1 text-[15px] font-medium leading-relaxed text-emerald-50">"{v.quote}"</p>

                {/* User Info (Initial Avatar) */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${v.accent} text-lg font-black text-white shadow-lg`}>
                    {v.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-base font-black tracking-tight text-white">{v.name}</p>
                    <p className="truncate text-xs font-bold uppercase tracking-wider text-emerald-300 mt-0.5">{v.role}</p>
                    <p className="truncate text-xs font-medium text-emerald-200/60">{v.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. MEET THE TEAM PREVIEW ═══════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center"><SectionLabel number="06" label={w.labelPeopleBehind || "The people behind AfyaLink"} /></div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{w.teamPreviewTitle || "Meet the people behind the platform"}</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{w.teamPreviewDesc || "A small, dedicated team..."}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <article key={i} className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-slate-50 p-8 border border-slate-100 transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-100">
                <div className="flex items-start justify-between">
                  <span className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-2xl font-black tracking-tight text-white shadow-xl shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3`}>
                    {member.initials}
                  </span>
                  <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 transition-all hover:border-sky-200 hover:text-sky-600 hover:shadow-md">
                    <span className="h-4 w-4">{ICONS.linkedin}</span>
                  </a>
                </div>
                <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900">{member.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-emerald-700">{member.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/about/our-team" className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-500/30">
              {w.teamPreviewCta || "Meet the full team"}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                {ICONS.arrow}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 9. CTA ═══════════ */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 px-6 py-20 shadow-2xl sm:px-16 sm:py-28 text-center">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{w.joinTitle || "Join Us in Making a Difference"}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100/90">{w.joinDesc || "Whether you are a health professional..."}</p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-emerald-400 sm:w-auto">
                  {w.joinBtn1 || "Contact Us"}
                  <span className="h-4 w-4 transition-transform group-hover:translate-x-1">{ICONS.arrow}</span>
                </Link>
                <Link to="/about/our-team" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto">
                  {w.joinBtn2 || "Explore Our Team"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}