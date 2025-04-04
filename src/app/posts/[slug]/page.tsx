import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url) // Attempt to construct a URL object
    return true
  } catch {
    return false
  }
}

type Params = Promise<{ slug: string }>

export default async function Post({ params }: { params: Params }) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, created_at } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span className='transition-colors hover:text-blue-500'>
            Back to posts
          </span>
        </Link>

        {image && isValidUrl(image) ? (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || 'Post image'}
              className='object-cover'
              fill
            />
          </div>
        ) : (
          <div className='relative mb-6 flex h-96 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-200'>
            <span className='text-sm text-gray-500'>Image not available</span>
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(created_at ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
