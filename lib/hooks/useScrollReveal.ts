import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  disabled?: boolean
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) => {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true, disabled = false } = options
  const reducedMotion = useReducedMotion()
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState<boolean>(() => reducedMotion || disabled)

  useEffect(() => {
    if (reducedMotion || disabled) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, disabled, reducedMotion])

  return { ref, isVisible }
}
