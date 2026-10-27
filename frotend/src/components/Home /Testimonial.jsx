function Testimonial({ h }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-brand-primary p-8 text-white sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{h.testimonial.kicker}</p>
          <blockquote className="mt-4 text-xl leading-relaxed sm:text-2xl">
            "{h.testimonial.quote}"
          </blockquote>
          <footer className="mt-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-base font-bold text-brand-primary">
              {h.testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{h.testimonial.author}</p>
              <p className="text-sm text-white/75">{h.testimonial.role}</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}