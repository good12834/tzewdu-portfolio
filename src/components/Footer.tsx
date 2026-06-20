import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: FaGithub,  href: 'https://github.com/good12834',                     label: 'GitHub'   },
  { icon: FaLinkedin,href: 'https://www.linkedin.com/in/good-man-15b4252a8/',  label: 'LinkedIn' },
  { icon: Mail,      href: 'mailto:goodpersonh208686@gmail.com',               label: 'Email'    },
]

const quickLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#fdfdff] border-t border-[#C9933A]/20">
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" preserveAspectRatio="none">
        <line x1="80" y1="0" x2="80" y2="100%" stroke="#C9933A" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9933A" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#C9933A]/15 mt-0 border-b border-[#C9933A]/20">
          <div className="bg-[#fdfdff] px-0 py-14 sm:pr-10 sm:col-span-1">
            <div className="mb-6">
              <span className="block text-[32px] text-[#6B4C1A] leading-none tracking-[-0.01em]" style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}>T.</span>
              <span className="block text-[32px] font-bold text-[#C9933A] leading-none tracking-[-0.03em]">ZEWDU</span>
            </div>
            <p className="text-sm text-[#6B4C1A]/80 leading-relaxed mb-8 max-w-xs">Full stack developer crafting functional digital experiences from pixel to protocol.</p>
            <div className="flex items-center gap-2">{socialLinks.map(({ icon: Icon, href, label }) => (<a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 border border-[#C9933A]/40 hover:border-[#C9933A]/70 hover:bg-[#C9933A]/10 rounded-sm flex items-center justify-center text-[#6B4C1A]/70 hover:text-[#6B4C1A] transition-all duration-150"><Icon size={15} /></a>))}</div>
          </div>

          <div className="bg-[#fdfdff] px-0 py-14 sm:px-10 border-t sm:border-t-0 sm:border-l border-[#C9933A]/20">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-6">Navigate</p>
            <nav className="space-y-3">{quickLinks.map(({ label, href }) => (<a key={label} href={href} className="flex items-center gap-2.5 text-sm text-[#6B4C1A]/70 hover:text-[#6B4C1A] transition-colors duration-150 group"><span className="w-[2px] h-3 bg-[#C9933A]/0 group-hover:bg-[#C9933A] transition-colors duration-150 flex-shrink-0" />{label}</a>))}</nav>
          </div>

          <div className="bg-[#fdfdff] px-0 py-14 sm:pl-10 border-t sm:border-t-0 sm:border-l border-[#C9933A]/20">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-6">Start a project</p>
            <p className="text-xl text-[#6B4C1A]/70 leading-snug mb-7" style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}>Have an idea?<br />Let's build it.</p>
            <a href="#contact" className="inline-flex items-center gap-2.5 bg-[#C9933A] hover:bg-[#a8772e] text-[#fdfdff] font-medium text-sm tracking-[0.04em] px-6 py-3 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95">Get in touch<span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-7">
          <p className="text-[11px] tracking-[0.08em] text-[#6B4C1A]/60">© {year} T. Zewdu — Built with React, TypeScript & Tailwind CSS</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className="w-8 h-8 border border-[#C9933A]/40 hover:border-[#C9933A]/70 hover:bg-[#C9933A]/10 rounded-sm flex items-center justify-center text-[#6B4C1A]/70 hover:text-[#6B4C1A] transition-all duration-150 hover:scale-110 active:scale-95"><ArrowUp size={14} /></button>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');`}</style>
    </footer>
  )
}

export default Footer