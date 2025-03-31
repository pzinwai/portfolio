import Image from 'next/image'
import authorImage from '../../public/images/authors/phyo.png'
import Link from 'next/link'

export default function Intro() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL // Access the resume URL from the environment variable

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-14 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='mb-4 text-3xl font-bold'>Hey, I&#39;m Phyo.</h1>
        <p className='text-black-500'>
          I&apos;m a software engineer specializing in full-stack web
          development, backend services, and automation. I love solving
          problems, streamlining workflows, and creating digital experiences
          that are both powerful and user-friendly. I&apos;m always excited to
          learn, collaborate, and take on new challenges!
        </p>
        <br></br>
        <p className='text-black-500'>
          I&apos;m currently looking for new career opportunities!<br></br>
          <br></br>Feel free to reach out to me on{' '}
          <a
            href='https://www.linkedin.com/in/phyo-zin-wai-84589642/'
            target='_blank'
            className='underline'
          >
            LinkedIn
          </a>{' '}
          and check out my{' '}
          <a
            href='https://github.com/pzinwai'
            target='_blank'
            className='underline'
          >
            GitHub
          </a>
          .
        </p>
        {resumeUrl && (
          <>
            <div className='mt-4 flex'>
              <Link href={resumeUrl} target='_blank' download>
                <button className='rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700'>
                  Download Resume
                </button>
              </Link>
            </div>
          </>
        )}
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
