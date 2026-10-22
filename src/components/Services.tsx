import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Services() {
  const serviceCards = [
    {
      title: "Building New Pools.",
      image: "/images/09_our_professional_pool_services__all_our_services__card_01__rectangle_11.webp",
    },
    {
      title: "Pool Repair",
      image: "/images/10_our_professional_pool_services__all_our_services__card_2__rectangle_11.webp",
    },
    {
      title: "Pool Maintenance",
      image: "/images/11_our_professional_pool_services__all_our_services__card_3__rectangle_11.webp",
    },
    {
      title: "Equipment Install",
      image: "/images/12_our_professional_pool_services__all_our_services__card_4__rectangle_11.webp",
    },
    {
      title: "Water Treatment",
      image: "/images/13_our_professional_pool_services__all_our_services__card_5__rectangle_11.webp",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-brand-bg relative overflow-hidden content-auto">
      <div className="section-container relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <Reveal direction="up">
            <span className="eyebrow-badge">We specialize in the following.</span>
            <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink">
              Our Professional
              <br />
              Pool Services.
            </h2>
          </Reveal>

          <Reveal direction="up" delayMs={100}>
            <a href="#contact" className="btn-pill-dark group self-start md:self-auto">
              <span>Discover</span>
              <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        {/* 2 Primary Feature Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
          {/* Residential Card */}
          <Reveal direction="up" delayMs={100}>
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover-lift cursor-pointer shadow-xs">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:h-[340px] mb-6"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.webp"
                  alt="Residential Pool Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[22px] sm:text-[26px] font-medium text-brand-ink tracking-tight group-hover:text-brand-primary transition-colors">
                    Residential Pool Services
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-brand-ink text-white flex items-center justify-center text-sm group-hover:bg-brand-primary group-hover:scale-110 transition-all flex-shrink-0">
                    ↗
                  </span>
                </div>
                <p className="text-[14px] text-brand-text-body leading-relaxed">
                  Each pool is different. We can customize your service to fit your
                  location&apos;s needs. We can also offer services that are completely unique
                  to your area!
                </p>
              </div>
            </div>
          </Reveal>

          {/* Commercial Card */}
          <Reveal direction="up" delayMs={200}>
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover-lift cursor-pointer shadow-xs">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:h-[340px] mb-6"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.webp"
                  alt="Commercial Pool Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[22px] sm:text-[26px] font-medium text-brand-ink tracking-tight group-hover:text-brand-primary transition-colors">
                    Commercial Pool Services
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-brand-ink text-white flex items-center justify-center text-sm group-hover:bg-brand-primary group-hover:scale-110 transition-all flex-shrink-0">
                    ↗
                  </span>
                </div>
                <p className="text-[14px] text-brand-text-body leading-relaxed">
                  Each pool is different. We can customize your service to fit your
                  location&apos;s needs. Professional compliance, daily testing, and full
                  turnkey management.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Categories of Specialization Banner & Grid */}
        <Reveal direction="up" delayMs={150}>
          <div className="bg-brand-subtle border border-brand-border rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] sm:text-[13px] font-bold text-brand-text-muted uppercase tracking-wider block mb-1">
                  All our Services.
                </span>
                <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-brand-ink tracking-tight">
                  Our Categories of Specialization.
                </h3>
              </div>
              <a href="#contact" className="btn-pill-dark group self-start sm:self-auto">
                <span>Discover</span>
                <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </div>

            {/* Service Cards Row: Responsive 1 col on mobile, 2 on small, 3 on md, 5 on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-brand-surface rounded-2xl p-3.5 flex flex-col justify-between group hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-brand-border"
                >
                  <div
                    className="relative rounded-xl overflow-hidden aspect-[16/10] sm:h-36 mb-3"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[13px] font-bold text-brand-ink leading-tight group-hover:text-brand-primary transition-colors">
                      {card.title}
                    </span>
                    <span className="text-xs text-brand-text-muted group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
