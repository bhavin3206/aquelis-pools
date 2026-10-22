import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandStamp from "@/components/BrandStamp";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-brand-bg content-auto">
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <Reveal direction="up">
            <span className="eyebrow-badge">Why Choose Us.</span>
            <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink mb-4">
              Worry-free, technology-
              <br />
              driven reliability.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-brand-text-body">
              Delivering premium pool construction and white-glove care for 25+ years.
            </p>
          </Reveal>
        </div>

        {/* Big Panorama Image - 100% fluid mobile-first */}
        <Reveal direction="up" delayMs={100} className="w-full">
          <div
            className="relative w-full max-w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] shadow-sm mb-12 sm:mb-16 group"
            style={{ position: "relative" }}
          >
            <Image
              src="/images/14_why_choose_us__image__rectangle_7.webp"
              alt="Panoramic luxury swimming pool"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Frosted contextual pill overlay */}
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 max-w-[calc(100%-1.5rem)] bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent-glow animate-pulse shrink-0"></span>
              <span className="truncate">Personalized Weekly Valet • New Jersey</span>
            </div>
          </div>
        </Reveal>

        {/* Personalized Service Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="right">
              <span className="eyebrow-badge">Personalized</span>
              <h3 className="text-[clamp(1.75rem,3.2vw,3.25rem)] font-medium tracking-tight text-brand-ink">
                Personalized Service.
              </h3>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-brand-text-body max-w-lg">
                Our certified technicians regularly test and balance the water chemistry,
                maintaining optimal pH, alkalinity, and chlorine levels for a safe and
                enjoyable swimming experience. Every package is molded to your property.
              </p>
              <div className="pt-2">
                <a href="#contact" className="btn-pill-dark group">
                  <span>Discover</span>
                  <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 relative overflow-hidden sm:overflow-visible">
            <Reveal direction="left" delayMs={100} className="w-full">
              <div
                className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[400px] shadow-sm group"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/15_why_choose_us__image__rectangle_10.webp"
                  alt="Pool specialist testing water quality"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Rotating Vector Stamp - contained safely */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 animate-spin-slow hover:scale-110 transition-transform drop-shadow-xl z-10 pointer-events-none">
                <BrandStamp variant="solid-white" size={100} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
