import React from 'react';
import MyPic from '../assets/MyPic.webp';
import useReveal from '../hooks/useReveal';

const AboutSection = () => {
    const revealRef = useReveal();

    return (
        <div ref={revealRef}>
            {/* Sticky scroll wrapper — fixed height controls how long text stays pinned */}
            <section className="relative h-[175vh] bg-black z-10">
                {/* Sticky Text — stays centered for 100vh of scrolling */}
                <div className="sticky -top-30 h-screen w-full flex flex-col items-center justify-center z-0">
                    {/* Top Labels */}
                    <div className="absolute top-10 w-full px-8 max-w-[1400px] flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10 mt-12">
                        <div className="flex-1 text-left">03</div>
                        <div className="flex-1 text-center text-white">//WHO AM I</div>
                        <div className="flex-1 text-right">SINCE 2004</div>
                    </div>

                    {/* Big Text */}
                    <h2 className="reveal flex flex-col items-center justify-center font-semibold uppercase text-white text-center mt-52">
                        <span className="text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight">MORE ABOUT</span>
                        <span className="text-[18vw] md:text-[12vw] leading-[0.8] tracking-tighter mt-4 md:-mt-3">KANISHK©</span>
                    </h2>
                </div>

                {/* Image — in normal flow, scrolls up over the pinned text */}
                <div className="relative z-10 flex justify-center">
                    <div className="w-[85vw] md:w-[35vw] rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10">
                        <img
                            src={MyPic}
                            alt="Kanishk Kumar"
                            className="w-full h-[60vh] md:h-[75vh] object-cover object-top transition-all duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Bio Text + Resume — normal flow after the sticky effect ends */}
            <section className="relative z-10">
                <div className="flex flex-col items-center text-center px-6 py-14 md:py-32 max-w-7xl mx-auto gap-6">
                    <h3 className="reveal text-white font-semibold text-lg md:text-[22px] uppercase tracking-wide leading-relaxed md:leading-snug max-w-5xl">
                        I'M A SOFTWARE DEVELOPER AND PROBLEM SOLVER IN INDIA. <br />
                        FROM RESPONSIVE INTERFACES TO FULL-STACK APPLICATIONS,
                        I ENJOY BUILDING SOLUTIONS THAT PEOPLE LOVE TO USE.
                    </h3>
                    <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed max-w-4xl font-medium mt-2">
                        I'm a full-stack developer who loves turning complex problems into simple, intuitive interfaces. With a strong
                        foundation in modern JavaScript frameworks and backend technologies, I create fast, scalable, and
                        user-focused web applications. My goal is to deliver seamless user experiences through clean code
                        and thoughtful design.
                    </p>
                    <a
                        href="/resume.pdf"
                        download
                        className="btn-custom btn-filled mt-6 inline-flex items-center gap-2 font-extrabold text-xs md:text-[13px] uppercase tracking-[0.1em] px-10 py-4 rounded-full hover:scale-105 transition-all duration-300"
                    >
                        <span className="relative z-10">DOWNLOAD RESUME</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
