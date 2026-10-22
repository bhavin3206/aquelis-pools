import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />
      <div className="section-container py-16 sm:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-text-primary mb-4">Disclaimer</h1>
        <p className="text-sm text-brand-text-muted mb-8">Effective Date: January 1, 2024</p>
        <div className="space-y-6 text-[15px] text-brand-text-body leading-relaxed bg-brand-surface p-6 sm:p-10 rounded-3xl border border-brand-border shadow-sm">
          <p>
            The information, pricing estimates, and portfolio photographs displayed on this website are provided by Aquelis Luxury Pools for informational and illustrative purposes only.
          </p>
          <h2 className="text-xl font-bold text-brand-text-primary pt-2">Estimates &amp; Engineering</h2>
          <p>
            Exact pool construction and renovation costs depend on local municipal permit requirements, soil condition surveys, elevation grade, equipment selection, and property access. Formal contracts require a certified on-site engineering review.
          </p>
          <h2 className="text-xl font-bold text-brand-text-primary pt-2">Licensing &amp; Insurance</h2>
          <p>
            All construction and gas/electrical installations are completed by fully licensed, bonded, and insured pool contractors and Master Plumbers in compliance with state regulations.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
