import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/content'
import ReactMarkdown from 'react-markdown'

// Force dynamic rendering when SHOW_DRAFTS is enabled
export const dynamic = process.env.SHOW_DRAFTS === 'true' ? 'force-dynamic' : 'auto'

export async function generateStaticParams() {
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
