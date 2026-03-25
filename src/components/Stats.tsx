import { useSectionFade } from '../hooks/useSectionFade'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
  { value: '100%', label: 'Remote-Ready' },
]

export default function Stats() {
  const ref = useSectionFade()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-800">
          {stats.map(stat => (
            <div key={stat.label} className="px-6 py-14 flex flex-col items-start">
              <span className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-gray-600 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
