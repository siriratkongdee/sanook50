import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/content'
import { ArticleView } from '../../articles/ArticleView'

export const dynamic = 'force-dynamic'

export default async function CareerArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post || post.category !== 'career') {
    notFound()
  }

  return <ArticleView post={post} backHref="/career" backLabel="Back to Career" />
}
