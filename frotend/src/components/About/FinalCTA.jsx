import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  const a = t.about || {};

  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-secondary px-6 py-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-primary/20 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {a.ctaTitle || "Every Mother Matters. Every Baby Matters."}
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/maternal" className="rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-secondary transition hover:bg-gray-50">
                {a.ctaBtn1 || "Explore Maternal Care"}
              </Link>
              <Link to="/facilities" className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10">
                {a.ctaBtn2 || "Find Health Facilities"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}