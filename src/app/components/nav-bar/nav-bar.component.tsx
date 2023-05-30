import { Input } from '../input/input.component'
import { Logo } from '../logo/logo.component'
import { ThemeSwitcherComponent } from '../themeSwitcher/themeSwitcher.component'
import { NavBarLink } from './nav-bar-link.component'

export const NavBar = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-10'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center gap-1'>
          <Logo />
        </a>
        <Input label='Search' placeholder='Busca tu oferta de empleo por puesto, empresa o palabra clave' id='search' />
        <button data-collapse-toggle='navbar-default' type='button' className='inline-flex order-1  items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden md:order-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
        </button>
        <div className='hidden w-full md:block md:w-auto md:order-2' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <NavBarLink href='https://www.infojobs.net/'>Infojobs</NavBarLink>
            <ThemeSwitcherComponent />
          </ul>
        </div>
      </div>
    </nav>
  )
}
