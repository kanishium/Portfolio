import React, { useState, useEffect, useRef } from 'react';

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // easeOutQuad easing function for smooth deceleration
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            
            setCount(Math.floor(easeOutProgress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure exact finish
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section className="w-full relative z-10 text-white">
            {/* Top Labels */}
            <div className="w-full px-8 max-w-[1400px] mx-auto flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10 mt-12">
                <div className="flex-1 text-left relative">
                    06
                </div>
                <div className="flex-1 text-center text-white">//STATS</div>
                <div className="flex-1 text-right">FUN FACTS</div>
            </div>

            {/* Stats Grid */}
            <div className="w-full border-t border-b border-white/10 mt-16 mb-24">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center justify-center py-24 border-b md:border-b-0 lg:border-r border-white/10">
                        <h3 className="text-[5rem] md:text-[7rem] font-bold tracking-tighter mb-6 leading-none">
                            <CountUp end={350} suffix="+" duration={2000} />
                        </h3>
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">
                            PROBLEMS SOLVED
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center justify-center py-24 border-b md:border-b-0 md:border-r border-white/10">
                        <h3 className="text-[5rem] md:text-[7rem] font-bold tracking-tighter mb-6 leading-none">
                            <CountUp end={10} suffix="+" duration={2000} />
                        </h3>
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">
                            PROJECTS BUILT
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center justify-center py-24 border-b md:border-b-0 lg:border-r border-white/10">
                        <h3 className="text-[5rem] md:text-[7rem] font-bold tracking-tighter mb-6 leading-none">
                            <CountUp end={3} suffix="+" duration={2000} />
                        </h3>
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">
                            YEARS OF EXPERIENCE
                        </p>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center justify-center py-24">
                        <h3 className="text-[5rem] md:text-[7rem] font-bold tracking-tighter mb-6 leading-none">
                            <CountUp end={100} suffix="%" duration={2000} />
                        </h3>
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#a1a1aa] uppercase text-center">
                            COMMITMENT TO LEARNING
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StatsSection;
