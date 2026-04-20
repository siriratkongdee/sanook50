'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
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
  );
}
