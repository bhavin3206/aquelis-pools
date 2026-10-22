import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-24 bg-brand-bg content-auto">
      <div className="section-container">
        <Reveal direction="up">
          <div className="bg-brand-subtle border border-brand-border rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="eyebrow-badge">Please Contact Us Today!</span>
                <h2 className="text-[clamp(2.15rem,4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink">
                  Interested in Realizing
                  <br />
                  Your Dream?
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-brand-text-body max-w-lg">
                  Are you looking for licensed pool service company? Or do you simply need
                  a pool cleaning service you can rely on? Your search is over.
                </p>

                {/* Contact info list */}
                <div className="space-y-3.5 pt-2">
                  <a
                    href="tel:08004567890"
                    className="flex items-center gap-3.5 group w-fit cursor-pointer min-h-[44px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-xs group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all flex-shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-[18px] sm:text-[20px] font-bold text-brand-ink group-hover:text-brand-primary transition-colors">
                      0-(800)-456-78-90
                    </span>
                  </a>

                  <div className="flex items-center gap-3.5 min-h-[44px]">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-xs flex-shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="text-[15px] sm:text-[17px] font-medium text-brand-ink">
                      New Hampshire, New Jersey, USA
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a href="tel:08004567890" className="btn-pill-dark group">
                    <span>Call me back</span>
                    <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                  <a
                    href="mailto:aquelis@logoipsum.com"
                    className="text-sm font-semibold text-brand-ink hover:text-brand-primary transition-colors py-2 px-3"
                  >
                    Or email our team ↗
                  </a>
                </div>
              </div>

              {/* Right Map Image */}
              <div className="lg:col-span-6 relative">
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[16/11] sm:h-[360px] shadow-xs border border-brand-border bg-white group"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/27_please_contact_us_today__map__rectangle_10.webp"
                    alt="Area map location"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-ink shadow-xs flex items-center gap-2 border border-brand-border">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                    Serving New Jersey &amp; Tri-State
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
