"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Essential Care",
      desc: "Ideal for screened or low-debris pools needing steady water safety and routine chemical balancing.",
      monthly: 189,
      annual: 159,
      popular: false,
      features: [
        "Bi-weekly on-site technician visit",
        "Full digital water chemistry testing",
        "Chlorine, pH & alkalinity balancing",
        "Skimmer and pump basket emptying",
        "Visual equipment safety inspection",
        "Monthly digital health report",
      ],
    },
    {
      name: "Premier Maintenance",
      desc: "Our most requested full-valet service. Complete weekly grooming, scrubbing, and proactive care.",
      monthly: 299,
      annual: 249,
      popular: true,
      features: [
        "Weekly comprehensive valet visit",
        "Surface skimming & deep floor vacuuming",
        "Tile line brushing & waterline scrub",
        "All balancing chemicals included",
        "Filter backwashing & cartridge flushes",
        "Priority same-day repair dispatch",
        "Automated digital logging after every visit",
      ],
    },
    {
      name: "Executive Turnkey",
      desc: "Total hands-off luxury management. Includes unlimited emergency service, openings, and winterization.",
      monthly: 499,
      annual: 419,
      popular: false,
      features: [
        "Twice-weekly inspection & grooming",
        "24/7 smart telemetry water sensor monitor",
        "Full seasonal opening & winterization",
        "All chemicals and shock treatments",
        "Unlimited emergency service calls",
        "Annual pump & filter overhaul included",
        "Direct line to Chief Engineer",
      ],
    },
  ];

  const faqs = [
    {
      q: "Are water treatment chemicals included in the monthly fee?",
      a: "Yes! In both our Premier Maintenance and Executive Turnkey plans, all standard balancing chemicals (chlorine, shock, pH balancers, and clarifiers) are 100% included with no surprise surcharges.",
    },
    {
      q: "What happens if equipment breaks down?",
      a: "Our technicians inspect motors, seals, valves, and heaters on every single visit. If a mechanical issue is identified, plan holders receive priority dispatch and discounted labor rates.",
    },
    {
      q: "Can I pause my plan during the off-season?",
      a: "Yes. Homeowners who winterize their pools can seamlessly transition to our winter protection plan or pause billing until spring opening.",
    },
    {
      q: "How does construction pricing work?",
      a: "New pool construction starts at $8,901 for compact plunge designs and ranges upward for large architectural infinity projects. Every construction estimate includes 3D architectural renders, permits, and soil engineering.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Unified Hero + Plans Grid Section (All visible in initial view) */}
      <section className="pt-6 sm:pt-8 pb-16 bg-[#ECECED] border-b border-[#D8D8DA]">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold">
              Home
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <span className="font-semibold text-[#0F1011]">Pricing &amp; Plans.</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="eyebrow-badge mb-2">Transparent Investment</span>
            <h1 className="text-[clamp(2.25rem,4.2vw,4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0F1011] mb-3">
              Simple, Transparent{" "}
              <span className="text-[#8F9096] italic font-normal">Pricing</span>.
            </h1>
            <p className="text-[16px] text-[#59595D] leading-relaxed mb-5 max-w-2xl mx-auto">
              Select a tailored maintenance plan or request a custom build estimate. No
              hidden fees, no contracts, cancel or adjust anytime.
            </p>

            {/* Billing Switch */}
            <div className="inline-flex items-center gap-3 bg-white p-1.5 rounded-full border border-black/10 shadow-sm">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  !annual ? "bg-[#0F1011] text-white shadow-sm" : "text-[#59595D] hover:text-[#0F1011]"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  annual ? "bg-[#0F1011] text-white shadow-sm" : "text-[#59595D] hover:text-[#0F1011]"
                }`}
              >
                <span>Annual</span>
                <span className="bg-[#1537EE] text-white text-[11px] px-2 py-0.5 rounded-full font-bold">
                  Save 15%
                </span>
              </button>
            </div>
          </div>

          {/* 3 Plans Grid — Immediately displayed together with the header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            {plans.map((p) => {
              const price = annual ? p.annual : p.monthly;
              return (
                <div
                  key={p.name}
                  className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-300 ${
                    p.popular
                      ? "bg-[#0F1011] text-white shadow-2xl lg:-translate-y-3 relative border-2 border-[#1537EE] ring-4 ring-[#1537EE]/20 scale-[1.02]"
                      : "bg-white text-[#0F1011] shadow-sm hover-lift border border-black/5"
                  }`}
                >
                  <div>
                    {p.popular && (
                      <div className="inline-block bg-[#1537EE] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-[26px] font-bold tracking-tight mb-2">{p.name}</h3>
                    <p className={`text-sm mb-6 ${p.popular ? "text-[#A0A0A5]" : "text-[#59595D]"}`}>
                      {p.desc}
                    </p>

                    <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-black/10">
                      <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight">
                        ${price}
                      </span>
                      <span className={`text-sm font-medium ${p.popular ? "text-[#A0A0A5]" : "text-[#59595D]"}`}>
                        / month {annual ? "(billed yearly)" : ""}
                      </span>
                    </div>

                    <div className="space-y-3.5 mb-8">
                      <span className={`text-xs font-bold uppercase tracking-wider block ${p.popular ? "text-[#D0D0D4]" : "text-[#8F9096]"}`}>
                        Included in plan:
                      </span>
                      {p.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm">
                          <span className="text-[#1537EE] font-bold text-base leading-none">✓</span>
                          <span className={p.popular ? "text-gray-200" : "text-[#3B3B3D]"}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-3.5 rounded-full text-center font-bold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                      p.popular
                        ? "bg-[#1537EE] text-white hover:bg-blue-600 shadow-md"
                        : "bg-[#0F1011] text-white hover:bg-gray-800"
                    }`}
                  >
                    <span>Get Started with {p.name}</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Construction Estimator Banner */}
      <section className="py-20 bg-white border-b border-[#D8D8DA]">
        <div className="section-container">
          <Reveal direction="up">
            <div className="bg-[#F3F3F5] rounded-3xl p-8 sm:p-12 border border-black/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="eyebrow-badge">Building or Remodeling?</span>
                <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-medium text-[#0F1011] tracking-tight mb-4">
                  Custom Pool Construction &amp; Renovations
                </h2>
                <p className="text-[16px] text-[#59595D] leading-relaxed">
                  New custom pool builds start at $8,901 with full architectural permits,
                  structural concrete, and equipment warranties. Schedule an on-site design consultation.
                </p>
              </div>
              <Link href="/contact" className="btn-pill-dark group self-start lg:self-auto flex-shrink-0">
                <span>Request Construction Estimate</span>
                <span className="arrow-circle group-hover:translate-x-0.5 transition-transform">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#EBEBED]">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow-badge">Common Questions</span>
            <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-medium text-[#0F1011] tracking-tight">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} direction="up" delayMs={idx * 60}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                  <h3 className="text-[18px] font-bold text-[#0F1011] mb-2">{faq.q}</h3>
                  <p className="text-[15px] text-[#59595D] leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#DFDFE1] text-center">
        <div className="section-container">
          <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-medium text-[#0F1011] tracking-tight mb-6">
            Still Have Questions About Our Pricing?
          </h2>
          <p className="text-[16px] text-[#59595D] max-w-xl mx-auto mb-8">
            Our client advisors can build a custom service contract tailored to your exact equipment setup.
          </p>
          <Link href="/contact" className="btn-pill-dark group">
            <span>Speak with a Service Advisor</span>
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