'use client'
import { useUser } from '@/app/hooks/useUser'
import { NavbarBrandProps } from 'flowbite-react'

interface NavBarLinkProps extends NavbarBrandProps {
  href: string
  children: React.ReactNode
}

export const NavBarAuthLink: React.FC<NavBarLinkProps> = ({ children, href }) => {
  const { user, isLoading } = useUser()
  return user && !isLoading
    ? (
      <a
        href={href}
        className='block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent text-blue-infojobs-500 md:p-0 dark:text-white md:dark:text-blue-infojobs-400'
        aria-current='page'
      >
        {children}
      </a>
      )
    : <></>
}
