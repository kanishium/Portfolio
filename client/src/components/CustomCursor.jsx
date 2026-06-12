import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorText, setCursorText] = useState('');
    
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const requestRef = useRef();

    useEffect(() => {
        const updateMousePosition = (e) => {
            if (!isVisible) setIsVisible(true);
            
            // Instantly update position
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }

            const target = document.elementFromPoint(e.clientX, e.clientY);
            const cursorTextElement = target?.closest('[data-cursor-text]');
            
            if (cursorTextElement) {
                setCursorText(cursorTextElement.getAttribute('data-cursor-text'));
            } else {
                setCursorText('');
            }
        };

        const hideCursor = () => setIsVisible(false);
        const showCursor = () => setIsVisible(true);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseleave', hideCursor);
        window.addEventListener('mouseenter', showCursor);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseleave', hideCursor);
            window.removeEventListener('mouseenter', showCursor);
        };
    }, [isVisible]);

    return (
        <div 
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform flex items-center justify-center overflow-hidden duration-300 ease-out transition-[width,height,opacity,border-radius,background-color,box-shadow,mix-blend-mode]
                ${isVisible ? 'opacity-100' : 'opacity-0'}
                ${cursorText ? 'w-24 h-10 md:w-28 md:h-12 bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'w-5 h-5 bg-white rounded-full mix-blend-difference'}
            `}
        >
            <span 
                className={`text-black font-extrabold tracking-widest text-sm md:text-base uppercase transition-opacity duration-300 ${cursorText ? 'opacity-100 delay-150' : 'opacity-0'}`}
            >
                {cursorText}
            </span>
        </div>
    );
};

export default CustomCursor;
