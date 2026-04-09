'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Loader({ onFinish }: { onFinish: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const starsRef = useRef<HTMLDivElement[]>([])
    const leftFlowerRef = useRef<HTMLImageElement>(null)
    const rightFlowerRef = useRef<HTMLImageElement>(null)
    const leftCurtainRef = useRef<HTMLImageElement>(null)
    const rightCurtainRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onFinish() // tell wrapper page animation is done
            }
        })

        // ⭐ Stars animation
        tl.fromTo(
            starsRef.current,
            { opacity: 0, y: 20, rotate:45 , scale: 0.8 },
            { opacity: 1, y: 0, rotate:0, scale: 1, stagger: 0.15, duration: 0.5, ease: "power2.out" }
        )

        tl.to(starsRef.current, { scale: 1.2, yoyo: true, repeat: 1, duration: 0.2 })
        tl.to(starsRef.current, { opacity: 0, duration: 0.2 })
        tl.to(leftFlowerRef.current, { opacity: 0, duration: 0.2 }, "<")
         tl.to(rightFlowerRef.current, { opacity: 0, duration: 0.2 }, "<")

        // 🎭 Curtains open
        tl.to(leftCurtainRef.current, { x: "-100%", duration: 1, ease: "power3.inOut" })
        tl.to(rightCurtainRef.current, { x: "100%", duration: 1, ease: "power3.inOut" }, "<")

        // No fading container → content is visible immediately
    }, [onFinish])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[200] overflow-hidden flex items-center justify-center"
        >
            {/* ⭐ Stars */}
            <div className="absolute  w-full h-full z-30 left-[50%] translate-x-[-50%] top-[50%]  translate-y-[-50%] justify-center items-center flex gap-6">
                <img ref={leftFlowerRef} src="/loading/loadingFlower.svg" className="w-1/8 lg:w-1/4" alt="" />
                {[...Array(5)].map((_, i) => (
                    <img
                        src={'/loading/loadingStar.svg'}
                        key={i}
                        ref={(el) => {
                            if (el) starsRef.current[i] = el
                        }}
                        className="w-5 lg:w-20 h-5 lg:h-20 relative z-10"
                    />
                ))}
                <img ref={rightFlowerRef} src="/loading/loadingFlower.svg" className="w-1/8 lg:w-1/4 scale-x-[-1]" alt="" />
            </div>

            {/* 🎭 Curtains */}
            <div className="absolute inset-0 flex">
                <img
                    ref={leftCurtainRef}
                    src="/loading/curtainLoading.png"
                    className="h-full w-1/2 object-cover"
                />
                <img
                    ref={rightCurtainRef}
                    src="/loading/curtainLoading.png"
                    className="h-full w-1/2 object-cover scale-x-[-1]"
                />
            </div>
        </div>
    )
}