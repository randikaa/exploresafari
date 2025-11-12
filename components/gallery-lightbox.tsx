"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
  location: string
}

interface GalleryLightboxProps {
  image: GalleryImage
  allImages: GalleryImage[]
  onClose: () => void
  onNavigate: (image: GalleryImage) => void
}

export function GalleryLightbox({ image, allImages, onClose, onNavigate }: GalleryLightboxProps) {
  const currentIndex = allImages.findIndex((img) => img.id === image.id)
  const hasNext = currentIndex < allImages.length - 1
  const hasPrev = currentIndex > 0

  const handleNext = () => {
    if (hasNext) {
      onNavigate(allImages[currentIndex + 1])
    }
  }

  const handlePrev = () => {
    if (hasPrev) {
      onNavigate(allImages[currentIndex - 1])
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "ArrowLeft") handlePrev()
  }

  // Add keyboard event listener
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown)
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1">
            <h2 className="text-white font-serif text-2xl font-bold">{image.title}</h2>
            <p className="text-white/70 text-sm mt-1">{image.location}</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-white/70 transition-colors flex-shrink-0 ml-4">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center mb-4 bg-black/50 rounded-lg overflow-hidden">
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="max-w-full max-h-[calc(90vh-120px)] object-contain"
          />

          {/* Navigation Buttons */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Counter */}
        <div className="text-white text-center text-sm">
          {currentIndex + 1} of {allImages.length}
        </div>
      </div>
    </div>
  )
}
