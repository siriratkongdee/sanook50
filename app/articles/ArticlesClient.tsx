'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  draft: boolean
  category?: string
  tags?: string[]
}

interface Props {
  posts: Post[]
  categories: string[]
  tags: string[]
}

export default function ArticlesClient({ posts, categories, tags }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      if (selectedCategory && post.category !== selectedCategory) return false
      if (selectedTag && !post.tags?.includes(selectedTag)) return false
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags?.some(tag => tag.toLowerCase().includes(query))
        )
      }
      
      return true
    })
  }, [posts, searchQuery, selectedCategory, selectedTag])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Articles</h1>
        <p className="text-gray-600 mb-8">
          Expert health insights for women 50+
        </p>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Categories */}
          {categories.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors $${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors $${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Topics
              </label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors $${
                    selectedTag === null
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  All topics
                </button>
                {tags.slice(0, 15).map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors $${
                      selectedTag === tag
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <p className="text-sm text-gray-600 mb-6">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {/* Articles */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <Link href={`/articles/${post.slug}`}>
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 flex-1">
                      {post.title}
                    </h2>
                    {post.draft && (
                      <span className="ml-3 text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full whitespace-nowrap">
                        DRAFT
                      </span>
                    )}
                  </div>
                  
                  {post.category && (
                    <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded capitalize mb-2">
                      {post.category}
                    </span>
                  )}
                  
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs text-gray-500">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
