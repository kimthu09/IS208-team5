"use client";

import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
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
        <div ref={ref} className={`transition-all duration-1000 ease-in-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            {children}
        </div>
    );
};

export default RevealOnScroll;