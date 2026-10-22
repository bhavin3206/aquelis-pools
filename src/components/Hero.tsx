import Image from "next/image";
import BrandStamp from "@/components/BrandStamp";

export default function Hero() {
  return (
    <section className="pt-6 pb-16 overflow-hidden">
      <div className="section-container">

        {/* ── FULL-BLEED VIDEO HERO ──────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] mb-8 sm:mb-12 shadow-2xl flex flex-col justify-between">

          {/* Video — the main visual, covers everything */}
          <video
            poster="/videos/hero-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-banner.webm" type="video/webm" />
            <source src="/videos/hero-banner.mp4" type="video/mp4" />
          </video>

          {/* Overlay: only at the bottom so text is readable, top stays crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Top-left: eyebrow pill floats over the clear video */}
          <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-white text-[12px] sm:text-[13px] font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38E1EC] animate-pulse" />
              Build your dream pool.
            </span>

            {/* Rotating stamp top-right */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 animate-spin-slow flex-shrink-0 drop-shadow-xl z-20">
              <BrandStamp variant="solid-white" size={80} />
            </div>
          </div>

          {/* Bottom: headline + CTA sit on the dark gradient */}
          <div className="relative z-10 p-5 sm:p-8 lg:p-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-[clamp(2.15rem,5vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white">
                You think,{" "}
                <span className="italic font-normal text-white/60">we build</span>
                <br />
                your dream pool.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-white/75 font-normal leading-relaxed max-w-md">
                Expert swimming pool construction, valet care, and aquatic
                engineering — serving estates and resorts since 1999.
              </p>
            </div>

            {/* CTA cluster */}
            <div className="flex flex-col sm:items-end gap-3 sm:gap-4 flex-shrink-0">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-brand-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
              >
                <span>Discover</span>
                <span className="w-6 h-6 rounded-full bg-brand-ink text-white flex items-center justify-center text-xs group-hover:bg-white group-hover:text-brand-ink transition-colors">
                  ↗
                </span>
              </a>
              <p className="text-[12px] sm:text-[13px] text-white/60 text-right hidden sm:block">
                Expert swimming pool maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* ── BELOW-HERO FIGMA IMAGE CARDS ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Card: Maldives Resort Pool */}
          <div
            className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] shadow-sm group"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-white text-[14px] sm:text-[15px] font-medium tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38E1EC]" />
              <span>Udagada Resort, Maldives.</span>
            </div>
          </div>

          {/* Right Card: Swimmer & Mask Collage */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div
              className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[340px] lg:min-h-[390px] shadow-sm group"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating accent thumbnail */}
              <div
                className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/90 shadow-md"
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
              <div className="absolute bottom-5 sm:bottom-6 right-5 sm:right-6">
                <a
                  href="#contact"
                  aria-label="Request a quote"
                  className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-brand-ink text-white flex items-center justify-center text-xl sm:text-2xl hover:bg-brand-primary transition-all hover:scale-110 active:scale-95 shadow-lg"
                >
                  ↗
                </a>
              </div>

              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-white text-[14px] sm:text-[15px] font-medium tracking-wide">
                <span>Crystal Clarity Standard.</span>
              </div>
            </div>

            {/* "dream come true." tagline */}
            <div className="pt-2 sm:pt-4 flex justify-end">
              <p className="text-[clamp(2.25rem,4vw,3.75rem)] font-light italic text-brand-text-muted tracking-tight text-right leading-none select-none">
                dream come true.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}