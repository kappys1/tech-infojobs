'use client'

import { DropdownItemProps } from 'flowbite-react'

export const DropdownItemComponent: React.FC<DropdownItemProps> = ({
  children,
  onClick = () => {}
}) => (
  <li>
    <div
      onClick={onClick}
      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
    >
      {children}
    </div>
  </li>
)
