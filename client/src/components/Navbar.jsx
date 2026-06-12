import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [time, setTime] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className={`w-full flex items-center justify-between px-8 py-5 relative z-[60] font-sans text-s font-semibold tracking-wide text-white uppercase transition-all duration-500 ${isMenuOpen ? 'bg-transparent border-transparent' : 'bg-black/80 backdrop-blur-sm '}`}>
                {/* Left: Local Time linking to Home */}
                <div className="flex-1 flex items-center">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white transition-colors duration-300">
                        LOCAL / <span className="text-white">{time}</span>
                    </Link>
                </div>

                {/* Center: Toggle Button */}
                <div className="flex-1 flex justify-center items-center">
                    <button
                        className="group w-14 h-14 flex justify-center items-center focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            // X Icon for Close
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
                                <svg width="8" height="8" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L13 13M1 13L13 1" stroke="black" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                        ) : (
                            // 4 Dots
                            <div className="grid grid-cols-2 gap-[10px] transition-transform duration-500 ease-out group-hover:rotate-90">
                                <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                                <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                                <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                                <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                            </div>
                        )}
                    </button>
                </div>

                {/* Right: Resume & Contact Buttons */}
                <div className="flex-1 flex justify-end items-center gap-4 hidden sm:flex">
                    <a href="/resume.pdf" download="Kanishk_Resume.pdf">
                        <button className="btn-custom btn-filled border border-white rounded-full px-6 py-2.5 text-xs tracking-[0.2em] font-bold">
                            <span className="relative z-10">RESUME</span>
                        </button>
                    </a>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        <button className="btn-custom btn-outline border border-white rounded-full px-6 py-2.5 text-xs tracking-[0.2em] font-bold">
                            <span className="relative z-10">CONTACT NOW</span>
                        </button>
                    </Link>
                </div>
                
                {/* Mobile version (only contact to save space, or stack them) */}
                <div className="flex-1 flex justify-end items-center gap-2 sm:hidden">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        <button className="btn-custom btn-outline border border-white rounded-full px-4 py-2 text-[10px] tracking-[0.1em] font-bold">
                            <span className="relative z-10">CONTACT</span>
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Full-Screen Overlay Menu */}
            <div className={`fixed inset-0 z-50 bg-black flex flex-col pt-20 pb-8 px-8 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                {/* Fine Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

                {/* Menu Links */}
                <div className="flex-grow flex flex-col justify-center items-center relative z-10 w-full">
                    <div className="flex flex-col items-center justify-center text-center -mt-8">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-[min(12vw,14vh)] md:text-[min(9vw,14vh)] xl:text-[min(7.5vw,110px)] font-bold leading-[0.85] tracking-wide uppercase whitespace-nowrap text-white/40 hover:text-white transition-colors duration-300">HOME</Link>
                        <Link to="/work" onClick={() => setIsMenuOpen(false)} className="text-[min(12vw,14vh)] md:text-[min(9vw,14vh)] xl:text-[min(7.5vw,110px)] font-bold leading-[0.85] tracking-wide uppercase whitespace-nowrap text-white hover:text-white/70 transition-colors duration-300">WORK</Link>
                        <Link to="/experience" onClick={() => setIsMenuOpen(false)} className="text-[min(12vw,14vh)] md:text-[min(9vw,14vh)] xl:text-[min(7.5vw,110px)] font-bold leading-[0.85] tracking-wide uppercase whitespace-nowrap text-white hover:text-white/70 transition-colors duration-300">EXPERIENCE</Link>
                        <Link to="/achievements" onClick={() => setIsMenuOpen(false)} className="text-[min(12vw,14vh)] md:text-[min(9vw,14vh)] xl:text-[min(7.5vw,110px)] font-bold leading-[0.85] tracking-wide uppercase whitespace-nowrap text-white hover:text-white/70 transition-colors duration-300">ACHIEVEMENTS</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-[min(12vw,14vh)] md:text-[min(9vw,14vh)] xl:text-[min(7.5vw,110px)] font-bold leading-[0.85] tracking-wide uppercase whitespace-nowrap text-white hover:text-white/70 transition-colors duration-300">CONTACT</Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-full flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-white/70 relative z-10 uppercase mt-auto">
                    <div>©2026 ALL RIGHTS RESERVED</div>
                    <div className="hidden md:flex gap-8">
                        <a href="https://www.instagram.com/kanishk9394/" className="hover:text-white flex items-center gap-1">INSTAGRAM ↗</a>
                        <a href="https://www.linkedin.com/in/kanishk-kumar-33530729b/" className="hover:text-white flex items-center gap-1">Linkedin ↗</a>
                        <a href="https://github.com/kanishium" className="hover:text-white flex items-center gap-1">Github ↗</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;