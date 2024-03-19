"use client";

import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (ref != null) {
            const scrollObserver = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    scrollObserver.unobserve(entry.target);
                }
            });

            scrollObserver.observe(ref.current!);

            return () => {
                if (ref.current) {
                    scrollObserver.unobserve(ref.current);
                }
            };
        }
    }, []);

    return (
        <div ref={ref} className={`${className} transition-all duration-1000 ease-in-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            {children}
        </div>
    );
};

export default RevealOnScroll;