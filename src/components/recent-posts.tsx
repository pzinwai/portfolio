import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(5)

  if (posts.length === 0) {
    return null
  }

  return (
    <section className='mb-4 border-t border-gray-200 py-6'>
      <div>
        <h2 className='mb-8 text-2xl font-bold'>Recent posts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-blue-500'
        >
          <b className="text-black-200">All posts</b>
        </Link>
      </div>
    </section>
  )
}
