import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aquelis-pools.pages.dev"),
  title: "Aquelis — Luxury Swimming Pool Architecture & Valet Care",
  description:
    "You think, we build your dream pool. Premium architectural swimming pool construction, valet maintenance, and turnkey aquatic engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable}`}>
      <body className="antialiased font-sans bg-[#F4F4F5] text-[#0F1011]">
        {children}
      </body>
    </html>
  );
}
