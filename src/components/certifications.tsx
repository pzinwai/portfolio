import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import cpImage from '../../public/images/certifications/cp.png'
import daImage from '../../public/images/certifications/da.png'

export default function Certifications() {
  return (
    <section className='mb-4 border-t border-gray-200 py-6'>
      <h2 className='mb-8 text-2xl font-bold'>Certifications</h2>

      <div className='mt-4'>
        <Image
          className='pb-4'
          src={daImage}
          alt='Phyo Zin Wai'
          width={100}
          height={100}
          priority
        />
        <a
          className='group mb-2 flex items-center gap-2 text-xl font-medium hover:text-blue-500'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.credly.com/badges/d55ec8d8-c54c-4b52-9baf-a90b99d8937f/public_url'
        >
          AWS Certified Developer Associate Certification
          <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
        </a>
        <p className='text-muted-foreground'>2024</p>
      </div>
      <div className='mt-4'>
        <Image
          className='pb-4'
          src={cpImage}
          alt='Phyo Zin Wai'
          width={100}
          height={100}
          priority
        />
        <a
          className='group mb-2 flex items-center gap-2 text-xl font-medium hover:text-blue-500'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.credly.com/badges/346ffb31-5aae-47a5-9a67-73d517d42721/public_url'
        >
          AWS Certified Cloud Practitioner Certification
          <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
        </a>
        <p className='text-muted-foreground'>2024</p>
      </div>
    </section>
  )
}
