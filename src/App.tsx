import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="App relative min-h-screen bg-[#fdfdff]">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} onToggleCollapse={toggleCollapse} />

      {/* Main Content */}
      <main className={`relative transition-all duration-300 ease-out ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="fixed top-6 left-6 z-50 lg:hidden p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Menu size={24} />
        </button>

        {/* Sections */}
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </main>

      {/* Floating Action Buttons */}
      <BackToTop />

    </div>
  )
}

export default App
