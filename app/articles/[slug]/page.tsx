import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/content'
import { ArticleView } from '../ArticleView'

export const dynamic = 'force-dynamic'

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <ArticleView post={post} backHref="/articles" backLabel="Back to Articles" />
}
