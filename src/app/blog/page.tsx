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
            <span className="font-semibold text-brand-text-primary">Articles &amp; News.</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="eyebrow-badge">Industry Insights</span>
              <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-brand-text-primary mb-4">
                Our Latest News{" "}
                <span className="text-brand-text-muted italic font-normal">&amp; Updates</span>.
              </h1>
              <p className="text-[15px] sm:text-[17px] text-brand-text-body leading-relaxed">
                Expert tips, maintenance breakdowns, water balancing chemistry, and
                architectural design inspiration written by Aquelis certified engineers.
              </p>
            </div>

            {/* Category filters - horizontally scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 max-w-full">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all shrink-0 cursor-pointer ${
                    activeCategory === c
                      ? "bg-brand-primary text-white shadow-sm font-semibold"
                      : "bg-brand-surface text-brand-text-body hover:bg-brand-subtle hover:text-brand-text-primary border border-brand-border"
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
      <section className="py-14 sm:py-20 bg-brand-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((post, idx) => (
              <Reveal key={post.id} direction="up" delayMs={idx * 60}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <article className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border hover-lift flex flex-col justify-between h-full group cursor-pointer">
                    <div>
                      <div className="relative rounded-2xl overflow-hidden h-[220px] sm:h-[250px] mb-6" style={{ position: "relative" }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="bg-brand-text-primary/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                            {post.time}
                          </span>
                          <span className="bg-brand-surface/90 backdrop-blur-md text-brand-text-primary text-xs px-3 py-1 rounded-full font-bold border border-brand-border/60">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-[20px] sm:text-[22px] font-bold text-brand-text-primary leading-snug tracking-tight mb-3 group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[14px] text-brand-text-body leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-brand-border flex items-center justify-between text-xs text-brand-text-muted">
                      <span>{post.date}</span>
                      <span className="font-bold text-brand-text-primary group-hover:text-brand-primary transition-colors flex items-center gap-1">
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
      <section className="py-16 sm:py-20 bg-brand-surface border-t border-brand-border">
        <div className="section-container max-w-3xl mx-auto text-center">
          <span className="eyebrow-badge">Monthly Pool Journal</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-brand-text-primary tracking-tight mb-4">
            Stay ahead on seasonal pool care.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-text-body mb-8">
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
              suppressHydrationWarning
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-brand-bg border border-brand-border rounded-full px-5 py-3.5 text-base sm:text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <button type="submit" className="btn-pill-dark !py-3 !px-6 text-sm flex-shrink-0 cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
