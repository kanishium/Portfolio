import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

const servicesData = [
    {
        title: "AI-Powered Applications",
        subtitle: "SMART AUTOMATION, INTELLIGENT SOLUTIONS",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
        features: [
            "GEMINI AI INTEGRATION",
            "SMART CONTENT GENERATION",
            "AI WORKFLOWS",
            "AUTOMATION FEATURES",
            "SCALABLE SOLUTIONS"
        ]
    },
    {
        title: "MERN Stack Development",
        subtitle: "FULL STACK WEB APPLICATIONS",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop",
        features: [
            "REACT & NEXT.JS",
            "NODE.JS & EXPRESS",
            "MONGODB DATABASES",
            "REST API DEVELOPMENT",
            "AUTHENTICATION SYSTEMS"
        ]
    },
    {
        title: "Frontend Engineering",
        subtitle: "MODERN INTERFACES, SEAMLESS EXPERIENCES",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        features: [
            "RESPONSIVE DESIGN",
            "PIXEL PERFECT UI",
            "ACCESSIBILITY FIRST",
            "CROSS DEVICE SUPPORT",
            "MODERN WEB STANDARDS"
        ]
    },
    {
        title: "Performance Optimization",
        subtitle: "FAST, EFFICIENT, SCALABLE APPLICATIONS",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop",
        features: [
            "LIGHTHOUSE OPTIMIZATION",
            "CODE SPLITTING",
            "SEO ENHANCEMENTS",
            "PERFORMANCE TUNING",
            "BEST PRACTICES"
        ]
    },
    {
        title: "Interactive Experiences",
        subtitle: "ANIMATIONS, INTERACTIONS, ENGAGEMENT",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
        features: [
            "GSAP ANIMATIONS",
            "SCROLL INTERACTIONS",
            "MICRO INTERACTIONS",
            "MODERN UI EFFECTS",
            "ENGAGING EXPERIENCES"
        ]
    }
];

const ServicesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="w-full relative z-10 text-white pb-12">
            {/* Top Labels */}
            <div className="w-full px-8 max-w-[1400px] mx-auto flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10 mt-12">
                <div className="flex-1 text-left">04</div>
                <div className="flex-1 text-center text-white">//SERVICES</div>
                <div className="flex-1 text-right">FAST DELIVERY</div>
            </div>

            {/* Header Content */}
            <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row mt-12 mb-24 gap-12">
                <div className="w-full lg:w-[40%]">
                    <h2 className="reveal text-[14vw] md:text-[9vw] font-semibold uppercase leading-[0.8] tracking-tight">
                        PRO
                        <br />
                        SERVICES
                    </h2>
                </div>
                <div className="w-full lg:w-[60%] flex justify-end items-end">
                    <p className="text-white text-sm md:text-lg max-w-xs font-medium leading-tight mb-4 text-left">
                        Discover our range of services designed to elevate your brand to next level.
                    </p>
                </div>
            </div>

            {/* Accordion List */}
            <div className="max-w-[1400px] mx-auto px-8 flex justify-end">
                <div className="w-full lg:w-[60%] flex flex-col">
                    <div className="border-t border-white/20"></div>
                    {servicesData.map((service, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div key={index} className="border-b border-white/20">
                                {/* Accordion Header */}
                                <button
                                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                                    className="w-full flex items-center justify-between py-8 text-left group cursor-pointer"
                                >
                                    <div className="flex items-start gap-8 md:gap-16">
                                        {/* Progressive Dots Decorator */}
                                        <div className="flex gap-1.5 mt-2.5">
                                            {[0, 1, 2, 3, 4].map((dotIdx) => (
                                                <div
                                                    key={dotIdx}
                                                    className={`w-1.5 h-1.5 rounded-full ${dotIdx <= index ? 'bg-white' : 'bg-white/20'
                                                        }`}
                                                ></div>
                                            ))}
                                        </div>

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-white/80 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-[10px] md:text-xs font-bold tracking-[0.1em] text-[#a1a1aa] uppercase">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Chevron */}
                                    <div className="text-white/50 group-hover:text-white transition-colors">
                                        <svg
                                            className={`w-6 h-6 transform transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Accordion Body */}
                                <div
                                    className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mb-10' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="flex flex-col md:flex-row gap-12 md:gap-16 pl-0 md:pl-[6.5rem]">
                                            {/* Image */}
                                            <div className="w-full md:w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Features List */}
                                            <ul className="flex flex-col gap-3 justify-center">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-4">
                                                        <svg className="w-3.5 h-3.5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] text-[#a1a1aa] uppercase">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
