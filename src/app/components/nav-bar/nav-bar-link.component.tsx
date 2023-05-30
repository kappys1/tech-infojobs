'use client'
import { NavbarBrandProps } from 'flowbite-react'

interface NavBarLinkProps extends NavbarBrandProps {
  href: string
  children: React.ReactNode
}
export const welcomeMessage = () => {
  const msg = '%c Hi 👋! Welcome to my site!'
  const styles = [
    'font-size: 12px',
    'font-family: monospace',
    'background: white',
    'display: inline-block',
    'color: black',
    'padding: 8px 19px',
    'border: 1px dashed;'
  ].join(';')
  console.log(msg, styles)
}

export const NavBarLink: React.FC<NavBarLinkProps> = ({ children, href }) => {
  welcomeMessage()
  return (

    <a
      href={href}
      className='block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent text-blue-infojobs-500 md:p-0 dark:text-white md:dark:text-blue-infojobs-400'
      aria-current='page'
    >
      {children}
    </a>

  )
}
