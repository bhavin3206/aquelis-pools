import Reveal from "@/components/Reveal";

export default function InfoStrap() {
  return (
    <section className="py-14 bg-[#0F1011] border-y border-[#1D1E20] content-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Item 1 */}
          <Reveal direction="up" delayMs={0}>
            <div className="flex gap-5 items-start group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5 group-hover:scale-105 group-hover:shadow-md transition-all">
                <span className="text-[28px] font-bold text-[#F2FF59]">25</span>
              </div>
              <div>
                <h3 className="text-[19px] font-medium text-white leading-snug mb-1">
                  years of experience.
                </h3>
                <p className="text-[13px] text-[#8F9096] leading-relaxed">
                  For over 25 years we have been offering only the best products and
                  services.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Item 2 */}
          <Reveal direction="up" delayMs={100}>
            <div className="flex gap-5 items-start group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5 group-hover:scale-105 group-hover:shadow-md transition-all">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1537EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[19px] font-medium text-white leading-snug mb-1">
                  Quality Products. Delivered by experts.
                </h3>
                <p className="text-[13px] text-[#8F9096] leading-relaxed">
                  Your satisfaction is our priority. If you&apos;re not completely happy with
                  our service, we&apos;ll work.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Item 3 */}
          <Reveal direction="up" delayMs={200}>
            <div className="flex gap-5 items-start group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5 group-hover:scale-105 group-hover:shadow-md transition-all">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1537EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-[19px] font-medium text-white leading-snug mb-1">
                  24/7 hours clients support.
                </h3>
                <p className="text-[13px] text-[#8F9096] leading-relaxed">
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
