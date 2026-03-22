export default function Career() {
  const articles = [
    { title: "Why Women 50+ Are in AI Crosshairs (And How to Get Out)", excerpt: "The specific threat profile, which roles are most at risk, the salary paradox, and the action plan to shift from target to asset.", emoji: "🎯", tag: "AI Risk", href: "/career/ai-crosshairs" },
    { title: "I Built My Own AI Team. Here Is What Changed.", excerpt: "How building an AI agent setup transformed daily productivity — what it handles, what it took to set up, and how to start building yours.", emoji: "🤖", tag: "Productivity", href: "/career/ai-team" },
    { title: "The Skills That Make You AI-Proof After 50", excerpt: "Not 'learn to code.' Specific, doable skills: prompt engineering, agent workflows, domain expertise plus AI, and building a second income stream with AI tools.", emoji: "🛡️", tag: "Skills", href: "/career/ai-proof-skills" },
    { title: "Negotiating Salary After 50: Yes, You Can and Should", excerpt: "Age bias is real but so is your leverage. Here is how to negotiate confidently at every stage.", emoji: "💼", tag: "Negotiation", href: "/career/negotiating" },
    { title: "From Employee to Consultant: Making the Leap", excerpt: "Consulting can provide freedom, flexibility and often higher pay. Here is how to make the transition strategically.", emoji: "🚀", tag: "Consulting", href: "/career/consulting" },
    { title: "Building a Personal Brand After 50", excerpt: "Why your story and expertise matter more than ever — and how to share them in the age of AI and social media.", emoji: "✨", tag: "Branding", href: "/career/personal-brand" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #C4622D' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🌸</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B2A1A' }}>Career & Purpose</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#C4622D' }}>AI is changing every career. Women 50+ who adapt will be in demand. Those who do not will face the hardest job market of their careers. Here is how to be in the first group.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <a key={i} href={article.href} className="block rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border" style={{ backgroundColor: 'white', borderColor: '#e8ddd0' }}>
              <div className="text-4xl mb-3">{article.emoji}</div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#FAF4EC', color: '#C4622D' }}>{article.tag}</span>
              <h2 className="text-xl font-bold mb-3 mt-2" style={{ color: '#3B2A1A' }}>{article.title}</h2>
              <p style={{ color: '#3B2A1A', opacity: 0.7 }}>{article.excerpt}</p>
              <p className="mt-4 font-medium" style={{ color: '#C4622D' }}>Read more →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
