import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

/* ============ Section Label ============ */
function SectionLabel({ number, label, inverted = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex h-7 items-center justify-center rounded-full px-2.5 text-[10px] font-black tracking-[0.15em] ${
          inverted ? "bg-white/20 text-white" : "bg-slate-900 text-white"
        }`}
      >
        {number}
      </span>
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
          inverted ? "text-emerald-100/90" : "text-slate-500"
        }`}
      >
        {label}
      </span>
      <span className={`h-px w-8 ${inverted ? "bg-white/30" : "bg-slate-300"}`} aria-hidden="true" />
    </div>
  );
}

/* ============ Icon Set ============ */
const ICONS = {
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 22V5.5z" />
      <path d="M8 7h7" /><path d="M8 11h7" /><path d="M8 15h4" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.5 2.4-7.4L2 9.6h7.6z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
};

export default function OurTeam() {
  const { t } = useLanguage();
  const tm = t.about?.ourTeamPage || {};

  /* -------- Team Members — text now fully translated -------- */
  const teamMembers = [
    {
      id: 1,
      name: "Abdirizack Bashor",
      initials: "AB",
      image: "/team/image1.jpeg",
      position: "object-center",
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
      role: tm.member1Role || "Medical Researcher & Cybersecurity Professional",
      education: tm.member1Education || "MSc in Medical Research · Cybersecurity Certification",
      experience: tm.member1Experience || "Bridging clinical research and secure digital health systems for underserved communities.",
      background: tm.member1Background || "Growing up in Northeastern Kenya, I saw how health information — even when available — rarely reached families in a form they could trust. That gap is what AfyaLink exists to close.",
      impact: tm.member1Impact || "Ensures every article is medically sound and every user's data is privacy-protected — two promises that shape the entire platform.",
      funFact: tm.member1FunFact || "Watching a mother navigate AfyaLink in Somali and reach the right clinic within minutes.",
    },
    {
      id: 2,
      name: "Dr. Amina Hassan",
      initials: "AH",
      image: "/team/image2.png",
      position: "object-center",
      accent: "from-teal-500 via-cyan-500 to-sky-500",
      role: tm.member2Role || "Medical Advisor",
      education: tm.member2Education || "MBBS, University of Nairobi",
      experience: tm.member2Experience || "8 years in public health and maternal care in Garissa County.",
      background: tm.member2Background || "With a deep passion for maternal health, I have spent my career working in rural clinics to ensure safe deliveries.",
      impact: tm.member2Impact || "Reviewed all medical content on the platform to ensure it meets health standards.",
      funFact: tm.member2FunFact || "Educating young mothers on the importance of postnatal check-ups.",
    },
    {
      id: 3,
      name: "Yasmin Osman",
      initials: "YO",
      image: "/team/image3.png",
      position: "object-top",
      accent: "from-lime-500 via-emerald-500 to-teal-500",
      role: tm.member3Role || "Community Liaison",
      education: tm.member3Education || "Diploma in Community Health",
      experience: tm.member3Experience || "5 years as a Community Health Worker (CHW) in Dadaab.",
      background: tm.member3Background || "I have dedicated my life to serving my community and ensuring no family is left behind.",
      impact: tm.member3Impact || "Translated the entire platform into Somali and Kiswahili.",
      funFact: tm.member3FunFact || "Training elderly community members on how to navigate the mobile interface.",
    },
    {
      id: 4,
      name: "Mohamed Abdirahi",
      initials: "MA",
      image: "/team/image4.png",
      position: "object-top",
      accent: "from-cyan-500 via-sky-500 to-teal-500",
      role: tm.member4Role || "Maternal Health Specialist",
      education: tm.member4Education || "MSc in Public Health",
      experience: tm.member4Experience || "6 years coordinating maternal health programs.",
      background: tm.member4Background || "I grew up in a family of nurses and always knew I wanted to help mothers.",
      impact: tm.member4Impact || "Developed the maternal care guides and checklists used on the platform.",
      funFact: tm.member4FunFact || "Visiting clinics and listening to the stories of mothers.",
    },
    {
      id: 5,
      name: "Khalid Omar",
      initials: "KO",
      image: "/team/image5.png",
      position: "object-center",
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
      role: tm.member5Role || "Data & Research Officer",
      education: tm.member5Education || "BSc in Statistics",
      experience: tm.member5Experience || "4 years analyzing community health data.",
      background: tm.member5Background || "I believe that data tells the real story of what a community needs.",
      impact: tm.member5Impact || "Collected and analyzed the data that shaped our platform's features.",
      funFact: tm.member5FunFact || "Turning complex data into simple, visual insights.",
    },
    {
      id: 6,
      name: "James Garace",
      initials: "JG",
      image: "/team/image6.png",
      position: "object-top",
      accent: "from-teal-500 via-cyan-500 to-sky-500",
      role: tm.member6Role || "Content Creator & Translator",
      education: tm.member6Education || "BA in Linguistics",
      experience: tm.member6Experience || "3 years of professional translation and community writing.",
      background: tm.member6Background || "Language is the bridge to trust, and I want every mother to feel understood.",
      impact: tm.member6Impact || "Wrote and translated the health tips and articles into clear, simple Kiswahili and Somali.",
      funFact: tm.member6FunFact || "Reading feedback from users who finally understand their health conditions.",
    },
    {
      id: 7,
      name: "Olivia Kamau",
      initials: "OK",
      image: "/team/image7.png",
      position: "object-center",
      accent: "from-lime-500 via-emerald-500 to-teal-500",
      role: tm.member7Role || "Community Outreach Volunteer",
      education: tm.member7Education || "Certificate in Social Work",
      experience: tm.member7Experience || "2 years volunteering in local health campaigns.",
      background: tm.member7Background || "Giving back to my community is the most rewarding thing I do.",
      impact: tm.member7Impact || "Organized community awareness sessions to teach families how to use AfyaLink.",
      funFact: tm.member7FunFact || "Seeing the excitement on people's faces when they realize the app is free.",
    },
  ];

  const culturePoints = [
    {
      title: tm.culture1Title || "Agile Development",
      desc: tm.culture1Desc || "We build, test, and improve rapidly. We listen to community feedback and update the platform continuously to meet real needs.",
      Icon: ICONS.bolt,
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
      glow: "bg-emerald-400/40",
    },
    {
      title: tm.culture2Title || "Community-First",
      desc: tm.culture2Desc || "Technology means nothing if it doesn't help people. Every feature we design is centered around the mothers and families of Northeastern Kenya.",
      Icon: ICONS.users,
      accent: "from-teal-500 via-cyan-500 to-sky-500",
      glow: "bg-teal-400/40",
    },
    {
      title: tm.culture3Title || "Continuous Learning",
      desc: tm.culture3Desc || "We are always researching, reading, and learning from experts to ensure the health information we provide is accurate and up-to-date.",
      Icon: ICONS.book,
      accent: "from-lime-500 via-emerald-500 to-teal-500",
      glow: "bg-lime-400/40",
    },
  ];

  const advisors = [
    {
      initial: "U",
      title: tm.advisor1Title || "University Supervisor",
      role: tm.advisor1Role || "Academic Advisor",
      desc: tm.advisor1Desc || "Provided invaluable guidance on project methodology, evaluation, and technical architecture.",
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      initial: "C",
      title: tm.advisor2Title || "Community Health Board",
      role: tm.advisor2Role || "Local Partners",
      desc: tm.advisor2Desc || "Ensured our health content is culturally appropriate and aligned with local healthcare guidelines.",
      accent: "from-teal-500 via-cyan-500 to-sky-500",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-white" />
          <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-teal-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.about?.whoWeAre || "About AfyaLink"}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {tm.teamTitle || "Meet Our Team"}
          </h1>

          <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
            <span className="h-1 w-12 rounded-full bg-emerald-500" />
            <span className="h-1 w-6 rounded-full bg-teal-400" />
            <span className="h-1 w-3 rounded-full bg-lime-400" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {tm.teamSubtitle || "Dedicated professionals working to transform community health."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {teamMembers.length} Team Members
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

      {/* ═══════════════ TEAM PROFILES ═══════════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <article key={member.id} className="group relative">
                  <div
                    className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* IMAGE COLUMN */}
                    <div className="relative w-full shrink-0 lg:w-5/12">
                      <div className="relative mx-auto max-w-md">
                        <div
                          className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${member.accent} opacity-15 blur-2xl transition-opacity duration-700 group-hover:opacity-30`}
                          aria-hidden="true"
                        />

                        <span
                          className={`absolute -top-3 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-lg font-black tracking-tight text-white shadow-lg shadow-emerald-500/30 ${
                            isEven ? "-left-3" : "-right-3"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white shadow-2xl shadow-emerald-900/10">
                          <img
                            src={member.image}
                            alt={member.name}
                            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.position}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" aria-hidden="true" />

                          <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200">
                              {member.role}
                            </p>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                              {member.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TEXT COLUMN */}
                    <div className="w-full lg:w-7/12">
                      <SectionLabel number={`0${index + 1}`} label={`Team Member ${index + 1}`} />

                      <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-emerald-700">
                        {member.role}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <span className={`h-1 w-10 rounded-full bg-gradient-to-r ${member.accent}`} />
                        <span className="h-1 w-3 rounded-full bg-slate-200" />
                        <span className="h-1 w-2 rounded-full bg-slate-200" />
                      </div>

                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <DetailBlock
                          Icon={ICONS.graduation}
                          label={tm.educationLabel || "Education"}
                          value={member.education}
                        />
                        <DetailBlock
                          Icon={ICONS.briefcase}
                          label={tm.experienceLabel || "Experience"}
                          value={member.experience}
                        />
                      </div>

                      <div className="mt-6 rounded-2xl border-l-4 border-emerald-500 bg-white p-5 shadow-sm">
                        <div className="flex items-start gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                            <span className="h-4 w-4">{ICONS.book}</span>
                          </span>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                              {tm.backgroundLabel || "Life Background"}
                            </p>
                            <p className="mt-2 text-sm italic leading-relaxed text-slate-700">
                              "{member.background}"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex items-start gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                          <span className="h-4 w-4">{ICONS.heart}</span>
                        </span>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            {tm.impactLabel || "Community Impact"}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-700">
                            {member.impact}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                          <span className="h-4 w-4">{ICONS.spark}</span>
                        </span>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            {tm.funFactLabel || "Favourite Part of the Job"}
                          </p>
                          <p className="mt-1 text-sm text-slate-700">{member.funFact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < teamMembers.length - 1 && (
                    <div className="mt-20 flex items-center gap-2 sm:mt-28" aria-hidden="true">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      <span className="h-1 w-1 rounded-full bg-teal-400" />
                      <span className="h-1 w-1 rounded-full bg-lime-400" />
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CULTURE ═══════════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel number="08" label="How we work" />
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              {tm.cultureTitle || "How We Work Together"}
            </h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {tm.cultureSubtitle || "Our shared methodology for building better health solutions."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {culturePoints.map((p, i) => (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)]"
              >
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${p.accent}`} aria-hidden="true" />
                <span className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full ${p.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`} aria-hidden="true" />
                <span aria-hidden="true" className="pointer-events-none absolute right-3 top-2 select-none text-[72px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-emerald-100/80">
                  0{i + 1}
                </span>

                <div className="relative flex flex-1 flex-col">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="h-6 w-6">{p.Icon}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-black tracking-tight text-slate-900">
                    {p.title}
                  </h3>
                  <span className={`mt-3 block h-0.5 w-8 rounded-full bg-gradient-to-r ${p.accent} transition-all duration-300 group-hover:w-14`} aria-hidden="true" />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ADVISORS ═══════════════ */}
      <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel number="09" label="Guiding voices" />
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              {tm.advisorsTitle || "Our Advisors & Mentors"}
            </h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-12 rounded-full bg-emerald-500" />
              <span className="h-1 w-6 rounded-full bg-teal-400" />
              <span className="h-1 w-3 rounded-full bg-lime-400" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {tm.advisorsSubtitle || "We are grateful for the guidance of experts who help us maintain the highest standards of health information and project execution."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {advisors.map((a, i) => (
              <article
                key={i}
                className="group relative flex gap-5 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${a.accent}`} aria-hidden="true" />

                <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.accent} text-2xl font-black tracking-tight text-white shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                  {a.initial}
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-black tracking-tight text-slate-900">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                    {a.role}
                  </p>
                  <span className={`mt-3 block h-0.5 w-8 rounded-full bg-gradient-to-r ${a.accent} transition-all duration-300 group-hover:w-14`} aria-hidden="true" />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {a.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ JOIN US CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-700 via-green-800 to-teal-800 px-6 py-16 shadow-2xl sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <SectionLabel number="10" label="Get involved" inverted />
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {tm.ctaTitle || "Want to contribute?"}
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
                <span className="h-1 w-12 rounded-full bg-lime-300" />
                <span className="h-1 w-6 rounded-full bg-emerald-200" />
                <span className="h-1 w-3 rounded-full bg-teal-200" />
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
                {tm.ctaDesc || "We are always looking for health professionals, translators, and community workers to help us improve AfyaLink."}
              </p>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-emerald-800 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-xl"
                >
                  {tm.ctaBtn || "Contact Us"}
                  <span className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5">
                    {ICONS.arrow}
                  </span>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/80">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                  Health Professionals
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Translators
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  Volunteers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============ Small detail block ============ */
function DetailBlock({ Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
        <span className="h-4 w-4">{Icon}</span>
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}