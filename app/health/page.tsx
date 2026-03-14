export default function Health() {
  const articles = [
    { title: "Understanding Perimenopause: What Your Doctor Didn't Tell You", excerpt: "The real story about the years leading up to menopause — symptoms, timelines, and what actually helps.", emoji: "🌡️" },
    { title: "Hormone Therapy in 2026: What Women 50+ Need to Know", excerpt: "Cutting through the confusion about HRT — risks, benefits, and how to have the conversation with your doctor.", emoji: "💊" },
    { title: "Sleep After 50: Why It Changes and How to Fix It", excerpt: "Hormonal shifts affect your sleep architecture. Here's what's happening and evidence-based ways to reclaim deep sleep.", emoji: "😴" },
    { title: "Strength Training for Women 50+: Why It's Non-Negotiable", excerpt: "Muscle loss accelerates after 50. Here's why lifting weights is the single best thing you can do for longevity.", emoji: "💪" },
    { title: "Bone Density: The Silent Crisis and How to Fight It", excerpt: "Osteoporosis affects 1 in 3 women over 50. Simple strategies to protect your bones starting today.", emoji: "🦴" },
    { title: "Brain Fog During Menopause: Real, Common, and Temporary", excerpt: "Memory lapses and concentration issues during menopause are real. Here's the science and what actually helps.", emoji: "🧠" },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="bg-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🏥</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Menopause</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">Real talk about your body, hormones, and thriving through the transition</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-rose-100">
              <div className="text-4xl mb-4">{article.emoji}</div>
              <h2 className="text-xl font-bold text-rose-900 mb-3">{article.title}</h2>
              <p className="text-rose-600">{article.excerpt}</p>
              <button className="mt-4 text-rose-500 font-medium hover:text-rose-700 transition-colors">Read more →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
