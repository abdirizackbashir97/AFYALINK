const SERVICES = [
  { key: "maternal", href: "/maternal", icon: <MaternalIcon /> },
  { key: "baby", href: "/baby", icon: <BabyIcon /> },
  { key: "mental", href: "/mental-health", icon: <MentalIcon /> },
  { key: "info", href: "/health-info", icon: <InfoIcon /> },
  { key: "facilities", href: "/facilities", icon: <FacilityIcon /> },
  { key: "appointments", href: "/appointments", icon: <CalendarIcon /> },
];

function Services({ h }) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0F766E 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Header — editorial style */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-secondary" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {h.services.kicker}
            </p>
            <span className="h-px w-8 bg-brand-secondary" />
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {h.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {h.services.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const data = h.services[service.key];
            const num = String(index + 1).padStart(2, "0");

            return (
              <li key={service.key}>
                <Link
                  to={service.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
                >
                  {/* Gradient overlay — appears on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-transparent to-brand-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Number badge — top right */}
                  <span className="absolute right-5 top-5 text-xs font-bold tracking-wider text-gray-300 transition-colors group-hover:text-brand-secondary">
                    {num}
                  </span>

                  {/* Icon */}
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-secondary/10 text-brand-primary shadow-sm transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-secondary/30">
                    <span className="h-7 w-7">{service.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-6 text-lg font-bold text-brand-primary transition-colors group-hover:text-brand-primary">
                    {data.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-2 text-sm leading-relaxed text-gray-600">
                    {data.description}
                  </p>

                  {/* Learn more */}
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    {h.services.learnMore}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {/* Bottom accent line — grows on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-secondary transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}