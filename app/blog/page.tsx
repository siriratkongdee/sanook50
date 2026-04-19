import Link from 'next/link'
import { getAllPosts } from '@/lib/content'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-600 mb-12">
          Expert health insights for women 50+
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                      {post.title}
                      {post.draft && (
                        <span className="ml-3 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                          DRAFT
                        </span>
                      )}
                    </h2>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
