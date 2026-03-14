export default function Finance() {
  const articles = [
    { title: "Catching Up on Retirement Savings After 50: It's Not Too Late", excerpt: "The IRS allows catch-up contributions after 50. Here's exactly how to maximize them and what accounts to prioritize.", emoji: "💰" },
    { title: "Social Security Strategy for Women: Maximize Your Benefits", excerpt: "Women live longer and earn less on average. Here's how to strategically claim Social Security to maximize lifetime benefits.", emoji: "📊" },
    { title: "Investing in Your 50s: The Right Balance of Growth and Safety", excerpt: "You still have 30+ years of life ahead. Your portfolio shouldn't be too conservative — here's how to think about it.", emoji: "📈" },
    { title: "The True Cost of Semi-Retirement at 55: A Real Calculation", excerpt: "What does it actually cost to step back from full-time work at 55? We run the real numbers.", emoji: "🧮" },
    { title: "Side Income After 50: Real Strategies That Actually Work", excerpt: "From consulting to content creation, practical ways women 50+ are building income streams outside their 9-to-5.", emoji: "💼" },
    { title: "Healthcare Costs Before Medicare: The Biggest Retirement Risk", excerpt: "The gap between retirement and Medicare at 65 is expensive. Here's how to plan for it without panic.", emoji: "🏥" },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="bg-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">💰</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Planning</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">Smart money strategies for the women who built careers and now want to build freedom</p>
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
