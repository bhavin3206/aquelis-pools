import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />
      <div className="section-container py-16 sm:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-text-primary mb-4">Privacy Policy</h1>
        <p className="text-sm text-brand-text-muted mb-8">Effective Date: January 1, 2024</p>
        <div className="space-y-6 text-[15px] text-brand-text-body leading-relaxed bg-brand-surface p-6 sm:p-10 rounded-3xl border border-brand-border shadow-sm">
          <p>
            At Aquelis Luxury Pools, we prioritize customer privacy. This policy outlines how we collect, use, and safeguard your personal information when requesting pool maintenance estimates or using our website.
          </p>
          <h2 className="text-xl font-bold text-brand-text-primary pt-2">1. Information We Collect</h2>
          <p>
            We collect personal details such as your full name, email address, phone number, and physical property address strictly to evaluate your pool site, formulate estimates, and schedule on-site service visits.
          </p>
          <h2 className="text-xl font-bold text-brand-text-primary pt-2">2. Data Security</h2>
          <p>
            We implement industry-standard encryption protocols and secure storage. We do not sell, rent, or trade your contact information to third-party marketing companies.
          </p>
          <h2 className="text-xl font-bold text-brand-text-primary pt-2">3. Contacting Us</h2>
          <p>
            If you have questions regarding our privacy practices, contact us directly at <strong className="text-brand-text-primary">contact@aquelispools.com</strong> or call <strong className="text-brand-text-primary">0-(800)-456-78-90</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
