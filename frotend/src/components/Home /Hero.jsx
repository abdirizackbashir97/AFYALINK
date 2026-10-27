function Hero({ h }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  // Auto-advance every 5s
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused]);

  // Fade content out → in when slide changes
  useEffect(() => {
    setContentVisible(false);
    const t = setTimeout(() => setContentVisible(true), 120);
    return () => clearTimeout(t);
  }, [activeSlide]);

  // Content for the current slide (fallback to base hero text)
  const slide = h.hero.slides?.[activeSlide] ?? h.hero;

  return (
    <section
      className="relative isolate min-h-[80vh] overflow-hidden rounded-b-3xl bg-brand-primary shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Rotating background images */}
      {HERO_SLIDES.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            i === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Light teal tint */}
      <div aria-hidden="true" className="absolute inset-0 bg-brand-primary/35" />

      {/* Radial darkening — behind text */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at center, rgba(15,118,110,0.75) 0%, rgba(15,118,110,0.45) 40%, rgba(15,118,110,0.05) 75%, transparent 100%)",
        }}
      />

      {/* Top/bottom fades */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-primary/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-primary/60 to-transparent"
      />

      {/* Content — fades on slide change */}
      <div
        className={`relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-20 pb-28 text-center transition-all duration-500 ease-out sm:px-6 lg:px-8 ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-brand-secondary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary drop-shadow">
            {slide.kicker}
          </span>
          <span className="h-px w-10 bg-brand-secondary" />
        </div>

        {/* Headline */}
        <h1
          className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{
            textShadow:
              "0 2px 24px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          {slide.titleLine1}{" "}
          <span className="text-brand-secondary">{slide.titleHighlight}</span>{" "}
          {slide.titleLine2}
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
        >
          {slide.description}
        </p>

        {/* CTAs — slide-specific destinations */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={slide.ctaPrimaryHref}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-brand-secondary px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_-10px_rgba(16,185,129,0.8)] transition hover:border-white hover:bg-white hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {slide.ctaPrimary}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to={slide.ctaSecondaryHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/15 px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md transition hover:border-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          >
            {slide.ctaSecondary}
          </Link>
        </div>

        {/* Trust line — same across all slides */}
        <ul
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          <ProofItem label={h.hero.proofFree} />
          <ProofItem label={h.hero.proofLanguages} />
          <ProofItem label={h.hero.proofFacilities} />
        </ul>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === activeSlide ? "true" : "false"}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeSlide
                ? "w-8 bg-brand-secondary"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}