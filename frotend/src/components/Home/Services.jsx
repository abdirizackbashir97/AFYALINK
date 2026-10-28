import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { MaternalIcon, BabyIcon, MentalIcon, InfoIcon, FacilityIcon, CalendarIcon } from "./Icons";

export default function Services() {
  const { t } = useLanguage();
  const h = t.home;

  const servicesList = [
    { key: "maternal", href: "/maternal", Icon: MaternalIcon },
    { key: "baby", href: "/baby", Icon: BabyIcon },
    { key: "mental", href: "/mental-health", Icon: MentalIcon },
    { key: "info", href: "/health-info", Icon: InfoIcon },
    { key: "facilities", href: "/facilities", Icon: FacilityIcon },
    { key: "appointments", href: "/appointments", Icon: CalendarIcon },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-secondary/10 via-white to-brand-secondary/5 py-16 sm:py-24">
      
      {/* Subtle Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0F766E 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-primary" />
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              {h.services.kicker}
            </p>
            <span className="h-px w-8 bg-brand-primary" />
          </div>
          <h2 className="mt-4 break-words text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {h.services.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base lg:text-lg">
            {h.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesList.map(({ key, href, Icon }, index) => {
            const data = h.services[key];
            const num = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={key}
                to={href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-brand-secondary/20 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(15,118,110,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary sm:p-8"
              >
                {/* Giant Watermark Number */}
                <span className="absolute -right-2 -top-4 select-none text-7xl font-black text-gray-50 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-brand-secondary/10 sm:-right-4 sm:-top-6 sm:text-8xl">
                  {num}
                </span>

                {/* Icon Container */}
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 text-brand-primary transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/30 sm:h-16 sm:w-16">
                  <span className="h-7 w-7 sm:h-8 sm:w-8">
                    <Icon />
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-2 flex-grow">
                  <h3 className="break-words text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-brand-primary sm:text-xl">
                    {data.title}
                  </h3>
                  <p className="mt-3 break-words text-sm leading-relaxed text-gray-600">
                    {data.description}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className="relative mt-8 flex items-center justify-between border-t border-gray-100 pt-5 transition-colors duration-300 group-hover:border-brand-primary/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary sm:text-sm">
                    {h.services.learnMore}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Bottom highlight line that grows on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-brand-primary transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}