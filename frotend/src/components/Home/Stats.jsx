import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  const h = t.home;

  const items = [
    { value: h.stats.mothersValue, label: h.stats.mothersLabel, icon: <MothersIcon /> },
    { value: h.stats.facilitiesValue, label: h.stats.facilitiesLabel, icon: <FacilitiesIcon /> },
    { value: h.stats.languagesValue, label: h.stats.languagesLabel, icon: <LanguagesIcon /> },
    { value: h.stats.topicsValue, label: h.stats.topicsLabel, icon: <TopicsIcon /> },
  ];

  return (
    <section className="relative bg-gray-50/50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Stat Cards Grid */}
        <dl className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div 
              key={item.label} 
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-[0_2px_15px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/30 hover:shadow-xl sm:p-8"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Icon Container */}
              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/5 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white sm:h-14 sm:w-14">
                <span className="h-6 w-6 sm:h-7 sm:w-7">
                  {item.icon}
                </span>
              </div>

              <dt className="sr-only">{item.label}</dt>
              
              <dd className="relative flex flex-col items-center">
                {/* The Number */}
                <p className="text-3xl font-extrabold tracking-tight text-brand-primary transition-colors duration-300 group-hover:text-brand-secondary sm:text-4xl lg:text-5xl">
                  {item.value}
                </p>
                
                {/* The Label */}
                <p className="mt-2 break-words text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs lg:text-sm">
                  {item.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ============ MINI ICONS FOR STATS ============ */
function MothersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function FacilitiesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M3 21h18" />
      <path d="M9 21V9l6-6 6 6v12" />
      <path d="M14 13h4" />
      <path d="M14 17h4" />
    </svg>
  );
}

function LanguagesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

function TopicsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M9 7h6M9 11h6" />
    </svg>
  );
}