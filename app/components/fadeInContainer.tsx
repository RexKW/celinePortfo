'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, useGSAP)

interface FadeInContainerProps {
    children: React.ReactNode; // Accepts any React elements (divs, sections, etc.)
    className?: string;
}

export default function FadeInContainer({ children, className = "" }: FadeInContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.children;

        if (elements.length === 0) return;

        gsap.fromTo(elements, 
            {
                opacity: 0,
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%", 
                    // This controls the replay behavior:
                    // 1. play (when scrolling down and it hits 'start')
                    // 2. none (when scrolling past it)
                    // 3. none (when scrolling back up past the bottom)
                    // 4. reverse (when scrolling back up past the 'start' point)
                    toggleActions: "play none play reverse" 
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={` ${className}`}>
            {children}
        </div>
    )
}