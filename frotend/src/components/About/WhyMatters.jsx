import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function WhyMatters() {
  const { t } = useLanguage();
  const a = t.about || {};

  const challenges = [
    { 
      num: "01",
      title: a.why1 || "Long distances to healthcare facilities", 
      desc: a.why1Desc || "Families in remote areas often travel hours to reach the nearest clinic for basic care.",
      Icon: MapIcon 
    },
    { 
      num: "02",
      title: a.why2 || "Language barriers in health information", 
      desc: a.why2Desc || "Vital medical advice is often only available in English, leaving many unable to understand.",
      Icon: LanguageIcon 
    },
    { 
      num: "03",
      title: a.why3 || "Difficulty finding understandable resources", 
      desc: a.why3Desc || "Medical jargon makes it hard for mothers to know exactly what steps to take.",
      Icon: BookIcon 
    },
    { 
      num: "04",
      title: a.why4 || "Missed appointments and care milestones", 
      desc: a.why4Desc || "Without proper tracking or reminders, crucial check-ups and vaccinations get missed.",
      Icon: CalendarIcon 
    },
  ];

  return (
    <section className="bg-brand-secondary/10 py-24 sm:py-32 relative overflow-hidden">
      
      {/* Decorative background blobs to enhance the transparency effect */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 h-96 w-96 rounded-full bg-brand-secondary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* ============ HEADER ============ */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-primary" />
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              {a.whyKicker || "The Challenge"}
            </p>
            <span className="h-px w-8 bg-brand-primary" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {a.whyTitle || "Why AfyaLink Matters"}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {a.whyDesc || "In many communities, accessing trusted health information is a daily challenge. We are here to change that."}
          </p>
        </div>

        {/* ============ STEP-BY-STEP TIMELINE ============ */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="absolute top-16 left-0 right-0 hidden h-0.5 bg-brand-secondary/30 lg:block" />
          
          {/* Mobile Connecting Line (Vertical) */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-brand-secondary/30 lg:hidden" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {challenges.map((item, index) => (
              <div key={index} className="relative flex flex-row items-start gap-6 lg:flex-col lg:items-center lg:text-center">
                
                {/* Step Node (Number + Icon) */}
                <div className="relative z-10 flex flex-col items-center shrink-0">
                  {/* Glowing Circle */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-primary text-white shadow-xl shadow-brand-primary/20 transition-transform duration-300 hover:scale-110 lg:h-20 lg:w-20">
                    <span className="h-7 w-7 lg:h-9 lg:w-9">
                      <item.Icon />
                    </span>
                  </div>
                  {/* Step Number Badge */}
                  <span className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-brand-primary shadow-sm border border-brand-secondary/20">
                    STEP {item.num}
                  </span>
                </div>

                {/* Content Card (Translucent Glass) */}
                <div className="flex-1 rounded-3xl bg-white/70 p-6 backdrop-blur-md border border-white/80 shadow-lg shadow-brand-primary/5 transition-all duration-300 hover:bg-white hover:shadow-xl lg:mt-6 lg:w-full">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ============ PROFESSIONAL SVG ICONS ============ */

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h8" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M10 14h4M12 12v4" />
    </svg>
  );
}