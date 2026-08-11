import { getAllPosts } from "@/lib/content";

export default function Finance() {
  const articles = getAllPosts("finance").map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    emoji: post.emoji ?? "📝",
    tag: post.badge ?? post.category,
    href: `/finance/${post.slug}`,
  }));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: "#7D9B76" }}>← Back to Home</a>
      </div>
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
