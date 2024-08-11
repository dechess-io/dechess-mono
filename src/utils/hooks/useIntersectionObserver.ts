import { useEffect, useState } from 'react'

const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: [0] }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry && setIsIntersecting(entry.isIntersecting)
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [elementRef, options])

  return isIntersecting
}

export default useIntersectionObserver
