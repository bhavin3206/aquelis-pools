import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Services() {
  const serviceCards = [
    {
      title: "Building New Pools.",
      image: "/images/09_our_professional_pool_services__all_our_services__card_01__rectangle_11.jpg",
    },
    {
      title: "Pool Repair",
      image: "/images/10_our_professional_pool_services__all_our_services__card_2__rectangle_11.jpg",
    },
    {
      title: "Pool Maintenance",
      image: "/images/11_our_professional_pool_services__all_our_services__card_3__rectangle_11.jpg",
    },
    {
      title: "Equipment Install",
      image: "/images/12_our_professional_pool_services__all_our_services__card_4__rectangle_11.jpg",
    },
    {
      title: "Water Treatment",
      image: "/images/13_our_professional_pool_services__all_our_services__card_5__rectangle_11.jpg",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F3F3F5] relative overflow-hidden content-auto">
      <div className="section-container relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal direction="up">
            <span className="eyebrow-badge">We specialize in the following.</span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011]">
              Our Professional
              <br />
              Pool Services.
            </h2>
          </Reveal>

          <Reveal direction="up" delayMs={100}>
            <a href="#contact" className="btn-pill-dark group">
              <span>Discover</span>
              <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        {/* 2 Primary Feature Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Residential Card */}
          <Reveal direction="up" delayMs={100}>
            <div className="bg-[#E7E7E9] rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover-lift cursor-pointer">
              <div
                className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] mb-6"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.jpg"
                  alt="Residential Pool Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[26px] font-medium text-[#0F1011] tracking-tight group-hover:text-[#1537EE] transition-colors">
                    Residential Pool Services
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-[#0F1011] text-white flex items-center justify-center text-sm group-hover:bg-[#1537EE] group-hover:scale-110 transition-all">
                    ↗
                  </span>
                </div>
                <p className="text-[14px] text-[#59595D] leading-relaxed">
                  Each pool is different. We can customize your service to fit your
                  location&apos;s needs. We can also offer services that are completely unique
                  to your area!
                </p>
              </div>
            </div>
          </Reveal>

          {/* Commercial Card */}
          <Reveal direction="up" delayMs={200}>
            <div className="bg-[#E7E7E9] rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover-lift cursor-pointer">
              <div
                className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] mb-6"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.jpg"
                  alt="Commercial Pool Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[26px] font-medium text-[#0F1011] tracking-tight group-hover:text-[#1537EE] transition-colors">
                    Commercial Pool Services
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-[#0F1011] text-white flex items-center justify-center text-sm group-hover:bg-[#1537EE] group-hover:scale-110 transition-all">
                    ↗
                  </span>
                </div>
                <p className="text-[14px] text-[#59595D] leading-relaxed">
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
          <div className="bg-[#E2E2E5] rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[13px] font-bold text-[#8F9096] uppercase tracking-wider block mb-1">
                  All our Services.
                </span>
                <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium text-[#0F1011] tracking-tight">
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

            {/* Service Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-3 flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="relative rounded-xl overflow-hidden h-36 mb-3"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[13px] font-bold text-[#0F1011] leading-tight group-hover:text-[#1537EE] transition-colors">
                      {card.title}
                    </span>
                    <span className="text-xs text-[#8F9096] group-hover:text-[#1537EE] group-hover:translate-x-0.5 transition-all">
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
