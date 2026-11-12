import React, { useState } from "react";
import { ChevronDown, Heart, AlertCircle, CheckCircle, Info, HelpCircle } from "lucide-react";

export default function ContentAccordion({ topic }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!topic) return null;

  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-900">{topic.title}</span>
        <ChevronDown
          className={`h-5 w-5 text-teal-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 p-6 space-y-6 text-sm leading-relaxed text-slate-600">
            
            <div>
              <p className="font-medium text-slate-800 mb-2">{topic.intro}</p>
              <p>{topic.details}</p>
            </div>

            <div className="rounded-xl bg-teal-50 p-4 border border-teal-100">
              <h4 className="flex items-center gap-2 font-bold text-teal-800 mb-2">
                <Info className="h-4 w-4" /> Why It Is Important
              </h4>
              <p className="text-teal-700">{topic.why}</p>
            </div>

            {topic.tips && topic.tips.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> Practical Tips
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {topic.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {topic.myths && topic.myths.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <AlertCircle className="h-4 w-4 text-amber-500" /> Common Myths
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-amber-800">
                  {topic.myths.map((myth, i) => (
                    <li key={i}>{myth}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-xl bg-rose-50 p-4 border border-rose-100">
              <h4 className="flex items-center gap-2 font-bold text-rose-800 mb-2">
                <AlertCircle className="h-4 w-4" /> When to Consult a Professional
              </h4>
              <p className="text-rose-700">{topic.when_to_consult}</p>
            </div>

            {topic.takeaways && topic.takeaways.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <Heart className="h-4 w-4 text-teal-500" /> Key Takeaways
                </h4>
                <ul className="list-disc pl-5 space-y-1 font-medium text-slate-700">
                  {topic.takeaways.map((takeaway, i) => (
                    <li key={i}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            )}

            {topic.faqs && topic.faqs.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <HelpCircle className="h-4 w-4 text-blue-500" /> Frequently Asked Questions
                </h4>
                <div className="space-y-3">
                  {topic.faqs.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-lg">
                      <span className="font-bold text-slate-800 block mb-1">Q: {item.q}</span>
                      <span className="text-slate-600">A: {item.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}