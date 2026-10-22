"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandStamp from "@/components/BrandStamp";

function useCountUp(target: number, duration = 1800, suffix = "") {
  const [display, setDisplay] = useState("0" + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * target);
            setDisplay(value.toLocaleString() + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix]);

  return { display, ref };
}

export default function FeaturedPools() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Residential", "Construction", "Commercial"];
  const stat1 = useCountUp(2348, 1800, "+");
  const stat2 = useCountUp(230, 1400, "+");
  const stat3 = useCountUp(2800000, 2000, "+");

  const projectDetails: Record<string, { title: string; price: string; location: string; image: string }> = {
    All: {
      title: "New Residential Pool Construction.",
      price: "$8,901.00",
      location: "Hernes, New Jersey, USA",
      image: "/images/21_designs__featured_pools__rectangle_10.webp",
    },
    Residential: {
      title: "Modern Backyard Infinity Sanctuary.",
      price: "$12,450.00",
      location: "Princeton, New Jersey, USA",
      image: "/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.webp",
    },
    Construction: {
      title: "Custom Reinforced Inground Pool.",
      price: "$15,800.00",
      location: "Short Hills, New Jersey, USA",
      image: "/images/14_why_choose_us__image__rectangle_7.webp",
    },
    Commercial: {
      title: "Luxury Hotel Rooftop Oasis.",
      price: "$28,500.00",
      location: "Cape May, New Jersey, USA",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.webp",
    },
  };

  const current = projectDetails[activeTab] || projectDetails["All"];

  return (
    <section id="projects" className="py-20 sm:py-24 bg-brand-subtle content-auto">
      <div className="section-container">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal direction="up">
            <span className="eyebrow-badge">Our featured Works.</span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011]">
              Designs &amp;
              <br />
              Featured Pools.
            </h2>
          </Reveal>

          {/* Filter Pills with mobile horizontal scroll */}
          <Reveal direction="up" delayMs={100}>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 flex-nowrap sm:flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab
                      ? "bg-brand-ink text-white shadow-xs"
                      : "bg-brand-surface text-brand-text-muted hover:text-brand-ink border border-brand-border hover:bg-brand-subtle"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Featured Project Showcase Card with Tab Fade Transition */}
        <Reveal direction="up" delayMs={150}>
          <div className="bg-brand-surface border border-brand-border rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-5 transition-opacity duration-300">
                <div className="inline-block px-3 py-1 bg-brand-primary-light rounded-full text-xs font-bold text-brand-primary">
                  Aque. Exclusive
                </div>
                <h3 className="text-[clamp(1.75rem,3.2vw,3.25rem)] font-medium text-brand-ink leading-tight tracking-tight">
                  {current.title}
                </h3>
                <div className="flex items-center gap-3 sm:gap-4 text-brand-ink">
                  <span className="text-[22px] sm:text-[26px] font-bold text-brand-primary">{current.price}</span>
                  <span className="text-xs sm:text-sm font-medium text-brand-text-muted">
                    • {current.location}
                  </span>
                </div>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-brand-text-body">
                  We specialize in providing top-notch pool service and maintenance to
                  ensure your pool remains a safe, clean, and inviting space for
                  relaxation and recreation. Our certified technicians regularly test
                  and balance the water chemistry, maintaining optimal conditions year-round.
                </p>
                <div className="pt-2">
                  <a href="#contact" className="btn-pill-dark group">
                    <span>View More</span>
                    <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Photo with Stamp */}
              <div className="lg:col-span-6 relative overflow-hidden sm:overflow-visible">
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[16/11] sm:h-[400px] shadow-sm group"
                  style={{ position: "relative" }}
                >
                  <Image
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 animate-spin-slow hover:scale-110 transition-transform drop-shadow-xl z-10">
                  <BrandStamp variant="solid-white" size={100} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Company Statistics Row */}
        <div className="border-t border-brand-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Reveal direction="up" delayMs={0}>
              <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-xs border border-brand-border hover-lift">
                <span ref={stat1.ref} className="text-[clamp(2.25rem,3.8vw,3.25rem)] font-bold text-brand-ink block mb-2 leading-none">
                  {stat1.display}
                </span>
                <span className="text-[14px] font-medium text-brand-text-muted">
                  Successfully Projects Complete
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delayMs={100}>
              <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-xs border border-brand-border hover-lift">
                <span ref={stat2.ref} className="text-[clamp(2.25rem,3.8vw,3.25rem)] font-bold text-brand-ink block mb-2 leading-none">
                  {stat2.display}
                </span>
                <span className="text-[14px] font-medium text-brand-text-muted">
                  Expert Team Members
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delayMs={200}>
              <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-xs border border-brand-border hover-lift">
                <span ref={stat3.ref} className="text-[clamp(2.25rem,3.8vw,3.25rem)] font-bold text-brand-ink block mb-2 leading-none">
                  {stat3.display}
                </span>
                <span className="text-[14px] font-medium text-brand-text-muted">
                  Our Satisfied Customers
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
