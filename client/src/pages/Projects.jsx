import React, { useRef, useState } from 'react';
import AiResume from '../assets/AiResume.png';
import AdmissionPlatform from '../assets/AdmissionPlatform.png';
import Trion from '../assets/Trion.png';
import MyPortfolio from '../assets/MyPortfolio.png';
import BurgerNation from '../assets/BurgerNation.png';

const ProjectCard = ({ title, image, stars, category }) => {
    return (
        <div className="group flex flex-col gap-5 cursor-none w-full">
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
        </div>
    );
};

const Projects = () => {
    return (
        <section className="w-full px-8 max-w-[1400px] mx-auto relative z-10 border-[#ffffff15]">
            {/* Header */}
            <div className="flex flex-col items-center justify-center mt-38 mb-40">
                <h2 className='text-white/50 text-[9px] md:text-[13px] mb-4 font-medium tracking-[0.2em] uppercase'>(2023-2026)</h2>
                <h2 className="text-[15vw] md:text-[10vw] xl:text-[130px] text-center font-semibold uppercase leading-[0.8] tracking-tight text-white m-0">
                    LATEST<br />PROJECTS
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="flex flex-col gap-24 md:gap-8 w-full">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-24 md:gap-8">
                    <div className="w-full md:w-[45%]">
                        <ProjectCard
                            title="AI Resume Builder"
                            category="AI / WEB DEV"
                            stars={4}
                            image={AiResume}
                        />
                    </div>
                    <div className="w-full md:w-[40%] md:mt-25">
                        <ProjectCard
                            title="Trion"
                            category="BRANDING / WEB DEV"
                            stars={3}
                            image={Trion}
                        />
                    </div>
                </div>

                {/* Row 2 (Center) */}
                <div className="flex justify-center w-full md:my-12 relative z-10">
                    <div className="w-full md:w-[50%]">
                        <ProjectCard
                            title="Admission platform"
                            category="EDUCATION / WEB PLATFORM"
                            stars={3}
                            image={AdmissionPlatform}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-24 md:gap-8">
                    <div className="w-full md:w-[40%] md:-mt-24">
                        <ProjectCard
                            title="Personal Portfolio"
                            category="UI/UX / WEB DEV"
                            stars={4}
                            image={MyPortfolio}
                        />
                    </div>
                    <div className="w-full md:w-[45%] md:mt-14">
                        <ProjectCard
                            title="Burger Nation"
                            category="FOOD / WEB DEV"
                            stars={5}
                            image={BurgerNation}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
