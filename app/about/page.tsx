export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="py-16" style={{ backgroundColor: '#7D9B76' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🐾</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Sanook50</h1>
          <p className="text-xl max-w-2xl mx-auto text-white opacity-90">The story behind why this exists</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="rounded-2xl p-10 shadow-md border" style={{ backgroundColor: 'white', borderColor: '#e8ddd0' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#C4622D' }}>Why Sanook50?</h2>
          <p className="text-lg mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            Sanook (สนุก) is the Thai word for <em>fun</em>. Because turning 50 should feel like the beginning of something exciting — not the beginning of the end.
          </p>
          <p className="text-lg mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I'm a Thai-American woman who turned 50 and found myself navigating menopause, rethinking my career, and completely overhauling how I think about the next 30 years. I spent hours watching expert podcasts, reading research papers, and trying to figure out what actually applies to women like me.
          </p>
          <p className="text-lg mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            Sanook50 exists because I got tired of content that was either too clinical, too generic, or just plain wrong. I watch the experts — Peter Attia, Mary Claire Haver, Rhonda Patrick and more — and translate what they say into practical guidance for real women in their 50s.
          </p>
          <p className="text-lg mb-6" style={{ color: '#3B2A1A', lineHeight: '1.8' }}>
            I'm not a doctor. I'm a smart friend who did the homework.
          </p>
          <div className="mt-10 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#3B2A1A' }}>What you'll find here</h3>
            <ul className="space-y-3">
              {[
                "🌿 Health & Menopause — real research, practical takeaways",
                "✨ Financial Planning — building your second chapter with confidence",
                "🌸 Career & Purpose — reinventing yourself on your own terms",
              ].map((item, i) => (
                <li key={i} className="text-lg" style={{ color: '#3B2A1A' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
