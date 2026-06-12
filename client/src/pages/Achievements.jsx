import React, { useState, useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';

const achievements = [
    {
        title: "350+ DSA PROBLEMS SOLVED",
        subtitle: "LEETCODE & COMPETITIVE PROGRAMMING",
        description: "Mastered data structures and algorithms by consistently solving complex problems across arrays, trees, graphs, dynamic programming, and optimization techniques using C++.",
        icon: "🧠",
        category: "CODING",
        number: "01"
    },
    {
        title: "GATE 2026 QUALIFIED",
        subtitle: "GRADUATE APTITUDE TEST IN ENGINEERING",
        description: "Qualified GATE 2026 in Computer Science, demonstrating strong fundamentals in algorithms, operating systems, databases, computer networks, and core CS subjects.",
        icon: "🎓",
        category: "ACADEMICS",
        number: "02"
    },
    {
        title: "AWS CERTIFIED CLOUD PRACTITIONER",
        subtitle: "AMAZON WEB SERVICES CERTIFICATION",
        description: "Earned the AWS Cloud Practitioner certification, validating knowledge of cloud concepts, AWS services, security, architecture, pricing, and support models.",
        icon: "☁️",
        category: "CERTIFICATION",
        number: "03"
    },
    {
        title: "FRONTEND DEVELOPER INTERN",
        subtitle: "@ INTELLI REACH PRIVATE LIMITED",
        description: "Selected for a frontend developer internship at Intelli Reach, working on production-grade React.js applications with REST API integration and responsive design.",
        icon: "💼",
        category: "PROFESSIONAL",
        number: "04"
    },
    {
        title: "BUILT AI RESUME BUILDER",
        subtitle: "FULL STACK PROJECT WITH GEMINI AI",
        description: "Designed and developed a complete AI-powered resume builder from scratch using React, Node.js, MongoDB, and Google Gemini AI with authentication, image uploads, and dynamic generation.",
        icon: "🤖",
        category: "PROJECT",
        number: "05"
    }
];

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
        };
        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Achievements = () => {
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="w-full relative z-10 text-white">
            {/* ========== HERO ========== */}
            <div className="flex flex-col items-center justify-center mt-38 mb-32 px-4">
                <h2 className="text-white/50 text-[9px] md:text-[13px] mb-4 font-medium tracking-[0.2em] uppercase">(MILESTONES & WINS)</h2>
                <h1 className="reveal text-[15vw] md:text-[10vw] xl:text-[130px] text-center font-semibold uppercase leading-[0.8] tracking-tight text-white m-0">
                    ACHIEVEMENTS
                </h1>
            </div>

            {/* ========== HIGHLIGHT STATS ========== */}
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10">
                    <div className="flex-1 text-left">01</div>
                    <div className="flex-1 text-center text-white">//HIGHLIGHTS</div>
                    <div className="flex-1 text-right">AT A GLANCE</div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-white/10 mt-8 mb-24">
                    <div className="flex flex-col items-center justify-center py-16 border-r border-white/10">
                        <h3 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter leading-none mb-3">
                            <CountUp end={350} suffix="+" duration={2000} />
                        </h3>
                        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">PROBLEMS SOLVED</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-16 md:border-r border-white/10">
                        <h3 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter leading-none mb-3">
                            <CountUp end={1} suffix="" duration={1500} />
                        </h3>
                        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">AWS CERTIFICATION</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-16 border-r border-white/10">
                        <h3 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter leading-none mb-3">
                            <CountUp end={10} suffix="+" duration={1500} />
                        </h3>
                        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">PROJECTS SHIPPED</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-16">
                        <h3 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter leading-none mb-3">
                            GATE
                        </h3>
                        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">2026 QUALIFIED</p>
                    </div>
                </div>
            </div>

            {/* ========== ACHIEVEMENTS LIST ========== */}
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10">
                    <div className="flex-1 text-left">02</div>
                    <div className="flex-1 text-center text-white">//DETAILS</div>
                    <div className="flex-1 text-right">THE JOURNEY</div>
                </div>

                <div className="mt-12 flex flex-col ">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="group border-b border-white/10 py-14 md:py-20 relative"
                        >
                            {/* Background Number */}
                            <div className="absolute top-14 md:top-20 right-0 text-[80px] md:text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                                {achievement.number}
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                                {/* Left: Icon + Title */}
                                <div className="w-full lg:w-[45%]">
                                    <div className="flex items-start gap-5">
                                        {/* Icon */}
                                        <div>
                                            <h3 className="text-xl md:text-3xl font-semibold tracking-wide mb-3 group-hover:translate-x-2 transition-transform duration-500">
                                                {achievement.title}
                                            </h3>
                                            <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.15em] text-white/50 uppercase">
                                                <span className="px-2.5 py-1 border border-white/10 rounded-full text-[8px] md:text-[9px]">{achievement.category}</span>
                                                <span>{achievement.subtitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Description */}
                                <div className="w-full lg:w-[55%] flex items-center">
                                    <p className="text-[#a1a1aa] text-sm md:text-lg font-medium leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Achievements;