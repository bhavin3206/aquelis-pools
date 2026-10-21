import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import RequestQuote from "@/components/RequestQuote";

export const metadata: Metadata = {
  title: "Pool Services & Construction — Jal. sarah.",
  description:
    "Explore Jalsarah's full range of pool services: custom in-ground builds, weekly valet cleaning, pump repairs, and commercial maintenance.",
};

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "New Pool Construction",
      tag: "Custom Builds",
      desc: "Turnkey architectural construction from excavation to shotcrete reinforcement, custom coping, and premium plaster finishes.",
      image: "/images/09_our_professional_pool_services__all_our_services__card_01__rectangle_11.jpg",
      points: ["Full 3D CAD visualization", "Soil testing & engineered permits", "Lifetime structural shell warranty"],
    },
    {
      title: "Weekly Valet & Maintenance",
      tag: "Routine Care",
      desc: "White-glove weekly service ensuring crystal-clear, safe water without chlorine odor or eye irritation.",
      image: "/images/11_our_professional_pool_services__all_our_services__card_3__rectangle_11.jpg",
      points: ["Multi-point digital water testing", "Skimming, vacuuming & tile brushing", "Filter backwashing & basket clears"],
    },
    {
      title: "Equipment & Automation Install",
      tag: "Smart Systems",
      desc: "Upgrade to whisper-quiet variable-speed pumps, saltwater chlorinators, and smartphone-controlled automation.",
      image: "/images/12_our_professional_pool_services__all_our_services__card_4__rectangle_11.jpg",
      points: ["Pentair & Hayward certified installer", "Up to 70% energy cost reduction", "Smartphone app water temperature control"],
    },
    {
      title: "Pool Renovation & Resurfacing",
      tag: "Restoration",
      desc: "Transform dated pools into contemporary paradises with French coping, glass mosaics, and aggregate plaster.",
      image: "/images/10_our_professional_pool_services__all_our_services__card_2__rectangle_11.jpg",
      points: ["Pebble-Tec & diamond plastering", "Modern waterline mosaic tile", "LED underwater multi-color lighting"],
    },
    {
      title: "Commercial Aquatic Facilities",
      tag: "Commercial Grade",
      desc: "Comprehensive compliance and management for hotels, fitness centers, community pools, and resorts.",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.jpg",
      points: ["Daily health code documentation", "Certified Pool Operator (CPO) staff", "24/7 priority emergency dispatch"],
    },
    {
      title: "Leak Detection & Repair",
      tag: "Diagnostic",
      desc: "Non-invasive electronic acoustic leak detection and pressure testing to pinpoint hidden subterranean leaks.",
      image: "/images/15_why_choose_us__image__rectangle_10.jpg",
      points: ["Sonar & dye leak isolation", "Zero destruction diagnostic", "Underground plumbing trenchless repairs"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-10 pb-12 border-b border-[#D8D8DA]">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold">
              Home
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <span className="font-semibold text-[#0F1011]">Services &amp; Capabilities.</span>
          </div>

          <div className="max-w-4xl">
            <span className="eyebrow-badge">Our Comprehensive Capabilities</span>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011] mb-4">
              Our Professional{" "}
              <span className="text-[#8F9096] italic font-normal">Pool Services</span>.
            </h1>
            <p className="text-[17px] text-[#59595D] leading-relaxed max-w-2xl">
              From architectural pool design and custom excavation to robotic water
              testing and lifetime weekly maintenance, discover why we are New Jersey’s
              most trusted aquatic specialist.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Category Split Cards */}
      <section className="py-16 bg-[#ECECED]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Residential Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover-lift shadow-sm">
              <div>
                <div
                  className="relative rounded-2xl overflow-hidden h-[300px] mb-6"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.jpg"
                    alt="Residential Pools"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F1011] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Residential Care
                  </div>
                </div>
                <h3 className="text-[28px] font-medium text-[#0F1011] tracking-tight mb-3">
                  Residential Pool Services
                </h3>
                <p className="text-[15px] text-[#59595D] leading-relaxed mb-6">
                  Each residential property is unique. We customize your maintenance
                  schedule around your family’s swimming habits, foliage coverage, and
                  automation equipment.
                </p>
                <ul className="space-y-2.5 text-sm font-medium text-[#0F1011] mb-6">
                  <li className="flex items-center gap-2">✓ Automated chemical dosing calibration</li>
                  <li className="flex items-center gap-2">✓ Robotic vacuuming & surface skimming</li>
                  <li className="flex items-center gap-2">✓ Seasonal winterization & summer opening</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-pill-dark group w-fit">
                <span>Request Residential Quote</span>
                <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </Link>
            </div>

            {/* Commercial Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover-lift shadow-sm">
              <div>
                <div
                  className="relative rounded-2xl overflow-hidden h-[300px] mb-6"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.jpg"
                    alt="Commercial Pools"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#1537EE] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Commercial Care
                  </div>
                </div>
                <h3 className="text-[28px] font-medium text-[#0F1011] tracking-tight mb-3">
                  Commercial Pool Services
                </h3>
                <p className="text-[15px] text-[#59595D] leading-relaxed mb-6">
                  Compliance and bather safety come first. Our certified pool operators
                  ensure strict state health code adherence, continuous disinfection, and
                  daily chemical logging.
                </p>
                <ul className="space-y-2.5 text-sm font-medium text-[#0F1011] mb-6">
                  <li className="flex items-center gap-2">✓ Daily bather load chemistry regulation</li>
                  <li className="flex items-center gap-2">✓ OSHA & municipal health code compliance</li>
                  <li className="flex items-center gap-2">✓ Rapid-response mechanical repair team</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-pill-dark group w-fit">
                <span>Request Commercial Consultation</span>
                <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-[#F3F3F5]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-badge">Specializations</span>
            <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium tracking-tight text-[#0F1011]">
              Every Pool Need Under One Roof.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, idx) => (
              <Reveal key={idx} direction="up" delayMs={idx * 80}>
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 hover-lift flex flex-col justify-between h-full">
                  <div>
                    <div className="relative rounded-2xl overflow-hidden h-48 mb-5" style={{ position: "relative" }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0F1011]">
                        {service.tag}
                      </div>
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0F1011] mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[#59595D] leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#F0F0F2]">
                      {service.points.map((pt, pIdx) => (
                        <div key={pIdx} className="text-xs font-medium text-[#0F1011] flex items-center gap-2">
                          <span className="text-[#1537EE]">✓</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/contact" className="text-sm font-bold text-[#0F1011] hover:text-[#1537EE] flex items-center justify-between group">
                      <span>Book this service</span>
                      <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <RequestQuote />

      <Footer />
    </main>
  );
}
