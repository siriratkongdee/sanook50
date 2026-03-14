import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanook50 — 50 is Just the Beginning",
  description: "Empowering women 50+ to thrive in health, finance, and career. Sanook means FUN in Thai — because 50 should be your best decade yet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <nav className="bg-white border-b border-rose-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-rose-600">
                Sanook50 🐾
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/health" className="text-rose-700 hover:text-rose-500 font-medium transition-colors">Health</Link>
                <Link href="/finance" className="text-rose-700 hover:text-rose-500 font-medium transition-colors">Finance</Link>
                <Link href="/career" className="text-rose-700 hover:text-rose-500 font-medium transition-colors">Career</Link>
                <Link href="/about" className="text-rose-700 hover:text-rose-500 font-medium transition-colors">About</Link>
              </div>
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
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
