import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function OurTeam() {
  const { t } = useLanguage();
  const tm = t.about?.ourTeamPage || {};
  
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/team")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching team data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-32 text-xl font-bold text-slate-600">Loading Team...</div>;

  const slugToNumber = {
    "abdirizack-bashor": 1,
    "dr-amina-hassan": 2,
    "yasmin-osman": 3,
    "mohamed-abdirahi": 4,
    "khalid-omar": 5,
    "james-garace": 6,
    "olivia-kamau": 7
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 🚀 PROFESSIONAL HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 pt-32 pb-48 sm:pt-40 sm:pb-56">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/20 blur-[100px]" />
          <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-teal-500/20 blur-[100px]" />
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-100 backdrop-blur-md shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.about?.whoWeAre || "Our People"}
          </span>

          {/* Title */}
          <h1 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl tracking-tight">
            {tm.teamTitle || "Meet Our Team"}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100/80 sm:text-xl">
            {tm.teamSubtitle || "Dedicated professionals working to transform community health."}
          </p>

          {/* Divider & Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-bold text-white/90">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-emerald-300">
                7
              </span>
              Team Members
            </div>
            <div className="hidden h-6 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-teal-300">
                3
              </span>
              Languages
            </div>
            <div className="hidden h-6 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lime-300">
                1
              </span>
              Shared Mission
            </div>
          </div>
        </div>
      </section>

      {/* 👥 TEAM GRID SECTION (Overlapping the Hero) */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-32 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => {
            const mId = slugToNumber[member.slug] || member.id;
            const role = tm[`member${mId}Role`] || member.role;
            const background = tm[`member${mId}Background`] || member.background;

            // 🎯 Fix for Mohamed's full-body photo
            const imagePosition = member.slug === "mohamed-abdirahi" 
              ? "object-[center_15%]" 
              : (member.position || "object-center");

            return (
              <div 
                key={member.id} 
                className="group flex flex-col items-center bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2"
              >
                
                {/* 🖼️ PROFESSIONAL ELEGANT CIRCULAR IMAGE */}
                <div className="relative mb-8 mt-[-4rem]">
                  {/* Soft glowing background ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${member.accent || 'from-emerald-500 to-teal-500'} opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500 scale-110`} />
                  
                  {/* Image Container */}
                  <div className="relative z-10 w-40 h-40 rounded-full p-1.5 bg-white shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full rounded-full object-cover ${imagePosition} border-2 border-slate-50 transition-transform duration-500 group-hover:scale-105`}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=0D8ABC&color=fff&size=256`;
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-black text-slate-900 text-center tracking-tight">
                  {member.name}
                </h3>
                
                <div className={`mt-2 mb-4 h-1 w-12 rounded-full bg-gradient-to-r ${member.accent || 'from-emerald-500 to-teal-500'}`}></div>

                <p className="text-xs font-bold text-emerald-700 text-center uppercase tracking-widest mb-4">
                  {role}
                </p>
                
                {/* Short Bio snippet */}
                <p className="text-slate-500 text-center text-sm leading-relaxed mb-8 line-clamp-3">
                  {background}
                </p>

                {/* Read More Button */}
                <div className="mt-auto pt-6 w-full border-t border-slate-100 flex justify-center">
                  <Link
                    to={`/team/${member.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors uppercase tracking-wider"
                  >
                    {tm.readMore || "View Full Profile"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}