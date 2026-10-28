import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.home;

  const steps = [
    { num: "01", title: h.howItWorks.step1Title, desc: h.howItWorks.step1Description },
    { num: "02", title: h.howItWorks.step2Title, desc: h.howItWorks.step2Description },
    { num: "03", title: h.howItWorks.step3Title, desc: h.howItWorks.step3Description },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 sm:py-24">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0F766E 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-brand-secondary sm:w-8" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary sm:text-xs">
              {h.howItWorks.kicker}
            </p>
            <span className="h-px w-6 bg-brand-secondary sm:w-8" />
          </div>
          <h2 className="mt-4 break-words text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {h.howItWorks.title}
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base lg:text-lg">
            {h.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-16 md:mt-24">
          
          {/* DESKTOP CONNECTING LINE */}
          <div className="absolute left-[15%] right-[15%] top-[40px] hidden h-0.5 w-[70%] bg-gradient-to-r from-brand-primary/10 via-brand-secondary/40 to-brand-primary/10 md:block" />

          {/* MOBILE VERTICAL CONNECTING LINE */}
          <div className="absolute bottom-10 left-8 top-10 w-0.5 bg-brand-secondary/20 md:hidden" />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.num} className="group relative flex flex-row items-start gap-6 md:flex-col md:items-center md:text-center md:gap-0">
                
                {/* Number Badge */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-xl font-black text-white shadow-lg shadow-brand-primary/30 transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20 md:rounded-3xl md:text-2xl">
                  {step.num}
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 md:rounded-3xl" />
                </div>

                {/* Card Content */}
                <div className="relative flex flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-secondary/30 group-hover:shadow-xl md:mt-8 md:w-full md:p-8 md:text-center">
                  
                  {/* Watermark Number */}
                  <span className="absolute right-4 top-4 text-5xl font-black text-gray-50 transition-colors duration-300 group-hover:text-brand-secondary/10 md:-top-6 md:right-6 md:text-7xl">
                    {step.num}
                  </span>

                  <h3 className="relative break-words text-lg font-bold text-gray-900 sm:text-xl md:mb-2">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-gray-600">
                    {step.desc}
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