const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Building scalable, performant interfaces with modern JavaScript frameworks. From single-page apps to complex web platforms.',
    tags: ['React', 'TypeScript', 'Next.js', 'REST APIs'],
  },
  {
    number: '02',
    title: 'UI/UX & Design',
    description:
      'Designing clean, intuitive interfaces. Translating design systems into pixel-perfect, accessible components.',
    tags: ['Figma', 'TailwindCSS', 'CSS', 'Animation'],
  },
  {
    number: '03',
    title: 'Performance & Optimization',
    description:
      'Diagnosing and resolving bottlenecks. Optimizing for Core Web Vitals, accessibility, and SEO.',
    tags: ['Web Vitals', 'Accessibility', 'SEO', 'DevTools'],
  },
]

import { useSectionFade } from '../hooks/useSectionFade'

export default function Services() {
  const ref = useSectionFade()
  return (
    <section ref={ref} id="services" className="border-b border-gray-200 section-reveal">
      <div className="max-w-6xl mx-auto px-6 py-4 border-b border-gray-200">
        <span className="text-xs text-gray-400 uppercase tracking-widest">Services</span>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {services.map(s => (
            <div key={s.number} className="px-6 py-12 relative overflow-hidden">
              <span
                className="absolute -bottom-6 -right-3 text-[7rem] font-bold leading-none select-none pointer-events-none"
                style={{ color: '#0a0a0a', opacity: 0.04 }}
              >
                {s.number}
              </span>
              <span className="text-xs text-gray-300 mb-6 block">{s.number}</span>
              <h3 className="text-sm font-medium text-gray-900 mb-4">{s.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs border border-gray-200 px-2 py-1 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
