"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Resort Vanishing Horizon",
      location: "Udagada Resort, Maldives",
      category: "Commercial & Resort",
      image: "/images/29_banner_image__rectangle_86.jpg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Turquoise Mosaic Courtyard",
      location: "Princeton, NJ",
      category: "Modern Residential",
      image: "/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Rooftop Commercial Deck",
      location: "Cape May, NJ",
      category: "Commercial & Resort",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Indoor Heated Wellness Villa",
      location: "Alpine, NJ",
      category: "Indoor & Spa",
      image: "/images/34_benefits_of_an_indoor_swimming_pool_premise__group_25__rectangle_90.jpg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Infinity Skyline Overlook",
      location: "Hernes, NJ",
      category: "Modern Residential",
      image: "/images/21_designs__featured_pools__rectangle_10.jpg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Natural Stone Lagoon Sanctuary",
      location: "Rumson, NJ",
      category: "Modern Residential",
      image: "/images/14_why_choose_us__image__rectangle_7.jpg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Active Swimmer Clear Waters",
      location: "Saddle River, NJ",
      category: "Details & Equipment",
      image: "/images/31_banner_image__mask_group__image_54.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Precision Filtration & Pump Setup",
      location: "Colts Neck, NJ",
      category: "Details & Equipment",
      image: "/images/11_our_professional_pool_services__all_our_services__card_3__rectangle_11.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Sunken Firepit & Lounge Pool",
      location: "Short Hills, NJ",
      category: "Modern Residential",
      image: "/images/09_our_professional_pool_services__all_our_services__card_01__rectangle_11.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  const filters = ["All", "Modern Residential", "Commercial & Resort", "Indoor & Spa", "Details & Equipment"];

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filtered.length);
  }, [selectedIndex, filtered.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
  }, [selectedIndex, filtered.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-10 pb-12 border-b border-[#D8D8DA]">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold">
              Home
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <span className="font-semibold text-[#0F1011]">Gallery &amp; Showcase.</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="eyebrow-badge">Visual Inspiration</span>
              <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011] mb-4">
                Our Gallery of{" "}
                <span className="text-[#8F9096] italic font-normal">Dream Pools</span>.
              </h1>
              <p className="text-[17px] text-[#59595D] leading-relaxed">
                A curated visual collection of residential retreats, luxury hotel installations,
                and state-of-the-art indoor aquatic architecture built by Jalsarah.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                    activeFilter === f
                      ? "bg-[#0F1011] text-white shadow-md scale-105"
                      : "bg-white text-[#59595D] hover:text-[#0F1011] border border-black/5"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="py-24 bg-[#ECECED]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {filtered.map((item, idx) => (
              <Reveal key={item.title} direction="up" delayMs={idx * 60}>
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="relative rounded-3xl overflow-hidden shadow-sm border border-black/5 group cursor-pointer h-full min-h-[280px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-1 transition-transform">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#F2FF59] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-[20px] font-bold leading-snug">{item.title}</h3>
                    <p className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                      📍 {item.location}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    ⤢
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Keyboard Navigation */}
      {selectedIndex !== null && filtered[selectedIndex] && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-2xl transition-all z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-2xl transition-all z-10"
            aria-label="Next image"
          >
            ›
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-end"
          >
            <Image
              src={filtered[selectedIndex].image}
              alt={filtered[selectedIndex].title}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F2FF59]">
                {filtered[selectedIndex].category}
              </span>
              <h3 className="text-xl font-bold">{filtered[selectedIndex].title}</h3>
              <p className="text-sm text-gray-300">📍 {filtered[selectedIndex].location}</p>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors z-20"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-[#D8D8DA] text-center">
        <div className="section-container">
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium text-[#0F1011] tracking-tight mb-4">
            See something you love?
          </h2>
          <p className="text-[16px] text-[#59595D] max-w-lg mx-auto mb-8">
            Our architectural team can adapt any design from our portfolio to match your
            property&apos;s terrain, sunlight, and architecture.
          </p>
          <Link href="/contact" className="btn-pill-dark group">
            <span>Start Your Custom Design</span>
            <span className="arrow-circle group-hover:translate-x-0.5 transition-transform">↗</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
