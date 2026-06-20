import React, { useState } from 'react'
import {
  SiReact, SiNodedotjs, SiMysql, SiJavascript,
  SiTailwindcss, SiHtml5, SiMongodb, SiExpress,
  SiGit, SiTypescript, SiPostgresql, SiRedis
} from 'react-icons/si'

interface Tech {
  name: string
  icon: React.ElementType
  proficiency: 'Advanced' | 'Intermediate' | 'Beginner'
  description: string
  useCase: string
}

const technologies: Tech[] = [
  { name: 'React',        icon: SiReact,       proficiency: 'Advanced',      description: 'Building interactive UIs and SPAs',    useCase: 'Primary frontend framework' },
  { name: 'Node.js',      icon: SiNodedotjs,   proficiency: 'Advanced',      description: 'Server-side JavaScript runtime',        useCase: 'Backend development' },
  { name: 'JavaScript',   icon: SiJavascript,  proficiency: 'Advanced',      description: 'Core programming language',             useCase: 'Front & back-end development' },
  { name: 'TypeScript',   icon: SiTypescript,  proficiency: 'Intermediate',  description: 'Type-safe JavaScript',                  useCase: 'Modern full-stack apps' },
  { name: 'Express.js',   icon: SiExpress,     proficiency: 'Advanced',      description: 'Web application framework',             useCase: 'REST API development' },
  { name: 'MySQL',        icon: SiMysql,       proficiency: 'Advanced',      description: 'Relational database',                   useCase: 'Data persistence & queries' },
  { name: 'MongoDB',      icon: SiMongodb,     proficiency: 'Intermediate',  description: 'NoSQL database',                        useCase: 'Flexible document storage' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 'Advanced',      description: 'Utility-first CSS framework',           useCase: 'Modern responsive styling' },
  { name: 'HTML5',        icon: SiHtml5,       proficiency: 'Advanced',      description: 'Semantic markup language',              useCase: 'Web page structure' },
  { name: 'Git',          icon: SiGit,         proficiency: 'Advanced',      description: 'Version control system',                useCase: 'Code collaboration' },
  { name: 'PostgreSQL',   icon: SiPostgresql,  proficiency: 'Intermediate',  description: 'Advanced SQL database',                 useCase: 'Robust data management' },
  { name: 'Redis',        icon: SiRedis,       proficiency: 'Beginner',      description: 'In-memory data store',                  useCase: 'Caching & sessions' },
]

const exploring = [
  'AWS Cloud Services',
  'Advanced React Patterns',
  'GraphQL',
  'Docker & Kubernetes',
]

const proficiencyBar: Record<string, string> = {
  Advanced:     'w-[90%]',
  Intermediate: 'w-[60%]',
  Beginner:     'w-[35%]',
}

const proficiencyLabel: Record<string, string> = {
  Advanced:    'text-[#6B4C1A]',
  Intermediate: 'text-[#a8772e]',
  Beginner:    'text-[#6B4C1A]/50',
}

const TechStack: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null)

  const advanced     = technologies.filter(t => t.proficiency === 'Advanced').length
  const intermediate = technologies.filter(t => t.proficiency === 'Intermediate').length
  const beginner     = technologies.filter(t => t.proficiency === 'Beginner').length

  return (
    <section
      id="tech-stack"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-16 sm:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-5">
            Toolkit
          </p>
          <h2 className="leading-none">
            <span
              className="block text-[52px] sm:text-[64px] text-[#6B4C1A] tracking-[-0.01em]"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
            >
              Technologies
            </span>
            <span className="block text-[52px] sm:text-[64px] font-bold text-[#C9933A] tracking-[-0.03em] leading-none">
              I USE
            </span>
          </h2>
        </div>

        {/* ── Tech grid ── */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-[#C9933A]/15 mb-px">
          {technologies.map((tech) => {
            const Icon = tech.icon
            const isHovered = hovered === tech.name
            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHovered(tech.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-[#fdfdff] px-4 py-6 flex flex-col items-center gap-3 cursor-default transition-colors duration-150 ${
                  isHovered ? 'bg-[#C9933A]/5' : ''
                }`}
              >
                <Icon
                  size={28}
                  className={`transition-colors duration-150 ${
                    isHovered ? 'text-[#C9933A]' : 'text-[#C9933A]/60'
                  }`}
                />
                <span className="text-[11px] tracking-[0.06em] text-[#6B4C1A]/80 text-center leading-tight">
                  {tech.name}
                </span>
                <span className={`text-[10px] tracking-[0.12em] uppercase font-medium ${proficiencyLabel[tech.proficiency]}`}>
                  {tech.proficiency}
                </span>

                {/* Hover tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-[#fdfdff] border border-[#C9933A]/30 p-4 z-50 pointer-events-none shadow-lg">
                    <p className="text-[12px] text-[#6B4C1A] mb-1 leading-snug">{tech.description}</p>
                    <p className="text-[10px] tracking-[0.08em] text-[#C9933A]/80 mb-3">{tech.useCase}</p>
                    <div className="w-full h-[2px] bg-[#C9933A]/10 rounded-none">
                      <div className={`h-full bg-[#C9933A] ${proficiencyBar[tech.proficiency]} transition-all duration-300`} />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Proficiency breakdown ── */}
        <div className="mt-16 sm:mt-20 mb-16 sm:mb-20">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-8">
            Proficiency breakdown
          </p>
          <div className="grid grid-cols-3 gap-px bg-[#C9933A]/15">
            {[
              { level: 'Advanced',     count: advanced,     desc: 'Production-ready',     color: 'text-[#6B4C1A]' },
              { level: 'Intermediate', count: intermediate, desc: 'Solid working knowledge', color: 'text-[#a8772e]' },
              { level: 'Beginner',     count: beginner,     desc: 'Learning & exploring',  color: 'text-[#6B4C1A]/50' },
            ].map(item => (
              <div key={item.level} className="bg-[#fdfdff] hover:bg-[#C9933A]/5 transition-colors duration-150 px-6 py-8">
                <p className={`text-[40px] font-bold tracking-[-0.04em] leading-none mb-2 ${item.color}`}>
                  {item.count}
                </p>
                <p className="text-sm font-bold text-[#6B4C1A] mb-1 tracking-[-0.01em]">
                  {item.level}
                </p>
                <p className="text-[11px] text-[#6B4C1A]/70 tracking-[0.04em]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Currently exploring ── */}
        <div className="pt-12 border-t border-[#C9933A]/20">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-6">
            Currently exploring
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#C9933A]/15">
            {exploring.map((item) => (
              <div
                key={item}
                className="bg-[#fdfdff] hover:bg-[#C9933A]/5 px-5 py-5 transition-colors duration-150 group cursor-default"
              >
                <span className="block w-[2px] h-3 bg-[#C9933A]/60 group-hover:bg-[#C9933A] mb-3 transition-colors duration-150" />
                <p className="text-sm text-[#6B4C1A]/80 group-hover:text-[#6B4C1A] transition-colors duration-150 leading-snug">
                  {item}
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

export default TechStack