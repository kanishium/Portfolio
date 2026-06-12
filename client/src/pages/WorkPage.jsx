import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projects from '../data/projects';

const WorkPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const project = projects.find((p) => p.slug === slug);
    const nextProject = projects.find((p) => p.slug === project?.nextProject);
    const prevProject = projects.find((p) => p.slug === project?.prevProject);

    // Scroll to top on project change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsLoaded(false);
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, [slug]);

    // Parallax effect for hero
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-white/50 text-lg mb-8">Project not found</p>
                <Link
                    to="/work"
                    className="btn-custom btn-outline border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold rounded-full"
                >
                    <span className="relative z-10">Back to Projects</span>
                </Link>
            </div>
        );
    }

    const projectIndex = projects.findIndex((p) => p.slug === slug);

    return (
        <main className={`flex-grow flex flex-col relative z-10 w-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

            {/* ── HERO SECTION ── */}
            <section ref={heroRef} className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
                {/* Parallax Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[120%] object-cover object-center"
                        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-16 md:pb-24">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-white/70">
                            {project.category}
                        </span>
                    </div>

                    {/* Project Title */}
                    <h1 className="text-[14vw] md:text-[10vw] xl:text-[140px] font-bold uppercase leading-[0.85] tracking-tight text-white mb-8">
                        {project.title}
                    </h1>

                    {/* Quick Info Row */}
                    <div className="flex flex-wrap gap-x-10 gap-y-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-white/50">
                        <div>
                            <span className="text-white/30 mr-2">YEAR</span>
                            <span className="text-white">{project.year}</span>
                        </div>
                        <div>
                            <span className="text-white/30 mr-2">ROLE</span>
                            <span className="text-white">{project.role}</span>
                        </div>
                        <div>
                            <span className="text-white/30 mr-2">DURATION</span>
                            <span className="text-white">{project.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/50">Scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
                </div>
            </section>

            {/* ── PROJECT OVERVIEW ── */}
            <section className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
                {/* Section Label */}
                <div className="w-full flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pb-8 border-b border-white/10 mb-16">
                    <div className="flex-1 text-left">01</div>
                    <div className="flex-1 text-center text-white">//OVERVIEW</div>
                    <div className="flex-1 text-right">PROJECT {String(projectIndex + 1).padStart(2, '0')}</div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    {/* Left: Overview Text */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white mb-8">
                            About the<br />Project
                        </h2>
                        <p className="text-[15px] md:text-[17px] text-white/60 leading-relaxed font-medium max-w-[600px]">
                            {project.overview}
                        </p>
                    </div>

                    {/* Right: Details Card */}
                    <div className="w-full md:w-[320px] flex-shrink-0">
                        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm">
                            <div className="space-y-6">
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 block mb-1">Client</span>
                                    <span className="text-[15px] font-semibold text-white">{project.client}</span>
                                </div>
                                <div className="w-full h-[1px] bg-white/5"></div>
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 block mb-1">Role</span>
                                    <span className="text-[15px] font-semibold text-white">{project.role}</span>
                                </div>
                                <div className="w-full h-[1px] bg-white/5"></div>
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 block mb-1">Year</span>
                                    <span className="text-[15px] font-semibold text-white">{project.year}</span>
                                </div>
                                <div className="w-full h-[1px] bg-white/5"></div>
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 block mb-1">Duration</span>
                                    <span className="text-[15px] font-semibold text-white">{project.duration}</span>
                                </div>
                                <div className="w-full h-[1px] bg-white/5"></div>
                                {/* Action Links */}
                                <div className="flex gap-3 pt-2">
                                    {project.liveUrl && project.liveUrl !== '#' && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-custom btn-outline flex-1 text-center border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-3 rounded-full"
                                        >
                                            <span className="relative z-10">Live Site ↗</span>
                                        </a>
                                    )}
                                    {project.githubUrl && project.githubUrl !== '#' && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-custom btn-outline flex-1 text-center border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-3 rounded-full"
                                        >
                                            <span className="relative z-10">GitHub ↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FULL WIDTH IMAGE ── */}
            <section className="w-full px-6 md:px-8 pb-20 md:pb-28">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden group border border-white/5">
                        <img
                            src={project.image}
                            alt={`${project.title} showcase`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </section>

            {/* ── CHALLENGE & SOLUTION ── */}
            <section className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-20 md:pb-28">
                {/* Section Label */}
                <div className="w-full flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pb-8 border-b border-white/10 mb-16">
                    <div className="flex-1 text-left">02</div>
                    <div className="flex-1 text-center text-white">//PROCESS</div>
                    <div className="flex-1 text-right">DEEP DIVE</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                    {/* Challenge */}
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50">The Challenge</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white mb-6">
                            Problem<br />Statement
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-white/50 leading-relaxed font-medium">
                            {project.challenge}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50">The Solution</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white mb-6">
                            How I<br />Solved It
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-white/50 leading-relaxed font-medium">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── TECH STACK ── */}
            <section className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-20 md:pb-28">
                {/* Section Label */}
                <div className="w-full flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pb-8 border-b border-white/10 mb-16">
                    <div className="flex-1 text-left">03</div>
                    <div className="flex-1 text-center text-white">//TECH STACK</div>
                    <div className="flex-1 text-right">TOOLS USED</div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                        <div
                            key={i}
                            className="group relative border border-white/10 rounded-full px-6 py-3 hover:border-white/30 transition-all duration-500 hover:bg-white/[0.03]"
                        >
                            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.15em] font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── KEY FEATURES ── */}
            <section className="w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-20 md:pb-28">
                {/* Section Label */}
                <div className="w-full flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pb-8 border-b border-white/10 mb-16">
                    <div className="flex-1 text-left">04</div>
                    <div className="flex-1 text-center text-white">//FEATURES</div>
                    <div className="flex-1 text-right">KEY HIGHLIGHTS</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {project.features.map((feature, i) => (
                        <div
                            key={i}
                            className="group flex items-start gap-5 py-7 px-4 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                        >
                            <span className="text-[11px] font-bold text-white/20 mt-0.5 font-mono">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-[14px] md:text-[16px] text-white/60 font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── NEXT / PREV PROJECT NAVIGATION ── */}
            <section className="w-full border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Previous Project */}
                    {prevProject && (
                        <Link
                            to={`/work/${prevProject.slug}`}
                            className="group relative flex flex-col justify-center items-start px-8 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden hover:bg-white/[0.02] transition-all duration-500"
                        >
                            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 mb-3">
                                ← Previous Project
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-colors duration-300">
                                {prevProject.title}
                            </h3>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 mt-2">
                                {prevProject.category}
                            </span>
                        </Link>
                    )}

                    {/* Next Project */}
                    {nextProject && (
                        <Link
                            to={`/work/${nextProject.slug}`}
                            className="group relative flex flex-col justify-center items-end text-right px-8 md:px-12 py-16 md:py-24 overflow-hidden hover:bg-white/[0.02] transition-all duration-500"
                        >
                            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 mb-3">
                                Next Project →
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-colors duration-300">
                                {nextProject.title}
                            </h3>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 mt-2">
                                {nextProject.category}
                            </span>
                        </Link>
                    )}
                </div>

                {/* Back to all projects */}
                <div className="flex justify-center py-12 border-t border-white/10">
                    <Link
                        to="/work"
                        className="btn-custom btn-outline border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full"
                    >
                        <span className="relative z-10">All Projects</span>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default WorkPage;