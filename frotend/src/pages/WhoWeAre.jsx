import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import whoWeAreImg from "../assets/who-we-are.png"; 

export default function WhoWeAre() {
  const { t } = useLanguage();
  const w = t.about?.whoWeArePage || {};

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* ============ 1. HERO SECTION ============ */}
      <section className="relative bg-brand-primary/5 py-16 sm:py-24 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  {t.about?.aboutMain || "About AfyaLink"}
                </span>
              </div>
              
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {w.title || "Who We Are"}
              </h1>
              <p className="mt-6 text-xl font-medium text-brand-primary leading-relaxed">
                {w.subtitle || "A community-first approach to maternal and newborn health."}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {w.description || "AfyaLink is a community-focused health information platform designed to support mothers and newborns in Northeastern Kenya. We bridge the gap between trusted medical guidance and families who need it most."}
              </p>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-brand-secondary/20 bg-brand-secondary/5" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <img src={whoWeAreImg} alt="AfyaLink Team" className="h-[400px] w-full object-cover sm:h-[500px]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-primary text-center text-sm font-bold leading-9 text-white">A</div>
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-secondary text-center text-sm font-bold leading-9 text-white">F</div>
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 text-center text-sm font-bold leading-9 text-gray-600">+</div>
                    </div>
                    <p className="text-sm font-bold text-gray-900">Committed to every family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. MISSION & VISION ============ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            
            <div className="group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10">
              <div className="absolute inset-0 rounded-3xl bg-gray-200 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-secondary group-hover:to-brand-primary" />
              <div className="relative flex h-full flex-col rounded-[22px] bg-white p-8 sm:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-transform group-hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{w.missionTitle || "Our Mission"}</h2>
                <p className="mt-4 text-gray-600 leading-relaxed flex-grow">{w.missionDesc || "To make trusted maternal and newborn health information accessible to every family, regardless of location or language."}</p>
              </div>
            </div>

            <div className="group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10">
              <div className="absolute inset-0 rounded-3xl bg-gray-200 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary" />
              <div className="relative flex h-full flex-col rounded-[22px] bg-white p-8 sm:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-primary transition-transform group-hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{w.visionTitle || "Our Vision"}</h2>
                <p className="mt-4 text-gray-600 leading-relaxed flex-grow">{w.visionDesc || "A world where no mother or child suffers due to a lack of accessible, understandable health information."}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ 3. CORE VALUES (PROFESSIONAL ICONS) ============ */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{w.valuesTitle || "Our Core Values"}</h2>
            <p className="mt-4 text-gray-600">The principles that guide everything we build.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: w.val1 || "Trusted", desc: w.val1Desc || "Evidence-based information you can rely on.", Icon: ShieldIcon },
              { title: w.val2 || "Accessible", desc: w.val2Desc || "Designed for everyone, regardless of digital skills.", Icon: GlobeIcon },
              { title: w.val3 || "Community", desc: w.val3Desc || "Built with and for the families of Northeastern Kenya.", Icon: UsersIcon },
              { title: w.val4 || "Inclusive", desc: w.val4Desc || "Available in your local language and free to use.", Icon: HeartHandsIcon },
            ].map((val, i) => (
              <div key={i} className="group flex flex-col items-center rounded-3xl border border-gray-200/60 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-secondary/30 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/30">
                  <span className="h-8 w-8"><val.Icon /></span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{val.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. IMPACT STATS (NEW SECTION) ============ */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{w.statsTitle || "Our Impact So Far"}</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:divide-x lg:divide-gray-100">
            {[
              { value: w.stat1Val || "12,000+", label: w.stat1 || "Mothers Reached" },
              { value: w.stat2Val || "45+", label: w.stat2 || "Partner Clinics" },
              { value: w.stat3Val || "120+", label: w.stat3 || "Health Topics" },
              { value: w.stat4Val || "3", label: w.stat4 || "Languages" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:px-6">
                <p className="text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. THE JOURNEY (TIMELINE) ============ */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {w.journeyTitle || "The AfyaLink Journey"}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {w.journeySubtitle || "How we are building a healthier future, step by step."}
            </p>
          </div>

          <div className="relative">
            {/* Desktop Line */}
            <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-gray-200 md:block" />
            {/* Mobile Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 md:hidden" />

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {[
                { num: "01", title: w.phase1Title || "Community Research", desc: w.phase1Desc || "Understanding the unique health challenges...", align: "md:mt-0" },
                { num: "02", title: w.phase2Title || "Platform Development", desc: w.phase2Desc || "Designing and coding a fast, accessible...", align: "md:mt-12" },
                { num: "03", title: w.phase3Title || "Future Expansion", desc: w.phase3Desc || "Bringing AfyaLink to more counties...", align: "md:mt-24" },
              ].map((phase, i) => (
                <div key={i} className={`relative flex items-start gap-6 md:flex-col md:items-center md:text-center ${phase.align}`}>
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-gray-50 bg-brand-primary text-xl font-black text-white shadow-lg shadow-brand-primary/30">
                    {phase.num}
                  </div>
                  <div className="rounded-3xl bg-white p-6 shadow-md border border-gray-100 transition hover:-translate-y-1 hover:shadow-xl md:mt-6 w-full">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============ 6. APPROACH & JOIN US (NEW CTA) ============ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary px-6 py-16 text-center shadow-2xl sm:px-16 sm:py-24">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-secondary/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                {w.approachTitle || "Our Approach"}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/90 leading-relaxed mb-12">
                {w.approachDesc || "We combine modern technology with community-centered design, ensuring that our platform is easy to use for everyone, including those with limited digital experience."}
              </p>

              <div className="border-t border-white/20 pt-10">
                <h3 className="text-2xl font-bold text-white mb-4">{w.joinTitle || "Join Us in Making a Difference"}</h3>
                <p className="text-white/80 max-w-2xl mx-auto mb-8">{w.joinDesc || "Whether you are a health professional, a translator, or a community volunteer, there is a place for you at AfyaLink."}</p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-primary transition hover:bg-gray-100">
                    {w.joinBtn1 || "Contact Us"}
                  </Link>
                  <Link to="/about/our-team" className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                    {w.joinBtn2 || "Explore Our Team"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ============ PROFESSIONAL SVG ICONS FOR VALUES ============ */

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeartHandsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
    </svg>
  );
}