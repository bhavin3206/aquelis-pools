"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c2-3 4-4 6-4s4 1 6 4 4 4 6 4 4-1 6-4" />
              <path d="M2 18c2-3 4-4 6-4s4 1 6 4 4 4 6 4 4-1 6-4" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            aqua<span className="text-accent">vista</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-accent-dark"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 bg-dark px-5 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-gray-400 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-accent px-6 py-2.5 text-center text-sm font-semibold text-dark"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
