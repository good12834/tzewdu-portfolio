import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 group"
          aria-label="Scroll to top"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9933A] to-[#D9A94A] rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
          
          {/* Button */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#C9933A] to-[#D9A94A] flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-[#C9933A]/50 transition-all duration-300 group-hover:scale-110 active:scale-95">
            <ArrowUp 
              size={24} 
              className="text-[#fdfdff] group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </div>

          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-[#C9933A]/40 group-hover:border-[#C9933A]/0 transition-all duration-500 animate-ping" />
        </button>
      )}
    </>
  )
}

export default BackToTop