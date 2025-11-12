"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/wldlf.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Explore the Wild Heart of Africa
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Experience breathtaking wildlife encounters, luxury accommodations, and unforgettable moments in the world's
          most spectacular ecosystems
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tours"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Book Your Safari
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full text-lg font-semibold transition-all backdrop-blur-sm"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
