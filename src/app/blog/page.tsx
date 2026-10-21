"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Maintenance", "Water Chemistry", "Equipment", "Design Trends"];

  const articles = blogPosts;

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

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
            <span className="font-semibold text-[#0F1011]">Articles &amp; News.</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="eyebrow-badge">Industry Insights</span>
              <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011] mb-4">
                Our Latest News{" "}
                <span className="text-[#8F9096] italic font-normal">&amp; Updates</span>.
              </h1>
              <p className="text-[17px] text-[#59595D] leading-relaxed">
                Expert tips, maintenance breakdowns, water balancing chemistry, and
                architectural design inspiration written by Jalsarah’s certified engineers.
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                    activeCategory === c
                      ? "bg-[#0F1011] text-white shadow-md scale-105"
                      : "bg-white text-[#59595D] hover:text-[#0F1011] border border-black/5"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[#ECECED]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, idx) => (
              <Reveal key={post.id} direction="up" delayMs={idx * 80}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <article className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 hover-lift flex flex-col justify-between h-full group cursor-pointer">
                    <div>
                      <div className="relative rounded-2xl overflow-hidden h-[250px] mb-6" style={{ position: "relative" }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                            {post.time}
                          </span>
                          <span className="bg-white/90 backdrop-blur-md text-[#0F1011] text-xs px-3 py-1 rounded-full font-bold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-[22px] font-bold text-[#0F1011] leading-snug tracking-tight mb-3 group-hover:text-[#1537EE] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[14px] text-[#59595D] leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-[#8F9096]">
                      <span>{post.date}</span>
                      <span className="font-bold text-[#0F1011] group-hover:text-[#1537EE] transition-colors flex items-center gap-1">
                        By {post.author} ↗
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Banner */}
      <section className="py-20 bg-white border-t border-[#D8D8DA]">
        <div className="section-container max-w-3xl mx-auto text-center">
          <span className="eyebrow-badge">Monthly Pool Journal</span>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium text-[#0F1011] tracking-tight mb-4">
            Stay ahead on seasonal pool care.
          </h2>
          <p className="text-[16px] text-[#59595D] mb-8">
            Receive monthly water balancing reminders, winterization checklists, and private client discounts.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed! Thank you for joining our monthly pool journal.");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-[#F3F3F5] border border-[#D0D0D2] rounded-full px-5 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE]"
            />
            <button type="submit" className="btn-pill-dark !py-3 !px-6 text-sm flex-shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
