"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryFilter } from "@/components/gallery-filter"
import { GalleryLightbox } from "@/components/gallery-lightbox"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
  location: string
}

const gallery_images: GalleryImage[] = [
  {
    id: "1",
    src: "/serengeti-wildebeest-migration.jpg",
    alt: "Serengeti wildebeest migration",
    category: "wildlife",
    title: "Great Wildebeest Migration",
    location: "Serengeti, Tanzania",
  },
  {
    id: "2",
    src: "/kenyan-savanna-lions-wildlife.jpg",
    alt: "Lions in Kenyan savanna",
    category: "wildlife",
    title: "Pride of Lions",
    location: "Masai Mara, Kenya",
  },
  {
    id: "3",
    src: "/kruger-park-big-five-safari.jpg",
    alt: "Kruger National Park landscape",
    category: "landscape",
    title: "Golden Hour Safari",
    location: "Kruger National Park, South Africa",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80",
    alt: "Mount Kilimanjaro snow peak",
    category: "landscape",
    title: "Summit Glory",
    location: "Mount Kilimanjaro, Tanzania",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    alt: "Okavango Delta water and wildlife",
    category: "wildlife",
    title: "Delta Waters",
    location: "Okavango Delta, Botswana",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    alt: "Victoria Falls mist",
    category: "landscape",
    title: "The Smoke That Thunders",
    location: "Victoria Falls, Zimbabwe",
  },
  {
    id: "7",
    src: "/african-elephant-sunset.jpg",
    alt: "Elephant at sunset",
    category: "wildlife",
    title: "Sunset Elephant",
    location: "Amboseli National Park, Kenya",
  },
  {
    id: "8",
    src: "/african-acacia-tree-landscape.jpg",
    alt: "Acacia tree landscape",
    category: "landscape",
    title: "Iconic Acacia",
    location: "Serengeti, Tanzania",
  },
  {
    id: "9",
    src: "/african-leopard-tree.jpg",
    alt: "Leopard in tree",
    category: "wildlife",
    title: "Tree Hunter",
    location: "Okavango Delta, Botswana",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const filtered_images =
    selectedCategory === "all" ? gallery_images : gallery_images.filter((img) => img.category === selectedCategory)

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">Wildlife Gallery</h1>
            <p className="text-lg opacity-90">Captured moments from Africa's greatest adventures</p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <GalleryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filtered_images.map((image) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-muted">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-semibold text-white text-lg">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered_images.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <GalleryLightbox
          image={lightboxImage}
          allImages={filtered_images}
          onClose={() => setLightboxImage(null)}
          onNavigate={setLightboxImage}
        />
      )}

      <Footer />
    </main>
  )
}
