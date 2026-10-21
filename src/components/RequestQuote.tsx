"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-[#ECECED] content-auto">
      <div className="section-container">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <span className="eyebrow-badge">We build the best pools.</span>
              <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0F1011]">
                Request Your Free
                <br />
                Pool Consultation.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start gap-6">
            <Reveal direction="up" delayMs={100}>
              <p className="text-[15px] leading-relaxed text-[#59595D]">
                Many health clubs, fitness centers and private clubs, such as the YMCA,
                have pools used mostly for exercise or recreation. Many towns and cities
                provide public pools. Many hotels have pools available for their guests to
                use at their leisure. Universities typically have pools for physical
                education.
              </p>
            </Reveal>
            <Reveal direction="up" delayMs={200}>
              <a href="#about" className="btn-pill-dark group">
                <span>Discover</span>
                <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Big Form & Quote Card Container */}
        <Reveal direction="up" delayMs={150}>
          <div className="bg-[#DFDFE1] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left: Form */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {submitted ? (
                  <div className="bg-white rounded-2xl p-8 text-center my-auto transition-all animate-fadeIn">
                    <div className="w-14 h-14 bg-[#1537EE] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-md">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F1011] mb-2">
                      Request Received!
                    </h3>
                    <p className="text-[#59595D] text-sm">
                      Thank you. Our swimming pool specialist will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    {/* Pool Type Dropdown */}
                    <div>
                      <label className="block text-[13px] font-medium text-[#3B3B3D] mb-1.5">
                        Pool Type
                      </label>
                      <select
                        defaultValue=""
                        required
                        className="w-full bg-white border border-[#D0D0D2] rounded-xl px-4 py-3.5 text-[15px] text-[#0F1011] focus:outline-none focus:ring-2 focus:ring-[#1537EE] transition-shadow cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Type
                        </option>
                        <option value="indoor">Indoor Swimming Pool</option>
                        <option value="residential">Residential Luxury Pool</option>
                        <option value="commercial">Commercial &amp; Wellness Pool</option>
                        <option value="renovation">Pool Maintenance &amp; Renovation</option>
                      </select>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-medium text-[#3B3B3D] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Anuradha"
                          className="w-full bg-white border border-[#D0D0D2] rounded-xl px-4 py-3.5 text-[15px] text-[#0F1011] placeholder:text-[#A0A0A5] focus:outline-none focus:ring-2 focus:ring-[#1537EE] transition-shadow"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-medium text-[#3B3B3D] mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="anu@sample.com"
                          className="w-full bg-white border border-[#D0D0D2] rounded-xl px-4 py-3.5 text-[15px] text-[#0F1011] placeholder:text-[#A0A0A5] focus:outline-none focus:ring-2 focus:ring-[#1537EE] transition-shadow"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-[13px] font-medium text-[#3B3B3D] mb-1.5">
                        Write Something
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Your message"
                        className="w-full bg-white border border-[#D0D0D2] rounded-xl px-4 py-3.5 text-[15px] text-[#0F1011] placeholder:text-[#A0A0A5] focus:outline-none focus:ring-2 focus:ring-[#1537EE] transition-shadow resize-none"
                      />
                    </div>

                    {/* Consent checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 rounded text-[#1537EE] focus:ring-[#1537EE] accent-[#0F1011] cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-[13px] text-[#59595D] leading-snug cursor-pointer select-none">
                        I agree that my submitted data is being collected and stored.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button type="submit" className="btn-pill-dark group">
                        <span>Send My Quote Request</span>
                        <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right: Quote Card with Image */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight text-[#3B3B3D] block mb-4">
                    Request a Quote.
                  </span>
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden h-[260px] sm:h-[320px] shadow-sm group"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/34_benefits_of_an_indoor_swimming_pool_premise__group_25__rectangle_90.webp"
                    alt="Modern luxury indoor pool villa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
