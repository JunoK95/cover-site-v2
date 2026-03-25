import { useState, useEffect, useRef } from 'react'

export default function Typewriter({
  text,
  delay = 0,
  speed = 30,
  triggerOnView = false,
}: {
  text: string
  delay?: number
  speed?: number
  triggerOnView?: boolean
}) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const [inView, setInView] = useState(!triggerOnView)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!triggerOnView) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerOnView])

  useEffect(() => {
    if (!inView) return
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setCount(i)
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [inView, text, delay, speed])

  const showCursor = !done && inView

  return (
    <span ref={ref}>
      {count === 0 && showCursor && <span className="tw-cursor" />}
      {text.split('').map((char, i) => (
        <span key={i} style={{ color: i < count ? 'inherit' : 'transparent' }}>
          {char}
          {i === count - 1 && showCursor && <span className="tw-cursor" />}
        </span>
      ))}
    </span>
  )
}
