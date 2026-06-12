import React, { useState, useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';

const experiences = [
    {
        company: "INTELLI REACH PRIVATE LIMITED",
        role: "Frontend Developer Intern",
        period: "MAR 2026 - PRESENT",
        description: "Developing responsive web applications using React.js and MERN technologies, optimizing performance, integrating REST APIs, and delivering seamless user experiences across multiple devices.",
        tags: ["REACT.JS", "REST APIs", "RESPONSIVE DESIGN", "PERFORMANCE"],
        number: "01"
    },
    {
        company: "AI RESUME BUILDER",
        role: "Full Stack Developer",
        period: "2026 - PRESENT",
        description: "Built an AI-powered resume builder using React, Node.js, Express.js, MongoDB, and Gemini AI with secure authentication, image uploads, and dynamic resume generation.",
        tags: ["REACT", "NODE.JS", "MONGODB", "GEMINI AI"],
        number: "02"
    },
    {
        company: "PERSONAL PROJECTS",
        role: "MERN Stack Developer",
        period: "2024 - PRESENT",
        description: "Designed and developed modern web applications including Trion, Burger Nation, and personal portfolio projects while gaining expertise in React, Next.js, Tailwind CSS, and GSAP.",
        tags: ["NEXT.JS", "TAILWIND CSS", "GSAP", "UI/UX"],
        number: "03"
    },
    {
        company: "LEETCODE & DSA",
        role: "Problem Solver",
        period: "2024 - PRESENT",
        description: "Solved 350+ coding problems covering data structures, algorithms, dynamic programming, graphs, trees, and optimization techniques using C++.",
        tags: ["C++", "ALGORITHMS", "DATA STRUCTURES", "DYNAMIC PROGRAMMING"],
        number: "04"
    }
];

const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "C++", level: 80 },
    { name: "Git & GitHub", level: 88 },
];

const education = [
    {
        institution: "KRISHNA INSTITUTE OF ENGINEERING & TECHNOLOGY",
        degree: "B.TECH IN COMPUTER SCIENCE",
        period: "2023 - 2027",
        description: "Pursuing Bachelor of Technology in Computer Science & Engineering with focus on full stack development, data structures, and software engineering."
    },
    {
        institution: "SENIOR SECONDARY EDUCATION",
        degree: "PCM — CLASS XII",
        period: "2021 - 2023",
        description: "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics."
    }
];

const SkillBar = ({ name, level }) => {
    const [width, setWidth] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    setTimeout(() => setWidth(level), 100);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [hasStarted, level]);

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-sm md:text-base font-semibold uppercase tracking-wide">{name}</span>
                <span className="text-xs font-bold text-white/50 tracking-widest">{level}%</span>
            </div>
            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white rounded-full transition-all duration-[1500ms] ease-out"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};

const Experience = () => {
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="w-full relative z-10 text-white">
            {/* ========== HERO ========== */}
            <div className="flex flex-col items-center justify-center mt-38 mb-32 px-4">
                <h2 className="text-white/50 text-[9px] md:text-[13px] mb-4 font-medium tracking-[0.2em] uppercase">(2023 - PRESENT)</h2>
                <h1 className="reveal text-[15vw] md:text-[10vw] xl:text-[130px] text-center font-semibold uppercase leading-[0.8] tracking-tight text-white m-0">
                    WORK<br />EXPERIENCE
                </h1>
            </div>

            {/* ========== TIMELINE ========== */}
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Section Label */}
                <div className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10">
                    <div className="flex-1 text-left">01</div>
                    <div className="flex-1 text-center text-white">//TIMELINE</div>
                    <div className="flex-1 text-right">JOURNEY</div>
                </div>

                {/* Experience Cards */}
                <div className="mt-12 flex flex-col">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group border-b border-white/10 py-14 md:py-20 relative"
                        >
                            {/* Number */}
                            <div className="absolute top-14 md:top-20 right-0 text-[80px] md:text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                                {exp.number}
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                                {/* Left: Company & Role */}
                                <div className="w-full lg:w-[45%]">
                                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                        {exp.company}
                                    </h3>
                                    <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.15em] text-white/50 uppercase">
                                        <span>{exp.role}</span>
                                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                {/* Right: Description & Tags */}
                                <div className="w-full lg:w-[55%] flex flex-col gap-6">
                                    <p className="text-[#a1a1aa] text-sm md:text-lg font-medium leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 border border-white/10 rounded-full text-white/60 hover:bg-white/5 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ========== SKILLS ========== */}
            <div className="max-w-[1400px] mx-auto px-8 mt-32">
                {/* Section Label */}
                <div className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10">
                    <div className="flex-1 text-left">02</div>
                    <div className="flex-1 text-center text-white">//SKILLS</div>
                    <div className="flex-1 text-right">PROFICIENCY</div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 mt-12 mb-32">
                    {/* Left: Heading */}
                    <div className="w-full lg:w-[35%]">
                        <h2 className="reveal text-[12vw] md:text-[4vw] font-semibold uppercase leading-none tracking-tight lg:sticky lg:top-32">
                            TECH<br />STACK
                        </h2>
                    </div>

                    {/* Right: Skill Bars */}
                    <div className="w-full lg:w-[65%] flex flex-col gap-8">
                        {skills.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ========== EDUCATION ========== */}
            <div className="max-w-[1400px] mx-auto px-8 mb-32">
                {/* Section Label */}
                <div className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10">
                    <div className="flex-1 text-left">03</div>
                    <div className="flex-1 text-center text-white">//EDUCATION</div>
                    <div className="flex-1 text-right">ACADEMICS</div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 mt-12">
                    {/* Left: Heading */}
                    <div className="w-full lg:w-[35%]">
                        <h2 className="reveal text-[12vw] md:text-[4vw] font-semibold uppercase leading-none tracking-tight lg:sticky lg:top-32">
                            EDUCATION
                        </h2>
                    </div>

                    {/* Right: Education List */}
                    <div className="w-full lg:w-[65%] flex flex-col">
                        <div className="w-full border-t border-white/10"></div>
                        {education.map((edu, index) => (
                            <div key={index} className="py-12 border-b border-white/10 flex flex-col gap-5">
                                <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                                    {edu.institution}
                                </h3>
                                <div className="flex justify-between items-center w-full text-[10px] md:text-xs font-bold tracking-[0.15em] text-white/50 uppercase">
                                    <span>{edu.degree}</span>
                                    <span>{edu.period}</span>
                                </div>
                                <p className="text-[#a1a1aa] text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                                    {edu.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ========== TOOLS MARQUEE ========== */}
            <div className="w-full overflow-hidden border-t border-b border-white/10 py-8 mb-16">
                <div className="flex animate-scroll-left whitespace-nowrap">
                    {[...Array(2)].map((_, setIndex) => (
                        <div key={setIndex} className="flex gap-12 mr-12">
                            {["REACT.JS", "NODE.JS", "MONGODB", "EXPRESS.JS", "NEXT.JS", "TAILWIND CSS", "JAVASCRIPT", "TYPESCRIPT", "C++", "GIT", "GSAP", "FIGMA", "VS CODE", "POSTMAN"].map((tool, i) => (
                                <span key={i} className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-white/30">
                                    {tool}
                                    <span className="mx-6 text-white/10">✦</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;