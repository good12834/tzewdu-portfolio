import React from 'react'
import { Palette, Server, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['GitHub Actions', 'Netlify', 'Git', 'VS Code', 'Render'],
  },
]

const stats = [
  { value: '20+', label: 'Technologies' },
  { value: '10+', label: 'Projects' },
  { value: '6+ mo', label: 'Experience' },
]

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#fdfdff] py-24 sm:py-32 overflow-hidden"
    >
      {/* Hairline top rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9933A]/40" />

      {/* Grid lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        preserveAspectRatio="none"
      >
        <line x1="80" y1="0" x2="80" y2="100%" stroke="#C9933A" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9933A" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-16 sm:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-5">
            Expertise
          </p>
          <h2 className="leading-none">
            <span
              className="block text-[52px] sm:text-[64px] text-[#6B4C1A] tracking-[-0.01em]"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
            >
              Skills &
            </span>
            <span className="block text-[52px] sm:text-[64px] font-bold text-[#C9933A] tracking-[-0.03em] leading-none">
              TOOLS
            </span>
          </h2>
        </div>

        {/* ── Three-column skill categories ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9933A]/15 mb-px">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title} className="bg-[#fdfdff] p-8 group">

                {/* Category header */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 rounded-sm border border-[#C9933A]/60 group-hover:border-[#C9933A] group-hover:bg-[#C9933A]/10 transition-all duration-200 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#C9933A]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#6B4C1A] tracking-[0.04em] uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[12px] tracking-[0.04em] text-[#6B4C1A]/80 hover:text-[#6B4C1A] border border-[#C9933A]/30 hover:border-[#C9933A]/60 px-3 py-1.5 rounded-sm transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom gold accent on hover */}
                <div className="mt-8 h-[2px] bg-[#C9933A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </div>
            )
          })}
        </div>

        {/* ── Stats ── */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#C9933A]/20">
          <div className="grid grid-cols-3 gap-px bg-[#C9933A]/15">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#fdfdff] hover:bg-[#C9933A]/5 transition-colors duration-150 px-6 py-8"
              >
                <p className="text-[40px] font-bold tracking-[-0.04em] leading-none text-[#C9933A] mb-2">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#6B4C1A]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
      `}</style>
    </section>
  )
}

export default Skills