'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  const contentPillars = [
    {
      title: "Health & Menopause",
      description: "Navigating menopause with confidence and care. Expert guidance curated from top researchers and doctors.",
      icon: "🌿",
      href: "/health"
    },
    {
      title: "Financial Planning",
      description: "Securing your future and maximizing your retirement years with smart financial strategies.",
      icon: "✨",
      href: "/finance"
    },
    {
      title: "Career & Purpose",
      description: "Rediscovering your passion and exploring new opportunities after 50.",
      icon: "🌸",
      href: "/career"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC', color: '#3B2A1A' }}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#C4622D' }}>
              50 is Just the Beginning
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto" style={{ color: '#3B2A1A', opacity: 0.8 }}>
              Empowering women to thrive, explore, and embrace the next chapter of their lives
            </p>
            <a href="/health">
              <button
                className="font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 text-white shadow-lg"
                style={{ backgroundColor: '#C4622D' }}
              >
                Explore Content
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-16" style={{ backgroundColor: '#fff8f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#3B2A1A' }}>
              Your Journey, Our Support
            </h2>
            <p style={{ color: '#3B2A1A', opacity: 0.7 }} className="text-lg">Real research. Real stories. Practical advice for women like you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentPillars.map((pillar, index) => (
              <a key={index} href={pillar.href}>
                <div
                  className="rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border cursor-pointer h-full"
                  style={{ backgroundColor: '#FAF4EC', borderColor: '#e8ddd0' }}
                >
                  <div className="text-5xl mb-6">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#C4622D' }}>{pillar.title}</h3>
                  <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.8 }}>{pillar.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-16" style={{ backgroundColor: '#7D9B76' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About Sanook50</h2>
          <p className="text-xl text-white mb-4 opacity-90">
            Sanook means <em>fun</em> in Thai. Because 50 should be the most fun decade yet.
          </p>
          <p className="text-white opacity-80 text-lg">
            We watch the experts so you don't have to — then tell you what it means for your life.
          </p>
          <a href="/about">
            <button className="mt-8 font-bold py-3 px-8 rounded-full text-lg transition duration-300 bg-white" style={{ color: '#7D9B76' }}>
              Our Story
            </button>
          </a>
        </div>
      </section>

      {/* Email signup */}
      <section className="py-16" style={{ backgroundColor: '#FAF4EC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#C4622D' }}>Stay Updated</h2>
          <p className="text-xl mb-8" style={{ color: '#3B2A1A', opacity: 0.8 }}>
            Join our community of women thriving at 50+
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 text-base"
                style={{ border: '1px solid #C4622D', color: '#3B2A1A', backgroundColor: 'white' }}
                required
              />
              <button
                type="submit"
                className="text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C4622D' }}
              >
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="mt-4 font-medium" style={{ color: '#7D9B76' }}>Thank you! Welcome to Sanook50! 🌸</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white" style={{ backgroundColor: '#3B2A1A' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Image
            src="/sanook50_15x6_transparent.svg"
            alt="Sanook50"
            width={120}
            height={40}
            className="object-contain mx-auto mb-4 opacity-80"
          />
          <p style={{ color: '#D4A853' }}>© {new Date().getFullYear()} Sanook50.com. All rights reserved.</p>
          <p className="mt-2 opacity-70">Empowering women to thrive in their 50s and beyond 🐾</p>
        </div>
      </footer>
    </div>
  );
}
