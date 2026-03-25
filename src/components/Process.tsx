import { useSectionFade } from '../hooks/useSectionFade'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Deep dive into goals, constraints, and users. Understanding the problem before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Wireframes, component architecture, and design systems. Alignment on approach before anything gets built.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Clean, tested, performant code. Iterative development with frequent demos and feedback loops.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'Deployment, monitoring, and handoff. Ensuring everything works in production and is easy to maintain.',
  },
]

export default function Process() {
  const ref = useSectionFade()
  return (
    <section ref={ref} className="border-b border-gray-200 section-reveal">
      <div className="max-w-6xl mx-auto px-6 py-4 border-b border-gray-200">
        <span className="text-xs text-gray-400 uppercase tracking-widest">Process</span>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {steps.map((step) => (
            <div key={step.number} className="px-6 py-12">
              <span className="text-xs text-gray-300 mb-6 block">{step.number}</span>
              <h3 className="text-base font-light text-gray-900 mb-3">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
