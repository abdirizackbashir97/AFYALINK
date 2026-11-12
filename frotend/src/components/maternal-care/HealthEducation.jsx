import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { BookOpen, Video, Headphones, X, PlayCircle } from "lucide-react";

export default function HealthEducation() {
  const { t } = useLanguage();
  const tm = t.maternalCare || {};

  // State to manage which modal is open
  const [activeModal, setActiveModal] = useState(null); // 'articles', 'videos', or 'audio'

  const resources = [
    { id: "articles", title: tm.articleTitle || "Read Articles", desc: tm.articleDesc || "Trusted written guides...", icon: BookOpen },
    { id: "videos", title: tm.videoTitle || "Watch Videos", desc: tm.videoDesc || "Visual guides...", icon: Video },
    { id: "audio", title: tm.audioTitle || "Listen to Audio", desc: tm.audioDesc || "Audio guides...", icon: Headphones }
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{tm.educationTitle || "Health Education Hub"}</h2>
        <p className="mt-4 text-lg text-slate-600 mb-16">{tm.educationSubtitle || "Access articles, videos, and audio..."}</p>

        {/* Interactive Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <button 
                key={r.id}
                onClick={() => setActiveModal(r.id)}
                className="group flex flex-col items-center rounded-3xl bg-slate-50 p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm mb-6 group-hover:scale-110 group-hover:bg-teal-50 transition-all">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600">{r.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          
          {/* Modal Content Box */}
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-6 bg-slate-50">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                {activeModal === 'articles' && <><BookOpen className="h-5 w-5 text-teal-600"/> Articles</>}
                {activeModal === 'videos' && <><Video className="h-5 w-5 text-teal-600"/> Videos</>}
                {activeModal === 'audio' && <><Headphones className="h-5 w-5 text-teal-600"/> Audio Guides</>}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              
              {/* ARTICLES VIEW */}
              {activeModal === 'articles' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 cursor-pointer transition-colors">
                    <h4 className="font-bold text-teal-800 text-lg">Understanding Antenatal Care</h4>
                    <p className="text-sm text-slate-500 mt-1">Why regular check-ups during pregnancy are crucial for the health of both mother and baby.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 cursor-pointer transition-colors">
                    <h4 className="font-bold text-teal-800 text-lg">Essential Newborn Vaccines</h4>
                    <p className="text-sm text-slate-500 mt-1">A simple guide to the immunization schedule for your baby's first year.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 cursor-pointer transition-colors">
                    <h4 className="font-bold text-teal-800 text-lg">Managing Stress as a New Mother</h4>
                    <p className="text-sm text-slate-500 mt-1">Practical tips and where to find support when the journey feels overwhelming.</p>
                  </div>
                </div>
              )}

              {/* VIDEOS VIEW */}
              {activeModal === 'videos' && (
                <div className="space-y-6">
                  {/* Example Video 1 */}
                  <div className="rounded-xl overflow-hidden shadow-md bg-slate-100 aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/2h2f1b3bL18?si=5Vz9q4k1l4k1l4k1" 
                      title="Maternal Health Video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">What to expect during pregnancy</h4>
                    <p className="text-sm text-slate-500">A simple visual guide for expecting mothers.</p>
                  </div>
                </div>
              )}

              {/* AUDIO VIEW */}
              {activeModal === 'audio' && (
                <div className="space-y-6">
                  <div className="rounded-xl bg-teal-50 p-6 border border-teal-100 flex flex-col items-center">
                    <Headphones className="h-12 w-12 text-teal-600 mb-4" />
                    <h4 className="font-bold text-teal-900 text-lg mb-2">Audio Guide: Nutrition During Pregnancy</h4>
                    <p className="text-sm text-teal-700 mb-6 text-center">Listen to this 3-minute guide on eating well for you and your baby.</p>
                    
                    {/* HTML5 Audio Player */}
                    <audio controls className="w-full max-w-md">
                      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}