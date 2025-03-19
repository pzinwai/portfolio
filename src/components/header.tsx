import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center py-6 justify-between border-b border-gray-200'>
        <div>
          <Link href='/' className='mx-auto font-serif text-2xl font-bold'>
            PZW
          </Link>
        </div>

        <ul className='hidden items-center justify-evenly gap-8 font-medium sm:flex'>
          <li className='transition-colors hover:text-blue-500'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-blue-500'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-blue-500'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
