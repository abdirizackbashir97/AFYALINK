function Stats({ h }) {
  const items = [
    { value: h.stats.mothersValue, label: h.stats.mothersLabel },
    { value: h.stats.facilitiesValue, label: h.stats.facilitiesLabel },
    { value: h.stats.languagesValue, label: h.stats.languagesLabel },
    { value: h.stats.topicsValue, label: h.stats.topicsLabel },
  ];
  
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-brand-primary sm:text-4xl">{item.value}</p>
            <p className="mt-1 text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}