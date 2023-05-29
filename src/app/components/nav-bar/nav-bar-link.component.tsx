'use client'
import { NavbarBrandProps } from 'flowbite-react'

interface NavBarLinkProps extends NavbarBrandProps {
  href: string
  children: React.ReactNode
}

export const NavBarLink: React.FC<NavBarLinkProps> = ({ children, href }) => (
  <li>
    <a
      href={href}
      className='block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent text-blue-infojobs-500 md:p-0 dark:text-white md:dark:text-blue-infojobs-500'
      aria-current='page'
    >
      {children}
    </a>
  </li>
)
