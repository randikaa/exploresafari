"use client"

interface GalleryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function GalleryFilter({ selectedCategory, onCategoryChange }: GalleryFilterProps) {
  const categories = [
    { value: "all", label: "All Photos" },
    { value: "wildlife", label: "Wildlife" },
    { value: "landscape", label: "Landscape" },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === category.value
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
