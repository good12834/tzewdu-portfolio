import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, Globe, Code, Briefcase, GraduationCap, Zap, Users, Download } from 'lucide-react'

const contactInfo = [
  { icon: Mail,       label: 'Email',     value: 'goodpersonh208686@gmail.com',              href: 'mailto:goodpersonh208686@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn',  value: 'good-man-15b4252a8',                       href: 'https://www.linkedin.com/in/good-man-15b4252a8/' },
  { icon: FaGithub,   label: 'GitHub',    value: 'good12834',                                href: 'https://github.com/good12834' },
  { icon: Globe,      label: 'Portfolio', value: 'tzewdu.goodtess.com',                      href: 'https://tzewdu.goodtess.com' },
]

const technicalSkills = [
  {
    category: 'Frontend',
    icon: Code,
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'Backend',
    icon: Briefcase,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MySQL', 'MongoDB', 'Database Design', 'Authentication (JWT)', 'API Integration'],
  },
  {
    category: 'DevOps & Tools',
    icon: Zap,
    skills: ['Git & GitHub', 'VS Code', 'Netlify', 'Render', 'Chrome DevTools', 'Postman', 'GitHub Actions', 'Deployment'],
  },
]

const projects = [
  {
    title: 'Netflix Clone',
    type: 'Streaming Platform',
    tech: 'React, Node.js, TMDB API',
    description: 'Full-stack streaming platform with responsive design and dynamic content integration.',
    highlights: ['Developed responsive Netflix-inspired streaming platform', 'Implemented movie browsing, search, and advanced UI', 'Integrated external APIs for dynamic content loading', 'Deployed on Netlify with optimized performance'],
    link: 'https://net-clone-tzewdu-b87087.netlify.app/',
  },
  {
    title: 'Amazon Clone',
    type: 'E-Commerce',
    tech: 'React, Node.js, MongoDB, Stripe',
    description: 'Comprehensive e-commerce solution with payment processing and user authentication.',
    highlights: ['Built complete e-commerce platform with shopping cart', 'Implemented secure payment processing with Stripe', 'Designed scalable database architecture', 'Full user authentication and order management'],
    link: 'https://amazon-clone-tzewdu-581109.netlify.app/',
  },
  {
    title: 'Evangadi Forum',
    type: 'Community Platform',
    tech: 'React, MySQL, JWT, WebSocket',
    description: 'Professional discussion platform with real-time messaging and role-based access.',
    highlights: ['Created professional discussion forum platform', 'Implemented real-time messaging capabilities', 'Role-based access control and content moderation', 'Responsive UI with modern social features'],
    link: 'https://evangadiforum.goodtess.com/',
  },
  {
    title: 'TimeTrack Pro',
    type: 'Productivity Tool',
    tech: 'React, MongoDB, Chart.js',
    description: 'Enterprise-grade time tracking with advanced analytics and team collaboration.',
    highlights: ['Enterprise-grade time tracking application', 'Advanced analytics and reporting features', 'Team collaboration and project management', 'Real-time data visualization with charts'],
    link: 'https://worker-time-tracking-by-tzewdu-baa89b.netlify.app/',
  },
]

const learning = ['AWS Cloud Services (EC2, S3, Lambda)', 'Advanced React Patterns & Optimization', 'Database Optimization & Cloud Architecture', 'DevOps & CI/CD Pipelines']

const strengths = [
  'Self-motivated learner with proven ability to master complex technologies rapidly',
  'Strong analytical thinking and problem-solving capabilities',
  'Attention to detail with focus on code quality and UX',
  'Collaborative team player with excellent communication skills',
  'Passionate about industry best practices and continuous improvement',
  'Proven ability to deliver production-ready applications',
]

const SectionLabel: React.FC<{ icon: React.ElementType; title: string }> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#C9933A]/20">
    <div className="w-7 h-7 rounded-sm border border-[#C9933A]/60 flex items-center justify-center flex-shrink-0">
      <Icon size={13} className="text-[#C9933A]" />
    </div>
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#C9933A] font-medium">{title}</p>
  </div>
)

