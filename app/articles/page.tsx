import { getAllPosts, getAllCategories, getAllTags } from '@/lib/content'
import ArticlesClient from './ArticlesClient'

export default function ArticlesPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  return <ArticlesClient posts={posts} categories={categories} tags={tags} />
}
