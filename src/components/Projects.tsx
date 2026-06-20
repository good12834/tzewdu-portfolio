import React, { useState, useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import screenshot from '../assets/screenshot.png'
import { Annoyed, Play } from 'lucide-react'
import garage from '../assets/garage.png'
import burgerhub from '../assets/burgerhub.png'
import musicapp from '../assets/musicapp.png'
interface Project {
  id: number
  title: string
  category: string
  image: string
  video?: string
  github: string
  demo: string
  views?: string
  users?: string
  status: string
  featured: boolean
  description: string
 tech: string[]
 devOpsAndTools?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Netflix Clone',
    category: 'Streaming Platform',
    image: 'https://github.com/good12834/my-portfolio/blob/main/images/23e65075-b685-4b1b-8984-10bb30dd67f7.png?raw=true',
    github: 'https://github.com/good12834/net-clone2025',
    demo: 'https://net-clone-tzewdu-b87087.netlify.app/',
    views: '2.5K',
    status: 'Live',
    featured: true,
    description: 'Full-stack streaming platform with React frontend, Node.js backend, and RESTful API integration for dynamic content delivery.',
    tech: ['React', 'Node.js', 'REST API'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],
  },
  {
    id: 2,
    title: 'Amazon Clone',
    category: 'E-Commerce',
    image: 'https://github.com/good12834/my-portfolio/blob/main/images/d10346fa-0a01-4ef6-bfd7-75144304ab6f.png?raw=true',
    github: 'https://github.com/good12834/Amazon-clone-frontend-deploy',
    demo: 'https://amazon-clone-tzewdu-581109.netlify.app/',
    users: '1.8K',
    status: 'Live',
    featured: false,
    description: 'Scalable e-commerce solution with payment processing, user authentication, and inventory management.',
    tech: ['React', 'Render', 'Stripe', 'Node.js'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],
  },
  {
    id: 3,
    title: 'Evangadi Forum',
    category: 'Community Platform',
    image: 'https://github.com/good12834/my-portfolio/blob/main/images/Screenshot%202025-10-18%20152033.png?raw=true',
    github: 'https://github.com/good12834/evangadi-forum',
    demo: 'https://evangadiforum.goodtess.com/',
    status: 'Live',
    featured: false,
    description: 'Professional discussion platform with real-time messaging, role-based access, and content moderation.',
    tech: ['React', 'MySQL', 'JWT', 'Node.js'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],
  },
  {
    id: 4,
    title: 'TimeTrack Pro',
    category: 'Productivity Tool',
    image: 'https://github.com/good12834/my-portfolio/blob/main/images/timetrickr.png?raw=true',
    github: 'https://github.com/good12834/Worker-Time-Tracking',
    demo: 'https://worker-time-tracking-by-tzewdu-baa89b.netlify.app/',
    status: 'Live',
    featured: true,
    description: 'Enterprise-grade time tracking with advanced analytics, team management, and reporting features.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],  
  },
  {
    id: 5,
    title: 'Starbucks Clone',
    category: 'Restaurant Website',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQG0nOq8-Mm-ow/feedshare-shrink_1280/B4EZ6tp4hTHAAU-/0/1781029898652?e=1783555200&v=beta&t=L-7act5ihVwW-ycbbYuhJw0Z2QM0Xokofl24D52vmyk',
    github: 'https://github.com/good12834/Starbucks-clone.git',
    demo: 'https://starbuck-clone-5a1161.netlify.app/',
    status: 'Live',
    featured: false,
    description: 'Modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations.',
    tech: ['React:', 'CSS', 'RESTful API ', 'Node.js 18+', 'Express.js', 'MySQL ','JWT', 'bcrypt', 'Stripe API'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],

  },
  {
    id: 6,
    title: 'Gym Website',
    category: 'Fitness Website',
    image: 'https://github.com/good12834/my-portfolio/blob/main/images/gym1.png?raw=true',
    github: 'https://github.com/good12834/gymwebsite',
    demo: 'https://gymwebsite-tzewdu-7b0e3f.netlify.app/',
    status: 'Live',
    featured: false,
    description: 'Dynamic fitness website with membership plans, class schedules, trainer profiles, and responsive design.',
    tech: ['React', 'Bootstrap'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],

  },
  {
    id: 7,
    title: 'Restaurant Website',
    category: 'Restaurant Website',
    image: 'https://github.com/good12834/my-portfolio/blob/main/images/Screenshot%202025-10-18%20005255.png?raw=true',
    github: 'https://github.com/good12834/Restaurant',
    demo: 'https://good12834.github.io/Restaurant/',
    status: 'Live',
    featured: false,
    description: 'Modern restaurant website with online ordering, menu display, and reservation functionality.',
    tech: ['React', 'Bootstrap'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],
  },
{
  id: 8,
    title: 'Full-Stack Stock Market Dashboard',
    category: 'Productivity Tool',
    image: screenshot,
    github: 'https://github.com/good12834/Full-Stack-Stock-Market-Dashboard.git',
    demo: 'https://worker-time-tracking-by-tzewdu-baa89b.netlify.app/',
    status: 'Live',
    featured: true,
    description: 'A comprehensive, real-time stock market dashboard built with **React 18**, **Express.js**, **MongoDB**, and real-time data streaming via **Socket.io** and **WebSocket**. Track stocks, manage portfolios, monitor crypto markets, set price alerts, and leverage AI-powered trading insights — all in a modern, responsive UI with multi-language support.',
    tech: ['React 18 ','Tailwind CSS',' Lucide React',' React Hot Toast', 'Zustand ', 'mongodb', 'Node.js 18+', 'Express.js', 'JWT', 'bcrypt', 'Finnhub API', 'Chart.js', ' Socket.io','ws',' Redis' ],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],
},
     {
      id: 9,
    title: 'Car Repair Garage Management System',
    category: 'E-Commerce',
    image: garage,
    github: 'https://github.com/good12834/car-repair-garage.git',
    demo: 'https://car-repair-garage-strudel-6288d.netlify.app/',
    status: 'Live',
    featured: true,
    description: 'A comprehensive web-based application for managing car repair garage operations, built with modern technologies and best practices.',
    tech: ['React 18 ','Tailwind CSS',' Lucide React',' React Hot Toast', 'Zustand ', 'MySQL 8.0', 'Node.js 18+', 'Express.js', 'JWT', 'bcrypt',  'Chart.js','Nodemailer - Email services'],
    devOpsAndTools: ['GitHub Actions', 'Netlify'],
  },
 {
      id: 10,
    title: 'BURGERHUB - Full-Stack Restaurant Website',
    category: 'Restaurant Website',
    image: burgerhub,
    github: 'https://github.com/good12834/BURGERHUB.git',
    demo: 'https://good12834.github.io/BURGERHUB/',
    status: 'Live',
    featured: true,
    description: 'A full-stack burger delivery web application with React frontend and Node.js/Express backend. Customers can browse the menu, customize orders, and securely checkout with Stripe integration. The admin dashboard allows restaurant staff to manage orders, update the menu, and view sales analytics. Built with modern technologies for a seamless user experience.',
    tech: ['React 18 ','Tailwind CSS',' Lucide React', 'Stripe', 'Database: SQLite (can be switched to MySQL)', 'Node.js 18+', 'Express.js', 'JWT', 'bcrypt'],
    devOpsAndTools: ['GitHub Actions', 'render'],
  },
 
   {
      id: 11,
    title: 'WAVESHAPE — Modern Music Player',
    category: 'Streaming Platform',
    image: musicapp,
    github: 'https://github.com/good12834/music-app.git',
    demo: 'https://good12834.github.io/music-app/',
    status: 'Live',
    featured: true,
    description: 'A feature-rich, dark-themed music player built with React 19 and Vite 8, featuring real-time audio visualization, Web Audio API equalizer, decentralized music streaming via Audius, and a responsive design that works seamlessly on both desktop and mobile.',
    tech: ['React 19 ','Tailwind CSS 4', 'Web Audio API', 'Audius API', 'Vite 8', 'Lucide React'],
    devOpsAndTools: ['GitHub Actions'],
  },

]

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-project-id'))
            setVisibleCards(prev => new Set(prev).add(id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    cardRefs.current.forEach(ref => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [filteredProjects])

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el
  }

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : url
  }

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be')
  }

  return (
    <>
      <section
        id="projects"
        className="relative bg-[#fdfdff] py-24 sm:py-32 overflow-hidden"
      >
        {/* Top gold rule — mirrors hero */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* ── Section header ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C9933A]/80 font-normal mb-5">
                Selected work
              </p>
              <h2 className="leading-none">
                <span
                  className="block text-[52px] sm:text-[64px] lg:text-[72px] text-[#6B4C1A] tracking-[-0.01em]"
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
                >
                  Projects
                </span>
                <span className="block text-[52px] sm:text-[64px] lg:text-[72px] font-bold text-[#C9933A] tracking-[-0.03em] leading-none">
                  & WORK
                </span>
              </h2>
            </div>

            <a
              href="https://github.com/good12834"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 self-start sm:self-auto border border-[#C9933A]/40 hover:border-[#C9933A]/70 text-[#6B4C1A]/80 hover:text-[#6B4C1A] text-sm tracking-[0.06em] px-5 py-2.5 rounded-sm transition-all duration-200"
            >
              <FaGithub size={15} />
              All repositories
              <FaExternalLinkAlt size={11} />
            </a>
          </div>

          {/* ── Filter tabs ── */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12 border-b border-[#C9933A]/20 pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative pb-3 text-sm tracking-[0.06em] transition-colors duration-200 whitespace-nowrap ${
                  activeFilter === cat
                    ? 'text-[#C9933A] font-medium'
                    : 'text-[#6B4C1A]/70 hover:text-[#6B4C1A] font-normal'
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9933A] rounded-none" />
                )}
              </button>
            ))}
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9933A]/15">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => setCardRef(el, index)}
                data-project-id={project.id}
                className={`group bg-[#fdfdff] transition-all duration-500 ease-out ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                style={{
                  opacity: visibleCards.has(project.id) ? 1 : 0,
                  transform: visibleCards.has(project.id)
                    ? 'translateY(0)'
                    : 'translateY(32px)',
                  transitionDelay: `${index * 0.07}s`,
                }}
              >
                <div className="relative h-full flex flex-col hover:bg-[#C9933A]/5 transition-colors duration-200">

                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
                      <span className="w-4 h-[2px] bg-[#C9933A]" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A] font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className={`relative overflow-hidden ${project.featured ? 'h-64 sm:h-72' : 'h-48 sm:h-52'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdfdff] via-[#fdfdff]/20 to-transparent opacity-70" />

                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase text-[#6B4C1A] border border-[#C9933A]/40 px-2.5 py-1 rounded-sm">
                        <span className="w-1 h-1 rounded-full bg-[#C9933A] animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {project.video ? (
                      <button
                        onClick={() => setActiveVideo(project.video!)}
                        aria-label={`Play ${project.title} video`}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fdfdff]/80 cursor-pointer"
                      >
                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9933A] text-[#fdfdff] shadow-lg hover:scale-110 transition-transform duration-200">
                          <FaPlay size={22} className="ml-1" />
                        </span>
                      </button>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fdfdff]/80">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdfdff] border border-[#C9933A]/40 hover:border-[#C9933A]/70 text-[#6B4C1A] text-sm tracking-[0.04em] rounded-sm transition-all duration-150"
                        >
                          <FaGithub size={14} />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9933A] hover:bg-[#a8772e] text-[#fdfdff] text-sm tracking-[0.04em] rounded-sm transition-all duration-150"
                        >
                          <FaExternalLinkAlt size={12} />
                          Demo
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6 sm:p-7">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9933A]/80 font-medium mb-2">
                      {project.category}
                    </p>

                    <h3 className="text-lg sm:text-xl font-bold text-[#6B4C1A] tracking-[-0.01em] mb-3 group-hover:text-[#6B4C1A] transition-colors duration-200">
                      {project.title}
                    </h3>

                    {(project.views || project.users) && (
                      <p className="text-[11px] tracking-[0.12em] text-[#6B4C1A]/70 mb-3">
                        {project.views && `${project.views} views`}
                        {project.users && `${project.users} users`}
                      </p>
                    )}

                    <p className="text-sm text-[#6B4C1A]/80 leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] tracking-[0.08em] text-[#6B4C1A]/80 border border-[#C9933A]/30 px-2.5 py-0.5 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-[2px] bg-[#C9933A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[#C9933A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p
              className="text-xl sm:text-2xl text-[#6B4C1A]/70 max-w-xs leading-snug"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic' }}
            >
              More work lives on GitHub.
            </p>
            <a
              href="https://github.com/good12834"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#C9933A] hover:bg-[#a8772e] text-[#fdfdff] font-medium text-sm tracking-[0.04em] px-7 py-3.5 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <FaGithub size={16} />
              View all projects
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
          @media (prefers-reduced-motion: reduce) {
            .group-hover\\:scale-\\[1\\.03\\]:hover {
              transform: none !important;
            }
          }
        `}</style>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTubeUrl(activeVideo) ? (
              <iframe
                src={getYouTubeEmbedUrl(activeVideo)}
                title="Project video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <button
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}

export default Projects