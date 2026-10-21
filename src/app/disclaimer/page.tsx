import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />
      <div className="section-container py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="text-sm text-[#8F9096] mb-8">Effective Date: January 1, 2024</p>
        <div className="space-y-6 text-[15px] text-[#59595D] leading-relaxed">
          <p>
            The information, pricing estimates, and portfolio photographs displayed on this website are provided by Jal. sarah. Swimming Pool Services for informational and illustrative purposes only.
          </p>
          <h2 className="text-xl font-bold text-[#0F1011] pt-4">Estimates &amp; Engineering</h2>
          <p>
            Exact pool construction and renovation costs depend on local municipal permit requirements, soil condition surveys, elevation grade, equipment selection, and property access. Formal contracts require a certified on-site engineering review.
          </p>
          <h2 className="text-xl font-bold text-[#0F1011] pt-4">Licensing &amp; Insurance</h2>
          <p>
            All construction and gas/electrical installations are completed by fully licensed, bonded, and insured pool contractors and Master Plumbers in compliance with state regulations.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
