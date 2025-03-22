import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  created_at?: string
  slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
  .from('projects')
  .select('title, summary, image, author, created_at, slug, content')
  .eq('slug', slug)
  .single()

if (error) {
  console.error('Error fetching post by slug:', error)
  return null
}

if (!data) {
  return null
}

const { title, summary, image, author, created_at, content } = data
return {
  metadata: { title, summary, image, author, created_at, slug },
  content
}
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('title, summary, image, author, created_at, slug, content')
    .order('created_at', { ascending: false })
    .limit(limit || 100) // Default limit to 100 if not provided

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return data || []
}
