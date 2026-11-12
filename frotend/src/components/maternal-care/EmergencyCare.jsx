import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { AlertTriangle } from "lucide-react";

export default function EmergencyCare() {
  const { language } = useLanguage();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/maternal/emergency/${language}`)
      .then((res) => res.json())
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [language]);

  return (
    <section id="emergency" className="bg-rose-50 py-24 sm:py-32 border-y border-rose-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-rose-950">Emergency Warning Signs</h2>
          <p className="mt-4 text-lg text-rose-700 font-medium">Seek immediate medical help if you or your baby experience these signs.</p>
        </div>

        {loading ? (
          <div className="text-center py-10 text-rose-500 font-bold">Loading emergency signs...</div>
        ) : topics.length === 0 ? (
          <div className="text-center py-10 text-rose-500 font-bold">No content found for this language yet.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col h-full">
                <h3 className="font-bold text-rose-900 text-lg mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-500" /> {topic.title}
                </h3>
                <p className="text-slate-700 text-sm mb-4 flex-1">{topic.details}</p>
                
                <div className="bg-rose-50 p-3 rounded-lg border border-rose-100 mt-auto">
                  <p className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-1">What to do:</p>
                  <p className="text-sm text-rose-900 font-medium">{topic.when_to_consult}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/facilities" className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-rose-600/30 transition-all hover:-translate-y-0.5 hover:bg-rose-700">
            Go to Nearest Clinic
          </Link>
        </div>

      </div>
    </section>
  );
}