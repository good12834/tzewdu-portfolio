import React, { useState, useEffect, useRef } from 'react'

const FULL_TEXT = "seamless experiences from pixel to protocol"

const Hero: React.FC = () => {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (indexRef.current < FULL_TEXT.length) {
          setTyped(FULL_TEXT.slice(0, ++indexRef.current))
        } else {
          clearInterval(timer)
          setDone(true)
        }
      }, 55)
      return () => clearInterval(timer)
    }, 500)
    return () => clearTimeout(startDelay)
  }, [])

  useEffect(() => {
    if (done) {
      const blinkTimer = setInterval(() => {
        setCursorVisible(prev => !prev)
      }, 530)
      return () => clearInterval(blinkTimer)
    }
  }, [done])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#fdfdff]"
    >
      {/* Top gold rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9933A] z-20" />

      {/* Ghost name watermark */}
      <div
        aria-hidden="true"
        className="absolute left-[-2px] top-1/2 -translate-y-1/2 -rotate-90 origin-center font-bold text-[80px] tracking-[0.18em] text-black opacity-[0.06] whitespace-nowrap pointer-events-none select-none z-0"
        style={{ fontFamily: 'inherit' }}
      >
        T ZEWDU T ZEWDU T ZEWDU
      </div>

      {/* Subtle grid lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] z-0"
        preserveAspectRatio="none"
      >
        <line x1="80" y1="0" x2="80" y2="100%" stroke="#C9933A" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9933A" strokeWidth="1" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C9933A" strokeWidth="1" />
      </svg>

      {/* Main layout */}
      <div className="relative z-10 flex flex-1 items-stretch px-6 pt-14 pb-0 sm:pl-20 sm:pr-12 lg:pl-20 lg:pr-16">

        {/* Left sidebar rail */}
        <div className="hidden sm:flex flex-col items-center w-9 flex-shrink-0 pt-2">
          <span
            className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            portfolio · 2026
          </span>
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[#C9933A] to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 sm:pl-10 pb-12 sm:pb-16 flex flex-col justify-center">

          {/* Eyebrow */}
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-7">
            Full stack developer
          </p>

          {/* Name */}
          <div className="mb-6">
            <span
              className="block text-[64px] sm:text-[80px] lg:text-[88px] leading-[0.9] text-[#6B4C1A] tracking-[-0.01em]"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
            >
              T.
            </span>
            <span
              className="block text-[64px] sm:text-[80px] lg:text-[88px] leading-none font-bold text-[#C9933A] tracking-[-0.03em]"
            >
              ZEWDU
            </span>
          </div>

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 border border-[#C9933A]/60 rounded-sm px-3.5 py-1.5 mb-8 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9933A] animate-pulse" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-[#C9933A] font-medium">
              Available for work
            </span>
          </div>

          {/* Tagline with typing effect */}
          <p
            className="text-xl sm:text-2xl leading-[1.4] text-[#6B4C1A]/70 mb-10 max-w-md"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
          >
            Building{' '}
            <span className="relative text-[#C9933A]">
              {typed}
              {cursorVisible && (
                <span
                  aria-hidden="true"
                  className="absolute -right-[3px] top-[5%] h-[90%] w-[2px] bg-[#C9933A] rounded-sm"
                />
              )}
            </span>
            {done && '.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-[#C9933A] hover:bg-[#a8772e] text-[#fdfdff] font-medium text-sm tracking-[0.04em] px-7 py-3.5 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View my work
              <span aria-hidden="true" className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-[13px] tracking-[0.08em] text-[#6B4C1A]/70 hover:text-[#6B4C1A] border-b border-[#C9933A]/30 hover:border-[#C9933A]/60 pb-0.5 transition-all duration-200"
            >
              Let's work together
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 flex items-stretch border-t border-[#C9933A]/20 px-6 sm:pl-20 sm:pr-12">
        <div className="flex-1 py-5 pr-8">
          <div className="text-[26px] font-bold text-[#6B4C1A] tracking-[-0.03em] leading-none mb-1">4+</div>
          <div className="text-[11px] tracking-[0.16em] uppercase text-[#6B4C1A]/70">Years experience</div>
        </div>
        <div className="flex-1 py-5 px-8 border-l border-[#C9933A]/20">
          <div className="text-[26px] font-bold text-[#6B4C1A] tracking-[-0.03em] leading-none mb-1">30+</div>
          <div className="text-[11px] tracking-[0.16em] uppercase text-[#6B4C1A]/70">Projects shipped</div>
        </div>
        <div className="flex-1 py-5 pl-8 border-l border-[#C9933A]/20">
          <div className="text-[18px] font-bold text-[#6B4C1A] tracking-[-0.02em] leading-none mb-1">Full stack</div>
          <div className="text-[11px] tracking-[0.16em] uppercase text-[#6B4C1A]/70">Pixel to protocol</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#C9933A]/25 animate-[scrollDrop_1.6s_ease-in-out_infinite]" />
        <span
          className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/25"
          style={{ writingMode: 'vertical-rl' }}
        >
          scroll
        </span>
      </div>

      {/* Keyframe for scroll indicator */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 0; }
          40%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
          80%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero