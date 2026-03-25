const categories = [
  {
    title: 'Languages & Tools',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Git', 'Figma'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Node.js', 'Express', 'GSAP'],
  },
  {
    title: 'Core Concepts',
    skills: ['Web Performance', 'Accessibility', 'SEO', 'REST APIs', 'CI/CD', 'Responsive Design'],
  },
]

import { useSectionFade } from '../hooks/useSectionFade'

export default function Skills() {
  const ref = useSectionFade()
  return (
    <section ref={ref} id="skills" className="border-b border-gray-200 section-reveal">
      <div className="max-w-6xl mx-auto px-6 py-4 border-b border-gray-200">
        <span className="text-xs text-gray-400 uppercase tracking-widest">Skills</span>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {categories.map(cat => (
            <div key={cat.title} className="px-6 py-12">
              <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs text-gray-600 border border-gray-200 px-3 py-1.5 hover:border-gray-400 hover:text-gray-900 transition-colors cursor-default"
                  >
                    {skill}
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
