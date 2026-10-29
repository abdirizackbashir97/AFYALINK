import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function OurTeam() {
  const { t } = useLanguage();
  const tm = t.about?.ourTeamPage || {};

  const teamMembers = [
    {
      id: 1,
      name: "Abdilatif", 
      role: "Lead Developer & UI/UX Designer", 
      image: "/team/image1.jpeg", 
      position: "object-center",
      education: "BSc in Computer Science (Final Year)",
      experience: "3+ years building web applications and digital solutions.",
      background: "Growing up in Northeastern Kenya, I witnessed firsthand the challenges families face in accessing basic health information. This inspired me to use technology to bridge that gap.",
      impact: "Designed and built the AfyaLink platform from scratch. Solved the problem of fragmented health information by creating a centralized, multilingual hub.",
      funFact: "Seeing a mother successfully use the platform in Somali to book her antenatal appointment."
    },
    {
      id: 2,
      name: "Dr. Amina Hassan", 
      role: "Medical Advisor", 
      image: "/team/image2.png",
      position: "object-center", 
      education: "MBBS, University of Nairobi",
      experience: "8 years in public health and maternal care in Garissa County.",
      background: "With a deep passion for maternal health, I have spent my career working in rural clinics to ensure safe deliveries.",
      impact: "Reviewed all medical content on the platform to ensure it meets health standards. Solved the problem of misinformation by providing trusted, evidence-based guidance.",
      funFact: "Educating young mothers on the importance of postnatal check-ups."
    },
    {
      id: 3,
      name: "Yusuf Ahmed", 
      role: "Community Liaison", 
      image: "/team/image3.png",
      position: "object-top", 
      education: "Diploma in Community Health",
      experience: "5 years as a Community Health Worker (CHW) in Dadaab.",
      background: "I have dedicated my life to serving my community and ensuring no family is left behind due to language or location.",
      impact: "Translated the entire platform into Somali and Kiswahili. Solved the language barrier by making vital health information accessible to locals.",
      funFact: "Training elderly community members on how to navigate the mobile interface."
    },
    {
      id: 4,
      name: "Hodan Ali", 
      role: "Maternal Health Specialist", 
      image: "/team/image4.png",
      position: "object-top", 
      education: "MSc in Public Health",
      experience: "6 years coordinating maternal health programs.",
      background: "I grew up in a family of nurses and always knew I wanted to help mothers.",
      impact: "Developed the maternal care guides and checklists used on the platform.",
      funFact: "Visiting clinics and listening to the stories of mothers."
    },
    {
      id: 5,
      name: "Khalid Omar", 
      role: "Data & Research Officer", 
      image: "/team/image5.png",
      position: "object-center", 
      education: "BSc in Statistics",
      experience: "4 years analyzing community health data.",
      background: "I believe that data tells the real story of what a community needs.",
      impact: "Collected and analyzed the data that shaped our platform's features and facility directories.",
      funFact: "Turning complex data into simple, visual insights."
    },
    {
      id: 6,
      name: "Fatuma Noor", 
      role: "Content Creator & Translator", 
      image: "/team/image6.png",
      position: "object-top", 
      education: "BA in Linguistics",
      experience: "3 years of professional translation and community writing.",
      background: "Language is the bridge to trust, and I want every mother to feel understood.",
      impact: "Wrote and translated the health tips and articles into clear, simple Kiswahili and Somali.",
      funFact: "Reading feedback from users who finally understand their health conditions."
    },
    {
      id: 7,
      name: "Said Abdi", 
      role: "Community Outreach Volunteer", 
      image: "/team/image7.png",
      position: "object-center", 
      education: "Certificate in Social Work",
      experience: "2 years volunteering in local health campaigns.",
      background: "Giving back to my community is the most rewarding thing I do.",
      impact: "Organized community awareness sessions to teach families how to use AfyaLink.",
      funFact: "Seeing the excitement on people's faces when they realize the app is free."
    }
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen py-16 sm:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* ============ HEADER ============ */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-white px-4 py-2 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              {t.about?.whoWeAre || "About AfyaLink"}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {tm.teamTitle || "Meet Our Team"}
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {tm.teamSubtitle || "Dedicated professionals working to transform community health."}
          </p>
        </div>

        {/* ============ TEAM PROFILES ============ */}
        <div className="space-y-24 mb-32">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={member.id} className="relative">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* ROUND IMAGE COLUMN */}
                  <div className="relative w-full lg:w-1/2 flex justify-center shrink-0">
                    <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-brand-secondary/10 ${isEven ? "-translate-x-[45%]" : "-translate-x-[55%]"}`} />
                    
                    <div className="relative overflow-hidden rounded-full border-4 border-white shadow-2xl aspect-square w-[280px] sm:w-[350px] bg-gray-200 z-10">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`h-full w-full object-cover transition-transform duration-700 hover:scale-110 ${member.position}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-brand-secondary font-semibold text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* TEXT COLUMN */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                        {tm.educationLabel || "Education"}
                      </h4>
                      <p className="text-gray-600">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        {tm.experienceLabel || "Experience"}
                      </h4>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                        {tm.backgroundLabel || "Life Background"}
                      </h4>
                      <p className="text-gray-600 leading-relaxed italic border-l-4 border-brand-secondary/30 pl-4 py-1">
                        "{member.background}"
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        {tm.impactLabel || "Community Impact"}
                      </h4>
                      <p className="text-gray-600">{member.impact}</p>
                    </div>

                    <div className="bg-brand-secondary/5 rounded-2xl p-4 border border-brand-secondary/10">
                      <h4 className="text-sm font-bold text-brand-primary mb-1">
                        💡 {tm.funFactLabel || "Favourite Part of the Job"}
                      </h4>
                      <p className="text-sm text-gray-600">{member.funFact}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============ SECTION 1: HOW WE WORK (CULTURE) ============ */}
        <section className="bg-white py-20 border-y border-gray-100 mb-24">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {tm.cultureTitle || "How We Work Together"}
              </h2>
              <p className="mt-4 text-gray-600">
                {tm.cultureSubtitle || "Our shared methodology for building better health solutions."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Pillar 1 */}
              <div className="rounded-3xl bg-gray-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-brand-primary/30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{tm.culture1Title || "Agile Development"}</h3>
                <p className="mt-3 text-sm text-gray-600">{tm.culture1Desc || "We build, test, and improve rapidly. We listen to community feedback and update the platform continuously to meet real needs."}</p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-3xl bg-gray-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-secondary text-white shadow-lg shadow-brand-secondary/30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{tm.culture2Title || "Community-First"}</h3>
                <p className="mt-3 text-sm text-gray-600">{tm.culture2Desc || "Technology means nothing if it doesn't help people. Every feature we design is centered around the mothers and families of Northeastern Kenya."}</p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-3xl bg-gray-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-brand-primary/30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{tm.culture3Title || "Continuous Learning"}</h3>
                <p className="mt-3 text-sm text-gray-600">{tm.culture3Desc || "We are always researching, reading, and learning from experts to ensure the health information we provide is accurate and up-to-date."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION 2: ADVISORS & MENTORS ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {tm.advisorsTitle || "Our Advisors & Mentors"}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {tm.advisorsSubtitle || "We are grateful for the guidance of experts who help us maintain the highest standards of health information and project execution."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
            {/* Advisor 1 */}
            <div className="flex items-center gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-2xl font-bold text-brand-primary">
                U
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{tm.advisor1Title || "University Supervisor"}</h3>
                <p className="text-sm font-semibold text-brand-secondary">{tm.advisor1Role || "Academic Advisor"}</p>
                <p className="mt-2 text-sm text-gray-600">{tm.advisor1Desc || "Provided invaluable guidance on project methodology, evaluation, and technical architecture."}</p>
              </div>
            </div>

            {/* Advisor 2 */}
            <div className="flex items-center gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-2xl font-bold text-brand-primary">
                C
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{tm.advisor2Title || "Community Health Board"}</h3>
                <p className="text-sm font-semibold text-brand-secondary">{tm.advisor2Role || "Local Partners"}</p>
                <p className="mt-2 text-sm text-gray-600">{tm.advisor2Desc || "Ensured our health content is culturally appropriate and aligned with local healthcare guidelines."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ JOIN US CTA ============ */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary px-6 py-16 text-center shadow-2xl sm:px-16">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-secondary/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {tm.ctaTitle || "Want to contribute?"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
                {tm.ctaDesc || "We are always looking for health professionals, translators, and community workers to help us improve AfyaLink."}
              </p>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-primary transition hover:bg-gray-100">
                {tm.ctaBtn || "Contact Us"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}