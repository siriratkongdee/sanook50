export default function Career() {
  const articles = [
    { title: "Reinventing Yourself at 50: It's Not Starting Over, It's Starting Smarter", excerpt: "Your experience is an asset, not a liability. Here's how to reframe your career pivot for maximum impact.", emoji: "🌸", tag: "Reinvention" },
    { title: "Building a Personal Brand After 50", excerpt: "Why your story and expertise matter more than ever — and how to share them in the age of AI and social media.", emoji: "✨", tag: "Branding" },
    { title: "The Side Business Playbook for Women 50+", excerpt: "From idea to income: a practical guide to building a side business while keeping your day job.", emoji: "💡", tag: "Entrepreneurship" },
    { title: "AI Tools That Actually Save You Time at Work", excerpt: "The AI tools worth learning in 2026 — curated for women who want to work smarter, not just busier.", emoji: "🤖", tag: "Productivity" },
    { title: "Negotiating Salary After 50: Yes, You Can and Should", excerpt: "Age bias is real but so is your leverage. Here's how to negotiate confidently at every stage of your career.", emoji: "💼", tag: "Negotiation" },
    { title: "From Employee to Consultant: Making the Leap", excerpt: "Consulting can provide freedom, flexibility and often higher pay. Here's how to make the transition strategically.", emoji: "🚀", tag: "Consulting" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="py-16" style={{ backgroundColor: '#C4622D' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🌸</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Career & Purpose</h1>
          <p className="text-xl max-w-2xl mx-auto text-white opacity-90">Rediscover what you're capable of — on your own terms.</p>
        </div>
      </div>
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
