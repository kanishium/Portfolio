import React from 'react';
import MyPic from '../assets/MyPic.png';
import ToolsMarquee from '../components/ToolsMarquee';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import VoiceSection from '../components/VoiceSection';
import StatsSection from '../components/StatsSection';
import ExperienceSection from '../components/ExperienceSection';

const Home = () => {
    return (
        <main className="flex-grow flex flex-col relative z-10 w-full">

            {/* --- HERO SECTION --- */}
            <section className="min-h-[calc(100vh-80px)] flex flex-col">
                {/* KANISHK Text */}
                <div className="flex-grow flex items-center justify-center w-full px-4 overflow-hidden">
                    <h1 className="text-[19vw] md:text-[15vw] lg:text-[15vw] xl:text-[17.5rem] font-bold tracking-tighter text-white uppercase leading-none font-sans select-none text-center" style={{ transform: 'scaleY(1.1)' }}>
                        KANISHK
                    </h1>
                </div>

                {/* Bottom Stats / Info Row */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-[#ffffff15] relative mt-auto">
                    {/* Location */}
                    <div className="flex flex-col items-center justify-center p-8 border-r border-[#ffffff15] text-center hover:bg-white/5 transition-colors duration-500">
                        <svg className="w-6 h-6 mb-4 text-[#00ff66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold leading-relaxed">
                            BASED IN MEERUT,<br />
                            INDIA
                        </p>
                    </div>

                    {/* Worldwide */}
                    <div className="flex flex-col items-center justify-center p-8 border-r border-[#ffffff15] text-center hover:bg-white/5 transition-colors duration-500">
                        <svg className="w-6 h-6 mb-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2v20" />
                        </svg>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold leading-relaxed">
                            AVAILABLE ALL AROUND<br />
                            WORLDWIDE
                        </p>
                    </div>

                    {/* Role */}
                    <div className="flex flex-col items-center justify-center p-8 text-center hover:bg-white/5 transition-colors duration-500">
                        <svg className="w-6 h-6 mb-4 text-[#00aaff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold leading-relaxed">
                            FULL STACK DEVELOPER<br />
                            + DIGITAL PRODUCTS
                        </p>
                    </div>
                </div>
            </section>

            {/* --- APPROACH SECTION (Below Hero) --- */}
            <section className="w-full px-8 py-20 flex flex-col gap-12 max-w-[1800px] mx-auto">
                {/* Large Image Container */}
                <div className="relative w-full h-[80vh] md:h-[100vh] rounded-3xl md:rounded-[40px] overflow-hidden group">
                    <img
                        src={MyPic}
                        alt="Creative Portrait"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>

                </div>

                {/* Info Header */}
                <div className="w-full flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-24 pb-8 border-t border-white/10 mt-12">
                    <div className="flex-1 text-left">01</div>
                    <div className="flex-1 text-center text-white">//APPROACH</div>
                    <div className="flex-1 text-right">THREE PHASES</div>
                </div>

                {/* Big Typography Section */}
                <div className="flex flex-col items-center justify-center text-center pb-14 w-full">
                    <h2 className="text-[12vw] md:text-[120px] lg:text-[100px] font-semibold uppercase leading-[0.8] tracking-[-0.04em] w-full text-white">
                        I'm KANISHK BASED<br />
                        IN MEErut, INDIA.
                    </h2>

                    <p className="text-[13px] md:text-[15px] text-white/50 max-w-md text-center leading-relaxed font-medium tracking-wide mt-12">
                        I crafted responsive interfaces ensuring seamless experiences across all devices.
                    </p>
                </div>

                {/* Timeline / 3 Steps */}
                <div className="w-full max-w-[850px] mx-auto relative flex items-center justify-between pb-10">
                    {/* Connecting Line */}
                    <div className="absolute left-8 right-8 h-[1px] bg-white/10 top-1/2 -translate-y-1/2 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 bg-black px-4">
                        <div className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-[11px] font-bold tracking-[0.1em] text-white/70">
                            01
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative z-10 bg-black px-4">
                        <div className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-[11px] font-bold tracking-[0.1em] text-white/70">
                            02
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative z-10 bg-black px-4">
                        <div className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-[11px] font-bold tracking-[0.1em] text-white/70">
                            03
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PHASES FEATURES SECTION --- */}
            <section className="w-full px-8 pb-24 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center relative z-10">
                {/* Phase 1 */}
                <div className="flex flex-col items-center">
                    {/* Dots */}
                    <div className="flex gap-2 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                    {/* Images */}
                    <div className="flex justify-center -space-x-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-10" alt="1" />
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-20 shadow-xl scale-110" alt="2" />
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-10" alt="3" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-white mb-4">
                        DISCOVER AND ANALYSIS
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/50 max-w-[260px] mx-auto leading-relaxed">
                        Discover opportunities and refine strategies for decisions.
                    </p>
                </div>

                {/* Phase 2 */}
                <div className="flex flex-col items-center">
                    {/* Dots */}
                    <div className="flex gap-2 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                    {/* Images */}
                    <div className="flex justify-center -space-x-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-10" alt="1" />
                        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-20 shadow-xl scale-110" alt="3" />
                        <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-10" alt="2" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-white mb-4">
                        DESIGN AND IMPLEMENT
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/50 max-w-[260px] mx-auto leading-relaxed">
                        Design and implement solutions to transform ideas.
                    </p>
                </div>

                {/* Phase 3 */}
                <div className="flex flex-col items-center">
                    {/* Dots */}
                    <div className="flex gap-2 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    {/* Images */}
                    <div className="flex justify-center -space-x-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-10" alt="1" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-20 shadow-xl scale-110" alt="2" />
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-12 h-12 rounded-xl object-cover border-2 border-black relative z-10" alt="3" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-white mb-4">
                        DELIVER AND MONITOR
                    </h3>
                    <p className="text-sm md:text-[15px] text-white/50 max-w-[260px] mx-auto leading-relaxed">
                        Ensure efficient execution and performance tracking.
                    </p>
                </div>
            </section>

            <ToolsMarquee />
            <PortfolioSection />
            <AboutSection />
            <ServicesSection />
            <VoiceSection />
            <StatsSection />
            <ExperienceSection />
        </main>
    );
};

export default Home;