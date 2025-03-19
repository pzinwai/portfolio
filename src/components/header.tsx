'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between border-b border-gray-200 py-6'>
        <div>
          <Link href='/' className='mx-auto font-serif text-2xl font-bold'>
            PZW
          </Link>
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu */}
        <div className='flex items-center gap-2'>
          <div className='sm:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' aria-label='Menu'>
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-64'>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col gap-6 px-4 pt-6'>
                  {' '}
                  {/* Added padding for indentation */}
                  <div className='flex flex-col space-y-4'>
                    <Link
                      href='/'
                      className='transition-colors hover:text-blue-500'
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                    <Link
                      href='/posts'
                      onClick={handleLinkClick}
                      className='transition-colors hover:text-blue-500'
                    >
                      Posts
                    </Link>
                    <Link
                      href='/projects'
                      onClick={handleLinkClick}
                      className='transition-colors hover:text-blue-500'
                    >
                      Projects
                    </Link>
                    <Link
                      href='/contact'
                      onClick={handleLinkClick}
                      className='transition-colors hover:text-blue-500'
                    >
                      Contact
                    </Link>
                  </div>
                  <div className='mt-6'>
                    <ThemeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className='hidden sm:block'>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
