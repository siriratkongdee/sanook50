import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  draft: boolean
}

export function getAllPosts(): Post[] {
  const showDrafts = process.env.SHOW_DRAFTS === 'true'
  
  const folders = ['published']
  if (showDrafts) {
    folders.push('drafts')
  }

  const posts: Post[] = []

  folders.forEach(folder => {
    const folderPath = path.join(contentDirectory, folder)
    if (!fs.existsSync(folderPath)) return

    const files = fs.readdirSync(folderPath)
    
    files.forEach(filename => {
      if (!filename.endsWith('.md')) return
      
      const filePath = path.join(folderPath, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      posts.push({
        slug: filename.replace('.md', ''),
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.slice(0, 150) + '...',
        content,
        draft: folder === 'drafts'
      })
    })
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const showDrafts = process.env.SHOW_DRAFTS === 'true'
  const folders = showDrafts ? ['published', 'drafts'] : ['published']

  for (const folder of folders) {
    const filePath = path.join(contentDirectory, folder, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
        draft: folder === 'drafts'
      }
    }
  }

  return null
}
