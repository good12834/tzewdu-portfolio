import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const timelineItems = [
  {
    icon: Briefcase,
    label: 'Role',
    title: 'Full Stack Developer',
    date: null,
    description:
      'Building responsive web applications using modern technologies like React, Node.js, and MySQL.',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    title: 'Web Development Bootcamp',
    date: 'Online · Mar 2025 – Sep 2025',
    description: 'Mastered full-stack development through hands-on projects and real-world deployments.',
  },
]

const techStack = [
  'React', 'TypeScript', 'Node.js', 'MySQL',
  'Tailwind CSS', 'Express.js', 'REST APIs', 'Git',
]

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#fdfdff] py-24 sm:py-32 overflow-hidden"
    >
      {/* Hairline top rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9933A]/40" />

      {/* Subtle grid lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        preserveAspectRatio="none"
      >
        <line x1="80" y1="0" x2="80" y2="100%" stroke="#C9933A" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9933A" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section header ── */}
        <div className="mb-16 sm:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-5">
            Background
          </p>
          <h2 className="leading-none">
            <span
              className="block text-[52px] sm:text-[64px] text-[#6B4C1A] tracking-[-0.01em]"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
            >
              About
            </span>
            <span className="block text-[52px] sm:text-[64px] font-bold text-[#C9933A] tracking-[-0.03em] leading-none">
              ME
            </span>
          </h2>
        </div>

        {/* ── Bio row ── */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 mb-20 sm:mb-24 pb-16 border-b border-[#C9933A]/20">

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-sm overflow-hidden border border-[#C9933A]/20">
              <img
                src="https://avatars.githubusercontent.com/u/199829999?v=4"
                alt="T Zewdu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center">
            <p
              className="text-xl sm:text-2xl text-[#6B4C1A] leading-relaxed mb-5"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
            >
              Hi — I'm{' '}
              <span className="text-[#C9933A]">T Zewdu</span>, a full stack
              developer who cares about both the interface and the infrastructure.
            </p>
            <p className="text-sm text-[#6B4C1A]/80 leading-relaxed max-w-lg">
              6+ months of hands-on experience shipping production applications — from pixel-level UI details to database architecture and server-side logic.
            </p>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="mb-20 sm:mb-24">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-8">
            Experience & education
          </p>

          <div className="relative">
            {/* Vertical rail */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#C9933A]/50 via-[#C9933A]/30 to-transparent" aria-hidden="true" />

            <div className="space-y-10">
              {timelineItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-6 group">
                    {/* Node */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-[23px] h-[23px] rounded-sm border border-[#C9933A]/50 bg-[#fdfdff] group-hover:border-[#C9933A] group-hover:bg-[#C9933A]/10 transition-all duration-200 flex items-center justify-center">
                        <Icon size={12} className="text-[#C9933A]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <p className="text-[10px] tracking-[0.16em] uppercase text-[#C9933A]/80 mb-1">
                        {item.label}
                      </p>
                      <h4 className="text-base sm:text-lg font-bold text-[#6B4C1A] tracking-[-0.01em] mb-1">
                        {item.title}
                      </h4>
                      {item.date && (
                        <p className="text-[11px] tracking-[0.08em] text-[#6B4C1A]/70 mb-2">
                          {item.date}
                        </p>
                      )}
                      <p className="text-sm text-[#6B4C1A]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Tech stack ── */}
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-6">
            Tech stack
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#C9933A]/15">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-[#fdfdff] hover:bg-[#C9933A]/5 px-5 py-4 transition-colors duration-150 group cursor-default"
              >
                <span className="text-sm font-medium text-[#6B4C1A]/80 group-hover:text-[#6B4C1A] transition-colors duration-150 tracking-[0.02em]">
                  {tech}
                </span>
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

export default About