import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanook50 — 50 is Just the Beginning",
  description: "Empowering women 50+ to thrive in health, finance, and career. Sanook means FUN in Thai — because 50 should be your best decade yet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#FAF4EC', borderBottom: '1px solid #e8ddd0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <Image
                  src="/sanook50_15x6_transparent.svg"
                  alt="Sanook50"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/health" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#3B2A1A' }}>Health</Link>
                <Link href="/finance" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#3B2A1A' }}>Finance</Link>
                <Link href="/career" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#3B2A1A' }}>Career</Link>
                <Link href="/about" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#3B2A1A' }}>About</Link>
              </div>
              <button className="text-white px-5 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-90" style={{ backgroundColor: '#C4622D' }}>
                Join Community
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
