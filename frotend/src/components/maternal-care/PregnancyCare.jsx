import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContentAccordion from "./ContentAccordion";

export default function PregnancyCare() {
  const { language, t } = useLanguage();
  const tm = t.maternalCare || {};
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/maternal/pregnancy/${language}`)
      .then((res) => res.json())
      .then((data) => { setTopics(data); setLoading(false); })
      .catch((err) => { console.error("Failed:", err); setLoading(false); });
  }, [language]);

  return (
    <section id="pregnancy" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          {/* 👇 Now uses translation */}
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {tm.pregnancyTitle || "Pregnancy Care"}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {tm.pregnancySubtitle || "Comprehensive guidance from conception to birth."}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10 text-slate-500 font-bold">Loading...</div>
        ) : topics.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-bold">No content found for this language yet.</div>
        ) : (
          <div className="space-y-4">
            {topics.map((topic) => (
              <ContentAccordion key={topic.id} topic={topic} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}