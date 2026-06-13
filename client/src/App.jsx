import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import WorkPage from './pages/WorkPage'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

const AppContent = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black flex flex-col selection:bg-white selection:text-black font-sans text-white relative">
        {/* Global Grid Background */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

        <CustomCursor />
        <Navbar />

        <div className="flex-grow flex flex-col relative z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/work/:slug" element={<WorkPage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {!isContactPage && <Footer />}
      </div>
    </SmoothScroll>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App