import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-2xl bg-brand-secondary px-5 py-12 text-center shadow-2xl sm:rounded-3xl sm:px-10 sm:py-16 md:px-16 lg:py-24">
          
          {/* Decorative glowing blobs (Responsive sizes) */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl sm:-left-20 sm:-top-20 sm:h-64 sm:w-64" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-primary/20 blur-3xl sm:-bottom-20 sm:-right-20 sm:h-64 sm:w-64" />
          
          <div className="relative z-10 mx-auto max-w-2xl">
            
            {/* Title */}
            <h2 className="break-words text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {h.cta.title}
            </h2>
            
            {/* Description */}
            <p className="mx-auto mt-3 break-words text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base lg:text-lg">
              {h.cta.description}
            </p>
            
            {/* Buttons - Stack on mobile, side-by-side on tablet+ */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link 
                to="/register" 
                className="w-full rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-secondary shadow-lg transition hover:bg-gray-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {h.cta.primary}
              </Link>
              
              <Link 
                to="/contact" 
                className="w-full rounded-full border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {h.cta.secondary}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}