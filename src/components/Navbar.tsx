"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll-aware glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`w-full sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm" : "bg-[#F3F3F5] border-b border-[#D8D8DA]"}`}>
        <div className="section-container flex items-center justify-between h-[80px]">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-[18px] h-[18px] rounded-[3px] bg-[#1537EE] flex-shrink-0 group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-logo text-[22px] font-bold tracking-tight text-[#0F1011]">
              Aque.<span className="text-[#1537EE]">lis.</span>
            </span>
          </Link>

          {/* Desktop Direct Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    active
                      ? "text-[#1537EE] font-bold border-b-2 border-[#1537EE]"
                      : "text-[#3B3B3D] hover:text-[#0F1011]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Information & Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Call Now */}
            <div className="hidden sm:flex items-center gap-2 text-[14px]">
              <span className="text-[#6E6E73]">Call Now:</span>
              <a
                href="tel:08004567890"
                className="font-bold text-[#0F1011] hover:text-[#1537EE] transition-colors"
              >
                0-(800)-456-78-90
              </a>
            </div>

            {/* Request Service CTA */}
            <Link
              href="/contact"
              className="bg-[#0F1011] text-white text-[13px] sm:text-[14px] font-medium px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#25272A] hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Request Service
            </Link>

            {/* Header Menu Button (Visible only on Mobile & Tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Full Menu"
              aria-expanded={menuOpen}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#D5D5D8] hover:bg-[#EBEBED] hover:border-[#0F1011] transition-all cursor-pointer shadow-sm group"
            >
              <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                <span
                  className={`h-0.5 w-5 bg-[#0F1011] transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-[#0F1011] transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-[#0F1011] transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Full Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-visibility duration-300 ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[480px] bg-[#F3F3F5] shadow-2xl flex flex-col justify-between p-6 sm:p-10 transition-transform duration-300 ease-out border-l border-[#D8D8DA] overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D8D8DA]">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-[3px] bg-[#1537EE]" />
              <span className="font-logo text-[22px] font-bold text-[#0F1011]">
                Aque.<span className="text-[#1537EE]">lis.</span>
              </span>
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0F1011] hover:bg-black hover:text-white transition-all shadow-sm cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8F9096] block mb-4">
              Explore Pages
            </span>
            {navLinks.map((link, idx) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between text-[clamp(1.5rem,3vw,2rem)] font-medium py-2 transition-all ${
                    active
                      ? "text-[#1537EE] pl-2 font-bold"
                      : "text-[#0F1011] hover:text-[#1537EE] hover:pl-2"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity ${
                      active ? "opacity-100 text-[#1537EE]" : ""
                    }`}
                  >
                    ↗
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer Information */}
          <div className="pt-6 border-t border-[#D8D8DA] space-y-4 text-sm">
            <div>
              <span className="text-[#8F9096] text-xs font-medium block mb-1">
                Direct Contact
              </span>
              <a
                href="tel:08004567890"
                className="text-[17px] font-bold text-[#0F1011] hover:text-[#1537EE]"
              >
                0-(800)-456-78-90
              </a>
              <p className="text-[#59595D] text-xs mt-0.5">
                aquelis@logoipsum.com • New Jersey, USA
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#0F1011] pt-2">
              <a href="#" className="hover:text-[#1537EE]">Telegram</a>
              <span>•</span>
              <a href="#" className="hover:text-[#1537EE]">Whatsapp</a>
              <span>•</span>
              <a href="#" className="hover:text-[#1537EE]">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
