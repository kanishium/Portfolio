import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds the 'revealed' class to elements with 'reveal' class
 * when they scroll into the viewport using IntersectionObserver.
 *
 * Usage: call useReveal() in any page/component, then add className="reveal"
 * to any element you want to animate in on scroll.
 */
const useReveal = (rootMargin = '0px 0px -80px 0px') => {
    const containerRef = useRef(null);

    useEffect(() => {
        const root = containerRef.current || document;
        const elements = root.querySelectorAll('.reveal');

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [rootMargin]);

    return containerRef;
};

export default useReveal;
