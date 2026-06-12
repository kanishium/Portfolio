import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import useReveal from '../hooks/useReveal';

const ProjectCard = ({ title, image, stars, category, slug }) => {
    return (
        <Link to={`/work/${slug}`} className="group flex flex-col gap-5 cursor-none w-full block">
            <div
                data-cursor-text="VIEW"
                className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] relative aspect-[4/3] md:aspect-video cursor-none"
            >
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]" />
            </div>

            <div className="flex items-start justify-between px-2">
                <div className="flex gap-1.5 mt-1.5">
                    {[...Array(stars)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white/40 group-hover:bg-white transition-colors duration-300"></div>
                    ))}
                </div>

                <div className="flex flex-col items-center flex-1">
                    <h4 className="text-white font-bold tracking-wider text-sm md:text-lg uppercase transition-colors duration-300">
                        {title}
                    </h4>
                    <span className="text-white/30 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                        {category}
                    </span>
                </div>

                <div className="mt-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

const PortfolioSection = () => {
    const p = (slug) => projects.find((proj) => proj.slug === slug);
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="w-full px-8 max-w-[1400px] mx-auto relative z-10 border-[#ffffff15]">
            {/* Header */}
            <div className="flex flex-col mb-24 md:mb-32">
                {/* Top Labels */}
                <div className="w-full flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10 mt-12">
                    <div className="flex-1 text-left">02</div>
                    <div className="flex-1 text-center text-white">//PORTFOLIO</div>
                    <div className="flex-1 text-right">2023 - 2026</div>
                </div>

                {/* Main Title & Paragraph */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-16">
                    <h2 className="reveal text-[15vw] md:text-[10vw] xl:text-[130px] font-semibold uppercase leading-[0.8] tracking-tight text-white m-0">
                        LATEST<br />PORTFOLIO
                    </h2>
                    <p className="text-sm md:text-base text-white max-w-[300px] font-semibold leading-relaxed mb-2 md:mb-4">
                        My creative spirit comes alive in the digital realm. With nimble fingers flying across the device.
                    </p>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="flex flex-col gap-24 md:gap-8 w-full">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-24 md:gap-8">
                    <div className="w-full md:w-[45%]">
                        <ProjectCard
                            slug="ai-resume-builder"
                            title={p('ai-resume-builder').title}
                            category={p('ai-resume-builder').category}
                            stars={p('ai-resume-builder').stars}
                            image={p('ai-resume-builder').image}
                        />
                    </div>
                    <div className="w-full md:w-[40%] md:mt-25">
                        <ProjectCard
                            slug="trion"
                            title={p('trion').title}
                            category={p('trion').category}
                            stars={p('trion').stars}
                            image={p('trion').image}
                        />
                    </div>
                </div>

                {/* Row 2 (Center) */}
                <div className="flex justify-center w-full md:my-12 relative z-10">
                    <div className="w-full md:w-[50%]">
                        <ProjectCard
                            slug="admission-platform"
                            title={p('admission-platform').title}
                            category={p('admission-platform').category}
                            stars={p('admission-platform').stars}
                            image={p('admission-platform').image}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-24 md:gap-8">
                    <div className="w-full md:w-[40%] md:-mt-24">
                        <ProjectCard
                            slug="personal-portfolio"
                            title={p('personal-portfolio').title}
                            category={p('personal-portfolio').category}
                            stars={p('personal-portfolio').stars}
                            image={p('personal-portfolio').image}
                        />
                    </div>
                    <div className="w-full md:w-[45%] md:mt-14">
                        <ProjectCard
                            slug="burger-nation"
                            title={p('burger-nation').title}
                            category={p('burger-nation').category}
                            stars={p('burger-nation').stars}
                            image={p('burger-nation').image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
