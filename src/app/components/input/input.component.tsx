'use client'

import debounce from 'just-debounce-it'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useRef, useState } from 'react'
interface InputProps {
  label: string
  placeholder: string
  id: string
}

export const Input: FC<InputProps> = ({ label, placeholder, id = 'input' }) => {
  const router = useRouter()
  const location = useRef<any>()
  const [defaultValue, setDefaultValue] = useState('')
  const handleOnTypeDebounced = debounce((value: string) => {
    const url = new URL(location.current.href)
    url.searchParams.set('q', value)
    router.replace(url.toString(), {
      forceOptimisticNavigation: true
    })
  }, 500)

  useEffect(() => {
    location.current = window.location
    const queryParams = new URLSearchParams(location.current.search)
    const value = queryParams.get('q') ?? ''
    setDefaultValue(value)
  }, [])

  return (
    <div className='w-full py-8 px-4 order-2 md:order-1 md:p-0 md:w-1/2'>
      <form
        className='flex items-center'
        onSubmit={(e: any) => {
          e.preventDefault()
          handleOnTypeDebounced(e.target[0].value)
        }}
      >
        <label htmlFor={id} className='sr-only'>
          {label}
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <input
            type='text'
            defaultValue={defaultValue}
            onChange={(e) => handleOnTypeDebounced(e.target.value)}
            id={id}
            className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            placeholder={placeholder}
          />
        </div>
      </form>
    </div>
  )
}
