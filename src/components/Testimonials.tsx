import Image from "next/image";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Alishaan Deol",
    role: "Product Manager, Amazon",
    image: "/images/23_testimonials__feedback__rectangle_10.webp",
    quote:
      "Friendly, reliable and thorough weekly service. A big change from my previous pool cleaning company.",
    headline: "Nice job. I'm happy!",
  },
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Princeton NJ",
    image: "/images/02_about_us__rectangle_7.webp",
    quote:
      "They built our dream pool from scratch — on time, on budget. The craftsmanship is absolutely stunning.",
    headline: "Dream pool, delivered.",
  },
  {
    name: "James Okafor",
    role: "Hotel Manager, Cape May",
    image: "/images/04_about_us__stamp__image_39.webp",
    quote:
      "Our rooftop pool has never looked better. Aquelis's commercial team is world-class and incredibly professional.",
    headline: "World-class service.",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1.5 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-brand-bg content-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <Reveal direction="up">
              <span className="eyebrow-badge">Testimonials.</span>
              <h2 className="text-[clamp(2.15rem,4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink">
                Our Clients
                <br />
                Feedback.
              </h2>
            </Reveal>
            <Reveal direction="up" delayMs={100}>
              <p className="text-[15px] leading-relaxed text-brand-text-body">
                We specialize in providing top-notch pool service and maintenance to
                ensure your pool remains a safe, clean, and inviting space for
                relaxation and recreation.
              </p>
            </Reveal>
            <Reveal direction="up" delayMs={200}>
              <div className="pt-2">
                <a href="/projects#testimonials" className="btn-pill-dark group">
                  <span>Read All Reviews</span>
                  <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Testimonial Cards Stack */}
          <div className="lg:col-span-8 space-y-6">
            {testimonials.map((t, idx) => (
              <Reveal key={idx} direction="left" delayMs={idx * 100}>
                <div className="bg-brand-surface rounded-3xl p-6 sm:p-8 lg:p-10 space-y-4 shadow-xs border border-brand-border hover-lift">
                  <StarRow />
                  <h3 className="text-[19px] sm:text-[20px] font-semibold text-brand-ink">{t.headline}</h3>
                  <blockquote className="text-[clamp(1rem,1.4vw,1.25rem)] font-normal text-brand-text-body leading-relaxed tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4 pt-3 border-t border-brand-border">
                    <div
                      className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-primary-light shadow-xs"
                      style={{ position: "relative" }}
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-brand-ink">{t.name}</h4>
                      <p className="text-[12px] text-brand-text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
