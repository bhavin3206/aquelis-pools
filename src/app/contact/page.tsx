"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-brand-border bg-brand-bg">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="eyebrow-badge">Get in Touch</span>
            <h1 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-medium leading-[1.03] tracking-[-0.03em] text-brand-text-primary mb-5 sm:mb-6">
              Interested in Realizing{" "}
              <span className="text-brand-text-muted italic font-normal">Your Dream</span>?
            </h1>
            <p className="text-[16px] sm:text-[18px] text-brand-text-body leading-relaxed">
              Whether you are planning a new architectural pool, seeking white-glove
              weekly valet service, or need an urgent diagnostic repair, our team is ready.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info Grid */}
      <section className="py-14 sm:py-24 bg-brand-subtle">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Details & Map Card */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="bg-brand-surface rounded-3xl p-6 sm:p-10 shadow-sm border border-brand-border space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-text-muted block">
                  Direct Line &amp; Headquarters
                </span>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-brand-text-muted block mb-1">Toll Free Consultation</span>
                    <a
                      href="tel:08004567890"
                      className="text-[20px] sm:text-[22px] font-bold text-brand-text-primary hover:text-brand-primary transition-colors"
                    >
                      0-(800)-456-78-90
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-brand-text-muted block mb-1">Direct Field Office</span>
                    <p className="text-[16px] sm:text-[17px] font-semibold text-brand-text-primary">
                      +1 999 888-77-64
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-brand-text-muted block mb-1">Email Inquiries</span>
                    <a
                      href="mailto:contact@aquelispools.com"
                      className="text-[15px] sm:text-[16px] font-medium text-brand-primary hover:underline"
                    >
                      contact@aquelispools.com
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-brand-text-muted block mb-1">Main Design Studio</span>
                    <p className="text-[14px] sm:text-[15px] text-brand-text-primary">
                      New Hampshere, New Jersey, USA
                    </p>
                  </div>

                  <div className="pt-2 border-t border-brand-border">
                    <span className="text-xs text-brand-text-muted block mb-1">Operating Hours</span>
                    <p className="text-[13px] text-brand-text-body">
                      Mon – Fri: 8:00 AM – 6:00 PM EST<br />
                      Sat: 9:00 AM – 3:00 PM EST<br />
                      <strong className="text-brand-text-primary">24/7 Priority Emergency Dispatch</strong> for contract holders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Area Map Graphic */}
              <div
                className="relative rounded-3xl overflow-hidden h-[260px] sm:h-[300px] shadow-sm border border-brand-border group"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/27_please_contact_us_today__map__rectangle_10.webp"
                  alt="Area Map Location"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-surface/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-brand-text-primary border border-brand-border/60 shadow-sm">
                  📍 Greater New Jersey &amp; Tri-State Region
                </div>
              </div>
            </div>

            {/* Right: Full Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-surface rounded-3xl p-6 sm:p-12 shadow-sm border border-brand-border">
                {submitted ? (
                  <div className="py-12 sm:py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-md">
                      ✓
                    </div>
                    <h2 className="text-[24px] sm:text-[28px] font-bold text-brand-text-primary">
                      Message Received!
                    </h2>
                    <p className="text-[15px] sm:text-[16px] text-brand-text-body max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Aquelis. Our chief swimming pool engineer
                      will review your project specifications and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-pill-dark !py-2.5 !px-6 text-sm mt-4 cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5 sm:space-y-6"
                  >
                    <div>
                      <h2 className="text-[24px] sm:text-[28px] font-medium text-brand-text-primary tracking-tight mb-2">
                        Request a Consultation or Quote
                      </h2>
                      <p className="text-sm text-brand-text-body">
                        Fill out the details below and an engineer will contact you with
                        custom recommendations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                          Your Full Name *
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                          Phone Number *
                        </label>
                        <input
                          suppressHydrationWarning
                          type="tel"
                          required
                          placeholder="0-(000)-000-00-00"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          suppressHydrationWarning
                          type="email"
                          required
                          placeholder="client@luxuryhome.com"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                          Property Location / Zip
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          placeholder="e.g. Princeton, NJ"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                          Service of Interest
                        </label>
                        <select
                          suppressHydrationWarning
                          defaultValue="new-construction"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer"
                        >
                          <option value="new-construction">New Pool Construction ($8.9k+)</option>
                          <option value="weekly-valet">Weekly Valet Maintenance ($189 - $499/mo)</option>
                          <option value="renovation">Major Pool Renovation &amp; Retiling</option>
                          <option value="equipment-repair">Pump / Heater / Filter Replacement</option>
                          <option value="commercial">Commercial Aquatic Compliance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                          Estimated Timeline
                        </label>
                        <select
                          suppressHydrationWarning
                          defaultValue="immediate"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer"
                        >
                          <option value="immediate">Immediate (Next 1–2 weeks)</option>
                          <option value="this-season">This Season (Next 1–3 months)</option>
                          <option value="planning">Future Planning / Architectural Phase</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text-primary mb-2">
                        Project Notes / Specific Questions
                      </label>
                      <textarea
                        suppressHydrationWarning
                        rows={4}
                        placeholder="Tell us about your pool dimensions, desired features (infinity edge, spa, heater), or current water issues..."
                        className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-base sm:text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        suppressHydrationWarning
                        type="checkbox"
                        id="consent-form"
                        required
                        className="mt-1 w-4 h-4 rounded text-brand-primary focus:ring-brand-primary accent-brand-primary cursor-pointer"
                      />
                      <label htmlFor="consent-form" className="text-xs text-brand-text-body leading-snug cursor-pointer select-none">
                        I agree that my submitted information is collected to provide on-site estimates and service coordination.
                      </label>
                    </div>

                    <button type="submit" className="btn-pill-dark group w-full sm:w-auto cursor-pointer">
                      <span>Submit Request</span>
                      <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
