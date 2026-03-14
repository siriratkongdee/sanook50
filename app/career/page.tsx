export default function Career() {
  const articles = [
    { title: "Staying Relevant in the Age of AI: A Guide for Women 50+", excerpt: "AI isn't replacing experienced professionals — it's replacing those who don't adapt. Here's your practical roadmap.", emoji: "🤖" },
    { title: "Negotiating Your Worth After 50: You Have More Leverage Than You Think", excerpt: "Your experience, network, and institutional knowledge are invaluable. Here's how to make sure you're paid for it.", emoji: "💪" },
    { title: "From Employee to Consultant: Making the Transition After 50", excerpt: "Your decades of expertise are worth paying for. Here's how to package your knowledge into a consulting practice.", emoji: "🎯" },
    { title: "Building a Personal Brand After 50: LinkedIn Isn't Just for Young People", excerpt: "Thought leadership, networking, and visibility matter more than ever. Here's how to build your brand in the digital age.", emoji: "✨" },
    { title: "The Portfolio Career: Why Women 50+ Are Perfectly Positioned for It", excerpt: "Multiple income streams, flexible hours, work that matters. The portfolio career was made for women like you.", emoji: "📚" },
    { title: "Mentoring and Being Mentored: The Career Superpower Nobody Talks About", excerpt: "Both giving and receiving mentorship accelerates your career. Here's how to build a powerful mentor network.", emoji: "🤝" },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="bg-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">💼</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career & Purpose</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">Navigate the next chapter of your career with confidence, strategy, and purpose</p>
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
