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
      image: "/images/21_designs__featured_pools__rectangle_10.jpg",
    },
    {
      title: "Maldives Resort Infinity Horizon",
      category: "Infinity",
      price: "$45,000.00",
      location: "Udagada Resort, Maldives",
      dimensions: "65' x 30' Vanishing Edge",
      specs: "Oceanfront Edge • Mosaic Glass Tiles • Perimeter Overflow",
      image: "/images/29_banner_image__rectangle_86.jpg",
    },
    {
      title: "Modern Courtyard Lap Pool",
      category: "Residential",
      price: "$12,450.00",
      location: "Princeton, New Jersey, USA",
      dimensions: "50' x 12' Dual Lane",
      specs: "Endless Swim Jets • Quartz Plaster • Integrated Spa",
      image: "/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.jpg",
    },
    {
      title: "Luxury Rooftop Hospitality Deck",
      category: "Commercial",
      price: "$28,500.00",
      location: "Cape May, New Jersey, USA",
      dimensions: "45' x 24' Elevated",
      specs: "Stainless Steel Frame • ADA Accessible • Sunken Lounge",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.jpg",
    },
    {
      title: "Indoor Heated Wellness Premise",
      category: "Indoor",
      price: "$21,000.00",
      location: "Alpine, New Jersey, USA",
      dimensions: "36' x 18' Climate Controlled",
      specs: "Dehumidification HVAC • Travertine Decking • Hydrotherapy",
      image: "/images/34_benefits_of_an_indoor_swimming_pool_premise__group_25__rectangle_90.jpg",
    },
    {
      title: "Custom Waterfall Stone Sanctuary",
      category: "Residential",
      price: "$16,200.00",
      location: "Rumson, New Jersey, USA",
      dimensions: "42' x 22' Lagoon Style",
      specs: "Natural Fieldstone • Fire Bowl Accents • Baja Tanning Shelf",
      image: "/images/14_why_choose_us__image__rectangle_7.jpg",
    },
  ];

  const filtered = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Unified Hero + Projects Portfolio Section (All visible together) */}
      <section className="pt-6 sm:pt-8 pb-16 bg-[#ECECED] border-b border-[#D8D8DA]">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold">
              Home
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <span className="font-semibold text-[#0F1011]">Projects &amp; Portfolio.</span>
          </div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#D8D8DA]">
            <div className="max-w-2xl">
              <span className="eyebrow-badge mb-2">Portfolio of Works</span>
              <h1 className="text-[clamp(2.25rem,4.2vw,4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0F1011] mb-2">
                Designs &amp;{" "}
                <span className="text-[#8F9096] italic font-normal">Featured Pools</span>.
              </h1>
              <p className="text-[16px] text-[#59595D] leading-relaxed">
                Explore our signature architectural builds, luxury renovations, and
                commercial aquatic installations across the East Coast and abroad.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#0F1011] text-white shadow-sm font-semibold"
                      : "bg-white text-[#59595D] hover:bg-black/5 hover:text-[#0F1011] border border-black/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid — Displayed immediately without scrolling delay */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover-lift border border-black/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#0F1011]/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#0F1011] font-bold text-sm px-3.5 py-1 rounded-full shadow-sm">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-[#8F9096] font-medium block mb-1">
                      {item.location}
                    </span>
                    <h3 className="text-[20px] font-bold text-[#0F1011] mb-2 leading-snug group-hover:text-[#1537EE] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#59595D] font-medium mb-4">
                      {item.dimensions}
                    </p>
                    <div className="pt-3 border-t border-black/5 text-[12px] text-[#71717A]">
                      {item.specs}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-full text-center text-xs font-bold border border-black/15 group-hover:bg-[#0F1011] group-hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Project Blueprint</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary Strap */}
      <section className="py-16 bg-white border-b border-[#D8D8DA]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#1537EE] block">2,300+</span>
              <span className="text-[14px] text-[#59595D] font-medium">Custom Pools Built</span>
            </div>
            <div>
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#0F1011] block">25+</span>
              <span className="text-[14px] text-[#59595D] font-medium">Years in Business</span>
            </div>
            <div>
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#1537EE] block">99.8%</span>
              <span className="text-[14px] text-[#59595D] font-medium">Water Clarity Score</span>
            </div>
            <div>
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#0F1011] block">14</span>
              <span className="text-[14px] text-[#59595D] font-medium">Design &amp; Craft Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="py-20 bg-[#DFDFE1] text-center">
        <div className="section-container">
          <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-medium text-[#0F1011] tracking-tight mb-6">
            Have a custom pool project in mind?
          </h2>
          <p className="text-[16px] text-[#59595D] max-w-xl mx-auto mb-8">
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