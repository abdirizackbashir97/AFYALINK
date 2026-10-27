function HowItWorks({ h }) {
  const steps = [
    { num: "01", title: h.howItWorks.step1Title, desc: h.howItWorks.step1Description },
    { num: "02", title: h.howItWorks.step2Title, desc: h.howItWorks.step2Description },
    { num: "03", title: h.howItWorks.step3Title, desc: h.howItWorks.step3Description },
  ];
  
  return (
    <section className="bg-brand-primary/5">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{h.howItWorks.kicker}</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">{h.howItWorks.title}</h2>
          <p className="mt-3 text-base text-gray-600">{h.howItWorks.subtitle}</p>
        </div>
        
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={i} className="relative rounded-xl bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-primary text-base font-bold text-white">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}