import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const a = t.about || {};

  return (
    <section className="relative isolate overflow-hidden bg-brand-primary">
      
      {/* ============ BACKGROUND IMAGE & OVERLAYS ============ */}
      <img 
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" 
        alt="Healthcare professional background" 
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-brand-primary/40 mix-blend-multiply" />
      
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ============ MAIN CONTENT ============ */}
      {/* Added pb-32 lg:pb-48 so the content doesn't overlap the mountains */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 pb-32 sm:px-6 lg:px-8 lg:pb-48">
        
        <div className="relative grid items-stretch gap-12 lg:grid-cols-2 lg:gap-0">
          
          {/* 👇 THE THICK ANIMATED DIVIDER LINE 👇 */}
          <div 
            className="absolute inset-y-0 left-1/2 hidden w-3 -translate-x-1/2 z-40 animate-brand-line lg:block" 
            aria-hidden="true" 
          />

          {/* LEFT COLUMN: Text & CTAs */}
          <div className="flex flex-col justify-center pt-20 sm:pt-32 lg:pt-40 lg:pr-16">
            
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
              {a.aboutKicker || "About AfyaLink"}
            </span>

            <h1 
              className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              {a.heroTitle || "Supporting Every Mother. Protecting Every Beginning."}
            </h1>

            <p 
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/90"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              {a.heroDesc || "AfyaLink is dedicated to making maternal and newborn health information more accessible to families in Northeastern Kenya and beyond."}
            </p>

            {/* 3D CHUNKY PROFESSIONAL BUTTONS */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link 
                to="/maternal" 
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#34d399] via-brand-secondary to-[#059669] px-8 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(0,0,0,0.15),0_6px_0_0_#047857,0_12px_25px_-8px_rgba(0,0,0,0.5)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(0,0,0,0.15),0_8px_0_0_#047857,0_18px_30px_-8px_rgba(0,0,0,0.6)] active:translate-y-[6px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(0,0,0,0.15),0_0px_0_0_#047857,0_4px_10px_-4px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
              >
                <span>{a.heroBtn1 || "Explore Maternal Care"}</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link 
                to="/about/who-we-are" 
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-white to-gray-50 px-8 py-4 text-sm font-bold text-brand-primary shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.05),0_6px_0_0_#0F766E,0_12px_25px_-8px_rgba(0,0,0,0.4)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.05),0_8px_0_0_#0F766E,0_18px_30px_-8px_rgba(0,0,0,0.5)] active:translate-y-[6px] active:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.05),0_0px_0_0_#0F766E,0_4px_10px_-4px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="h-4 w-4 text-brand-secondary transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>{a.heroBtn2 || "Discover Our Mission"}</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Image with Animated Border */}
          <div className="relative hidden h-full w-full lg:block lg:pl-12 pt-12">
            <div className="relative h-full w-full rounded-[2.5rem] p-[6px] animate-brand-line shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop" 
                  alt="African mother and child" 
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Trusted Health Information</p>
                      <p className="text-xs text-gray-500">Reviewed by medical professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 👇 THE CLIMBING MOUNTAIN BOTTOM DIVIDER 👇 */}
      {/* It sits at the absolute bottom, above the background, and cuts into the next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50">
        <svg
          className="relative block w-full h-[80px] sm:h-[120px] lg:h-[180px]"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Mountain Layer (Semi-transparent white) */}
          <path
            d="M0,180 L0,110 L180,40 L360,120 L540,50 L720,130 L900,40 L1080,100 L1260,30 L1440,100 L1440,180 Z"
            fill="rgba(255, 255, 255, 0.2)"
          />
          {/* Foreground Mountain Layer (Solid white to match the next section) */}
          <path
            d="M0,180 L0,140 L200,80 L400,140 L600,70 L800,150 L1000,80 L1200,140 L1440,60 L1440,180 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

    </section>
  );
}