'use client';

import { useState } from 'react';

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
      description: "Navigating menopause with confidence and care. Expert guidance for your health journey.",
      icon: "🏥"
    },
    {
      title: "Financial Planning",
      description: "Securing your future and maximizing your retirement years with smart financial strategies.",
      icon: "💰"
    },
    {
      title: "Career & Purpose",
      description: "Rediscovering your passion and exploring new opportunities after 50.",
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-900 mb-6">
              50 is Just the Beginning
            </h1>
            <p className="text-xl md:text-2xl text-rose-700 mb-10 max-w-3xl mx-auto">
              Empowering women to thrive, explore, and embrace the next chapter of their lives
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Explore Content
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
              Your Journey, Our Support
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentPillars.map((pillar, index) => (
              <div key={index} className="bg-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-100">
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-rose-900 mb-4">{pillar.title}</h3>
                <p className="text-rose-700 text-lg">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">About Sanook50</h2>
            <p className="text-xl text-rose-700 mb-4">
              Sanook means FUN in Thai. Because 50 should be the most fun decade yet.
            </p>
            <p className="text-rose-600 text-lg">
              We're here to help you embrace this exciting chapter with confidence, knowledge, and joy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-rose-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-rose-700 mb-8">
            Join our community of women thriving at 50+
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-rose-900"
                required
              />
              <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-rose-600 font-medium">Thank you! Welcome to Sanook50! 🌸</p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-rose-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-rose-200">© {new Date().getFullYear()} Sanook50.com. All rights reserved.</p>
          <p className="text-rose-300 mt-2">Empowering women to thrive in their 50s and beyond 🐾</p>
        </div>
      </footer>
    </div>
  );
}