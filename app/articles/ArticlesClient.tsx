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

const COLORS = {
  bg: '#FAF4EC',
  text: '#3B2A1A',
  green: '#7D9B76',
  gold: '#D4A853',
  orange: '#C4622D',
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
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      <div className="py-16" style={{ backgroundColor: COLORS.bg, borderBottom: `4px solid ${COLORS.green}` }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: COLORS.text }}>Articles</h1>
          <p className="text-lg" style={{ color: COLORS.text, opacity: 0.7 }}>
            Expert health insights for women 50+
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2"
            style={{ borderColor: '#e8ddd0', backgroundColor: 'white', color: COLORS.text }}
          />
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {categories.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
                Category
              </label>
              <div className="flex gap-2 flex-wrap">
                <FilterPill active={selectedCategory === null} onClick={() => setSelectedCategory(null)} color={COLORS.green}>
                  All
                </FilterPill>
                {categories.map(cat => (
                  <FilterPill
                    key={cat}
                    active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    color={COLORS.green}
                    capitalize
                  >
                    {cat}
                  </FilterPill>
                ))}
              </div>
            </div>
          )}

          {tags.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
                Topics
              </label>
              <div className="flex gap-2 flex-wrap">
                <FilterPill active={selectedTag === null} onClick={() => setSelectedTag(null)} color={COLORS.gold} small>
                  All topics
                </FilterPill>
                {tags.slice(0, 15).map(tag => (
                  <FilterPill
                    key={tag}
                    active={selectedTag === tag}
                    onClick={() => setSelectedTag(tag)}
                    color={COLORS.gold}
                    small
                  >
                    {tag}
                  </FilterPill>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm mb-6" style={{ color: COLORS.text, opacity: 0.6 }}>
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {/* Articles */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/articles/${post.slug}`} className="block">
              <article
                className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border"
                style={{ backgroundColor: 'white', borderColor: '#e8ddd0' }}
              >
                <div className="flex items-start justify-between mb-2 gap-3">
                  <h2 className="text-2xl font-semibold flex-1" style={{ color: COLORS.text }}>
                    {post.title}
                  </h2>
                  {post.draft && (
                    <span
                      className="text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ color: COLORS.orange, backgroundColor: '#fff3ec' }}
                    >
                      DRAFT
                    </span>
                  )}
                </div>

                {post.category && (
                  <span
                    className="inline-block text-xs font-medium px-2 py-1 rounded capitalize mb-2"
                    style={{ color: COLORS.green, backgroundColor: COLORS.bg }}
                  >
                    {post.category}
                  </span>
                )}

                <p className="mb-3" style={{ color: COLORS.text, opacity: 0.7 }}>{post.excerpt}</p>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <time className="text-sm" style={{ color: COLORS.text, opacity: 0.5 }}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs" style={{ color: COLORS.text, opacity: 0.5 }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 rounded-2xl" style={{ backgroundColor: 'white' }}>
              <p style={{ color: COLORS.text, opacity: 0.5 }}>
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  color,
  children,
  small,
  capitalize,
}: {
  active: boolean
  onClick: () => void
  color: string
  children: React.ReactNode
  small?: boolean
  capitalize?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-medium transition-colors ${small ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'} ${capitalize ? 'capitalize' : ''}`}
      style={
        active
          ? { backgroundColor: color, color: 'white' }
          : { backgroundColor: 'white', color: COLORS.text, border: '1px solid #e8ddd0' }
      }
    >
      {children}
    </button>
  )
}
