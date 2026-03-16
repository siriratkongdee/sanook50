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
        <nav className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#C4622D' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <Image
                  src="/sanook50_15x5_transparent.png"
                  alt="Sanook50"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/health" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#FAF4EC' }}>Health</Link>
                <Link href="/finance" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#FAF4EC' }}>Finance</Link>
                <Link href="/career" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#FAF4EC' }}>Career</Link>
                <Link href="/about" className="font-medium transition-opacity hover:opacity-70" style={{ color: '#FAF4EC' }}>About</Link>
              </div>
              <button className="px-5 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-90" style={{ backgroundColor: '#FAF4EC', color: '#C4622D' }}>
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
