import React from 'react';
import useReveal from '../hooks/useReveal';

const experiences = [
    {
        company: "INTELLI REACH PRIVATE LIMITED",
        role: "FRONTEND DEVELOPER INTERN",
        period: "MAR 2026 - PRESENT",
        description: "Developing responsive web applications using React.js and MERN technologies, optimizing performance, integrating REST APIs, and delivering seamless user experiences across multiple devices."
    },
    {
        company: "AI RESUME BUILDER",
        role: "FULL STACK DEVELOPER",
        period: "2026 - PRESENT",
        description: "Built an AI-powered resume builder using React, Node.js, Express.js, MongoDB, and Gemini AI with secure authentication, image uploads, and dynamic resume generation."
    },
    {
        company: "PERSONAL PROJECTS",
        role: "MERN STACK DEVELOPER",
        period: "2024 - PRESENT",
        description: "Designed and developed modern web applications including Trion, Burger Nation, and personal portfolio projects while gaining expertise in React, Next.js, Tailwind CSS, and GSAP."
    },
    {
        company: "LEETCODE & DSA",
        role: "PROBLEM SOLVER",
        period: "2024 - PRESENT",
        description: "Solved 350+ coding problems covering data structures, algorithms, dynamic programming, graphs, trees, and optimization techniques using C++."
    }
];

const ExperienceSection = () => {
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="w-full relative z-10 text-white pb-32">
            {/* Top Labels */}
            <div className="w-full px-8 max-w-[1400px] mx-auto flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10 mt-12">
                <div className="flex-1 text-left relative">
                    07
                </div>
                <div className="flex-1 text-center text-white">//EXPERIENCE</div>
                <div className="flex-1 text-right">2023 - PRESENT</div>
            </div>

            {/* Content Area */}
            <div className="max-w-[1400px] mx-auto px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                    {/* Left Column: Heading */}
                    <div className="w-full lg:w-[40%]">
                        <h2 className="reveal text-[12vw] md:text-[4vw] font-semibold uppercase leading-none tracking-wide lg:sticky lg:top-32">
                            EXPERIENCE
                        </h2>
                    </div>

                    {/* Right Column: Experience List */}
                    <div className="w-full lg:w-[60%] flex flex-col">
                        {/* Top Border for the list */}
                        <div className="w-full border-t border-white/10"></div>

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="py-12 border-b border-white/10 flex flex-col gap-6"
                            >
                                <h3 className="text-3xl md:text-4xl lg:text-2xl font-semibold tracking-wide">
                                    {exp.company}
                                </h3>

                                <div className="flex justify-between items-center w-full text-[10px] md:text-xs font-bold tracking-[0.15em] text-white/70 uppercase">
                                    <span>{exp.role}</span>
                                    <span>{exp.period}</span>
                                </div>

                                <p className="text-[#a1a1aa] text-sm md:text-lg max-w-2xl font-medium leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
