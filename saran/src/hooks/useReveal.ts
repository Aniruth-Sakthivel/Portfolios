import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function useReveal(threshold = 0.15) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true })
  return { ref, inView }
}

export function useActiveSection(sections: string[]) {
  const activeRef = useRef<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeRef.current = entry.target.id
            window.dispatchEvent(new CustomEvent('sectionChange', { detail: entry.target.id }))
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return activeRef
}
