import React from 'react';

const tools = [
    "React.js", "Next.js", "Node.js", "Express.js",
    "MongoDB", "PostgreSQL", "TypeScript", "JavaScript",
    "Tailwind CSS", "GSAP", "Git", "GitHub", "REST APIs"
];

const ToolsMarquee = () => {
    return (
        <section className="w-full py-20 overflow-hidden relative">
            {/* Gradient Masks for fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
                {/* First set */}
                <div className="flex gap-4 md:gap-6 px-2 md:px-3">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-[#0d0d0d] rounded-2xl w-40 md:w-48 h-24 md:h-28 border border-[#1a1a1a] hover:bg-[#151515] hover:border-[#333] transition-all duration-300 group cursor-pointer">
                            <span className="text-white/70 font-bold tracking-wider text-sm md:text-lg group-hover:text-white transition-colors duration-300">
                                {tool}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Second set for infinite scroll */}
                <div className="flex gap-4 md:gap-6 px-2 md:px-3">
                    {tools.map((tool, index) => (
                        <div key={`duplicate-${index}`} className="flex flex-col items-center justify-center bg-[#0d0d0d] rounded-2xl w-40 md:w-48 h-24 md:h-28 border border-[#1a1a1a] hover:bg-[#151515] hover:border-[#333] transition-all duration-300 group cursor-pointer">
                            <span className="text-white/70 font-bold tracking-wider text-sm md:text-lg group-hover:text-white transition-colors duration-300">
                                {tool}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsMarquee;
