export default function Finance() {
  const articles = [
    { title: "Why Women 50+ Are Most Exposed to AI Disruption — and What to Do About It", excerpt: "AI is not coming for factory workers first. It is coming for mid-career knowledge workers with high salaries and specialized skills. Here is the honest threat assessment — and the financial moves that create resilience.", emoji: "🤖", tag: "AI + Career", href: "/finance/ai-disruption" },
    { title: "The Retirement Readiness Checklist: Where Do You Actually Stand?", excerpt: "Most women 50+ have no clear picture of where they stand. Here is the honest framework to assess your situation — and what to do about the gaps.", emoji: "📋", tag: "Planning", href: "/finance/readiness-checklist" },
    { title: "The Semi-Retirement Math: Working Backwards From Your Number", excerpt: "How much do you actually need? The 4% rule, the healthcare gap, and the real calculation most retirement tools get wrong.", emoji: "🎯", tag: "Retirement", href: "/finance/semi-retire" },
    { title: "The Wheel Strategy: Getting Paid While You Wait to Buy Stocks", excerpt: "If you want to own a stock anyway, why not collect income while waiting for your price? A practical options strategy for non-traders.", emoji: "🎡", tag: "Options", href: "/finance/wheel-strategy" },
    { title: "Investing in Your 50s: The Rules Are Different Now", excerpt: "Less time to recover. More capital to protect. Here is the framework for balancing growth and protection with a 5-10 year runway.", emoji: "📊", tag: "Investing", href: "/finance/investing-50s" },
    { title: "The 5 Financial Decisions That Make or Break Early Retirement", excerpt: "Social Security timing. Healthcare bridge. Asset allocation shift. Tax strategy. These are the levers that actually move the needle — and most people pull them wrong.", emoji: "⚡", tag: "Decisions", href: "/finance/key-decisions" },
    { title: "What If? Scenarios Every Woman 50+ Should Run Before Retiring", excerpt: "What if markets drop 30%? What if you lose your job? What if you live to 95? Running these scenarios now changes what you do today.", emoji: "🔮", tag: "Scenarios", href: "/finance/what-if" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="py-16" style={{ backgroundColor: "#FAF4EC", borderBottom: "4px solid #D4A853" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#3B2A1A" }}>Financial Planning</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#D4A853" }}>AI is reshaping careers faster than anyone expected. Women 50+ are uniquely exposed — and uniquely positioned to prepare financially. Here is how.</p>
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
          <a href="/finance/advisor" className="block rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: "#7D9B76", borderColor: "#7D9B76" }}>
            <div className="text-4xl mb-3">🤖</div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}>AI Tool</span>
            <h2 className="text-xl font-bold mb-3 mt-2 text-white">Your AI Financial Advisor</h2>
            <p style={{ color: "white", opacity: 0.9 }}>Personalized retirement scenarios, plain-English answers, no sales pitch. Built for women 50+. Join the waitlist.</p>
            <p className="mt-4 font-medium text-white">Join waitlist →</p>
          </a>
        </div>
      </div>
    </div>
  );
}
