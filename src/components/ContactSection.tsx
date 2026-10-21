import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#ECECED] content-auto">
      <div className="section-container">
        <Reveal direction="up">
          <div className="bg-[#DFDFE1] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="eyebrow-badge">Please Contact Us Today!</span>
                <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011]">
                  Interested in Realizing
                  <br />
                  Your Dream?
                </h2>
                <p className="text-[16px] leading-relaxed text-[#59595D] max-w-lg">
                  Are you looking for licensed pool service company? Or do you simply need
                  a pool cleaning service you can rely on? Your search is over.
                </p>

                {/* Contact info list */}
                <div className="space-y-3 pt-2">
                  <a
                    href="tel:08004567890"
                    className="flex items-center gap-3 group w-fit cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1537EE] shadow-sm group-hover:scale-110 group-hover:bg-[#1537EE] group-hover:text-white transition-all">
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
                    <span className="text-[20px] font-bold text-[#0F1011] group-hover:text-[#1537EE] transition-colors">
                      0-(800)-456-78-90
                    </span>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1537EE] shadow-sm">
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
                    <span className="text-[17px] font-medium text-[#0F1011]">
                      New Hampshire, New Jersey, USA
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a href="tel:08004567890" className="btn-pill-dark group">
                    <span>Call me back</span>
                    <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                  <a
                    href="mailto:aquelis@logoipsum.com"
                    className="text-sm font-semibold text-[#0F1011] hover:text-[#1537EE] transition-colors py-2 px-3"
                  >
                    Or email our team ↗
                  </a>
                </div>
              </div>

              {/* Right Map Image */}
              <div className="lg:col-span-6 relative">
                <div
                  className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] shadow-sm border border-black/5 bg-white group"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/27_please_contact_us_today__map__rectangle_10.webp"
                    alt="Area map location"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#0F1011] shadow-sm flex items-center gap-1.5 border border-black/5">
                    <span className="w-2 h-2 rounded-full bg-[#1537EE]"></span>
                    Serving New Jersey &amp; Surrounding Areas
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
