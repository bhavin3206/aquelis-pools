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
      <header className={`w-full sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-brand-border shadow-xs" : "bg-brand-bg border-b border-brand-border"}`}>
        <div className="section-container flex items-center justify-between h-[72px] sm:h-[80px]">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-[18px] h-[18px] rounded-[3px] bg-brand-primary flex-shrink-0 group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-logo text-[20px] sm:text-[22px] font-bold tracking-tight text-brand-ink">
              Aque.<span className="text-brand-primary">lis.</span>
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
                      ? "text-brand-primary font-bold border-b-2 border-brand-primary"
                      : "text-brand-text-body hover:text-brand-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Information & Actions */}
          <div className="flex items-center gap-2.5 sm:gap-5">
            {/* Call Now */}
            <div className="hidden sm:flex items-center gap-2 text-[14px]">
              <span className="text-brand-text-muted">Call Now:</span>
              <a
                href="tel:08004567890"
                className="font-bold text-brand-ink hover:text-brand-primary transition-colors"
              >
                0-(800)-456-78-90
              </a>
            </div>

            {/* Request Service CTA */}
            <Link
              href="/contact"
              className="bg-brand-ink text-white text-[12px] sm:text-[14px] font-medium px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-brand-primary transition-all shadow-xs flex-shrink-0"
            >
              <span className="hidden xs:inline">Request Service</span>
              <span className="xs:hidden">Quote ↗</span>
            </Link>

            {/* Header Menu Button (Visible only on Mobile & Tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Full Menu"
              aria-expanded={menuOpen}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white border border-brand-border hover:bg-brand-subtle hover:border-brand-ink transition-all cursor-pointer shadow-xs group flex-shrink-0"
            >
              <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                <span
                  className={`h-0.5 w-5 bg-brand-ink transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-brand-ink transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-brand-ink transition-all duration-300 ${
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
          className={`absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-[400px] bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out border-l border-brand-border overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-brand-border">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-[3px] bg-brand-primary" />
              <span className="font-logo text-[22px] font-bold text-brand-ink">
                Aque.<span className="text-brand-primary">lis.</span>
              </span>
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-brand-subtle flex items-center justify-center text-brand-ink hover:bg-brand-ink hover:text-white transition-all shadow-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-text-muted block mb-3">
              Explore Pages
            </span>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between min-h-[48px] text-[clamp(1.35rem,3vw,1.75rem)] font-medium py-1.5 transition-all ${
                    active
                      ? "text-brand-primary pl-2 font-bold"
                      : "text-brand-ink hover:text-brand-primary hover:pl-2"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity ${
                      active ? "opacity-100 text-brand-primary" : ""
                    }`}
                  >
                    ↗
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer Information */}
          <div className="pt-5 border-t border-brand-border space-y-3 text-sm">
            <div>
              <span className="text-brand-text-muted text-xs font-medium block mb-1">
                Direct Contact
              </span>
              <a
                href="tel:08004567890"
                className="text-[16px] font-bold text-brand-ink hover:text-brand-primary"
              >
                0-(800)-456-78-90
              </a>
              <p className="text-brand-text-muted text-xs mt-0.5">
                aquelis@logoipsum.com • New Jersey, USA
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-brand-text-body pt-1">
              <a href="#" className="hover:text-brand-primary">Telegram</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-primary">Whatsapp</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-primary">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
