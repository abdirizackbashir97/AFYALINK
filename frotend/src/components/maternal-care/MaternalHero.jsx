import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import maternalHeroImage from "../../assets/m.hero.png";
// 👇 I removed the floral frame import here
import { 
  Heart, 
  ArrowRight, 
  PlayCircle, 
  HeartPulse, 
  Baby, 
  Activity, 
  CalendarClock, 
  ShieldAlert,
  Stethoscope
} from "lucide-react";

export default function MaternalHero() {
  const { t } = useLanguage();
  const tm = t.maternalCare || {};

  const services = [
    { name: tm.servicePregnancy || "Pregnancy Care", icon: HeartPulse, href: "#pregnancy" },
    { name: tm.serviceBreastfeeding || "Breastfeeding Support", icon: Stethoscope, href: "#breastfeeding" },
    { name: tm.serviceNewborn || "Newborn Care", icon: Baby, href: "#newborn" },
    { name: tm.servicePostnatal || "Postnatal Care", icon: Activity, href: "#postnatal" },
    { name: tm.serviceClinic || "Clinic Reminders", icon: CalendarClock, href: "#reminders" },
    { name: tm.serviceEmergency || "Emergency Guidance", icon: ShieldAlert, href: "#emergency" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-teal-50/80 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/80 px-4 py-2 text-sm font-bold text-[#0F766E] shadow-sm backdrop-blur-sm">
              <Heart className="h-4 w-4 fill-[#10B981] text-[#10B981]" />
              {tm.heroBadge || "Maternal Care"}
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight text-[#0F766E] sm:text-6xl lg:text-7xl">
              {tm.heroTitle1 || "Healthy Mother,"} <br className="hidden sm:block" />
              <span className="text-[#10B981]">
                {tm.heroTitleHighlight || "Healthy Baby."}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
              {tm.heroDesc || "Get trusted information, expert guidance and practical tips for a safe pregnancy, safe delivery and a healthy start for your baby."}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#pregnancy" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F766E] px-8 py-4 text-base font-bold text-white shadow-xl shadow-teal-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 sm:w-auto">
                {tm.btnExplore || "Explore Maternal Care"}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0F766E]/20 bg-white px-8 py-4 text-base font-bold text-[#0F766E] transition-all duration-300 hover:border-[#0F766E]/40 hover:bg-slate-50 sm:w-auto">
                <PlayCircle className="h-5 w-5 text-[#10B981]" />
                {tm.btnWatch || "Watch Video"}
              </button>
            </div>
          </div>

          {/* Right Side: Hero Image with CSS-Only Premium Frame */}
          <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
            
            {/* The Main Image Container with layered borders */}
            <div className="relative p-3 bg-white rounded-[2.5rem] shadow-2xl ring-1 ring-slate-100">
              
              {/* Decorative Colored Corners (Simulating the floral effect) */}
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-tl-[2.5rem] border-t-4 border-l-4 border-[#10B981] opacity-50" />
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-[2.5rem] border-b-4 border-r-4 border-[#0F766E] opacity-50" />
              
              {/* The Image */}
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={maternalHeroImage}
                  alt="Mother holding her newborn baby"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ aspectRatio: "4/5", objectPosition: "center top" }}
                />
                
                {/* Soft vignette/gradient over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </div>
            </div>
            
            {/* Floating "Mothers Supported" Badge */}
            <div className="absolute -bottom-6 -left-4 z-20 rounded-2xl border border-white/60 bg-white/95 px-6 py-4 shadow-2xl backdrop-blur-xl sm:-left-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0F766E] to-[#10B981] text-white shadow-inner">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">10,000+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Mothers Supported</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Service Navigation Strip */}
        <div className="mt-20 border-t border-slate-100 pt-10 sm:mt-24">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={index}
                  href={service.href}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-100 hover:bg-slate-50 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0F766E] transition-colors group-hover:bg-[#0F766E] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-center text-xs font-bold text-slate-700 transition-colors group-hover:text-[#0F766E]">
                    {service.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}