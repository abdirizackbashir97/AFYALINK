import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import heroMain from "../../assets/Hero.png";
import hero1 from "../../assets/Hero1.png";
import hero2 from "../../assets/Hero2.png";

const HERO_SLIDES = [heroMain, hero1, hero2];
const SLIDE_DURATION = 4000; // 4 seconds

export default function Hero() {
  const { t } = useLanguage();
  const h = t.home;
  
  const [activeSlide, setActiveSlide] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const timerRef = useRef(null);

  // Fade content out -> in on slide change
  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  // Slider controls
  const startSlider = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
  };

  const stopSlider = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  const slide = h.hero.slides?.[activeSlide] ?? h.hero;

  return (
    <section
      className="relative isolate min-h-[600px] overflow-hidden rounded-b-[2.5rem] bg-brand-primary shadow-2xl sm:min-h-[700px] lg:min-h-[90vh]"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
      aria-roledescription="carousel"
    >
      {/* 
        IMAGES WITH CINEMATIC ZOOM 
        transition-[transform,opacity] duration-[8000ms]: Slow, elegant zoom over 8 seconds.
      */}
      {HERO_SLIDES.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-[transform,opacity] duration-[8000ms] ease-out ${
            i === activeSlide ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* 
        PROFESSIONAL OVERLAYS 
        1. Base teal tint to unify the images.
        2. Dark gradient from bottom to top so text is readable.
        3. Subtle grid pattern for a tech/premium feel.
      */}
      <div aria-hidden="true" className="absolute inset-0 bg-brand-primary/40 mix-blend-multiply" />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-gradient-to-t from-[#063f3b] via-brand-primary/60 to-transparent" 
      />
      
      {/* Optional subtle dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content Container */}
      <div
        className={`relative z-10 mx-auto flex min-h-[600px] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center transition-all duration-700 ease-out sm:min-h-[700px] sm:px-6 lg:min-h-[90vh] lg:px-8 ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Floating Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2">
          <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
            {slide.kicker}
          </span>
        </div>

        {/* Massive Professional Headline */}
        <h1
          className="mx-auto mt-6 max-w-4xl break-words text-4xl font-black leading-[1.1] tracking-tight text-white sm:mt-8 sm:text-6xl md:text-7xl lg:text-[5rem]"
          style={{ textShadow: "0 10px 40px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.4)" }}
        >
          {slide.titleLine1}{" "}
          <span className="text-brand-secondary">{slide.titleHighlight}</span>{" "}
          {slide.titleLine2}
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/90 sm:mt-8 sm:text-lg lg:text-xl"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
        >
          {slide.description}
        </p>

        {/* CTAs - Stacked on mobile, side-by-side on desktop */}
        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <Link
            to={slide.ctaPrimaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-bold text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-primary hover:shadow-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto sm:px-10 sm:py-5 sm:text-base"
          >
            {slide.ctaPrimary}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            to={slide.ctaSecondaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary sm:w-auto sm:px-10 sm:py-5 sm:text-base"
          >
            {slide.ctaSecondary}
          </Link>
        </div>

        {/* Trust Indicators */}
        <ul
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-semibold text-white/90 sm:mt-16 sm:gap-x-10 sm:text-sm"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
        >
          <ProofItem label={h.hero.proofFree} />
          <ProofItem label={h.hero.proofLanguages} />
          <ProofItem label={h.hero.proofFacilities} />
        </ul>
      </div>

      {/* Modern Progress Bar Indicators */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2 sm:bottom-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === activeSlide ? "true" : "false"}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              i === activeSlide 
                ? "h-2 w-12 bg-white/30 sm:h-2.5 sm:w-16" 
                : "h-2 w-2 bg-white/40 hover:bg-white/80 sm:h-2.5 sm:w-2.5"
            }`}
          >
            {/* Animated fill for active slide */}
            {i === activeSlide && (
              <span className="absolute inset-y-0 left-0 w-full origin-left animate-[progress_4s_linear] bg-brand-secondary" 
                    style={{ animation: 'progress 4s linear' }} />
            )}
          </button>
        ))}
      </div>
      
      {/* Add this style block for the progress bar animation inside the component or in your index.css */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}} />
    </section>
  );
}

/* Small reusable proof item with glass effect */
function ProofItem({ label }) {
  return (
    <li className="flex items-center gap-2 whitespace-nowrap">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-secondary/40 backdrop-blur-md ring-1 ring-white/20 sm:h-6 sm:w-6">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white sm:h-3.5 sm:w-3.5">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{label}</span>
    </li>
  );
}