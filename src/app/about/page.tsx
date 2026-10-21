import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Team from "@/components/Team";
import InfoStrap from "@/components/InfoStrap";

export const metadata: Metadata = {
  title: "About Us — Jal. sarah. Swimming Pool Services",
  description:
    "Learn about Jalsarah's 25 years of master craftsmanship, certified team of pool engineers, and turnkey pool construction.",
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
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Figma 03 About Us Hero Banner: Unified Headline + Image */}
      <section className="pt-10 pb-16 lg:pb-20 border-b border-[#D8D8DA]">
        <div className="section-container">
          {/* Breadcrumb matching Figma */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold">
              Home
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <span className="font-semibold text-[#0F1011]">About us.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow-badge">About Jalsarah</span>
              <h1 className="text-[clamp(2.75rem,5.2vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011]">
                We builds the best{" "}
                <span className="text-[#8F9096] italic font-normal">pools.</span>
              </h1>
              <p className="text-[20px] font-medium text-[#0F1011] leading-snug">
                Owning a pool is a fun part, let us handle the rest.
              </p>
              <p className="text-[16px] text-[#59595D] leading-relaxed max-w-xl">
                For over 25 years, Jalsarah has combined architectural sophistication,
                flawless hydraulic engineering, and meticulous weekly service for
                discerning homeowners and commercial resorts.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-pill-dark group">
                  <span>Schedule an On-site Consultation</span>
                  <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3.5 rounded-full font-semibold text-sm border border-black/15 hover:border-black/40 text-[#0F1011] transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            {/* Right Photo & Overlapping Stamp */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden h-[340px] sm:h-[420px] lg:h-[460px] shadow-sm group">
                <Image
                  src="/images/02_about_us__rectangle_7.jpg"
                  alt="Pool craftsman at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
              {/* Overlapping Stamp */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 animate-spin-slow">
                <Image
                  src="/images/04_about_us__stamp__image_39.jpg"
                  alt="Pool Stamp"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain rounded-full bg-white/95 p-1 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Stats Ribbon immediately visible */}
      <InfoStrap />

      {/* Philosophy & Story Section */}
      <section className="py-20 lg:py-24 bg-[#ECECED]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-6">
              <Reveal direction="right">
                <div className="relative rounded-3xl overflow-hidden h-[380px] sm:h-[480px] shadow-sm group">
                  <Image
                    src="/images/14_why_choose_us__image__rectangle_7.jpg"
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
                <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-tight tracking-tight text-[#0F1011]">
                  Simplify Pool Maintenance with Expert Engineering.
                </h2>
                <p className="text-[16px] leading-relaxed text-[#59595D]">
                  Many health clubs, fitness centers, and private clubs such as the YMCA
                  rely on dependable water care. We bring that exact commercial-grade
                  rigor, safety, and pristine clarity to your private backyard oasis.
                </p>
                <p className="text-[16px] leading-relaxed text-[#59595D]">
                  We believe that owning a pool is meant to be the fun, rejuvenating
                  part of life. Our technicians handle chemical balance, winterization,
                  seasonal startup, tile grooming, and pump repairs seamlessly in the background.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 text-sm font-semibold text-[#0F1011]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1537EE] text-lg font-bold">✓</span>
                    <span>Certified Master Pool Builders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1537EE] text-lg font-bold">✓</span>
                    <span>99.8% Water Quality Reliability</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 lg:py-24 bg-[#F3F3F5]">
        <div className="section-container">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow-badge">Core Pillars</span>
            <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-medium tracking-tight text-[#0F1011]">
              Why Leading Properties Trust Jalsarah.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} direction="up" delayMs={i * 80}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 hover-lift h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl block mb-4">{v.icon}</span>
                    <h3 className="text-[20px] font-bold text-[#0F1011] mb-2">{v.title}</h3>
                    <p className="text-[14px] text-[#59595D] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 lg:py-24 bg-[#EBEBED]">
        <div className="section-container">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow-badge">Our Journey</span>
            <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-medium tracking-tight text-[#0F1011]">
              Over 25 Years of Milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <Reveal key={idx} direction="up" delayMs={idx * 80}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 h-full">
                  <span className="text-[28px] font-bold text-[#1537EE] block mb-2">{m.year}</span>
                  <h3 className="text-[18px] font-bold text-[#0F1011] mb-2">{m.title}</h3>
                  <p className="text-[13px] text-[#59595D] leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Experts Component */}
      <Team />

      {/* Bottom CTA */}
      <section className="py-20 bg-[#DFDFE1] text-center">
        <div className="section-container">
          <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-medium text-[#0F1011] tracking-tight mb-6">
            Ready to design or restore your pool?
          </h2>
          <p className="text-[16px] text-[#59595D] max-w-xl mx-auto mb-8">
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