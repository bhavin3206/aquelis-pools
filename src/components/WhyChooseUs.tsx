import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandStamp from "@/components/BrandStamp";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#EBEBED] content-auto">
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <Reveal direction="up">
            <span className="eyebrow-badge">Why Choose Us.</span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011] mb-4">
              Worry-free, technology-
              <br />
              driven reliability.
            </h2>
            <p className="text-[16px] text-[#59595D]">
              Delivering premium pool construction and white-glove care for 25+ years.
            </p>
          </Reveal>
        </div>

        {/* Big Panorama Image */}
        <Reveal direction="up" delayMs={100}>
          <div
            className="relative rounded-3xl overflow-hidden h-[300px] sm:h-[420px] lg:h-[480px] shadow-sm mb-16 group"
            style={{ position: "relative" }}
          >
            <Image
              src="/images/14_why_choose_us__image__rectangle_7.webp"
              alt="Panoramic luxury swimming pool"
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Frosted contextual pill overlay */}
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F2FF59] animate-pulse"></span>
              Personalized Weekly Valet • New Jersey
            </div>
          </div>
        </Reveal>

        {/* Personalized Service Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="right">
              <span className="eyebrow-badge">Personalized</span>
              <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium tracking-tight text-[#0F1011]">
                Personalized Service.
              </h3>
              <p className="text-[16px] leading-relaxed text-[#59595D] max-w-lg">
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

          <div className="lg:col-span-6 relative overflow-visible">
            <Reveal direction="left" delayMs={100}>
              <div
                className="relative rounded-3xl overflow-hidden h-[320px] sm:h-[400px] shadow-sm group"
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
              {/* Rotating Vector Stamp */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 animate-spin-slow hover:scale-110 transition-transform drop-shadow-xl z-10">
                <BrandStamp variant="solid-white" size={112} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
