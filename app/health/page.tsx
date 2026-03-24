export default function Health() {
  const articles = [
    { title: "Should I Try HRT? What the Experts Actually Say", excerpt: "I watched 8 hours of podcasts from Peter Attia, Mary Claire Haver & Rhonda Patrick so you don't have to. Here's the honest breakdown.", emoji: "🌿", tag: "Hormones", href: "/health/hrt" },
    { title: "Why Your Body Feels Different at 50: The Syndrome Nobody Told You About", excerpt: "Over 70% of midlife women experience joint pain, muscle loss and bone changes during menopause. It has a name — and knowing that changes everything.", emoji: "💪", tag: "Body", href: "/health/msm" },
    { title: "Red Light Therapy at 50: What the Experts Say and Whether I Think It Is Worth It", excerpt: "I went deep on the research before buying a red light panel. Here is the honest breakdown — expert voices, what the science supports, where they fight, and what I noticed in the first 2 weeks.", emoji: "🔴", tag: "Wellness", href: "/health/red-light" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#7D9B76" }}>← Back to Home</a>
      </div>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #7D9B76" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#3B2A1A" }}>Health & Menopause</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#7D9B76" }}>We watch the experts so you don't have to — then tell you what it means for your life.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <a key={i} href={article.href} className="block rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
              <div className="text-4xl mb-3">{article.emoji}</div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "#FAF4EC", color: "#7D9B76" }}>{article.tag}</span>
              <h2 className="text-xl font-bold mb-3 mt-2" style={{ color: "#3B2A1A" }}>{article.title}</h2>
              <p style={{ color: "#3B2A1A", opacity: 0.7 }}>{article.excerpt}</p>
              <p className="mt-4 font-medium" style={{ color: "#7D9B76" }}>Read more →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}