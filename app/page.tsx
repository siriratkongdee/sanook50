import { getAllPosts } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import EmailSignup from './EmailSignup'

export default async function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

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
  ]

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
            <a href="/articles">
              <button
                className="font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 text-white shadow-lg"
                style={{ backgroundColor: '#C4622D' }}
              >
                Explore Articles
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16" style={{ backgroundColor: '#fff8f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#3B2A1A' }}>
              Latest from the Experts
            </h2>
            <p style={{ color: '#3B2A1A', opacity: 0.7 }} className="text-lg">
              We watch the experts so you don't have to
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/articles/${post.slug}`}>
                <article
                  className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border cursor-pointer h-full flex flex-col"
                  style={{ backgroundColor: '#FAF4EC', borderColor: '#e8ddd0' }}
                >
                  {post.category && (
                    <span className="inline-block text-xs font-medium text-white px-3 py-1 rounded-full mb-3 capitalize w-fit" style={{ backgroundColor: '#7D9B76' }}>
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#C4622D' }}>
                    {post.title}
                  </h3>
                  <p className="text-base mb-4 flex-grow" style={{ color: '#3B2A1A', opacity: 0.8 }}>
                    {post.excerpt}
                  </p>
                  <time className="text-sm" style={{ color: '#3B2A1A', opacity: 0.6 }}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <a href="/articles">
              <button
                className="font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:opacity-90 text-white"
                style={{ backgroundColor: '#C4622D' }}
              >
                View All Articles →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-16" style={{ backgroundColor: '#FAF4EC' }}>
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
                  style={{ backgroundColor: '#fff8f2', borderColor: '#e8ddd0' }}
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
      <EmailSignup />

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
  )
}
