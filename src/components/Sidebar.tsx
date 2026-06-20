import React, { useState } from 'react'
import { X, Home, User, Briefcase, Code, FileText, Mail, ChevronLeft, ChevronRight } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
  collapsed: boolean
  onToggleCollapse: () => void
}

const navLinks = [
  { href: '#home',     label: 'Home',     icon: Home },
  { href: '#about',    label: 'About',    icon: User },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#skills',   label: 'Skills',   icon: Code },
  { href: '#resume',   label: 'Resume',   icon: FileText },
  { href: '#contact',  label: 'Contact',  icon: Mail },
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, collapsed, onToggleCollapse }) => {
  const [activeLink, setActiveLink] = useState('#home')

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    toggleSidebar()
    const element = document.getElementById(href.replace('#', ''))
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-40 transition-opacity duration-200"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-[#fdfdff] border-r border-[#C9933A]/30 flex flex-col transition-all duration-300 ease-out z-50 lg:translate-x-0 ${
          collapsed ? 'w-[72px]' : 'w-60'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Site navigation"
      >
        {/* Gold top rule — mirrors hero */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9933A]" />

        {/* Header */}
        <div className={`flex items-center pt-8 pb-6 px-5 border-b border-[#C9933A]/20 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 group min-w-0"
          >
            {/* Monogram — gold block */}
            <div className="w-9 h-9 rounded-sm bg-[#C9933A] flex items-center justify-center font-bold text-[#fdfdff] text-sm flex-shrink-0 group-hover:bg-[#a8772e] transition-colors duration-200">
              TZ
            </div>
            {!collapsed && (
              <span
                className="text-[15px] font-bold text-[#6B4C1A] tracking-[-0.01em] truncate"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Portfolio
              </span>
            )}
          </a>

          {/* Mobile close */}
          <button
            onClick={toggleSidebar}
            aria-label="Close sidebar"
            className={`lg:hidden p-1.5 text-[#6B4C1A]/60 hover:text-[#6B4C1A] transition-colors duration-150 ${collapsed ? 'hidden' : ''}`}
          >
            <X size={18} />
          </button>
        </div>

        {/* Desktop collapse toggle */}
        <button
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="hidden lg:flex absolute -right-3 top-[52px] w-6 h-6 bg-[#fdfdff] border border-[#C9933A]/40 rounded-sm items-center justify-center text-[#C9933A]/70 hover:text-[#6B4C1A] transition-colors duration-150 z-10"
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 overflow-y-auto">
          {/* Section label */}
          {!collapsed && (
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium px-3 mb-4">
              Navigate
            </p>
          )}
          <ul className="space-y-0.5">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = activeLink === href
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => { e.preventDefault(); handleNavClick(href) }}
                    title={collapsed ? label : undefined}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-all duration-150 group relative ${
                      collapsed ? 'justify-center' : ''
                    } ${
                      isActive
                        ? 'text-[#C9933A] bg-[#C9933A]/10'
                        : 'text-[#6B4C1A]/70 hover:text-[#6B4C1A] hover:bg-[#C9933A]/5'
                    }`}
                  >
                    {/* Active left indicator */}
                    {isActive && !collapsed && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-[#C9933A] rounded-none" />
                    )}
                    <Icon
                      size={17}
                      className={`flex-shrink-0 transition-colors duration-150 ${
                        isActive ? 'text-[#C9933A]' : 'text-[#C9933A]/60 group-hover:text-[#6B4C1A]'
                      }`}
                    />
                    {!collapsed && (
                      <span className="tracking-[0.02em]">{label}</span>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="px-5 py-5 border-t border-[#C9933A]/20">
            <p className="text-[10px] tracking-[0.16em] uppercase text-[#6B4C1A]/60">
              © 2026 T. Zewdu
            </p>
          </div>
        )}
      </aside>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>
    </>
  )
}

export default Sidebar