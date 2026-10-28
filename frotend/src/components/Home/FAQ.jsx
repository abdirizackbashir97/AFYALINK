import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const h = t.home;
  
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: h.faq?.q1 || "Is AfyaLink free to use?",
      a: h.faq?.a1 || "Yes, AfyaLink is 100% free for all community members. Our mission is to provide accessible health information and support to everyone in Northeastern Kenya.",
    },
    {
      q: h.faq?.q2 || "Is my personal health information private?",
      a: h.faq?.a2 || "Absolutely. We take your privacy very seriously. Your personal data and appointments are securely stored and never shared with third parties without your consent.",
    },
    {
      q: h.faq?.q3 || "Can I use AfyaLink in my local language?",
      a: h.faq?.a3 || "Yes! The platform is fully translated into English, Kiswahili, and Somali. You can switch languages at any time using the menu at the top.",
    },
    {
      q: h.faq?.q4 || "How do I find a nearby clinic?",
      a: h.faq?.a4 || "You can use our 'Health Facilities' directory to search for clinics, hospitals, and pharmacies near your location. We also provide their contact details and directions.",
    },
    {
      q: h.faq?.q5 || "Do I need an account to book an appointment?",
      a: h.faq?.a5 || "Yes, creating a free account allows you to securely book appointments, track your history, and receive important reminders so you never miss a visit.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-50/50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Side: Header & CTA */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 sm:w-8 bg-brand-secondary" />
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-secondary">
                {h.faq?.kicker || "Got Questions?"}
              </p>
            </div>
            
            <h2 className="mt-3 break-words text-2xl font-extrabold tracking-tight text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {h.faq?.title || "Frequently Asked Questions"}
            </h2>
            
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base lg:text-lg">
              {h.faq?.subtitle || "Everything you need to know about AfyaLink. Can't find the answer you're looking for? Please chat to our friendly team."}
            </p>
            
            <div className="mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary sm:inline-flex sm:w-auto sm:py-3"
              >
                {h.faq?.contactCta || "Contact Support"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
                    isOpen ? "border-brand-primary bg-white shadow-md" : "border-transparent bg-white hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-4 text-left focus:outline-none sm:p-6"
                  >
                    <span className="break-words pr-4 text-sm font-bold text-gray-900 sm:text-base md:text-lg">
                      {faq.q}
                    </span>
                    <span className={`ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:ml-4 sm:h-8 sm:w-8 ${
                      isOpen ? "bg-brand-primary text-white" : "bg-brand-secondary/10 text-brand-primary"
                    }`}>
                      {/* Chevron Icon that rotates */}
                      <svg 
                        width="16" height="16" viewBox="0 0 24 24" fill="none" 
                        className={`h-3 w-3 transition-transform duration-300 sm:h-4 sm:w-4 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Smooth Accordion Dropdown */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="break-words px-4 pb-4 text-xs leading-relaxed text-gray-600 sm:px-6 sm:pb-6 sm:text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}