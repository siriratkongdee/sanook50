import { getAllPosts } from "@/lib/content";

export default function Career() {
  const articles = getAllPosts("career").map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    emoji: post.emoji ?? "📝",
    tag: post.badge ?? post.category,
    href: `/career/${post.slug}`,
  }));

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
