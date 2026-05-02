import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/content'
import ReactMarkdown from 'react-markdown'

// Always use dynamic rendering if SHOW_DRAFTS is set
// This ensures draft articles are available immediately
export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateStaticParams() {
  // Only generate static params for published posts
  // Drafts will be handled dynamically
  const showDrafts = process.env.SHOW_DRAFTS === 'true'
  if (showDrafts) {
    // In draft mode, don't pre-generate any pages
    // Let them all be dynamic
    return []
  }
  
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {post.draft && (
          <div className="mb-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-orange-700 font-medium">
              📝 DRAFT — This post is not yet published
            </p>
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <time className="text-gray-600">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/articles"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to all articles
          </a>
        </footer>
      </div>
    </article>
  )
}
