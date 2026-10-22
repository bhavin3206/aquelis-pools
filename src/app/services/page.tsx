import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import RequestQuote from "@/components/RequestQuote";

export const metadata: Metadata = {
  title: "Pool Services & Construction — Aquelis Luxury Pools",
  description:
    "Explore Aquelis's full range of architectural pool services: custom in-ground builds, weekly valet cleaning, pump repairs, and commercial maintenance.",
};

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "New Pool Construction",
      tag: "Custom Builds",
      desc: "Turnkey architectural construction from excavation to shotcrete reinforcement, custom coping, and premium plaster finishes.",
      image: "/images/09_our_professional_pool_services__all_our_services__card_01__rectangle_11.webp",
      points: ["Full 3D CAD visualization", "Soil testing & engineered permits", "Lifetime structural shell warranty"],
    },
    {
      title: "Weekly Valet & Maintenance",
      tag: "Routine Care",
      desc: "White-glove weekly service ensuring crystal-clear, safe water without chlorine odor or eye irritation.",
      image: "/images/11_our_professional_pool_services__all_our_services__card_3__rectangle_11.webp",
      points: ["Multi-point digital water testing", "Skimming, vacuuming & tile brushing", "Filter backwashing & basket clears"],
    },
    {
      title: "Equipment & Automation Install",
      tag: "Smart Systems",
      desc: "Upgrade to whisper-quiet variable-speed pumps, saltwater chlorinators, and smartphone-controlled automation.",
      image: "/images/12_our_professional_pool_services__all_our_services__card_4__rectangle_11.webp",
      points: ["Pentair & Hayward certified installer", "Up to 70% energy cost reduction", "Smartphone app water temperature control"],
    },
    {
      title: "Pool Renovation & Resurfacing",
      tag: "Restoration",
      desc: "Transform dated pools into contemporary paradises with French coping, glass mosaics, and aggregate plaster.",
      image: "/images/10_our_professional_pool_services__all_our_services__card_2__rectangle_11.webp",
      points: ["Pebble-Tec & diamond plastering", "Modern waterline mosaic tile", "LED underwater multi-color lighting"],
    },
    {
      title: "Commercial Aquatic Facilities",
      tag: "Commercial Grade",
      desc: "Comprehensive compliance and management for hotels, fitness centers, community pools, and resorts.",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.webp",
      points: ["Daily health code documentation", "Certified Pool Operator (CPO) staff", "24/7 priority emergency dispatch"],
    },
    {
      title: "Leak Detection & Repair",
      tag: "Diagnostic",
      desc: "Non-invasive electronic acoustic leak detection and pressure testing to pinpoint hidden subterranean leaks.",
      image: "/images/15_why_choose_us__image__rectangle_10.webp",
      points: ["Sonar & dye leak isolation", "Zero destruction diagnostic", "Underground plumbing trenchless repairs"],
    },
  ];

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-brand-border bg-brand-bg">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm">
            <Link href="/" className="text-brand-text-muted hover:text-brand-text-primary transition-colors font-semibold">
              Home
            </Link>
            <span className="text-brand-text-muted">&gt;</span>
            <span className="font-semibold text-brand-text-primary">Services &amp; Capabilities.</span>
          </div>

          <div className="max-w-4xl">
            <span className="eyebrow-badge">Our Comprehensive Capabilities</span>
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-brand-text-primary mb-4">
              Our Professional{" "}
              <span className="text-brand-text-muted italic font-normal">Pool Services</span>.
            </h1>
            <p className="text-[16px] sm:text-[17px] text-brand-text-body leading-relaxed max-w-2xl">
              From architectural pool design and custom excavation to robotic water
              testing and lifetime weekly maintenance, discover why we are New Jersey’s
              most trusted aquatic specialist.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Category Split Cards */}
      <section className="py-12 sm:py-20 bg-brand-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
            {/* Residential Card */}
            <div className="bg-brand-surface rounded-3xl p-6 sm:p-10 border border-brand-border shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div
                  className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[300px] mb-6"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.webp"
                    alt="Residential Pools"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-text-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    Residential Care
                  </div>
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-medium text-brand-text-primary tracking-tight mb-3">
                  Residential Pool Services
                </h3>
                <p className="text-[15px] text-brand-text-body leading-relaxed mb-6">
                  Each residential property is unique. We customize your maintenance
                  schedule around your family’s swimming habits, foliage coverage, and
                  automation equipment.
                </p>
                <ul className="space-y-2.5 text-sm font-medium text-brand-text-primary mb-6">
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Automated chemical dosing calibration</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Robotic vacuuming &amp; surface skimming</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Seasonal winterization &amp; summer opening</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-pill-dark group w-full sm:w-fit justify-center">
                <span>Request Residential Quote</span>
                <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </Link>
            </div>

            {/* Commercial Card */}
            <div className="bg-brand-surface rounded-3xl p-6 sm:p-10 border border-brand-border shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div
                  className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[300px] mb-6"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.webp"
                    alt="Commercial Pools"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    Commercial Care
                  </div>
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-medium text-brand-text-primary tracking-tight mb-3">
                  Commercial Pool Services
                </h3>
                <p className="text-[15px] text-brand-text-body leading-relaxed mb-6">
                  Compliance and bather safety come first. Our certified pool operators
                  ensure strict state health code adherence, continuous disinfection, and
                  daily chemical logging.
                </p>
                <ul className="space-y-2.5 text-sm font-medium text-brand-text-primary mb-6">
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Daily bather load chemistry regulation</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> OSHA &amp; municipal health code compliance</li>
                  <li className="flex items-center gap-2"><span className="text-brand-primary">✓</span> Rapid-response mechanical repair team</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-pill-dark group w-full sm:w-fit justify-center">
                <span>Request Commercial Consultation</span>
                <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 sm:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="eyebrow-badge">Specializations</span>
            <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium tracking-tight text-brand-text-primary">
              Every Pool Need Under One Roof.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {detailedServices.map((service, idx) => (
              <Reveal key={idx} direction="up" delayMs={idx * 80}>
                <div className="bg-brand-surface rounded-3xl p-6 sm:p-7 shadow-sm border border-brand-border hover-lift flex flex-col justify-between h-full">
                  <div>
                    <div className="relative rounded-2xl overflow-hidden h-48 mb-5" style={{ position: "relative" }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-brand-surface/90 backdrop-blur-md border border-brand-border/60 px-3 py-1 rounded-full text-xs font-semibold text-brand-text-primary shadow-sm">
                        {service.tag}
                      </div>
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-brand-text-primary mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-brand-text-body leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-brand-border">
                      {service.points.map((pt, pIdx) => (
                        <div key={pIdx} className="text-xs font-medium text-brand-text-primary flex items-center gap-2">
                          <span className="text-brand-primary">✓</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/contact" className="text-sm font-semibold text-brand-text-primary hover:text-brand-primary flex items-center justify-between group transition-colors">
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
