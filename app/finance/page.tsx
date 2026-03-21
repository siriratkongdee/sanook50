export default function Finance() {
  const articles = [
    { title: "Semi-Retire at 55: The Math You Need to Know", excerpt: "Working backwards from your goal — how much do you actually need, and what is the realistic path to get there in 5 years.", emoji: "🎯", tag: "Retirement", href: "/finance/semi-retire" },
    { title: "The Wheel Strategy: Getting Paid While You Wait to Buy Stocks", excerpt: "Selling cash-secured puts is one of the smartest income strategies if you want to own a stock anyway. Here is how it works.", emoji: "🎡", tag: "Options", href: "/finance/wheel-strategy" },
    { title: "Investing in Your 50s: Different Rules Apply", excerpt: "The risk and reward calculus changes after 50. Here is the framework I use with a 5-year semi-retirement target.", emoji: "📊", tag: "Investing", href: "/finance/investing-50s" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#3B2A1A" }}>Financial Planning</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#D4A853" }}>Smart money moves for women building their second chapter.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <a key={i} href={article.href} className="block rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: "white", borderColor: "#e8ddd0" }}>
              <div className="text-4xl mb-3">{article.emoji}</div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "#FAF4EC", color: "#D4A853" }}>{article.tag}</span>
              <h2 className="text-xl font-bold mb-3 mt-2" style={{ color: "#3B2A1A" }}>{article.title}</h2>
              <p style={{ color: "#3B2A1A", opacity: 0.7 }}>{article.excerpt}</p>
              <p className="mt-4 font-medium" style={{ color: "#D4A853" }}>Read more →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}