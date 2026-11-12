import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function MaternalCTA() {
  const { t } = useLanguage();
  const tm = t.maternalCare || {};

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-teal-900 to-emerald-900 px-8 py-16 sm:px-16 sm:py-20 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">{tm.ctaTitle || "Ready to take control of your health?"}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-100">{tm.ctaDesc || "Create a free account to save your health information..."}</p>
            <div className="mt-10 flex justify-center">
              <Link to="/register" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-bold text-teal-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-teal-50">
                {tm.ctaBtn || "Create Free Account"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}