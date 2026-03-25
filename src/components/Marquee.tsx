const items = [
  'Frontend Development',
  'React',
  'TypeScript',
  'Next.js',
  'UI/UX Design',
  'TailwindCSS',
  'Node.js',
  'Available for Work',
  'Performance',
  'Accessibility',
]

export default function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="border-b border-gray-200 py-4 mb-16 overflow-hidden fade-up" style={{ animationDelay: '2.2s' }}>
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
