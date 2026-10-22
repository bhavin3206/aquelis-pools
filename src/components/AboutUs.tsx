import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandStamp from "@/components/BrandStamp";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-brand-subtle content-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Image with Stamps */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left">
              <div
                className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[460px] lg:min-h-[560px] shadow-sm group"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/02_about_us__rectangle_7.webp"
                  alt="Pool technician maintaining swimming pool"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlapping Stamp Badges - Responsive bounds to prevent mobile overflow */}
              <div className="absolute -bottom-5 right-2 sm:-bottom-8 sm:-right-6 flex items-center z-10 drop-shadow-xl">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 animate-spin-slow hover:scale-110 transition-transform">
                  <BrandStamp variant="solid-white" size={100} />
                </div>
              </div>

              {/* Schedule maintenance pill tag */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-brand-ink/90 backdrop-blur-md text-white text-[12px] sm:text-[13px] font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                Our schedule maintenance services.
              </div>
            </Reveal>
          </div>

          {/* Right: Copy & Checklist */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <Reveal direction="up">
              <span className="eyebrow-badge">Welcome to Aquelis.</span>
              <h2 className="text-[clamp(2.15rem,4vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.04em] text-brand-ink">
                Simplify Pool Maintenance with Our Expert Services.
              </h2>
            </Reveal>

            <Reveal direction="up" delayMs={100}>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-brand-text-body max-w-[560px]">
                Many health clubs, fitness centers and private clubs, such as the YMCA,
                have pools used mostly for exercise or recreation. Many towns and cities
                provide public pools. Many hotels have pools available for their guests to
                use at their leisure.
              </p>
            </Reveal>

            {/* Checklist */}
            <Reveal direction="up" delayMs={200}>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-[16px] sm:text-[17px] font-bold text-brand-ink">
                    Regular Cleaning and Skimming.
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-[16px] sm:text-[17px] font-bold text-brand-ink">
                    Brushing and Vacuuming.
                  </span>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal direction="up" delayMs={300}>
              <div className="pt-2 sm:pt-4">
                <a href="#services" className="btn-pill-dark group">
                  <span>More About Us</span>
                  <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Editorial Footer Quote */}
            <Reveal direction="up" delayMs={350}>
              <div className="pt-6 border-t border-brand-border max-w-[480px]">
                <p className="text-[14px] font-medium text-brand-text-body leading-relaxed">
                  Every project begins with listening. We bring your vision to life with precision engineering, premium materials, and a commitment to your satisfaction that extends years beyond completion.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
