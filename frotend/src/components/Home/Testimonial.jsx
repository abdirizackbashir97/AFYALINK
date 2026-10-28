import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Testimonial() {
  const { t } = useLanguage();
  const h = t.home;
  const initial = (h.testimonial.author || "A").trim().charAt(0);

  return (
    <section className="relative overflow-hidden bg-brand-primary py-20 sm:py-28">
      
      {/* Decorative Background Pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 0)", 
          backgroundSize: "32px 32px" 
        }} 
      />

      {/* Glowing Background Blobs */}
      <div aria-hidden="true" className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-secondary/30 blur-[100px]" />
      <div aria-hidden="true" className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

      {/* Main Glass Card Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-12 md:p-16">
          
          {/* Top Quote Icon */}
          <svg 
            className="mx-auto mb-6 h-10 w-10 text-brand-secondary/80 sm:mb-8 sm:h-14 sm:w-14" 
            fill="currentColor" 
            viewBox="0 0 32 32" 
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>

          {/* Quote Text */}
          <blockquote className="mx-auto max-w-3xl break-words text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl lg:text-3xl">
            "{h.testimonial.quote}"
          </blockquote>

          {/* Divider Line */}
          <div className="mx-auto my-8 h-px w-16 bg-white/20 sm:my-10" />

          {/* Author Profile */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            {/* Avatar */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/50 bg-brand-secondary text-xl font-bold text-white shadow-lg sm:h-16 sm:w-16">
              {initial}
            </div>
            
            {/* Author Info */}
            <div className="text-center sm:text-left">
              <div className="break-words text-base font-bold text-white sm:text-lg">
                {h.testimonial.author}
              </div>
              <div className="mt-0.5 flex items-center justify-center gap-1.5 text-xs font-medium text-brand-secondary sm:justify-start sm:text-sm">
                {/* Optional Verified Icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {h.testimonial.role}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}