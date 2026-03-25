import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
    }

    const grow = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        el.classList.add('is-hovering')
      } else {
        el.classList.remove('is-hovering')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', grow)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', grow)
    }
  }, [])

  return <div ref={ref} className="custom-cursor" aria-hidden />
}
