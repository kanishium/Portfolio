import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            if (!isVisible) setIsVisible(true);
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const hideCursor = () => setIsVisible(false);
        const showCursor = () => setIsVisible(true);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseleave', hideCursor);
        window.addEventListener('mouseenter', showCursor);
        
        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseleave', hideCursor);
            window.removeEventListener('mouseenter', showCursor);
        };
    }, [isVisible]);

    return (
        <div 
            ref={cursorRef}
            className={`fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        />
    );
};

export default CustomCursor;
