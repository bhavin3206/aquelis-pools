import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandStamp from "@/components/BrandStamp";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#ECECED] content-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image with Stamps */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left">
              <div
                className="relative rounded-3xl overflow-hidden min-h-[460px] lg:min-h-[560px] shadow-sm group"
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

              {/* Overlapping Stamp Badges */}
              <div className="absolute -bottom-8 -right-8 flex items-center z-10 drop-shadow-xl">
                <div className="relative w-28 h-28 animate-spin-slow hover:scale-110 transition-transform">
                  <BrandStamp variant="solid-white" size={112} />
                </div>
              </div>

              {/* Schedule maintenance pill tag */}
              <div className="absolute bottom-6 left-6 bg-[#0F1011] text-white text-[13px] font-medium px-4 py-2 rounded-full shadow-lg">
                Our schedule maintenance services.
              </div>
            </Reveal>
          </div>

          {/* Right: Copy & Checklist */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <Reveal direction="up">
              <span className="eyebrow-badge">Welcome to Aquelis.</span>
              <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0F1011]">
                Simplify Pool Maintenance with Our Expert Services.
              </h2>
            </Reveal>

            <Reveal direction="up" delayMs={100}>
              <p className="text-[16px] leading-relaxed text-[#59595D] max-w-[560px]">
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
                  <div className="w-5 h-5 rounded-full bg-[#1537EE] text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <span className="text-[17px] font-bold text-[#0F1011]">
                    Regular Cleaning and Skimming.
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#1537EE] text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <span className="text-[17px] font-bold text-[#0F1011]">
                    Brushing and Vacuuming.
                  </span>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal direction="up" delayMs={300}>
              <div className="pt-4">
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
              <div className="pt-6 border-t border-[#D5D5D8] max-w-[480px]">
                <p className="text-[14px] font-medium text-[#0F1011] leading-relaxed">
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
