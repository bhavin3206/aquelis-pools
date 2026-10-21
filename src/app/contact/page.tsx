"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-16 pb-20 border-b border-[#D8D8DA]">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="eyebrow-badge">Get in Touch</span>
            <h1 className="text-[clamp(2.75rem,5.5vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011] mb-6">
              Interested in Realizing{" "}
              <span className="text-[#8F9096] italic font-normal">Your Dream</span>?
            </h1>
            <p className="text-[18px] text-[#59595D] leading-relaxed">
              Whether you are planning a new architectural pool, seeking white-glove
              weekly valet service, or need an urgent diagnostic repair, our team is ready.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info Grid */}
      <section className="py-24 bg-[#ECECED]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details & Map Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-black/5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8F9096] block">
                  Direct Line &amp; Headquarters
                </span>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-[#8F9096] block mb-1">Toll Free Consultation</span>
                    <a
                      href="tel:08004567890"
                      className="text-[22px] font-bold text-[#0F1011] hover:text-[#1537EE] transition-colors"
                    >
                      0-(800)-456-78-90
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-[#8F9096] block mb-1">Direct Field Office</span>
                    <p className="text-[17px] font-semibold text-[#0F1011]">
                      +1 999 888-77-64
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-[#8F9096] block mb-1">Email Inquiries</span>
                    <a
                      href="mailto:jalsarah@logoipsum.com"
                      className="text-[16px] font-medium text-[#1537EE] hover:underline"
                    >
                      jalsarah@logoipsum.com
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-[#8F9096] block mb-1">Main Design Studio</span>
                    <p className="text-[15px] text-[#0F1011]">
                      New Hampshere, New Jersey, USA
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F0F0F2]">
                    <span className="text-xs text-[#8F9096] block mb-1">Operating Hours</span>
                    <p className="text-[13px] text-[#59595D]">
                      Mon – Fri: 8:00 AM – 6:00 PM EST<br />
                      Sat: 9:00 AM – 3:00 PM EST<br />
                      <strong className="text-[#0F1011]">24/7 Priority Emergency Dispatch</strong> for contract holders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Area Map Graphic */}
              <div
                className="relative rounded-3xl overflow-hidden h-[300px] shadow-sm border border-black/5 group"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/27_please_contact_us_today__map__rectangle_10.jpg"
                  alt="Area Map Location"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-[#0F1011] shadow-sm">
                  📍 Greater New Jersey &amp; Tri-State Region
                </div>
              </div>
            </div>

            {/* Right: Full Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5">
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#1537EE] text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-md">
                      ✓
                    </div>
                    <h2 className="text-[28px] font-bold text-[#0F1011]">
                      Message Received!
                    </h2>
                    <p className="text-[16px] text-[#59595D] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Jalsarah. Our chief swimming pool engineer
                      will review your project specifications and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-pill-dark !py-2.5 !px-6 text-sm mt-4"
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
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-[28px] font-medium text-[#0F1011] tracking-tight mb-2">
                        Request a Consultation or Quote
                      </h2>
                      <p className="text-sm text-[#59595D]">
                        Fill out the details below and an engineer will contact you with
                        custom recommendations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anuradha Selvis"
                          className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0-(000)-000-00-00"
                          className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="anu@sample.com"
                          className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                          Property Location / Zip
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Princeton, NJ"
                          className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                          Service of Interest
                        </label>
                        <select
                          defaultValue="new-construction"
                          className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE] cursor-pointer"
                        >
                          <option value="new-construction">New Pool Construction ($8.9k+)</option>
                          <option value="weekly-valet">Weekly Valet Maintenance ($189 - $499/mo)</option>
                          <option value="renovation">Major Pool Renovation &amp; Retiling</option>
                          <option value="equipment-repair">Pump / Heater / Filter Replacement</option>
                          <option value="commercial">Commercial Aquatic Compliance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                          Estimated Timeline
                        </label>
                        <select
                          defaultValue="immediate"
                          className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE] cursor-pointer"
                        >
                          <option value="immediate">Immediate (Next 1–2 weeks)</option>
                          <option value="this-season">This Season (Next 1–3 months)</option>
                          <option value="planning">Future Planning / Architectural Phase</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3B3B3D] mb-2">
                        Project Notes / Specific Questions
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your pool dimensions, desired features (infinity edge, spa, heater), or current water issues..."
                        className="w-full bg-[#F3F3F5] border border-[#D5D5D8] rounded-xl px-4 py-3.5 text-sm text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE] resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent-form"
                        required
                        className="mt-1 w-4 h-4 rounded text-[#1537EE] focus:ring-[#1537EE] accent-[#0F1011] cursor-pointer"
                      />
                      <label htmlFor="consent-form" className="text-xs text-[#59595D] leading-snug cursor-pointer select-none">
                        I agree that my submitted information is collected to provide on-site estimates and service coordination.
                      </label>
                    </div>

                    <button type="submit" className="btn-pill-dark group w-full sm:w-auto">
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
