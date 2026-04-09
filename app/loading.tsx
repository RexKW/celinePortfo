'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement[]>([])
  const leftCurtainRef = useRef<HTMLImageElement>(null)
  const rightCurtainRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // ⭐ Stars animation
    tl.fromTo(
      starsRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      }
    )

    // ✨ small glow pop
    tl.to(starsRef.current, {
      scale: 1.2,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    })

    // 🎭 Curtains open
    tl.to(leftCurtainRef.current, {
      x: "-100%",
      duration: 1,
      ease: "power3.inOut",
    }, "+=0.3")

    tl.to(rightCurtainRef.current, {
      x: "100%",
      duration: 1,
      ease: "power3.inOut",
    }, "<") // sync with left

    // (optional) fade out loader
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
    })

  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center">

      {/* ⭐ Stars */}
      <div className="absolute top-1/3 flex gap-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) starsRef.current[i] = el
            }}
            className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"
          />
        ))}
      </div>

      {/* 🎭 Curtains */}
      <div className="absolute inset-0 flex">
        {/* Left */}
        <img
          ref={leftCurtainRef}
          src="/loading/curtainLoading.png"
          className="h-full w-1/2 object-cover"
        />

        {/* Right */}
        <img
          ref={rightCurtainRef}
          src="/loading/curtainLoading.png"
          className="h-full w-1/2 object-cover scale-x-[-1]"
        />
      </div>

    </div>
  )
}