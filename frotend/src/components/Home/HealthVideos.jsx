import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 1. Import useNavigate
import { useLanguage } from "../../context/LanguageContext";

export default function HealthVideos() {
  const { t } = useLanguage(); 
  const h = t.home;
  const navigate = useNavigate(); // 👈 2. Initialize navigate
  
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Maternal Health Education",
      langLabel: "English",
      videoUrl: "/videos/metenal-1en.mp4", 
    },
    {
      id: 2,
      title: "Waxbarashada Caafimaadka",
      langLabel: "Somali",
      videoUrl: "/videos/metenal-2som.mp4", 
    },
    {
      id: 3,
      title: "Elimu ya Afya ya Mama",
      langLabel: "Kiswahili",
      videoUrl: "/videos/metenal-3sw.mp4", 
    },
  ];

  // 👇 3. UPDATED CLOSE FUNCTION 👇
  const handleCloseVideo = () => {
    setActiveVideo(null); // Close the video modal
    navigate("/");        // Force the router to go to the Home page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the Home page
  };

  return (
    <section className="bg-gray-50/50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-6 sm:w-8 bg-brand-secondary" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-secondary">
              {h.videos?.kicker || "Watch & Learn"}
            </p>
            <span className="h-px w-6 sm:w-8 bg-brand-secondary" />
          </div>
          <h2 className="mt-3 sm:mt-4 break-words text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            {h.videos?.title || "Health Information in Video"}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700 lg:text-lg">
            {h.videos?.subtitle || "Prefer watching? Our health experts explain important topics in simple, easy-to-understand videos."}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((vid) => (
            <div 
              key={vid.id} 
              onClick={() => setActiveVideo(vid.videoUrl)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <video 
                  src={vid.videoUrl} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted 
                  playsInline 
                  preload="metadata" 
                />
                
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand-secondary/90 text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:shadow-brand-primary/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 w-5 h-5 sm:w-6 sm:h-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Language Badge - Top Left */}
                <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-brand-primary shadow-sm backdrop-blur-md">
                  {vid.langLabel}
                </div>
              </div>

              {/* Title & Meta */}
              <div className="p-4 sm:p-6">
                <h3 className="break-words text-base sm:text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-brand-primary">
                  {vid.title}
                </h3>
                <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-4 sm:h-4">
                    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
                  </svg>
                  {h.videos?.watchNow || "Watch Video"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-sm"
          onClick={handleCloseVideo} // 👈 Uses the updated close function
        >
          <div 
            className="relative w-full max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the video
          >
            {/* Close Button */}
            <button
              onClick={handleCloseVideo} // 👈 Uses the updated close function
              className="absolute -top-10 right-0 sm:-top-4 sm:-right-4 z-50 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Close video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black">
              <video
                src={activeVideo}
                controls
                autoPlay
                onEnded={handleCloseVideo} // 👈 When video finishes, it forces a redirect to Home
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}