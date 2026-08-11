import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { mdxComponents } from './mdx-components'
import type { Post } from '@/lib/content'

export function ArticleView({ post, backHref, backLabel }: { post: Post; backHref: string; backLabel: string }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF4EC' }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70" style={{ color: '#7D9B76' }}>
          ← {backLabel}
        </Link>
      </div>

      <div className="py-16" style={{ backgroundColor: '#FAF4EC', borderBottom: '4px solid #7D9B76' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          {post.category && (
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6 capitalize"
              style={{ backgroundColor: '#FAF4EC', color: '#7D9B76', border: '1px solid #7D9B76' }}
            >
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#3B2A1A' }}>
            {post.title}
          </h1>
          <p className="text-lg" style={{ color: '#3B2A1A', opacity: 0.7 }}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-16">
        {post.draft && (
          <div
            className="mb-10 rounded-xl p-4 border-2"
            style={{ backgroundColor: '#fff8f0', borderColor: '#C4622D' }}
          >
            <p className="font-semibold" style={{ color: '#C4622D' }}>
              📝 DRAFT — This post is not yet published
            </p>
          </div>
        )}

        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:[color:#3B2A1A]
            prose-p:[color:#3B2A1A] prose-li:[color:#3B2A1A]
            prose-strong:[color:#C4622D]
            prose-a:[color:#7D9B76] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:[border-color:#D4A853] prose-blockquote:[color:#3B2A1A] prose-blockquote:not-italic prose-blockquote:font-medium
            prose-hr:[border-color:#e8ddd0]
            prose-code:[color:#C4622D]
            prose-th:[color:#3B2A1A] prose-td:[color:#3B2A1A] prose-thead:[border-color:#e8ddd0] prose-tr:[border-color:#e8ddd0]"
        >
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-8 border-t flex gap-2 flex-wrap" style={{ borderColor: '#e8ddd0' }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: '#FAF4EC', color: '#7D9B76', border: '1px solid #7D9B76' }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <footer className="mt-12 pt-8 border-t" style={{ borderColor: '#e8ddd0' }}>
          <Link href={backHref} className="font-medium hover:opacity-80" style={{ color: '#7D9B76' }}>
            ← {backLabel}
          </Link>
        </footer>
      </article>
    </div>
  )
}
