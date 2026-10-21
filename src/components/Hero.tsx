import Image from "next/image";
import BrandStamp from "@/components/BrandStamp";

export default function Hero() {
  return (
    <section className="pt-6 pb-16 overflow-hidden">
      <div className="section-container">

        {/* ── FULL-BLEED VIDEO HERO ──────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden min-h-[600px] lg:min-h-[680px] mb-12 shadow-2xl flex flex-col justify-between">

          {/* Video — the main visual, covers everything */}
          <video
            src="/videos/hero-banner.mp4"
            poster="/videos/hero-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay: only at the bottom so text is readable, top stays crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Top-left: eyebrow pill floats over the clear video */}
          <div className="relative z-10 p-8 sm:p-10 flex items-start justify-between">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white text-[13px] font-semibold px-4 py-2 rounded-full tracking-wide shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2FF59]" />
              Build your dream pool.
            </span>

            {/* Rotating stamp top-right */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 animate-spin-slow flex-shrink-0 drop-shadow-xl z-20">
              <BrandStamp variant="solid-white" size={96} />
            </div>
          </div>

          {/* Bottom: headline + CTA sit on the dark gradient */}
          <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="space-y-5 max-w-2xl">
              <h1 className="text-[clamp(2.75rem,5.5vw,5.75rem)] font-medium leading-[0.96] tracking-[-0.04em] text-white">
                You think,{" "}
                <span className="italic font-normal text-white/55">we build</span>
                <br />
                your dream pool.
              </h1>
              <p className="text-[16px] text-white/65 font-normal leading-relaxed max-w-md">
                Expert swimming pool construction, valet care, and aquatic
                engineering — serving estates and resorts since 1999.
              </p>
            </div>

            {/* CTA cluster */}
            <div className="flex flex-col sm:items-end gap-4 flex-shrink-0">
              <a
                href="#about"
                className="inline-flex items-center gap-3 bg-white text-[#0F1011] font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#F2FF59] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <span>Discover</span>
                <span className="w-6 h-6 rounded-full bg-[#0F1011] text-white flex items-center justify-center text-xs">
                  ↗
                </span>
              </a>
              <p className="text-[13px] text-white/50 text-right hidden sm:block">
                Expert swimming pool maintenence.
              </p>
            </div>
          </div>
        </div>

        {/* ── BELOW-HERO FIGMA IMAGE CARDS (unchanged) ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Card: Maldives Resort Pool */}
          <div
            className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[500px] shadow-sm group"
            style={{ position: "relative" }}
          >
            <Image
              src="/images/29_banner_image__rectangle_86.webp"
              alt="Udagada Resort, Maldives"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white text-[15px] font-medium tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F2FF59]" />
              <span>Udagada Resort, Maldives.</span>
            </div>
          </div>

          {/* Right Card: Swimmer & Mask Collage */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div
              className="relative rounded-2xl overflow-hidden h-[340px] lg:h-[400px] shadow-sm group"
              style={{ position: "relative" }}
            >
              <Image
                src="/images/31_banner_image__mask_group__image_54.webp"
                alt="Swimmer in crystal clear water"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Floating accent thumbnail */}
              <div
                className="absolute top-4 right-4 w-32 h-32 rounded-xl overflow-hidden border-2 border-white/80 shadow-md"
                style={{ position: "absolute" }}
              >
                <Image
                  src="/images/30_banner_image__mask_group__image_52.webp"
                  alt="Clear pool water"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              {/* Circular arrow CTA */}
              <div className="absolute bottom-6 right-6">
                <a
                  href="#contact"
                  aria-label="Request a quote"
                  className="w-16 h-16 rounded-full bg-[#0F1011] text-white flex items-center justify-center text-2xl hover:bg-[#1537EE] transition-all hover:scale-110 active:scale-95 shadow-lg"
                >
                  ↗
                </a>
              </div>

              <div className="absolute bottom-6 left-6 text-white text-[15px] font-medium tracking-wide">
                <span>Udagada Resort, Maldives.</span>
              </div>
            </div>

            {/* "dream come true." tagline */}
            <div className="pt-6 flex justify-end">
              <p className="text-[clamp(2.5rem,4vw,3.75rem)] font-light italic text-[#3B3B3D] tracking-tight text-right leading-none select-none">
                dream come true.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}