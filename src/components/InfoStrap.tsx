import Reveal from "@/components/Reveal";

export default function InfoStrap() {
  return (
    <section className="py-12 sm:py-14 bg-[#090A0C] border-y border-white/10 content-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Item 1 */}
          <Reveal direction="up" delayMs={0}>
            <div className="flex gap-4 sm:gap-5 items-start group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-xs border border-white/10 group-hover:scale-105 transition-all">
                <span className="text-[24px] sm:text-[28px] font-bold text-white">25</span>
              </div>
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-medium text-white leading-snug mb-1">
                  years of experience.
                </h3>
                <p className="text-[13px] text-[#8F94A0] leading-relaxed">
                  For over 25 years we have been offering only the best products and
                  services.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Item 2 */}
          <Reveal direction="up" delayMs={100}>
            <div className="flex gap-4 sm:gap-5 items-start group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-xs border border-white/10 group-hover:scale-105 transition-all">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B2FC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-medium text-white leading-snug mb-1">
                  Quality Products. Delivered by experts.
                </h3>
                <p className="text-[13px] text-[#8F94A0] leading-relaxed">
                  Your satisfaction is our priority. If you&apos;re not completely happy with
                  our service, we&apos;ll work.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Item 3 */}
          <Reveal direction="up" delayMs={200}>
            <div className="flex gap-4 sm:gap-5 items-start group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-xs border border-white/10 group-hover:scale-105 transition-all">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B2FC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-medium text-white leading-snug mb-1">
                  24/7 hours clients support.
                </h3>
                <p className="text-[13px] text-[#8F94A0] leading-relaxed">
                  We offer flexible service plans that can be tailored to your specific
                  preferences and pool.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
