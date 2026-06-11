import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col selection:bg-white selection:text-black font-sans text-white relative">
        {/* Global Grid Background */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
        
        <CustomCursor />
        <Navbar />
        
        <div className="flex-grow flex flex-col relative z-10 w-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>

        {/* Fixed 'Use for Free' Badge */}
        <a href="#" className="fixed bottom-6 right-6 z-50 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-3 rounded-md flex items-center gap-2 hover:bg-white/90 transition-colors duration-300 shadow-xl">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            USE FOR FREE
        </a>
      </div>
    </Router>
  )
}

export default App