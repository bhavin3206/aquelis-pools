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
      image: "/images/29_banner_image__rectangle_86.webp",
    },
    {
      title: "Turquoise Mosaic Courtyard",
      location: "Princeton, NJ",
      category: "Modern Residential",
      image: "/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.webp",
    },
    {
      title: "Rooftop Commercial Deck",
      location: "Cape May, NJ",
      category: "Commercial & Resort",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.webp",
    },
    {
      title: "Indoor Heated Wellness Villa",
      location: "Alpine, NJ",
      category: "Indoor & Spa",
      image: "/images/34_benefits_of_an_indoor_swimming_pool_premise__group_25__rectangle_90.webp",
    },
    {
      title: "Infinity Skyline Overlook",
      location: "Hernes, NJ",
      category: "Modern Residential",
      image: "/images/21_designs__featured_pools__rectangle_10.webp",
    },
    {
      title: "Natural Stone Lagoon Sanctuary",
      location: "Rumson, NJ",
      category: "Modern Residential",
      image: "/images/14_why_choose_us__image__rectangle_7.webp",
    },
    {
      title: "Active Swimmer Clear Waters",
      location: "Saddle River, NJ",
      category: "Details & Equipment",
      image: "/images/31_banner_image__mask_group__image_54.webp",
    },
    {
      title: "Precision Filtration & Pump Setup",
      location: "Colts Neck, NJ",
      category: "Details & Equipment",
      image: "/images/11_our_professional_pool_services__all_our_services__card_3__rectangle_11.webp",
    },
    {
      title: "Sunken Firepit & Lounge Pool",
      location: "Short Hills, NJ",
      category: "Modern Residential",
      image: "/images/09_our_professional_pool_services__all_our_services__card_01__rectangle_11.webp",
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
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-brand-border bg-brand-bg">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm">
            <Link href="/" className="text-brand-text-muted hover:text-brand-text-primary transition-colors font-semibold">
              Home
            </Link>
            <span className="text-brand-text-muted">&gt;</span>
            <span className="font-semibold text-brand-text-primary">Gallery &amp; Showcase.</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="eyebrow-badge">Visual Inspiration</span>
              <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-brand-text-primary mb-4">
                Our Gallery of{" "}
                <span className="text-brand-text-muted italic font-normal">Dream Pools</span>.
              </h1>
              <p className="text-[15px] sm:text-[17px] text-brand-text-body leading-relaxed">
                A curated visual collection of residential retreats, luxury hotel installations,
                and state-of-the-art indoor aquatic architecture built by Aquelis.
              </p>
            </div>

            {/* Filter buttons - horizontally scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 max-w-full">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all shrink-0 cursor-pointer ${
                    activeFilter === f
                      ? "bg-brand-primary text-white shadow-sm font-semibold"
                      : "bg-brand-surface text-brand-text-body hover:bg-brand-subtle hover:text-brand-text-primary border border-brand-border"
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
      <section className="py-14 sm:py-20 bg-brand-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {filtered.map((item, idx) => (
              <Reveal key={item.title} direction="up" delayMs={idx * 50}>
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="relative rounded-3xl overflow-hidden shadow-sm border border-brand-border group cursor-pointer h-full min-h-[280px]"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-1 transition-transform">
                    <span className="text-xs uppercase tracking-wider font-bold text-brand-accent-glow block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-[19px] sm:text-[20px] font-bold leading-snug">{item.title}</h3>
                    <p className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                      <span>📍</span> {item.location}
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
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-2xl transition-all z-10 cursor-pointer"
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
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-2xl transition-all z-10 cursor-pointer"
            aria-label="Next image"
          >
            ›
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-end"
            style={{ position: "relative" }}
          >
            <Image
              src={filtered[selectedIndex].image}
              alt={filtered[selectedIndex].title}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-glow">
                {filtered[selectedIndex].category}
              </span>
              <h3 className="text-xl font-bold">{filtered[selectedIndex].title}</h3>
              <p className="text-sm text-gray-300">📍 {filtered[selectedIndex].location}</p>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors z-20 cursor-pointer"
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-brand-surface border-t border-brand-border text-center">
        <div className="section-container">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-brand-text-primary tracking-tight mb-4">
            See something you love?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-text-body max-w-lg mx-auto mb-8">
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
