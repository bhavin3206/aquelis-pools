import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contacts", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0F1011] border-t border-[#1D1E20] pt-20 pb-12 content-auto">
      <div className="section-container">
        {/* Big Headline */}
        <Reveal direction="up">
          <div className="mb-14">
            <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-medium text-white tracking-[-0.04em] max-w-2xl leading-tight">
              Owning a pool is a fun part, let us handle the rest.
            </h2>
          </div>
        </Reveal>

        {/* Links Navigation Bar */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-[15px] font-medium text-[#8F9096] py-6 border-y border-[#1D1E20] mb-12">
          {navLinks.map((link, idx) => (
            <span key={link.label} className="flex items-center gap-4">
              <Link
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
              {idx < navLinks.length - 1 && (
                <span className="text-[#2A2B2E] font-light">/</span>
              )}
            </span>
          ))}
        </div>

        {/* Brand & Contacts Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-[#1D1E20]">
          {/* Logo */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 group mb-3 w-fit">
              <div className="w-5 h-5 rounded-[3px] bg-[#1537EE] flex-shrink-0 group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-logo text-[24px] font-bold tracking-tight text-white">
                Aque.<span className="text-[#1537EE]">lis.</span>
              </span>
            </Link>
            <p className="text-[13px] text-[#59595D] max-w-xs">
              Turning your swimming pool dream into reality with modern craftsmanship and turnkey service.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-1 text-[14px]">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#59595D] block mb-2">
              Get in touch
            </span>
            <a href="tel:08004567890" className="block font-bold text-white hover:text-[#1537EE] transition-colors">
              0-(800)-456-78-90
            </a>
            <a href="mailto:aquelis@logoipsum.com" className="block text-[#59595D] hover:text-white transition-colors hover:underline">
              aquelis@logoipsum.com
            </a>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 space-y-1 text-[14px]">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#59595D] block mb-2">
              Social Links
            </span>
            <div className="flex items-center gap-5">
              <a href="#" className="font-medium text-[#8F9096] hover:text-white hover:-translate-y-0.5 transition-all">
                Telegram
              </a>
              <a href="#" className="font-medium text-[#8F9096] hover:text-white hover:-translate-y-0.5 transition-all">
                Whatsapp
              </a>
              <a href="#" className="font-medium text-[#8F9096] hover:text-white hover:-translate-y-0.5 transition-all">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[13px] text-[#3B3B3D]">
          <p>© 2026 — Copyright Aquelis. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
