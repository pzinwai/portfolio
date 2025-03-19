import Image from 'next/image'
import authorImage from '../../public/images/authors/phyo.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-14 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='mb-4 text-3xl font-bold'>Hey, I&#39;m Phyo.</h1>
        <p className='text-black-500'>
          I&#39;m a software engineer specializing in web development, backend
          services, and automation. I love solving problems, optimizing
          workflows, and building robust digital experiences.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Phyo Zin Wai'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
