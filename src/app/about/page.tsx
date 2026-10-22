import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Team from "@/components/Team";
import InfoStrap from "@/components/InfoStrap";
import BrandStamp from "@/components/BrandStamp";

export const metadata: Metadata = {
  title: "About Us — Aquelis Luxury Pool Architecture",
  description:
    "Learn about Aquelis's 25 years of master craftsmanship, certified team of pool engineers, and turnkey pool construction.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Precision Engineering",
      desc: "Every pool is built on rigorous structural modeling, state-of-the-art hydraulic calculations, and premium waterproof membranes.",
      icon: "📐",
    },
    {
      title: "Clean Water Science",
      desc: "Our water management pairs automated chemical sensors with mineral and UV purification, drastically reducing harsh chemicals.",
      icon: "💧",
    },
    {
      title: "Dedicated Ownership",
      desc: "From blueprint conception through decades of routine care, a dedicated project supervisor manages every inspection personally.",
      icon: "🛡️",
    },
    {
      title: "Eco-Conscious Heating",
      desc: "Variable-speed inverter heat pumps and automated solar covers ensure year-round warmth with minimal energy draw.",
      icon: "🌿",
    },
  ];

  const milestones = [
    { year: "1999", title: "Founded in New Jersey", desc: "Started as a dedicated family pool maintenance and cleaning service." },
    { year: "2008", title: "Engineering Division", desc: "Expanded into architectural in-ground pool construction and custom spa builds." },
    { year: "2016", title: "Commercial Portfolio", desc: "Partnered with premier resorts, wellness clubs, and luxury hotel chains." },
    { year: "2024", title: "2,300+ Pools Completed", desc: "Awarded top regional builder with over 2.8 million gallons maintained weekly." },
  ];

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />

      {/* Hero Banner: Unified Headline + Image */}
      <section className="pt-8 sm:pt-10 pb-14 sm:pb-20 border-b border-brand-border">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link href="/" className="text-brand-text-muted hover:text-brand-ink transition-colors font-semibold">
              Home
            </Link>
            <span className="text-brand-text-muted">&gt;</span>
            <span className="font-semibold text-brand-ink">About us.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="eyebrow-badge">About Aquelis</span>
              <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink">
                We build the finest{" "}
                <span className="text-brand-text-muted italic font-normal">pools.</span>
              </h1>
              <p className="text-[18px] sm:text-[20px] font-medium text-brand-ink leading-snug">
                Owning a pool is a fun part, let us handle the rest.
              </p>
              <p className="text-[15px] sm:text-[16px] text-brand-text-body leading-relaxed max-w-xl">
                For over 25 years, Aquelis has combined architectural sophistication,
                flawless hydraulic engineering, and meticulous weekly service for
                discerning homeowners and commercial resorts.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link href="/contact" className="btn-pill-dark group">
                  <span>Schedule Consultation</span>
                  <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm border border-brand-border hover:border-brand-ink text-brand-ink transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            {/* Right Photo & Overlapping Stamp */}
            <div className="lg:col-span-6 relative overflow-hidden sm:overflow-visible">
              <div
                className="relative rounded-3xl overflow-hidden aspect-[16/11] sm:h-[420px] lg:h-[460px] shadow-sm group"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/02_about_us__rectangle_7.webp"
                  alt="Pool craftsman at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
              {/* Overlapping Stamp - contained safely */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 animate-spin-slow hover:scale-110 transition-transform drop-shadow-xl z-10">
                <BrandStamp variant="solid-white" size={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Stats Ribbon immediately visible */}
      <InfoStrap />

      {/* Philosophy & Story Section */}
      <section className="py-20 lg:py-24 bg-brand-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-6">
              <Reveal direction="right">
                <div
                  className="relative rounded-3xl overflow-hidden aspect-[16/11] sm:h-[440px] shadow-sm group"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/14_why_choose_us__image__rectangle_7.webp"
                    alt="Luxury custom residential pool"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="left">
                <span className="eyebrow-badge">Benefits of Choosing Us</span>
                <h2 className="text-[clamp(2.15rem,3.8vw,3.5rem)] font-medium leading-tight tracking-tight text-brand-ink">
                  Simplify Pool Maintenance with Expert Engineering.
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-brand-text-body">
                  Many health clubs, fitness centers, and private clubs such as the YMCA
                  rely on dependable water care. We bring that exact commercial-grade
                  rigor, safety, and pristine clarity to your private backyard oasis.
                </p>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-brand-text-body">
                  We believe that owning a pool is meant to be the fun, rejuvenating
                  part of life. Our technicians handle chemical balance, winterization,
                  seasonal startup, tile grooming, and pump repairs seamlessly in the background.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 text-sm font-semibold text-brand-ink">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-primary text-lg font-bold">✓</span>
                    <span>Certified Master Pool Builders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-primary text-lg font-bold">✓</span>
                    <span>99.8% Water Quality Reliability</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 lg:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="eyebrow-badge">Core Pillars</span>
            <h2 className="text-[clamp(2.15rem,3.8vw,3.5rem)] font-medium tracking-tight text-brand-ink">
              Why Leading Properties Trust Aquelis.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} direction="up" delayMs={i * 80}>
                <div className="bg-brand-surface rounded-3xl p-6 sm:p-8 shadow-xs border border-brand-border hover-lift h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-4">{v.icon}</span>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-brand-ink mb-2">{v.title}</h3>
                    <p className="text-[14px] text-brand-text-body leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 lg:py-24 bg-brand-subtle">
        <div className="section-container">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="eyebrow-badge">Our Journey</span>
            <h2 className="text-[clamp(2.15rem,3.8vw,3.5rem)] font-medium tracking-tight text-brand-ink">
              Over 25 Years of Milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <Reveal key={idx} direction="up" delayMs={idx * 80}>
                <div className="bg-brand-surface rounded-3xl p-6 sm:p-8 shadow-xs border border-brand-border h-full">
                  <span className="text-[26px] sm:text-[28px] font-bold text-brand-primary block mb-2">{m.year}</span>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-brand-ink mb-2">{m.title}</h3>
                  <p className="text-[13px] text-brand-text-body leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Experts Component */}
      <Team />

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-surface border-t border-brand-border text-center">
        <div className="section-container">
          <h2 className="text-[clamp(2.15rem,4vw,3.75rem)] font-medium text-brand-ink tracking-tight mb-4 sm:mb-6">
            Ready to design or restore your pool?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-text-body max-w-xl mx-auto mb-8">
            Speak directly with our chief engineers and get an itemized estimate with 3D concepts.
          </p>
          <Link href="/contact" className="btn-pill-dark group">
            <span>Speak with an Expert</span>
            <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}