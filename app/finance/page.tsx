export default function Finance() {
  const articles = [
    { title: "Semi-Retire at 55: The Math You Need to Know", excerpt: "Working backwards from your goal — how much do you actually need, and what's the realistic path to get there?", emoji: "🎯", tag: "Retirement" },
    { title: "The Wheel Strategy: Getting Paid While You Wait to Buy Stocks", excerpt: "Selling cash-secured puts is one of the smartest income strategies if you want to own a stock anyway. Here's how it works.", emoji: "🎡", tag: "Options" },
    { title: "Investing in Your 50s: Different Rules Apply", excerpt: "The risk/reward calculus changes after 50. Here's how to think about growth vs. protection with 5-10 years to retirement.", emoji: "📊", tag: "Investing" },
    { title: "Healthcare Costs in Retirement: The Number Nobody Talks About", excerpt: "Most retirement calculators underestimate healthcare. Here's what women 50+ need to plan for.", emoji: "🏥", tag: "Planning" },
    { title: "Building Income Streams Before You Retire", excerpt: "Multiple income streams reduce retirement risk. Here's a practical framework for building them in your 50s.", emoji: "💰", tag: "Income" },
    { title: "Social Security for Women: Getting the Most From Your Benefits", excerpt: "Timing your Social Security claim can mean the difference of hundreds of dollars a month. Here's the strategy.", emoji: "📋", tag: "Social Security" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="py-16 text-white" style={{ backgroundColor: '#D4A853' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B2A1A' }}>Financial Planning</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#3B2A1A', opacity: 0.8 }}>Smart money moves for women building their second chapter.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border" style={{ backgroundColor: 'white', borderColor: '#e8ddd0' }}>
              <div className="text-4xl mb-3">{article.emoji}</div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#FAF4EC', color: '#D4A853' }}>{article.tag}</span>
              <h2 className="text-xl font-bold mb-3 mt-2" style={{ color: '#3B2A1A' }}>{article.title}</h2>
              <p style={{ color: '#3B2A1A', opacity: 0.7 }}>{article.excerpt}</p>
              <button className="mt-4 font-medium transition-colors hover:opacity-70" style={{ color: '#D4A853' }}>Read more →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
