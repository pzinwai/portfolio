import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'posts')

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch {
    return null
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  if (!fs.existsSync(rootDirectory)) {
    console.error(`Directory not found: ${rootDirectory}`)
    return []
  }

  const files = fs.readdirSync(rootDirectory)

  // Filter out unwanted files (like .DS_Store)
  const validFiles = files.filter(file => {
    // Exclude .DS_Store and any other unwanted files
    return file !== '.DS_Store' && !file.startsWith('.');
  });

  const posts = validFiles
    .map(file => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return posts.slice(0, limit)
  }

  return posts
}

export function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
