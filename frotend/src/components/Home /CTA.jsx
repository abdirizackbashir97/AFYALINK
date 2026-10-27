function FinalCTA({ h }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-secondary/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">{h.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-700">{h.cta.description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              {h.cta.primary}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              {h.cta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}