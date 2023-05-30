import { Dropdown, DropdownOptions } from 'flowbite'
import { useEffect, useRef } from 'react'

export const useDropdown = (options?: DropdownOptions) => {
  const targetRef = useRef(null)
  const triggerRef = useRef(null)
  const dropdown = useRef<Dropdown>()

  useEffect(() => {
    dropdown.current = new Dropdown(targetRef.current, triggerRef.current, {
      placement: 'bottom',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      ...options
    })
  }, [])

  return { targetRef, triggerRef, dropdown }
}
