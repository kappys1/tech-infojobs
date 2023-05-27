'use client'
import { Facet, FacetValue } from '@/app/model/filters'
import { Dropdown, DropdownOptions } from 'flowbite'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { DropdownItemComponent } from './dropdownItem.component'

interface DropdownComponentProps {
  options?: DropdownOptions
  label: string
  facet: Facet
  onChange?: (value: FacetValue) => void
}

export const DropdownComponent: React.FC<React.PropsWithChildren<DropdownComponentProps>> = ({ children, options, label, facet }) => {
  const targetRef = React.useRef(null)
  const triggerRef = React.useRef(null)
  const dropdown = React.useRef(null)
  const router = useRouter()
  const [value, setValue] = React.useState<FacetValue | null>(null)
  useEffect(() => {
    dropdown.current = new Dropdown(targetRef.current, triggerRef.current, {
      placement: 'bottom',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      ...options
    })
    const query = new URLSearchParams(location.search)
    const value = query.get(facet.key)
    if (value) {
      const facetValue = facet.values.find((facetValue) => facetValue.key === value)
      if (facetValue) {
        setValue(facetValue)
      }
    }
  }, [])

  const handlerClickItem = (value: FacetValue) => {
    const url = new URL(location.href)
    setValue(value)
    url.searchParams.set(facet.key, value.key)
    router.replace(url.toString(), {
      forceOptimisticNavigation: true
    })
    dropdown.current?.hide()
  }

  const handlerResetFilter = () => {
    const url = new URL(location.href)
    setValue(null)
    url.searchParams.delete(facet.key)
    router.replace(url.toString(), {
      forceOptimisticNavigation: true
    })
    dropdown.current?.hide()
  }
  return (
    <div className='flex flex-col gap-2 justify-center text-center'>
      <button
        ref={triggerRef}
        id='dropdownBottomButton'
        className='text-blue-infojobs-500 bg-white hover:bg-blue-infojobs-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
      >
        {value?.value ?? facet.name}
        <svg
          className='w-4 h-4 ml-2'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {/* <div className='text-blue-infojobs text-sm h-9'>{}</div> */}
      <div
        id='dropdownBottom'
        className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        ref={targetRef}
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownBottomButton'
        >
          <DropdownItemComponent onClick={() => handlerResetFilter()} key={`filter-${facet.key}-reset`}>
            <b>{facet.name}</b>
          </DropdownItemComponent>
          {facet.values.map((value: FacetValue) => (
            <DropdownItemComponent onClick={() => handlerClickItem(value)} key={`filter-${value.key}-${value.key}`}>
              {value.value} ({value.count})
            </DropdownItemComponent>
          ))}
        </ul>
      </div>
    </div>
  )
}
