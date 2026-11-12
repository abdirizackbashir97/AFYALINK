import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function TeamMemberPage() {
  const { slug } = useParams(); 
  const { t } = useLanguage();
  const tm = t.about?.ourTeamPage || {};

  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/team/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Team member not found");
        return res.json();
      })
      .then((data) => {
        setMember(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-xl font-bold text-slate-500">Loading story...</div>;
  
  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-black text-slate-800 mb-4">Profile Not Found</h1>
      <p className="text-slate-600 mb-8">{error}</p>
      <Link to="/about/our-team" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition">
        Back to Team
      </Link>
    </div>
  );

  // 🔄 MAP SLUG TO TRANSLATION NUMBER (1 to 7)
  const slugToNumber = {
    "abdirizack-bashor": 1,
    "dr-amina-hassan": 2,
    "yasmin-osman": 3,
    "mohamed-abdirahi": 4,
    "khalid-omar": 5,
    "james-garace": 6,
    "olivia-kamau": 7
  };
  const mId = slugToNumber[slug] || member.id;

  // 🌍 FETCH TRANSLATED TEXT (Falls back to English database text if translation missing)
  const role = tm[`member${mId}Role`] || member.role;
  const education = tm[`member${mId}Education`] || member.education;
  const experience = tm[`member${mId}Experience`] || member.experience;
  const background = tm[`member${mId}Background`] || member.background;
  const challenges = tm[`member${mId}Challenges`] || member.challenges;
  const success = tm[`member${mId}Success`] || member.success;
  const contribution = tm[`member${mId}Contribution`] || member.contribution;
  const funFact = tm[`member${mId}FunFact`] || member.funFact;

  return (
    <div className="bg-[#f4f1ea] min-h-screen py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-7xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden border border-slate-200">
        
        {/* Top Bar */}
        <div className="border-b-4 border-slate-900 px-8 py-4 flex justify-between items-center bg-white">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">AfyaLink Editorial</span>
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">{tm.title || "Team Profile"}</span>
        </div>

        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT SIDEBAR (Sticky) */}
          <div className="w-full lg:w-4/12 bg-slate-50 border-r border-slate-200">
            <div className="lg:sticky lg:top-0 p-8 sm:p-12">
              
              <div className="relative mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover object-center rounded-sm shadow-xl grayscale-[10%]"
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=047857&color=fff&size=512`; }}
                />
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${member.accent || 'from-emerald-500 to-teal-500'}`}></div>
              </div>

              <h1 className="text-4xl font-serif font-bold text-slate-900 leading-tight mb-2">
                {member.name}
              </h1>
              <p className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-6 pb-6 border-b border-slate-300">
                {role}
              </p>

              <div className="space-y-4 text-sm text-slate-600 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <strong className="block text-slate-900">{tm.educationLabel || "Education"}</strong>
                    {education}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">💼</span>
                  <div>
                    <strong className="block text-slate-900">{tm.experienceLabel || "Experience"}</strong>
                    {experience}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-l-4 border-slate-900 shadow-sm">
                <p className="font-serif italic text-slate-700 text-lg leading-relaxed">
                  "{funFact}"
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Structured Information */}
          <div className="w-full lg:w-8/12 p-8 sm:p-12 lg:p-16 bg-white">
            
            <div className="mb-12 border-b-2 border-slate-900 pb-8">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-4">{tm.title || "In-Depth Profile"}</h2>
              <h3 className="text-3xl sm:text-4xl font-serif text-slate-900 leading-tight">
                {tm.description || "The Journey of"} {member.name.split(' ')[0]}
              </h3>
            </div>

            <div className="space-y-8 text-slate-800">
              
              {/* Section 1: Background */}
              <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
                <h4 className="font-sans font-black text-lg text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-black">01</span>
                  {tm.backgroundLabel || "Roots & Background"}
                </h4>
                <div className="text-lg leading-relaxed font-serif whitespace-pre-wrap text-slate-700">
                  {background}
                </div>
              </section>

              {/* Section 2: Challenges */}
              <section className="bg-rose-50/50 p-6 sm:p-8 rounded-2xl border border-rose-100">
                <h4 className="font-sans font-black text-lg text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-200 text-rose-800 text-sm font-black">02</span>
                  {tm.challengesLabel || "Overcoming Obstacles"}
                </h4>
                <div className="text-lg leading-relaxed font-serif whitespace-pre-wrap text-slate-700">
                  {challenges}
                </div>
              </section>

              {/* Section 3: Success */}
              <section className="bg-amber-50/50 p-6 sm:p-8 rounded-2xl border border-amber-100">
                <h4 className="font-sans font-black text-lg text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-200 text-amber-800 text-sm font-black">03</span>
                  {tm.successLabel || "The Breakthrough"}
                </h4>
                <div className="text-lg leading-relaxed font-serif whitespace-pre-wrap text-slate-700">
                  {success}
                </div>
              </section>

              {/* Section 4: Contribution */}
              <section className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100">
                <h4 className="font-sans font-black text-lg text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 text-sm font-black">04</span>
                  {tm.impactLabel || "Impact on the Community"}
                </h4>
                <div className="text-lg leading-relaxed font-serif whitespace-pre-wrap text-slate-700">
                  {contribution}
                </div>
              </section>

            </div>

            <div className="mt-16 pt-8 border-t-2 border-slate-900 flex justify-between items-center">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{tm.title || "End of Profile"}</span>
              <Link to="/about/our-team" className="inline-flex items-center gap-2 text-sm font-black text-slate-900 hover:text-emerald-700 transition-colors uppercase tracking-widest">
                ← {tm.ctaBtn || "Back to Team"}
              </Link>
            </div>

          </div>

        </div>
      </article>
    </div>
  );
}