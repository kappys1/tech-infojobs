import { useEffect, useRef } from 'react'

export const useIsOnTop = () => {
  const tagTop = 'ref-top'
  const isOnTop = useRef(true)
  const observer = useRef()

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isOnTop.current = true
        } else {
          isOnTop.current = false
        }
      })
    }
    observer.current = new IntersectionObserver(callback, {
      rootMargin: '10px 0px', // like css property
      threshold: 1.0
    })
    observer.current?.observe(document.getElementById(tagTop))
  }, [])

  return { isOnTop, ref, tagTop }
}
