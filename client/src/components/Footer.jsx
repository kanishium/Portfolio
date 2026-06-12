import React from 'react';
import MyPic from '../assets/MyPic.png';
import useReveal from '../hooks/useReveal';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const revealRef = useReveal();

    return (
        <footer ref={revealRef} className="w-full relative z-10 text-white pb-8 overflow-hidden border-t border-white/10 mt-0">
            {/* Top CTA */}
            <div className="flex flex-col items-center text-center px-4 pt-32">
                <h2 className="reveal text-[13vw] md:text-[10vw] font-semibold uppercase leading-[0.75] tracking-tight">
                    LET'S WORK<br />TOGETHER
                </h2>
                <a href="/contact" className="btn-custom btn-filled mt-12 font-bold text-[14px] md:text-[15px] uppercase tracking-[0.15em] px-5 py-2 rounded-full hover:scale-105 transition-all">
                    <span className="relative z-10">CONTACT NOW</span>
                </a>
            </div>

            {/* Middle Section (Image and Text) */}
            <div className="relative max-w-[1400px] mx-auto mt-22 mb-22 flex justify-center items-center px-4">
                {/* Left Floating Text */}
                <div className="absolute left-8 lg:left-24 hidden md:block text-center text-[9px] md:text-[12px] font-semibold tracking-[0.15em] uppercase text-white">
                    BASED IN INDIA,<br />
                    <span className='text-white/50 font-medium' >MEERUT </span>
                </div>

                {/* Center Image */}
                <div className="w-[70vw] md:w-[35vw] lg:w-[35vw] h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden border border-white/10">
                    <img
                        src={MyPic}
                        alt="Kanishk Kumar"
                        className="w-full h-full object-cover object-top  transition-all duration-700"
                    />
                </div>

                {/* Right Floating Text */}
                <div className="absolute right-8 lg:right-24 hidden md:block text-center text-[9px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-white">
                    FULL STACK<br />
                    <span className='text-white/50 font-medium' >+ MERN DEVELOPER </span>
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="flex flex-col items-center px-6">
                <p className="text-center text-[11px] md:text-[23px] font-semibold uppercase tracking-[0.05em] max-w-5xl leading-[1] mb-10">
                    BASED IN INDIA, I AM A DRIVEN COMPUTER SCIENCE STUDENT AND DEVELOPER. MY PASSION FOR CLEAN CODE, MODERN TECHNOLOGIES, AND INTUITIVE EXPERIENCES IS EVIDENT IN MY WORK.
                </p>

                {/* Social Links */}
                <div className="flex gap-6 md:gap-10 text-[10px] md:text-[14px] font-bold uppercase tracking-[0.15em] mb-24">
                    <a href="https://www.instagram.com/kanishk9394/" className="hover:text-white/50 transition-colors">INSTAGRAM ↗</a>
                    <a href="https://www.linkedin.com/in/kanishk-kumar-33530729b/" className="hover:text-white/50 transition-colors">LINKEDIN ↗</a>
                    <a href="https://github.com/kanishium" className="hover:text-white/50 transition-colors">GITHUB ↗</a>
                </div>
            </div>

            {/* Massive Name */}
            <div className="w-full overflow-hidden flex justify-center items-center mb-8">
                <h1 className="text-[22vw] font-black uppercase leading-none tracking-tighter w-full text-center select-none" style={{ transform: 'scaleY(1.1)' }}>
                    KANISHK
                </h1>
            </div>

            {/* Footer Bottom Bar */}
            <div className="flex justify-between items-center px-8 pt-6 border-t border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                <div>©2026 KANISHK KUMAR</div>
                <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer uppercase font-bold tracking-[0.15em]">
                    BACK TO TOP
                </button>
            </div>
        </footer>
    );
};

export default Footer;