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
      image: "/images/21_designs__featured_pools__rectangle_10.jpg",
    },
    Residential: {
      title: "Modern Backyard Infinity Sanctuary.",
      price: "$12,450.00",
      location: "Princeton, New Jersey, USA",
      image: "/images/07_our_professional_pool_services__residential_pool_services__rectangle_7.jpg",
    },
    Construction: {
      title: "Custom Reinforced Inground Pool.",
      price: "$15,800.00",
      location: "Short Hills, New Jersey, USA",
      image: "/images/14_why_choose_us__image__rectangle_7.jpg",
    },
    Commercial: {
      title: "Luxury Hotel Rooftop Oasis.",
      price: "$28,500.00",
      location: "Cape May, New Jersey, USA",
      image: "/images/08_our_professional_pool_services__commercial_pool_services__rectangle_10.jpg",
    },
  };

  const current = projectDetails[activeTab] || projectDetails["All"];

  return (
    <section id="projects" className="py-24 bg-[#ECECED] content-auto">
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

          {/* Filter Pills */}
          <Reveal direction="up" delayMs={100}>
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#0F1011] text-white shadow-sm scale-105"
                      : "bg-white text-[#59595D] hover:text-[#0F1011] hover:bg-white/80"
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
          <div className="bg-[#DFDFE1] rounded-3xl p-6 sm:p-10 lg:p-14 mb-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-6 transition-opacity duration-300">
                <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-[#1537EE]">
                  Aque. Exclusive
                </div>
                <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium text-[#0F1011] leading-tight tracking-tight">
                  {current.title}
                </h3>
                <div className="flex items-center gap-4 text-[#0F1011]">
                  <span className="text-[26px] font-bold text-[#1537EE]">{current.price}</span>
                  <span className="text-sm font-medium text-[#59595D]">
                    • {current.location}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#59595D]">
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
              <div className="lg:col-span-6 relative">
                <div
                  className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[440px] shadow-sm group"
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
                <div className="absolute -bottom-6 -right-6 w-28 h-28 animate-spin-slow hover:scale-110 transition-transform drop-shadow-xl z-10">
                  <BrandStamp variant="solid-white" size={112} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Company Statistics Row */}
        <div className="border-t border-[#D5D5D8] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delayMs={0}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-black/5 hover-lift">
                <span ref={stat1.ref} className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#0F1011] block mb-2 leading-none">
                  {stat1.display}
                </span>
                <span className="text-[14px] font-medium text-[#59595D]">
                  Successfully Projects Complete
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delayMs={100}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-black/5 hover-lift">
                <span ref={stat2.ref} className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#0F1011] block mb-2 leading-none">
                  {stat2.display}
                </span>
                <span className="text-[14px] font-medium text-[#59595D]">
                  Expert Team Members
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delayMs={200}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-black/5 hover-lift">
                <span ref={stat3.ref} className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#0F1011] block mb-2 leading-none">
                  {stat3.display}
                </span>
                <span className="text-[14px] font-medium text-[#59595D]">
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
