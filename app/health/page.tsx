export default function Health() {
  const articles = [
    { title: "Should I Try HRT? What the Experts Actually Say", excerpt: "I watched 8 hours of podcasts from Peter Attia, Mary Claire Haver & Rhonda Patrick so you don't have to. Here's the honest breakdown.", emoji: "🌿", tag: "Hormones" },
    { title: "The Syndrome Nobody Told You About: Musculoskeletal Changes at Menopause", excerpt: "Over 70% of midlife women experience joint pain, muscle loss and bone changes — and it has a name. Here's what the science says.", emoji: "💪", tag: "Body" },
    { title: "Red Light Therapy at 50: My Protocol and What the Research Says", excerpt: "I started red light therapy and here's my routine, the science behind it, and what I'm tracking month by month.", emoji: "🔴", tag: "Wellness" },
    { title: "Sleep After 50: Why It Changes and How to Fix It", excerpt: "Hormonal shifts affect your sleep architecture. Here's what's happening and evidence-based ways to reclaim deep sleep.", emoji: "😴", tag: "Sleep" },
    { title: "Strength Training for Women 50+: Why It's Non-Negotiable", excerpt: "Muscle loss accelerates after 50. Here's why lifting weights is the single best thing you can do for longevity.", emoji: "🏋️", tag: "Fitness" },
    { title: "Brain Fog During Menopause: Real, Common, and Temporary", excerpt: "Memory lapses and concentration issues during menopause are real. Here's the science and what actually helps.", emoji: "🧠", tag: "Brain Health" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      {/* Header */}
      <div className="py-16 text-white" style={{ backgroundColor: '#7D9B76' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B2A1A' }}>Health &amp; Menopause</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#3B2A1A', opacity: 0.8 }}>We watch the experts so you don't have to — then tell you what it means for your life.</p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border" style={{ backgroundColor: 'white', borderColor: '#e8ddd0' }}>
              <div className="text-4xl mb-3">{article.emoji}</div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#FAF4EC', color: '#C4622D' }}>{article.tag}</span>
              <h2 className="text-xl font-bold mb-3 mt-2" style={{ color: '#3B2A1A' }}>{article.title}</h2>
              <p style={{ color: '#3B2A1A', opacity: 0.7 }}>{article.excerpt}</p>
              <button className="mt-4 font-medium transition-colors hover:opacity-70" style={{ color: '#C4622D' }}>Read more →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
