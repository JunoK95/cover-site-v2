import { useSectionFade } from '../hooks/useSectionFade'
import { WORKS } from '../constants'

export default function Works() {
  const ref = useSectionFade()
  return (
    <section ref={ref} id="works" className="border-b border-gray-200 section-reveal">
      <div className="max-w-6xl mx-auto px-6 py-4 border-b border-gray-200">
        <span className="text-xs text-gray-400 uppercase tracking-widest">Selected Works</span>
      </div>
      <div className="max-w-6xl mx-auto">
        {WORKS.map(work => (
          <a
            key={work.id}
            href={work.href}
            className="flex items-center justify-between px-6 py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-6 md:gap-10">
              <span className="text-xs text-gray-300 w-5 shrink-0">{work.id}</span>
              <span className="text-sm text-gray-900 link-line">
                {work.title}
              </span>
            </div>
            <div className="flex items-center gap-6 md:gap-10 text-xs text-gray-400">
              <span className="hidden sm:block">{work.category}</span>
              <span>{work.year}</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
