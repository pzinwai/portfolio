export default function Experiences() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <h2 className='mb-8 text-2xl font-bold'>Work</h2>
      <p className='text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed max-w-3xl'>
        <a
          className='group mb-2 flex items-center gap-2 text-xl font-medium underline'
          target='_blank'
          rel='noopener noreferrer'
          href='https://staging.swikarcodes.com'
        >
          Swikar Codes
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'
          >
            <path d='M7 7h10v10'></path>
            <path d='M7 17 17 7'></path>
          </svg>
        </a>
      </p>
    </section>
  )
}
