import Image from "next/image";

const BENEFITS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5.5 8.5l13-1M5.5 15.5l13 1" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Year-Round Swimming",
    description: "Enjoy your pool regardless of weather conditions with climate-controlled indoor environments.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Health & Wellness",
    description: "Swimming provides full-body exercise, reduces stress, and improves cardiovascular health.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
    title: "Increased Property Value",
    description: "A premium indoor pool adds significant value and appeal to your property.",
  },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
          We build the finest pools
        </p>

        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl leading-tight tracking-tight text-dark md:text-5xl">
            Benefits of an Indoor
            <br />
            Swimming Pool{" "}
            <span className="font-sans italic text-accent">Premise.</span>
          </h2>

          {/* Nav arrows */}
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-dark hover:text-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-dark hover:text-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Benefit Cards */}
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-dark transition-colors group-hover:bg-accent group-hover:text-dark">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-dark">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}

          {/* Request a Quote Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-dark p-6 text-white">
            <div>
              <h3 className="font-display mb-3 text-2xl">
                Request a<br />Quote.
              </h3>
              <p className="mb-6 text-sm text-gray-400">
                Get a personalized estimate for your dream pool project.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        {/* Bottom image strip */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80",
            "https://images.unsplash.com/photo-1562844282-44cead3f40af?w=400&q=80",
            "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&q=80",
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&q=80",
          ].map((src, i) => (
            <div key={i} className="img-zoom overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={`Pool showcase ${i + 1}`}
                width={400}
                height={250}
                className="h-36 w-full object-cover md:h-44"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
