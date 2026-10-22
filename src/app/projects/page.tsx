"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Residential", "Commercial", "Infinity", "Indoor"];

  const projects = [
    {
      title: "New Residential Pool Construction",
      category: "Residential",
      price: "$8,901.00",
      location: "Hernes, New Jersey, USA",
      dimensions: "40' x 20' In-ground",
      specs: "Saltwater • Automated Cover • Bluestone Coping",
      image: "/images/21_designs__featured_pools__rectangle_10.webp",
    },
    {
      title: "Maldives Resort Infinity Horizon",
      category: "Infinity",
      price: "$45,000.00",
      location: "Udagada Resort, Maldives",
      dimensions: "65' x 30' Vanishing Edge",
      specs: "Oceanfront Edge • Mosaic Glass Tiles • Perimeter Overflow",
      image: "/images/29_banner_image__rectangle_86.webp",
    },
    {
      title: "Modern Courtyard Lap Pool",
      category: "Residential",
      price: "$12,450.00",
      location: "Princeton, New Jersey, USA",
      dimensions: "50' x 12' Dual Lane",
      specs: "Endless Swim Jets • Quartz Plaster • Integrated Spa",
      image: "/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.webp",
    },
    {
      title: "Luxury Rooftop Hospitality Deck",
      category: "Commercial",
      price: "$28,500.00",
      location: "Cape May, New Jersey, USA",
      dimensions: "45' x 24' Elevated",
      specs: "Stainless Steel Frame • ADA Accessible • Sunken Lounge",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.webp",
    },
    {
      title: "Indoor Heated Wellness Premise",
      category: "Indoor",
      price: "$21,000.00",
      location: "Alpine, New Jersey, USA",
      dimensions: "36' x 18' Climate Controlled",
      specs: "Dehumidification HVAC • Travertine Decking • Hydrotherapy",
      image: "/images/34_benefits_of_an_indoor_swimming_pool_premise__group_25__rectangle_90.webp",
    },
    {
      title: "Custom Waterfall Stone Sanctuary",
      category: "Residential",
      price: "$16,200.00",
      location: "Rumson, New Jersey, USA",
      dimensions: "42' x 22' Lagoon Style",
      specs: "Natural Fieldstone • Fire Bowl Accents • Baja Tanning Shelf",
      image: "/images/14_why_choose_us__image__rectangle_7.webp",
    },
  ];

  const filtered = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />

      {/* Unified Hero + Projects Portfolio Section */}
      <section className="pt-6 sm:pt-8 pb-14 sm:pb-20 bg-brand-subtle border-b border-brand-border">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-xs sm:text-sm">
            <Link href="/" className="text-brand-text-muted hover:text-brand-text-primary transition-colors font-semibold">
              Home
            </Link>
            <span className="text-brand-text-muted">&gt;</span>
            <span className="font-semibold text-brand-text-primary">Projects &amp; Portfolio.</span>
          </div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-brand-border">
            <div className="max-w-2xl">
              <span className="eyebrow-badge mb-2">Portfolio of Works</span>
              <h1 className="text-[clamp(2.25rem,4.2vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-brand-text-primary mb-2">
                Designs &amp;{" "}
                <span className="text-brand-text-muted italic font-normal">Featured Pools</span>.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-brand-text-body leading-relaxed">
                Explore our signature architectural builds, luxury renovations, and
                commercial aquatic installations across the East Coast and abroad.
              </p>
            </div>

            {/* Filter Tabs - horizontally scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all shrink-0 cursor-pointer ${
                    activeTab === tab
                      ? "bg-brand-primary text-white shadow-sm font-semibold"
                      : "bg-brand-surface text-brand-text-body hover:bg-brand-bg hover:text-brand-text-primary border border-brand-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, idx) => (
              <Reveal key={item.title} direction="up" delayMs={idx * 60}>
                <div className="bg-brand-surface rounded-3xl overflow-hidden shadow-sm hover-lift border border-brand-border flex flex-col justify-between group h-full">
                  <div>
                    <div className="relative h-60 sm:h-64 overflow-hidden" style={{ position: "relative" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-brand-text-primary/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-brand-surface/95 backdrop-blur-md text-brand-text-primary font-bold text-sm px-3.5 py-1 rounded-full border border-brand-border/60 shadow-sm">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-xs text-brand-text-muted font-medium block mb-1">
                        {item.location}
                      </span>
                      <h3 className="text-[19px] sm:text-[20px] font-bold text-brand-text-primary mb-2 leading-snug group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-brand-text-body font-medium mb-4">
                        {item.dimensions}
                      </p>
                      <div className="pt-3 border-t border-brand-border text-[12px] text-brand-text-muted">
                        {item.specs}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href="/contact"
                      className="w-full py-2.5 rounded-full text-center text-xs font-bold border border-brand-border text-brand-text-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Request Project Blueprint</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary Strap */}
      <section className="py-12 sm:py-16 bg-brand-surface border-b border-brand-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <span className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-brand-primary block leading-none mb-1">2,300+</span>
              <span className="text-[13px] sm:text-[14px] text-brand-text-body font-medium">Custom Pools Built</span>
            </div>
            <div>
              <span className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-brand-text-primary block leading-none mb-1">25+</span>
              <span className="text-[13px] sm:text-[14px] text-brand-text-body font-medium">Years in Business</span>
            </div>
            <div>
              <span className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-brand-primary block leading-none mb-1">99.8%</span>
              <span className="text-[13px] sm:text-[14px] text-brand-text-body font-medium">Water Clarity Score</span>
            </div>
            <div>
              <span className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold text-brand-text-primary block leading-none mb-1">14</span>
              <span className="text-[13px] sm:text-[14px] text-brand-text-body font-medium">Design &amp; Craft Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-brand-subtle text-center border-t border-brand-border">
        <div className="section-container">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-brand-text-primary tracking-tight mb-4">
            Have a custom pool project in mind?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-text-body max-w-xl mx-auto mb-8">
            Our engineers can bring your architectural sketch or yard layout into a realistic 3D proposal.
          </p>
          <Link href="/contact" className="btn-pill-dark group">
            <span>Schedule Project Consultation</span>
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
