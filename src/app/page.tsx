import Experiences from '@/components/experiences'
import Certifications from '@/components/certifications'
import Education from '@/components/education'
import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'

export default function Home() {
  return (
    <section className='pb-4 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <Education />
        <Experiences />
        <Certifications />
        <RecentPosts />
      </div>
    </section>
  )
}
