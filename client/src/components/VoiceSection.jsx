import React from 'react';
import MyPic from '../assets/MyPic.webp';
import github from '../assets/github.webp';
import swags from '../assets/swags.webp';
import leetcode from '../assets/leetcode.webp';
import Trion from '../assets/Trion.webp';
import MyPortfolio from '../assets/MyPortfolio.webp';
import professional from '../assets/professional.webp';

const VoiceSection = () => {
    return (
        <>
            {/* Sticky scroll wrapper — tall enough for all images to scroll through */}
            <section className="relative h-[500vh] bg-black z-10">
                {/* Sticky Text — stays centered while images scroll up */}
                <div className="sticky -top-36 h-screen w-full flex flex-col items-center justify-center z-0">
                    {/* Top Labels */}
                    <div className="absolute top-10 w-full px-8 max-w-[1400px] flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 pt-10 pb-8 border-t border-white/10 mt-12">
                        <div className="flex-1 text-left">05</div>
                        <div className="flex-1 text-center text-white">//VOICE OF KANISHK</div>
                        <div className="flex-1 text-right">SINCE 2000</div>
                    </div>

                    {/* Big Italic Quote */}
                    <h2 className="max-w-6xl mt-50 px-6 text-center font-semibold italic text-[5.5vw] md:text-[3vw] leading-[1.15] tracking-tight text-white uppercase mt-8">
                        A COMPUTER SCIENCE STUDENT AND FULL STACK DEVELOPER BASED IN INDIA, SPECIALIZING IN BUILDING SCALABLE WEB APPLICATIONS AND DELIVERING MODERN DIGITAL EXPERIENCES.
                    </h2>

                    {/* Signature */}
                    <div className="mt-10 text-white text-3xl md:text-4xl font-light italic tracking-wide" style={{ fontFamily: "'Dancing Script', cursive" }}>
                        Kanishk
                    </div>
                </div>

                {/* Images — in normal flow, scroll up over the pinned text */}
                <div className="relative z-10">
                    {/* Row 1: Two images — left and right */}
                    <div className="flex justify-between items-start max-w-5xl mx-auto px-6 gap-8">
                        <div className="w-[35%] md:w-[28%] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={github}
                                alt="Github"
                                className="w-full h-[35vh] md:h-[40vh] object-cover"
                            />
                        </div>
                        <div className="w-[35%] md:w-[28%] rounded-2xl overflow-hidden shadow-2xl mt-102">
                            <img
                                src={swags}
                                alt="Swags"
                                className="w-full h-[35vh] md:h-[40vh] object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 2: Single centered image */}
                    <div className="flex justify-center mt-50 px-6">
                        <div className="w-[25%] md:w-[18%] rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src={leetcode}
                                alt="Leetcode"
                                className="w-full h-[25vh] md:h-[30vh] object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 3: Two images — asymmetric */}
                    <div className="flex justify-between items-start max-w-5xl mx-auto px-6 gap-8 mt-50">
                        <div className="w-[30%] md:w-[24%] rounded-2xl overflow-hidden shadow-2xl mt-70">
                            <img
                                src={Trion}
                                alt="Trion"
                                className="w-full h-[30vh] md:h-[35vh] object-cover"
                            />
                        </div>
                        <div className="w-[30%] md:w-[24%] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={MyPortfolio}
                                alt="MyPortfolio"
                                className="w-full h-[30vh] md:h-[35vh] object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 4: Large centered portrait */}
                    <div className="flex justify-center mt-65 px-6 pb-24">
                        <div className="w-[55%] md:w-[35%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10">
                            <img
                                src={professional}
                                alt="Professional"
                                className="w-full h-[55vh] md:h-[70vh] object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VoiceSection;
