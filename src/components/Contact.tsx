import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Send, Mail, Download, CheckCircle } from 'lucide-react'

interface FormData { name: string; email: string; subject: string; message: string }

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/good-man-15b4252a8/', label: 'LinkedIn' },
  { icon: FaGithub,   href: 'https://github.com/good12834',                     label: 'GitHub'   },
  { icon: FaTwitter,  href: 'https://twitter.com/tzewdu',                        label: 'Twitter'  },
]

const infoItems = [
  { title: 'Response time', value: '< 24 hours', desc: 'Typically reply within a day' },
  { title: 'Available for', value: 'Full stack projects', desc: 'Web apps, APIs, and more' },
  { title: 'Based in', value: 'Ethiopia', desc: 'Open to remote opportunities' },
]

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = (): boolean => {
    const next: Partial<FormData> = {}
    if (!formData.name.trim()) next.name = 'Name is required'
    if (!formData.email.trim()) next.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email'
    if (!formData.subject.trim()) next.subject = 'Subject is required'
    if (!formData.message.trim()) next.message = 'Message is required'
    setErrors(next); return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); setFormData({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setSubmitted(false), 6000) }, 1000)
  }

  const fieldBase = 'w-full px-4 py-3 bg-[#fdfdff] border text-[#6B4C1A] text-sm placeholder-[#6B4C1A]/40 focus:outline-none transition-colors duration-150 rounded-none'

  return (
    <section id="contact" className="relative bg-[#fdfdff] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9933A]/40" />
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" preserveAspectRatio="none">
        <line x1="80" y1="0" x2="80" y2="100%" stroke="#C9933A" strokeWidth="1" /><line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9933A" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 sm:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-5">Get in touch</p>
          <h2 className="leading-none">
            <span className="block text-[52px] sm:text-[64px] text-[#6B4C1A] tracking-[-0.01em]" style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}>Let's work</span>
            <span className="block text-[52px] sm:text-[64px] font-bold text-[#C9933A] tracking-[-0.03em] leading-none">TOGETHER</span>
          </h2>
        </div>

        <div className="border border-[#C9933A]/20 mb-16 sm:mb-20">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <CheckCircle size={36} className="text-[#C9933A] mb-5" />
              <h3 className="text-lg font-bold text-[#6B4C1A] mb-2 tracking-[-0.01em]">Message sent</h3>
              <p className="text-sm text-[#6B4C1A]/80 max-w-xs leading-relaxed">I'll review your message and get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#C9933A]/20">
                <div className="border-b sm:border-b-0 sm:border-r border-[#C9933A]/20">
                  <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 px-5 pt-4 pb-1">Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" className={`${fieldBase} px-5 pb-4 pt-1 border-0 ${errors.name ? 'text-red-400/80' : ''}`} aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-[11px] text-red-400/70 px-5 pb-3">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 px-5 pt-4 pb-1">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`${fieldBase} px-5 pb-4 pt-1 border-0 ${errors.email ? 'text-red-400/80' : ''}`} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-[11px] text-red-400/70 px-5 pb-3">{errors.email}</p>}
                </div>
              </div>

              <div className="border-b border-[#C9933A]/20">
                <label htmlFor="subject" className="block text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 px-5 pt-4 pb-1">Subject</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Project inquiry, collaboration…" className={`${fieldBase} px-5 pb-4 pt-1 border-0 ${errors.subject ? 'text-red-400/80' : ''}`} aria-invalid={!!errors.subject} />
                {errors.subject && <p className="text-[11px] text-red-400/70 px-5 pb-3">{errors.subject}</p>}
              </div>

              <div className="border-b border-[#C9933A]/20">
                <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 px-5 pt-4 pb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea…" rows={6} className={`${fieldBase} px-5 pb-4 pt-1 border-0 resize-none ${errors.message ? 'text-red-400/80' : ''}`} aria-invalid={!!errors.message} />
                {errors.message && <p className="text-[11px] text-red-400/70 px-5 pb-3">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-5">
                <a href="mailto:goodpersonh208686@gmail.com" className="inline-flex items-center gap-2 text-[12px] tracking-[0.08em] text-[#6B4C1A]/70 hover:text-[#6B4C1A] transition-colors duration-150"><Mail size={13} /> goodpersonh208686@gmail.com</a>
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2.5 bg-[#C9933A] hover:bg-[#a8772e] disabled:opacity-40 disabled:cursor-not-allowed text-[#fdfdff] font-medium text-sm tracking-[0.04em] px-7 py-3 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95"><Send size={14} />{isSubmitting ? 'Sending…' : 'Send message'}</button>
              </div>
            </form>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-16 border-b border-[#C9933A]/20">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9933A] font-medium mb-4">Connect</p>
            <div className="flex items-center gap-3">{socialLinks.map(({ icon: Icon, href, label }) => (<a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 border border-[#C9933A]/40 hover:border-[#C9933A]/70 hover:bg-[#C9933A]/10 rounded-sm flex items-center justify-center text-[#6B4C1A]/70 hover:text-[#6B4C1A] transition-all duration-150"><Icon size={16} /></a>))}</div>
          </div>
          <a href="/resume.txt" download className="inline-flex items-center gap-2.5 border border-[#C9933A]/40 hover:border-[#C9933A]/70 text-[#6B4C1A]/80 hover:text-[#6B4C1A] text-sm tracking-[0.06em] px-5 py-2.5 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95"><Download size={14} />Download resume</a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#C9933A]/15">
          {infoItems.map(item => (<div key={item.title} className="bg-[#fdfdff] hover:bg-[#C9933A]/5 transition-colors duration-150 px-6 py-7">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 mb-2">{item.title}</p>
            <p className="text-base font-bold text-[#6B4C1A] tracking-[-0.01em] mb-1">{item.value}</p>
            <p className="text-[11px] text-[#6B4C1A]/70 tracking-[0.04em]">{item.desc}</p>
          </div>))}
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');`}</style>
    </section>
  )
}

export default Contact