import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function LatestArticles() {
  const { t } = useLanguage();
  const h = t.home;

  // High-quality placeholder images
  const articles = [
    { 
      key: "art1", 
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop", 
      title: h.articles?.art1Title || "Understanding Antenatal Care", 
      category: h.articles?.art1Cat || "Maternal Care", 
      desc: h.articles?.art1Desc || "Why regular check-ups during pregnancy are crucial for the health of both mother and baby.", 
      time: "4 min read"
    },
    { 
      key: "art2", 
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop", 
      title: h.articles?.art2Title || "Essential Newborn Vaccines", 
      category: h.articles?.art2Cat || "Baby Care", 
      desc: h.articles?.art2Desc || "A simple guide to the immunization schedule for your baby's first year.", 
      time: "6 min read"
    },
    { 
      key: "art3", 
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop", 
      title: h.articles?.art3Title || "Managing Stress as a New Mother", 
      category: h.articles?.art3Cat || "Mental Health", 
      desc: h.articles?.art3Desc || "Practical tips and where to find support when the journey feels overwhelming.", 
      time: "5 min read"
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-brand-secondary sm:w-8" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary sm:text-xs">
                {h.articles?.kicker || "Health Insights"}
              </p>
            </div>
            <h2 className="mt-4 break-words text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {h.articles?.title || "Latest Health Tips"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              {h.articles?.subtitle || "Trusted advice and articles written by health professionals to help you and your family stay healthy."}
            </p>
          </div>
          
          <Link 
            to="/health-info" 
            className="group hidden items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-brand-secondary hover:shadow-lg md:flex"
          >
            {h.articles?.viewAll || "View all articles"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {articles.map((art) => (
            <Link 
              key={art.key} 
              to="/health-info" 
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-secondary/30 hover:shadow-2xl"
            >
              
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100 sm:h-64">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Tag */}
                <span className="absolute left-4 top-4 inline-block rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-brand-primary shadow-sm backdrop-blur-md sm:text-xs">
                  {art.category}
                </span>

                {/* Read Time Tag */}
                <span className="absolute bottom-4 right-4 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:text-xs">
                  {art.time}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="break-words text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-brand-primary sm:text-xl">
                  {art.title}
                </h3>
                
                <p className="mt-3 flex-grow break-words text-sm leading-relaxed text-gray-600">
                  {art.desc}
                </p>
                
                {/* Read More Action with Divider */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 transition-colors duration-300 group-hover:border-brand-secondary/20">
                  <span className="text-sm font-bold text-brand-primary">
                    {h.articles?.readMore || "Read article"}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/health-info"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-secondary sm:w-auto"
          >
            {h.articles?.viewAll || "View all articles"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}