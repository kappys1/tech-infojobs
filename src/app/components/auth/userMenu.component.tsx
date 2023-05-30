import { useDropdown } from '@/app/hooks/useDropdown'
import { User } from '@/app/model/auth'

export const UserMenu = ({ user, onSignOut }: { user: User, onSignOut: () => void }) => {
  const { targetRef, triggerRef } = useDropdown()

  return (
    <>
      <button
        type='button'
        className='flex text-sm bg-gray-800 rounded-full  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
        id='user-menu-button'
        ref={triggerRef}
      >
        <span className='sr-only'>Open user menu</span>
        <img
          className='w-8 h-8 rounded-full'
          src={user.hasPhoto ? user.photo : '/default-photo.avif'}
          alt='user photo'
        />
      </button>
      <div
        ref={targetRef}
        className='hidden z-[100]  w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
        id='dropdown'
      >
        <div className='py-3 px-4'>
          <span className='block text-sm font-semibold text-gray-900 dark:text-white'>
            {user.name}
          </span>
          <span className='block text-sm font-light text-gray-500 truncate dark:text-gray-400'>
            {user.email}
          </span>
        </div>

        <ul
          className='py-1 font-light text-gray-500 dark:text-gray-400'
          aria-labelledby='dropdown'
        >
          <li onClick={onSignOut}>
            <a
              href='#'
              className='block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