const Resume: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="resume" className="relative bg-[#fdfdff] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9933A]/40" />
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" preserveAspectRatio="none">
        <line x1="80" y1="0" x2="80" y2="100%" stroke="#C9933A" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9933A" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 sm:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-5">Résumé</p>
          <div className="leading-none mb-6">
            <span className="block text-[52px] sm:text-[64px] text-[#6B4C1A] tracking-[-0.01em]" style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}>T.</span>
            <span className="block text-[52px] sm:text-[64px] font-bold text-[#C9933A] tracking-[-0.03em] leading-none">ZEWDU</span>
          </div>
          <p className="text-sm text-[#6B4C1A]/80 max-w-xl leading-relaxed">Full stack developer — 6+ months of intensive hands-on experience building modern, scalable web applications.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#C9933A]/15 mb-16 sm:mb-20">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="bg-[#fdfdff] hover:bg-[#C9933A]/5 px-5 py-5 transition-colors duration-150 group">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 mb-2">{label}</p>
              <div className="flex items-center gap-2">
                <Icon size={13} className="text-[#C9933A] flex-shrink-0" />
                <p className="text-[12px] text-[#6B4C1A]/80 group-hover:text-[#6B4C1A] transition-colors duration-150 truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={Users} title="Professional summary" />
          <p className="text-xl sm:text-2xl text-[#6B4C1A]/80 leading-relaxed max-w-3xl" style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}>Dedicated full stack developer with 6 months of intensive hands-on experience. Passionate about creating innovative digital solutions with clean, efficient, and scalable code — proficient in React, Node.js, and database design.</p>
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={GraduationCap} title="Education" />
          <div className="flex gap-6 group">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-[23px] h-[23px] rounded-sm border border-[#C9933A]/60 bg-[#fdfdff] flex items-center justify-center">
                <GraduationCap size={12} className="text-[#C9933A]" />
              </div>
              <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#C9933A]/40 to-transparent" />
            </div>
            <div className="pb-2">
              <p className="text-[10px] tracking-[0.16em] uppercase text-[#C9933A]/80 mb-1">Bootcamp</p>
              <h4 className="text-base font-bold text-[#6B4C1A] tracking-[-0.01em] mb-1">Full Stack Web Development Bootcamp</h4>
              <p className="text-[11px] tracking-[0.08em] text-[#C9933A]/80 mb-3">Evangadi Institute, USA · Mar 2025 – Sep 2025</p>
              <ul className="space-y-2">{[['Completed intensive 6-month full-stack development program','Mastered React, Node.js, and database design through real projects','Developed multiple production-ready applications','Gained expertise in responsive design, APIs, and deployment']].flat().map((item, i) => (<li key={i} className="flex gap-3 text-sm text-[#6B4C1A]/80"><span className="w-[2px] h-3 bg-[#C9933A]/50 flex-shrink-0 mt-1" />{item}</li>))}</ul>
            </div>
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={Code} title="Technical skills" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9933A]/15">
            {technicalSkills.map(({ category, icon: Icon, skills }) => (
              <div key={category} className="bg-[#fdfdff] hover:bg-[#C9933A]/5 p-6 group transition-colors duration-150">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-sm border border-[#C9933A]/60 group-hover:border-[#C9933A] group-hover:bg-[#C9933A]/10 transition-all duration-200 flex items-center justify-center flex-shrink-0"><Icon size={13} className="text-[#C9933A]" /></div>
                  <h4 className="text-[11px] tracking-[0.12em] uppercase font-bold text-[#6B4C1A]">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">{skills.map(s => (<span key={s} className="text-[11px] tracking-[0.04em] text-[#6B4C1A]/80 border border-[#C9933A]/30 px-2.5 py-1 rounded-sm">{s}</span>))}</div>
                <div className="mt-5 h-[2px] bg-[#C9933A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={Briefcase} title="Professional projects" />
          <div className="border border-[#C9933A]/20 divide-y divide-[#C9933A]/20">
            {projects.map((project, index) => (
              <div key={index}>
                <button onClick={() => setExpanded(expanded === index ? null : index)} className="w-full px-6 py-5 text-left hover:bg-[#C9933A]/5 transition-colors duration-150 flex items-start justify-between gap-4 group">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h4 className="text-sm font-bold text-[#6B4C1A] tracking-[-0.01em]">{project.title}</h4>
                      <span className="text-[10px] tracking-[0.12em] uppercase text-[#C9933A]/80 border border-[#C9933A]/30 px-2 py-0.5 rounded-sm">{project.type}</span>
                    </div>
                    <p className="text-[11px] tracking-[0.06em] text-[#C9933A]/80 mb-1">{project.tech}</p>
                    <p className="text-sm text-[#6B4C1A]/80">{project.description}</p>
                  </div>
                  <span className={`text-[#6B4C1A]/60 group-hover:text-[#6B4C1A] transition-all duration-200 flex-shrink-0 mt-1 ${expanded === index ? 'rotate-180' : ''}`} aria-hidden="true">↓</span>
                </button>
                {expanded === index && (
                  <div className="px-6 pb-6 bg-[#C9933A]/5 border-t border-[#C9933A]/20">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 mt-5 mb-3">Key highlights</p>
                    <ul className="space-y-2 mb-5">{project.highlights.map((h, i) => (<li key={i} className="flex gap-3 text-sm text-[#6B4C1A]/80"><span className="w-[2px] h-3 bg-[#C9933A]/50 flex-shrink-0 mt-1" />{h}</li>))}</ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] tracking-[0.06em] text-[#C9933A] hover:text-[#a8772e] border-b border-[#C9933A]/40 hover:border-[#a8772e]/40 pb-0.5 transition-all duration-150">View live project →</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={Zap} title="Continuously learning" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#C9933A]/15">{learning.map(item => (<div key={item} className="bg-[#fdfdff] hover:bg-[#C9933A]/5 px-5 py-5 transition-colors duration-150 group cursor-default"><span className="block w-[2px] h-3 bg-[#C9933A]/60 group-hover:bg-[#C9933A] mb-3 transition-colors duration-150" /><p className="text-sm text-[#6B4C1A]/80 group-hover:text-[#6B4C1A] transition-colors duration-150 leading-snug">{item}</p></div>))}</div>
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={Users} title="Professional strengths" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C9933A]/15">{strengths.map(s => (<div key={s} className="bg-[#fdfdff] hover:bg-[#C9933A]/5 px-5 py-5 transition-colors duration-150 group cursor-default"><span className="block w-[2px] h-3 bg-[#C9933A]/50 group-hover:bg-[#C9933A] mb-3 transition-colors duration-150" /><p className="text-sm text-[#6B4C1A]/80 group-hover:text-[#6B4C1A] transition-colors duration-150 leading-snug">{s}</p></div>))}</div>
        </div>

        <div className="mb-16 sm:mb-20">
          <SectionLabel icon={Globe} title="Languages" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#C9933A]/15"><div className="bg-[#fdfdff] px-5 py-5"><p className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 mb-1">English</p><p className="text-sm text-[#6B4C1A]/80">Professional working proficiency</p></div></div>
        </div>

        <div className="pt-12 border-t border-[#C9933A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xl sm:text-2xl text-[#6B4C1A]/70 max-w-xs leading-snug" style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}>Want the full document?</p>
          <a href="/resume.txt" download className="inline-flex items-center gap-2.5 bg-[#C9933A] hover:bg-[#a8772e] text-[#fdfdff] font-medium text-sm tracking-[0.04em] px-7 py-3.5 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95"><Download size={14} />Download résumé</a>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');`}</style>
    </section>
  )
}

export default Resume